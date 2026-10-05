// Tela: Voz (teste de extensão, afinador, teclado, tom certo para a música e treino livre).
import { registerView, registerActions, renderTab, el, ui } from '../ui.js';
import { Store, savePerfil, saveRange, deleteRange, addLog } from '../store.js';
import { EX } from '../curriculum/index.js';
import { QUAL } from '../stats.js';
import { AudioEng } from '../audio.js';
import { Mic, stableNotes } from '../pitch.js';
import { Roll } from '../roll.js';
import { VOICE_TYPES, guessType, comfortFrom, voiceOf, noteName, keyName, fitSong, splitKey, semis, centsTxt } from '../music.js';
import { keyboardSVG } from '../charts.js';
import { esc, clamp, fmtDate, dkey, toast, LS, sd, $$ } from '../util.js';
import { openPractice } from './treino.js';

const RT = { step: 'idle', res: { low: null, high: null, head: null }, adj: { lo: 0, hi: 0 }, timer: 0, left: 0, live: null, found: null };
const TU = { on: false, roll: null, raf: 0, ref: LS.get('tuRef', null), hist: [], held: 0, heldStart: null };
const KB = { hold: false, held: null };
let song = LS.get('song', { lo: 50, hi: 62, key: '' }), confirmDelRange = null;
const DUR = 8;

const STEPS = {
  low: { title: 'Nota mais grave', vowel: 'ô', text: 'Fale "ô" num tom confortável e vá descendo devagar, nota por nota, até a mais grave que ainda sai com som (não só ar ou chiado). Segure a última por um segundo.' },
  high: { title: 'Nota mais aguda sem gritar', vowel: 'ê', text: 'Em "ê" ou "ô", suba devagar a partir do meio da voz até a nota mais aguda que sai sem gritar e sem doer. Se a voz apertar ou quebrar, a anterior é o seu limite por hoje. Segure a última por um segundo.' },
  head: { title: 'Falsete (opcional)', vowel: 'u', text: 'Faça uma voz leve, de "fantasminha", em "u", e suba até onde for confortável. É o falsete ou voz de cabeça. Muita gente que acha que só tem grave descobre aqui que os agudos existem.' }
};

export function vozStop() {
  clearInterval(RT.timer); if (RT.step.endsWith(':rec')) RT.step = RT.step.replace(':rec', '');
  if (TU.on) { TU.on = false; cancelAnimationFrame(TU.raf); }
  if (Mic.taking) Mic.stopTake();
  if (Mic.ready && !ui.practiceOpen) Mic.close();
  if (KB.held != null) { AudioEng.droneStop(); KB.held = null; }
}

function rangeCard() {
  const P = Store.perfil, v = voiceOf(P), measured = !!P.voice, st = RT.step.replace(':rec', ''), rec = RT.step.endsWith(':rec');
  if (st === 'idle') {
    const lo = Math.min(v.low, v.comfLow) - 5, hi = Math.max(v.high, v.head || 0, v.comfHigh) + 5;
    return `<div class="card stack14">
      <div class="row between"><div><h3>Teste de extensão</h3><div class="sub">${measured ? `Último teste em ${fmtDate(P.voice.at)}` : 'Descubra até onde a sua voz vai hoje. Leva dois minutos.'}</div></div>
        <button class="btn ${measured ? '' : 'primary'}" data-act="rtStart">${measured ? 'Refazer teste' : 'Fazer o teste'}</button></div>
      ${measured ? `<div class="kbdwrap">${keyboardSVG(lo, hi, { low: v.low, high: v.high, comfLow: v.comfLow, comfHigh: v.comfHigh, head: v.head })}</div>
        <div class="legend"><span><i class="sw" style="background:var(--accent)"></i>Zona confortável: ${noteName(v.comfLow)} a ${noteName(v.comfHigh)}</span><span><i class="sw" style="background:var(--accent-dim)"></i>Extensão: ${noteName(v.low)} a ${noteName(v.high)}</span>${v.head ? `<span><i class="sw" style="background:var(--accent-soft)"></i>Falsete até ${noteName(v.head)}</span>` : ''}</div>
        <div class="row between"><span><b>Tipo provável: ${esc(VOICE_TYPES[v.type]?.name || '')}</b> <span class="small muted">(referência, não rótulo)</span></span>
          <div class="row gap10 small"><span class="muted">Ajustar zona:</span><span class="nw">grave <button class="iconbtn sm" data-act="comf" data-k="comfLow" data-d="-1" aria-label="Grave meio tom abaixo">−</button><button class="iconbtn sm" data-act="comf" data-k="comfLow" data-d="1" aria-label="Grave meio tom acima">+</button></span><span class="nw">agudo <button class="iconbtn sm" data-act="comf" data-k="comfHigh" data-d="-1" aria-label="Agudo meio tom abaixo">−</button><button class="iconbtn sm" data-act="comf" data-k="comfHigh" data-d="1" aria-label="Agudo meio tom acima">+</button></span></div></div>
        <p class="small muted">Os exercícios usam a zona confortável. Se ela parecer alta ou baixa demais nos treinos, ajuste aqui. A classificação vocal depende também do timbre e de onde a voz muda de registro; extensão sozinha não define ninguém.</p>`
      : `<div class="ins info"><b>Antes do teste</b><p>Aqueça um minuto com vibração de lábios ("brr") subindo e descendo, em volume baixo. Faça num lugar silencioso, com o aparelho a um palmo da boca. Nada de forçar: o teste é do que sai solto hoje, e ele vai mudar com o treino.</p>${EX['sovt-1a'] ? '<button class="btn sm" data-act="rtWarm">Aquecer com "brr"</button>' : ''}</div>
        <div class="stack8"><span class="flabel">Sem microfone? Escolha um tipo de voz aproximado</span>
          <div class="row gap8">${Object.entries(VOICE_TYPES).map(([id, T]) => `<button class="chip" data-act="vType" data-v="${id}" aria-pressed="${(P.voiceType || 'baritono') === id}">${T.name}</button>`).join('')}</div>
          <span class="small muted">Sem teste, o app usa uma zona conservadora de ${noteName(v.comfLow)} a ${noteName(v.comfHigh)}.</span></div>`}
    </div>`;
  }
  if (st === 'review') {
    const r = RT.res, cf = comfortFrom(r.low, r.high), cl = cf.comfLow + RT.adj.lo, ch = cf.comfHigh + RT.adj.hi, type = guessType(r.low, r.high);
    const lo = r.low - 4, hi = Math.max(r.high, r.head || 0) + 4;
    const span = r.high - r.low;
    return `<div class="card stack14">
      <div class="row between"><div><h3>Resultado do teste</h3><div class="sub">Extensão de ${noteName(r.low)} a ${noteName(r.high)}: ${semis(span)} (${(span / 12).toFixed(1).replace('.', ',')} oitavas)${r.head ? ` · falsete até ${noteName(r.head)}` : ''}</div></div></div>
      <div class="kbdwrap">${keyboardSVG(lo, hi, { low: r.low, high: r.high, comfLow: cl, comfHigh: ch, head: r.head })}</div>
      <div class="row between"><span><b>Tipo provável: ${esc(VOICE_TYPES[type].name)}</b></span>
        <div class="row gap10 small"><span class="muted">Zona confortável ${noteName(cl)} a ${noteName(ch)}:</span><span class="nw">grave <button class="iconbtn sm" data-act="rtAdj" data-k="lo" data-d="-1" aria-label="Grave meio tom abaixo">−</button><button class="iconbtn sm" data-act="rtAdj" data-k="lo" data-d="1" aria-label="Grave meio tom acima">+</button></span><span class="nw">agudo <button class="iconbtn sm" data-act="rtAdj" data-k="hi" data-d="-1" aria-label="Agudo meio tom abaixo">−</button><button class="iconbtn sm" data-act="rtAdj" data-k="hi" data-d="1" aria-label="Agudo meio tom acima">+</button></span></div></div>
      ${r.head && r.head - r.high >= 3 ? `<div class="ins good"><b>Seus agudos existem</b><p>No falsete você chegou ${semis(r.head - r.high)} acima do seu agudo de peito. O trabalho dos módulos "Registros" e "Agudos sem gritar" é justamente ligar essas duas vozes, para os agudos saírem com corpo e sem grito.</p></div>` : ''}
      ${span < 12 ? `<div class="ins info"><b>Extensão curta por enquanto</b><p>Menos de uma oitava é comum em quem está começando e não quer dizer falta de jeito. Com semioclusão e treino de registros, ela costuma crescer várias notas em poucos meses.</p></div>` : ''}
      <div class="row"><button class="btn primary" data-act="rtSave">Salvar resultado</button><button class="btn ghost" data-act="rtStart">Refazer</button><button class="btn ghost" data-act="rtCancel">Cancelar</button></div>
    </div>`;
  }
  const S = STEPS[st], idx = ['low', 'high', 'head'].indexOf(st) + 1, got = RT.res[st];
  return `<div class="card stack14">
    <div class="row between"><div><span class="eyebrow">Passo ${idx} de 3</span><h3>${S.title}</h3></div><button class="btn ghost sm" data-act="rtCancel">Cancelar</button></div>
    <p>${esc(S.text)}</p>
    <div class="rtlive"><div class="big" id="rtNote">${rec ? '…' : got != null ? noteName(got) : '—'}</div><div class="small muted" id="rtInfo">${rec ? `Ouvindo… ${RT.left} s` : got != null ? 'Nota medida' : `Toque em "Medir" e cante em "${S.vowel}"`}</div>
      <div class="level wide" aria-hidden="true"><i id="rtLvl"></i></div></div>
    <div class="row">${rec ? '<button class="btn" data-act="rtStop">Parar agora</button>' : `<button class="btn ${got == null ? 'primary' : ''}" data-act="rtMeasure">${got == null ? 'Medir' : 'Medir de novo'}</button>`}
      ${!rec && (got != null || st === 'head') ? `<button class="btn ${got != null ? 'primary' : ''}" data-act="rtNext">${st === 'head' ? (got != null ? 'Ver resultado' : 'Pular e ver resultado') : 'Próximo'}</button>` : ''}</div>
  </div>`;
}

function tunerCard() {
  const v = voiceOf(Store.perfil), opts = [];
  for (let m = v.comfHigh + 7; m >= v.comfLow - 7; m--) opts.push(m);
  return `<div class="card stack12">
    <div class="row between"><div><h3>Afinador de voz</h3><div class="sub">Segure uma nota e veja se ela fica parada e afinada.</div></div>
      <button class="btn ${TU.on ? '' : 'primary'}" data-act="tuToggle">${TU.on ? 'Desligar' : 'Ligar afinador'}</button></div>
    ${Mic.supported() ? '' : '<p class="small muted">O microfone só funciona com o app aberto por um endereço seguro (https), como o do GitHub Pages.</p>'}
    <div class="tuner"><div class="tnote"><b id="tuNote">—</b><span id="tuCents" class="small muted">${TU.on ? 'cante uma nota' : 'desligado'}</span></div>
      <div class="needle" aria-hidden="true"><i class="z"></i><i id="tuNeedle" class="n"></i><span>−50</span><span>0</span><span>+50</span></div></div>
    <canvas id="tuRoll" class="roll" style="height:200px" aria-label="Traço da sua voz"></canvas>
    <div class="row gap16 small"><span>Firmeza (2 s): <b id="tuStab">—</b></span><span>Nota segurada: <b id="tuHeld">0,0 s</b></span></div>
    <div class="row gap8"><label class="f grow">Nota de referência<select id="tuRef"><option value="">Nota mais próxima</option>${opts.map(m => `<option value="${m}" ${TU.ref === m ? 'selected' : ''}>${noteName(m)}</option>`).join('')}</select></label>
      <button class="btn" data-act="tuPlay" ${TU.ref == null ? 'disabled' : ''}>Tocar</button><button class="btn ${KB.held != null && KB.held === TU.ref ? 'primary' : ''}" data-act="tuDrone" ${TU.ref == null ? 'disabled' : ''}>Bordão</button></div>
    <p class="small muted">Com uma nota de referência, o traço fica verde quando você está a até 25 cents dela (em qualquer oitava). Use fone com o bordão ligado.</p>
  </div>`;
}

function keysCard() {
  const v = voiceOf(Store.perfil), lo = clamp(v.comfLow - 7, 24, 90), hi = clamp(Math.max(v.high, v.head || 0, v.comfHigh) + 5, lo + 14, 100);
  return `<div class="card stack12">
    <div class="row between"><div><h3>Teclado</h3><div class="sub">Toque uma tecla para ouvir a nota. A faixa colorida é a sua zona confortável.</div></div>
      <label class="switch"><input type="checkbox" id="kbHold" ${KB.hold ? 'checked' : ''}>Segurar como bordão</label></div>
    <div class="kbdwrap" id="kbPlay">${keyboardSVG(lo, hi, { comfLow: v.comfLow, comfHigh: v.comfHigh, live: KB.held })}</div>
  </div>`;
}

function songCard() {
  const v = voiceOf(Store.perfil), opts = sel => { let s = ''; for (let m = 84; m >= 33; m--) s += `<option value="${m}" ${m === sel ? 'selected' : ''}>${noteName(m)}</option>`; return s; };
  const lo = Math.min(song.lo, song.hi), hi = Math.max(song.lo, song.hi), f = fitSong(lo, hi, v), k = f.best.k;
  const keyTxt = kk => song.key !== '' && kk % 12 !== 0 ? ` (de ${keyName(+song.key)} para ${keyName(+song.key + kk)})` : '';
  const octTxt = o => `${Math.abs(o) === 1 ? 'uma oitava' : 'duas oitavas'} ${o < 0 ? 'abaixo' : 'acima'}`;
  const desc = kk => { const { semi, oct } = splitKey(kk); return semi === 0 ? (oct === 0 ? 'Cante no tom original' : `Mesmo tom, ${octTxt(oct)}`) : `${semi > 0 ? 'Suba' : 'Desça'} ${semis(semi)}${oct ? `, cantando ${octTxt(oct)}` : ''}${keyTxt(kk)}`; };
  return `<div class="card stack12">
    <div><h3>Tom certo para a música</h3><div class="sub">Música no tom errado é a causa número um de grito. Informe a nota mais grave e a mais aguda da melodia (procure no teclado ou num app de cifras).</div></div>
    <div class="row gap8"><label class="f grow">Nota mais grave<select id="sgLo">${opts(song.lo)}</select></label><label class="f grow">Nota mais aguda<select id="sgHi">${opts(song.hi)}</select></label>
      <label class="f grow">Tom original (opcional)<select id="sgKey"><option value="">Não sei</option>${Array.from({ length: 12 }, (_, i) => `<option value="${i}" ${String(i) === String(song.key) ? 'selected' : ''}>${keyName(i)}</option>`).join('')}</select></label></div>
    <div class="ins ${f.best.over === 0 ? 'good' : 'warn'}"><b>${esc(desc(k))}</b>
      <p>${f.best.over === 0 ? `A melodia fica de ${noteName(lo + k)} a ${noteName(hi + k)}, dentro da sua zona confortável (${noteName(v.comfLow)} a ${noteName(v.comfHigh)}).` : `A melodia tem ${semis(f.span)} e a sua zona confortável tem ${semis(f.room)}, então ela não cabe inteira. No tom sugerido ela fica de ${noteName(lo + k)} a ${noteName(hi + k)}: ${hi + k > v.comfHigh ? `passa ${semis(hi + k - v.comfHigh)} do seu agudo confortável` : 'o agudo cabe'}${lo + k < v.comfLow ? ` e ${semis(v.comfLow - lo - k)} abaixo do seu grave confortável (no grave, cante mais perto do microfone em vez de forçar)` : ''}. Teste o refrão nesse tom antes de decidir.`}</p>
      ${f.options.length > 1 ? `<p class="small muted">Outras opções que cabem igual: ${f.options.slice(1).map(o => esc(desc(o.k).toLowerCase())).join('; ')}.</p>` : ''}</div>
  </div>`;
}

function freeCard() {
  return `<div class="card stack12">
    <div><h3>Treino livre</h3><div class="sub">Cantou músicas, ensaiou ou fez aula fora do app? Registre aqui para entrar na sua evolução.</div></div>
    <div class="qual" id="flQual">${[1, 2, 3, 4, 5].map(q => `<button data-act="flQ" data-q="${q}" aria-pressed="false"><b>${q}</b>${QUAL[q]}</button>`).join('')}</div>
    <div class="regform rf2 nofield"><label class="f">Minutos<input type="number" id="flMin" min="1" max="240" value="15"></label>
      <label class="f wide">O que você cantou<input type="text" id="flNote" maxlength="200" placeholder="Ex.: ensaio de 3 músicas, aula com professor"></label></div>
    <div class="row"><button class="btn" data-act="flSave">Registrar treino livre</button></div>
  </div>`;
}

function historyCard() {
  const R = Store.ranges.slice().reverse();
  if (!R.length) return '';
  return `<div class="card stack10"><h3>Testes anteriores</h3>
    <div class="tablewrap"><table class="log"><thead><tr><th>Data</th><th>Extensão</th><th>Confortável</th><th>Falsete</th><th>Tipo</th><th></th></tr></thead><tbody>
    ${R.map(r => `<tr><td class="n">${fmtDate(r.d)}</td><td>${noteName(r.low)} a ${noteName(r.high)}</td><td>${noteName(r.comfLow)} a ${noteName(r.comfHigh)}</td><td>${r.head ? noteName(r.head) : '—'}</td><td>${esc(VOICE_TYPES[r.type]?.name || '')}</td>
      <td>${confirmDelRange === r.t ? `<span class="confirm">Apagar? <button class="btn sm danger" data-act="rgDel" data-t="${esc(r.t)}">Sim</button><button class="btn sm ghost" data-act="rgNo">Não</button></span>` : `<button class="btn ghost sm" data-act="rgAsk" data-t="${esc(r.t)}">Apagar</button>`}</td></tr>`).join('')}
    </tbody></table></div><p class="small muted">A evolução da extensão aparece em gráfico na aba Evolução.</p></div>`;
}

let flQ = 0;
function render(v) {
  v.innerHTML = `
  <div class="stack8"><div class="eyebrow">Ferramentas</div><h1 class="h-page">Minha voz</h1>
  <p class="lead">Aqui você mede a sua extensão, confere a afinação ao vivo e acha o tom certo para cada música. O teste de extensão ajusta todos os exercícios para a sua voz.</p></div>
  <div class="grid2">
    <div class="stack22">${rangeCard()}${tunerCard()}</div>
    <div class="stack22">${keysCard()}${songCard()}${freeCard()}</div>
  </div>
  ${historyCard()}`;
  flQ = 0;
  if (TU.on) { TU.roll = new Roll(el('tuRoll'), { past: 5, future: 0.6, follow: true }); TU.roll.ref = TU.ref; tuLoop(); }
  else { TU.roll = new Roll(el('tuRoll'), { past: 5, future: 0.6, follow: true }); TU.roll.ref = TU.ref; TU.roll.draw(0); }
  el('tuRef')?.addEventListener('change', ev => { TU.ref = ev.target.value === '' ? null : +ev.target.value; LS.set('tuRef', TU.ref); if (KB.held != null) { AudioEng.droneStop(); KB.held = null; } renderTab(); });
  el('kbHold')?.addEventListener('change', ev => { KB.hold = ev.target.checked; if (!KB.hold && KB.held != null) { AudioEng.droneStop(); KB.held = null; renderTab(); } });
  el('kbPlay')?.addEventListener('pointerdown', ev => {
    const k = ev.target.closest && ev.target.closest('[data-key]'); if (!k) return;
    ev.preventDefault(); const m = +k.dataset.key; AudioEng.ensure();
    if (KB.hold) { if (KB.held === m) { AudioEng.droneStop(); KB.held = null; } else { AudioEng.droneStart(m); KB.held = m; } renderTab(); }
    else { AudioEng.ref(m, 1.4, Store.settings.timbre); k.classList.add('hit'); setTimeout(() => k.classList.remove('hit'), 250); }
  });
  const sg = () => { song = { lo: +el('sgLo').value, hi: +el('sgHi').value, key: el('sgKey').value }; LS.set('song', song); renderTab(); };
  ['sgLo', 'sgHi', 'sgKey'].forEach(id => el(id)?.addEventListener('change', sg));
}

// ---------- teste de extensão ----------
async function rtMeasure() {
  const st = RT.step.replace(':rec', '');
  try { await Mic.open(Store.settings.micSens); }
  catch (err) { toast(err && err.name === 'NotAllowedError' ? 'Permissão do microfone negada. Libere nas configurações do navegador.' : 'Não foi possível abrir o microfone.'); return; }
  if (TU.on) { TU.on = false; cancelAnimationFrame(TU.raf); }
  Mic.onFrame = fr => {
    const lv = el('rtLvl'); if (lv) lv.style.width = Math.min(100, Math.sqrt(fr.r) * 260) + '%';
    const n = el('rtNote'); if (n && fr.m != null) n.textContent = noteName(Math.round(fr.m));
  };
  Mic.startTake(false);
  RT.step = st + ':rec'; RT.left = DUR; renderTab();
  const t0 = performance.now();
  clearInterval(RT.timer);
  RT.timer = setInterval(() => {
    RT.left = Math.max(0, Math.ceil(DUR - (performance.now() - t0) / 1000));
    const i = el('rtInfo');
    if (i) {
      const notes = stableNotes(Mic.frames.slice(-200));
      const ext = notes.length ? (st === 'low' ? Math.min(...notes) : Math.max(...notes)) : null;
      i.textContent = `Ouvindo… ${RT.left} s${ext != null ? ` · ${st === 'low' ? 'mais grave' : 'mais aguda'} até agora: ${noteName(Math.round(ext))}` : ''}`;
    }
    if (RT.left <= 0) rtFinish();
  }, 250);
}
function rtFinish() {
  clearInterval(RT.timer);
  const st = RT.step.replace(':rec', ''), take = Mic.stopTake();
  Mic.onFrame = null;
  const notes = stableNotes(take.frames);
  RT.step = st;
  if (!notes.length) { toast('Não ouvi uma nota firme. Segure a última nota por um segundo, mais perto do aparelho.', 4200); renderTab(); return; }
  const val = Math.round(st === 'low' ? Math.min(...notes) : Math.max(...notes));
  if (st === 'high' && RT.res.low != null && val < RT.res.low + 5) { toast('A nota aguda ficou perto demais da grave. Comece do meio da voz e suba devagar.', 4500); renderTab(); return; }
  if (st === 'head' && RT.res.high != null && val <= RT.res.high) { toast(`O falsete ficou até ${noteName(val)}, abaixo do agudo de peito. Pode pular este passo ou tentar mais leve.`, 4500); }
  RT.res[st] = val;
  renderTab();
}

function tuFrame(fr) {
  const r = TU.roll; if (!r) return;
  const now = AudioEng.ctx.currentTime;
  let err = null, md = fr.m;
  if (fr.m != null) {
    const tgt = TU.ref != null ? TU.ref : Math.round(fr.m);
    const raw = (fr.m - tgt) * 100; err = raw - 1200 * Math.round(raw / 1200); md = TU.ref != null ? fr.m - 12 * Math.round(raw / 1200) : fr.m;
  }
  r.push(fr.t, md, err);
  TU.hist.push({ t: fr.t, m: fr.m }); TU.hist = TU.hist.filter(h => now - h.t < 2);
  if (fr.m != null) { if (TU.heldStart == null || (TU.last != null && Math.abs(fr.m - TU.last) > 0.6)) TU.heldStart = fr.t; TU.last = fr.m; TU.held = fr.t - TU.heldStart; }
  else if (TU.lastVoiced != null && fr.t - TU.lastVoiced > 0.25) { TU.heldStart = null; TU.last = null; }
  if (fr.m != null) TU.lastVoiced = fr.t;
  const n = el('tuNote'), c = el('tuCents'), nd = el('tuNeedle'), s = el('tuStab'), h = el('tuHeld');
  if (fr.m == null) { if (c) c.textContent = 'cante uma nota'; if (nd) nd.style.opacity = '.25'; }
  else {
    if (n) n.textContent = noteName(Math.round(fr.m));
    if (c) { c.textContent = `${centsTxt(err)} cents${TU.ref != null ? ` de ${noteName(TU.ref)}` : ''}`; c.className = 'small ' + (Math.abs(err) <= 25 ? 't-good' : Math.abs(err) <= 50 ? 't-warn' : 't-crit'); }
    if (nd) { nd.style.opacity = '1'; nd.style.left = `${50 + clamp(err, -50, 50)}%`; nd.dataset.k = Math.abs(err) <= 25 ? 'good' : Math.abs(err) <= 50 ? 'warn' : 'crit'; }
  }
  const V = TU.hist.filter(x => x.m != null).map(x => x.m);
  if (s) s.textContent = V.length >= 10 ? `±${Math.round(sd(V) * 100)} cents` : '—';
  if (h) h.textContent = `${(TU.held || 0).toFixed(1).replace('.', ',')} s`;
}
function tuLoop() {
  cancelAnimationFrame(TU.raf);
  const step = () => { if (!TU.on || !TU.roll || !AudioEng.ctx) return; TU.roll.draw(AudioEng.ctx.currentTime); TU.raf = requestAnimationFrame(step); };
  TU.raf = requestAnimationFrame(step);
}
async function tuToggle() {
  if (TU.on) { TU.on = false; cancelAnimationFrame(TU.raf); if (Mic.ready && !Mic.taking) Mic.close(); renderTab(); return; }
  try { await Mic.open(Store.settings.micSens); }
  catch (err) { toast(err && err.name === 'NotAllowedError' ? 'Permissão do microfone negada. Libere nas configurações do navegador.' : 'Não foi possível abrir o microfone.'); return; }
  TU.on = true; TU.hist = []; Mic.onFrame = tuFrame; renderTab();
}

registerView('voz', render);
registerActions({
  rtStart: () => { vozStop(); RT.step = 'low'; RT.res = { low: null, high: null, head: null }; RT.adj = { lo: 0, hi: 0 }; renderTab(); },
  rtCancel: () => { clearInterval(RT.timer); if (Mic.taking) Mic.stopTake(); RT.step = 'idle'; renderTab(); },
  rtMeasure: () => rtMeasure(),
  rtStop: () => rtFinish(),
  rtNext: () => { const order = ['low', 'high', 'head', 'review'], st = RT.step.replace(':rec', ''); RT.step = order[order.indexOf(st) + 1] || 'review'; if (RT.step === 'review' && Mic.ready) Mic.close(); renderTab(); },
  rtAdj: a => { const k = a.dataset.k; RT.adj[k] = clamp(RT.adj[k] + Number(a.dataset.d), -6, 6); renderTab(); },
  rtSave: () => {
    const r = RT.res, cf = comfortFrom(r.low, r.high), now = new Date();
    let cl = cf.comfLow + RT.adj.lo, ch = cf.comfHigh + RT.adj.hi; if (ch < cl + 5) ch = cl + 5;
    saveRange({ t: now.toISOString(), d: dkey(now), low: r.low, high: r.high, head: r.head, comfLow: cl, comfHigh: ch, type: guessType(r.low, r.high) });
    RT.step = 'idle'; toast('Teste salvo. Os exercícios agora seguem a sua voz.');
  },
  rtWarm: () => { vozStop(); openPractice('sovt-1a'); },
  vType: a => savePerfil({ voiceType: a.dataset.v }),
  comf: a => {
    const P = Store.perfil; if (!P.voice) return;
    const v = { ...P.voice }; v[a.dataset.k] = v[a.dataset.k] + Number(a.dataset.d);
    if (v.comfHigh < v.comfLow + 5) return toast('A zona confortável precisa de pelo menos 5 semitons.');
    savePerfil({ voice: v });
  },
  tuToggle: () => tuToggle(),
  tuPlay: () => { if (TU.ref != null) AudioEng.ref(TU.ref, 1.6, Store.settings.timbre); },
  tuDrone: () => { if (TU.ref == null) return; AudioEng.ensure(); if (KB.held === TU.ref) { AudioEng.droneStop(); KB.held = null; } else { AudioEng.droneStart(TU.ref); KB.held = TU.ref; } renderTab(); },
  flQ: a => { flQ = +a.dataset.q; $$('#flQual button').forEach(b => b.setAttribute('aria-pressed', String(+b.dataset.q === flQ))); },
  flSave: async () => {
    if (!flQ) { toast('Escolha como a voz se sentiu (1 a 5).'); return; }
    const min = clamp(Math.round(+el('flMin').value || 1), 1, 240), note = (el('flNote').value || '').trim().slice(0, 200), now = new Date();
    const entry = { t: now.toISOString(), d: dkey(now), ex: 'livre', name: 'Treino livre', v: 0, q: flQ, min };
    if (note) entry.note = note;
    await addLog(entry); toast('Treino livre registrado.');
  },
  rgAsk: a => { confirmDelRange = a.dataset.t; renderTab(); },
  rgNo: () => { confirmDelRange = null; renderTab(); },
  rgDel: a => { confirmDelRange = null; deleteRange(a.dataset.t); toast('Teste apagado.'); }
});
