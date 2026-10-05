// Sala de treino: rolo de notas, escada de tons, piano, professor que ouve, guia de respiração e registro do treino.
import { ui, registerActions, renderTab, playIcon, el } from '../ui.js';
import { Store, saveSettings, addLog, addRec, recsAvailable } from '../store.js';
import { EX } from '../curriculum/index.js';
import { stats, metric, suggestBpm, suggestSteps, getPlan, QUAL, STATUS_LABEL } from '../stats.js';
import { AudioEng, Engine } from '../audio.js';
import { Mic, scorePitch, longestSound } from '../pitch.js';
import { Roll } from '../roll.js';
import { voiceOf, ladder, buildTimeline, rangeOf, noteName, centsTxt } from '../music.js';
import { pitchVerdict } from '../teacher.js';
import { metricChartSVG, devSVG, rootsSVG } from '../charts.js';
import { esc, clamp, fmtClock, dkey, toast, $$ } from '../util.js';

const PR = {
  ex: null, session: null, shift: 0, steps: 5, bpm: 80, mode: 'junto', guide: true, drone: false,
  elapsed: 0, t0: 0, tick: 0, q: 0, valDirty: false, minDirty: false, blockAlerted: false,
  listen: false, record: true, result: null, recBlob: null, recUrl: '', starting: false,
  roll: null, raf: 0, roots: [], expected: [], br: { on: false, t0: 0, raf: 0, phase: -1 }
};
export const isPracticeOpen = () => !!PR.ex && !el('sheet').hidden;
const free = () => PR.ex && PR.ex.mode === 'livre';
const lat = () => AudioEng.outLatency();

export function openPractice(exId, opts = {}) {
  const e = EX[exId]; if (!e) return;
  if (Engine.playing) Engine.stop();
  const st = stats();
  Object.assign(PR, {
    ex: e, session: opts.session || null, shift: 0, steps: suggestSteps(e, st), bpm: suggestBpm(e, st),
    mode: e.mode === 'livre' ? 'livre' : e.mode, guide: !e.solo, drone: !!e.drone,
    elapsed: 0, t0: 0, q: 0, valDirty: false, minDirty: false, blockAlerted: false, result: null, recBlob: null
  });
  if (PR.recUrl) { URL.revokeObjectURL(PR.recUrl); PR.recUrl = ''; }
  render();
  el('sheet').hidden = false; ui.practiceOpen = true;
  document.body.classList.add('noscroll');
  el('panel').scrollTop = 0;
  setTimeout(() => el('pPlay')?.focus({ preventScroll: true }), 30);
}
export function closePractice() {
  if (Engine.playing && Engine.owner === 'practice') Engine.stop();
  stopBreath(false);
  el('sheet').hidden = true; ui.practiceOpen = false; document.body.classList.remove('noscroll');
  PR.ex = null; PR.session = null; clearInterval(PR.tick); cancelAnimationFrame(PR.raf); PR.roll = null;
  if (Mic.ready) Mic.close();
  PR.listen = false;
  renderTab();
}
export function openBlock(i) {
  const plan = getPlan(false), b = plan.blocks[i]; if (!b) return;
  openPractice(b.ex, { session: { idx: i, min: b.min, kind: b.kind } });
}

// ---------- escada de tons ----------
function computeRoots() { PR.roots = ladder(PR.ex, voiceOf(Store.perfil), PR.shift, PR.steps); return PR.roots; }
const DIRTXT = { up: 'subindo', down: 'descendo', updown: 'sobe e desce', stay: 'no mesmo tom' };
function ladderText() {
  const e = PR.ex, r = PR.roots, v = voiceOf(Store.perfil), rg = rangeOf(e, r);
  const keys = e.dir === 'stay' ? `repete em ${noteName(r[0])}` : `de ${noteName(r[0])} ${e.dir === 'updown' ? `até ${noteName(Math.max(...r))} e volta` : `até ${noteName(r[r.length - 1])}`}`;
  const over = rg.hi > v.comfHigh ? (e.zone === 'top' ? ' · passa do seu agudo confortável: pare se apertar' : ' · passa um pouco do seu agudo confortável') : rg.lo < v.comfLow && e.zone !== 'bottom' ? ' · passa um pouco do seu grave confortável' : '';
  return `${r.length} ${r.length === 1 ? 'repetição' : 'repetições'} ${DIRTXT[e.dir] || ''}, ${keys}. Notas de ${noteName(rg.lo)} a ${noteName(rg.hi)}${over}.`;
}
function timeline() { return buildTimeline(PR.ex, PR.roots, PR.mode); }

// Notas que aparecem no rolo: as que você canta, as que o piano toca antes (eco) e a outra voz (harmonia).
function rollNotes(evs) {
  const notes = evs.filter(x => x.type === 'note' || x.type === 'acc').map(x => x.type === 'acc' ? { ...x, phase: 'acc' } : x);
  const ms = notes.flatMap(n => n.g != null ? [n.m, n.g] : [n.m]);
  return { notes, lo: Math.min(...ms), hi: Math.max(...ms) };
}
// Mostra a primeira repetição parada no rolo (antes de tocar).
function preview() {
  if (!PR.roll || free()) return;
  const tl = timeline(), spb = 60 / PR.bpm;
  const { notes, lo, hi } = rollNotes(tl.ev.map(x => ({ ...x, ts: x.t * spb, te: (x.t + x.d) * spb })));
  PR.roll.setRange(lo, hi); PR.roll.setNotes(notes); PR.roll.clearTrail();
  const first = notes.find(x => x.phase === 'sing' || x.phase === 'call');
  PR.frozen = (first ? first.ts : 0) + PR.roll.past - 0.4;
  drawOnce();
}
function drawOnce() { if (PR.roll) PR.roll.draw(Engine.playing && Engine.owner === 'practice' ? AudioEng.ctx.currentTime - lat() : PR.frozen ?? 0); }
// Desenha enquanto toca; ao parar, o rolo congela no ponto em que estava, com o traço da sua voz.
function loop() {
  cancelAnimationFrame(PR.raf);
  const step = () => {
    if (!PR.ex || !PR.roll || !(Engine.playing && Engine.owner === 'practice')) return;
    PR.frozen = AudioEng.ctx.currentTime - lat(); PR.roll.draw(PR.frozen);
    PR.raf = requestAnimationFrame(step);
  };
  PR.raf = requestAnimationFrame(step);
}

function howto(e) {
  const mt = metric(e);
  const goal = mt.m === 'rep' ? `${mt.goal} treinos registrados como "Solto" ou melhor` : mt.m === 'top' ? `cantar ${mt.fmt(mt.goal)} livre, sem grito` : mt.m === 'low' ? `cantar ${mt.fmt(mt.goal)} com som, sem apertar` : mt.m === 'afin' ? `afinação ${mt.goal}/100 no microfone` : mt.m === 'sec' ? `${mt.goal} segundos` : `${mt.goal} bpm limpo`;
  return `<div class="howto"><p>${esc(e.desc)}</p>
    <div class="row gap10"><span class="syl">${e.mode === 'livre' ? 'Faça' : 'Cante'}: <b>${esc(e.syl)}</b></span>${e.mode !== 'livre' ? `<span class="pill plain">${e.mode === 'eco' ? 'Eco: ouça, depois repita' : e.solo ? 'Sozinho, depois do acorde' : e.accNotes ? 'Você canta, o piano faz a outra voz' : 'Junto com o piano'}</span>` : ''}</div>
    <p><b>Meta:</b> ${esc(goal)}, com qualidade "Solto" ou melhor.</p>
    <p class="small muted">Dica: ${esc(e.lesson.tips[0] || '')}</p></div>`;
}

function render() {
  const e = PR.ex, plan = getPlan(false), sess = PR.session, S = Store.settings, micOk = Mic.supported();
  if (!free()) computeRoots();
  const rg = free() ? null : rangeOf(e, PR.roots), rows = rg ? rg.hi - rg.lo + 5 : 0;
  el('panel').innerHTML = `
  <div class="ph">
    <div class="minw"><div class="crumb">${esc(e.module.name)} · Lição ${e.lesson.idx}: ${esc(e.lesson.name)}</div><h2 id="pTitle">${esc(e.name)}</h2></div>
    <button class="iconbtn x" data-act="closePractice" aria-label="Fechar">✕</button>
  </div>
  <div class="pb">
    ${sess ? `<div class="sessbar"><span>Aula de hoje · bloco ${sess.idx + 1} de ${plan.blocks.length} · ${sess.kind}</span><span id="pRemain" class="mono">${sess.min}:00 restantes</span><span class="sp"></span>${sess.idx + 1 < plan.blocks.length ? `<button class="btn sm" data-act="nextBlock">Próximo bloco</button>` : `<button class="btn sm" data-act="closePractice">Encerrar aula</button>`}</div>` : ''}
    ${howto(e)}
    ${free() ? breathCard(e) : `
    <div class="card rollcard">
      <div class="row between"><div class="small muted minw" id="pLadder">${esc(ladderText())}</div>
        <div class="row gap6"><button class="btn sm" data-act="pShift" data-d="-1" title="Meio tom abaixo">−½ tom</button><button class="btn sm" data-act="pShift" data-d="1" title="Meio tom acima">+½ tom</button>
          <button class="iconbtn sm" data-act="pSteps" data-d="-1" aria-label="Menos repetições">−</button><span class="small mono" id="pStepsN">${PR.steps}</span><button class="iconbtn sm" data-act="pSteps" data-d="1" aria-label="Mais repetições">+</button></div></div>
      <canvas id="pRoll" class="roll" style="height:${clamp(rows * 15, 210, 340)}px" aria-label="Notas do exercício e o traço da sua voz"></canvas>
      <div class="livebar"><span class="small muted">${PR.mode === 'eco' ? 'Barras tracejadas: o piano toca. Barras cheias: você canta.' : 'Barras: as notas que você canta.'} O traço da voz fica <b class="t-good">verde</b> quando afinado.</span><span class="sp"></span><span class="live" id="pLive">${PR.listen ? '—' : ''}</span></div>
    </div>
    <div class="card transport">
      <div class="bpmbox">
        <div class="keybig" id="pKey">${noteName(PR.roots[0])}<small id="pKeyN">tom 1 de ${PR.roots.length}</small></div>
        <button class="play" id="pPlay" data-act="pPlay" aria-label="Tocar ou parar">${playIcon(false)}</button>
        <div class="bpmctl"><button class="iconbtn" data-act="pB" data-d="-5" aria-label="Mais devagar">−5</button><span class="small mono" id="pBpm">${PR.bpm} bpm</span><button class="iconbtn" data-act="pB" data-d="5" aria-label="Mais rápido">+5</button></div>
      </div>
      <div class="stack14 minw">
        <div class="stack6"><span class="flabel">Modo</span><div class="seg" role="group" aria-label="Modo">
          <button data-act="pMode" data-v="eco" aria-pressed="${PR.mode === 'eco'}">Eco</button><button data-act="pMode" data-v="junto" aria-pressed="${PR.mode === 'junto'}">Junto</button></div>
          <span class="small muted">${PR.mode === 'eco' ? 'O piano toca a melodia, para, e você repete sozinho.' : e.accNotes ? 'Você canta a sua voz enquanto o piano faz a outra.' : 'Você canta junto com o piano.'}</span></div>
        <div class="ctlgrid">
          ${e.accNotes ? '' : `<label class="switch"><input type="checkbox" id="pGuide" ${PR.guide ? 'checked' : ''} ${PR.mode === 'eco' ? 'disabled' : ''}>Piano toca a melodia junto</label>`}
          <label class="switch"><input type="checkbox" id="pDrone" ${PR.drone ? 'checked' : ''}>Bordão (nota contínua)</label>
        </div>
        <div class="row gap10"><span class="small muted">Volume</span>
          <label class="vol">Piano<input type="range" id="vGuide" min="0" max="1" step="0.05" value="${S.guideVol}"></label>
          <label class="vol">Bordão<input type="range" id="vDrone" min="0" max="1" step="0.05" value="${S.droneVol}"></label></div>
        <p class="small muted">Respire durante o acorde que o piano dá antes de cada repetição. A barra de espaço toca e para.</p>
      </div>
    </div>`}
    <div class="card mic">
      <div class="row between"><div><h3>Professor que ouve</h3><div class="sub">${micOk ? (free() ? 'Mede por quanto tempo você sustenta o som (voz ou "sss").' : 'Mostra a sua voz no rolo de notas e dá a nota de afinação no fim.') : 'Este navegador não permite usar o microfone aqui. Abra o app pelo endereço https do GitHub Pages.'}</div></div>
        ${micOk ? `<label class="switch"><input type="checkbox" id="mOn" ${PR.listen ? 'checked' : ''}>Ouvir meu canto</label>` : ''}</div>
      <div id="micBody" ${PR.listen && micOk ? '' : 'hidden'} class="stack10">
        <div class="row gap10">
          <div class="level" aria-hidden="true"><i id="mLvl"></i></div>
          <label class="vol grow">Sensibilidade<input type="range" id="mSens" min="0" max="1" step="0.05" value="${S.micSens}"></label>
          <label class="switch"><input type="checkbox" id="mRec" ${PR.record ? 'checked' : ''}>Gravar</label>
          ${free() ? '' : `<label class="switch"><input type="checkbox" id="mPhones" ${S.phones ? 'checked' : ''}>Estou de fone</label>`}
        </div>
        ${free() ? '' : `<p class="small muted" id="mPhoneTip">${S.phones ? 'Com fone, o piano toca normalmente e o microfone ouve só você.' : 'Sem fone, o microfone também ouve o piano. Por isso, com o microfone ligado, o piano só dá o acorde e as notas do modo eco, e o bordão fica desligado.'}</p>`}
      </div>
      <div id="micResult"></div>
    </div>
    <div id="pStats"></div>
    ${registerCard(e)}
  </div>`;
  wire(e);
  renderStats(); renderResult();
  if (!free()) {
    PR.roll = new Roll(el('pRoll'));
    preview();
  } else PR.roll = null;
}

function registerCard(e) {
  const mt = metric(e), v = voiceOf(Store.perfil);
  let field = '';
  if (mt.input === 'number') field = `<label class="f">${esc(mt.label)}<input type="number" id="rVal" min="${mt.min ?? 0}" max="${mt.max ?? 999}" placeholder="${mt.m === 'afin' ? 'do microfone' : ''}" value="${mt.m === 'bpm' ? PR.bpm : ''}"></label>`;
  else if (mt.input === 'note') {
    const lo = Math.min(v.comfLow, mt.goal) - 10, hi = Math.max(v.comfHigh, mt.goal) + 10;
    const def = mt.m === 'top' ? (PR.roots.length ? Math.max(...PR.roots) + e.span.hi : v.comfHigh) : (PR.roots.length ? Math.min(...PR.roots) + e.span.lo : v.comfLow);
    field = `<label class="f">${esc(mt.label)}<select id="rVal"><option value="">—</option>${Array.from({ length: hi - lo + 1 }, (_, i) => hi - i).map(m => `<option value="${m}" ${m === def ? 'selected' : ''}>${noteName(m)}</option>`).join('')}</select></label>`;
  }
  return `<div class="card stack14">
      <div class="row between"><div><h3>Registrar treino</h3><div class="sub">${mt.m === 'top' ? 'Anote a nota mais aguda que saiu livre, sem grito e sem apertar.' : mt.m === 'low' ? 'Anote a nota mais grave que saiu com som, sem apertar.' : mt.m === 'rep' ? 'Marque como foi. Cada treino "Solto" ou melhor conta para a meta.' : 'Marque como a voz se sentiu e o valor do treino.'}</div></div>
        <div class="row"><span class="timer" id="pTimer">${fmtClock(PR.elapsed)}</span><button class="btn ghost sm" data-act="pTimerReset">Zerar</button></div></div>
      <div class="stack8"><span class="flabel">Como a voz se sentiu?</span>
        <div class="qual" id="pQual">${[1, 2, 3, 4, 5].map(q => `<button data-act="pQ" data-q="${q}" aria-pressed="${PR.q === q}"><b>${q}</b>${QUAL[q]}</button>`).join('')}</div></div>
      <div class="regform ${field ? '' : 'nofield'}">
        ${field}
        <label class="f">Minutos<input type="number" id="rMin" min="1" max="240" value="${Math.max(1, Math.round(PR.elapsed / 60))}"></label>
        <label class="f wide">Observação (opcional)<input type="text" id="rNote" maxlength="200" placeholder="Ex.: a voz quebrou no Ré, garganta apertou no fim"></label>
      </div>
      <div class="row"><button class="btn primary" data-act="pSave">Registrar</button><span class="small muted">Qualidade 4 ou 5 com a meta atingida marca o exercício como dominado. Se doer ou arder, pare e marque "Forçado".</span></div>
    </div>`;
}

function breathCard(e) {
  const ph = e.breath || null;
  return `<div class="card breath">
    <div class="pacer"><div class="orb" id="orb"></div><div class="pc"><b id="brPhase">${ph ? 'Pronto' : 'Pronto'}</b><span id="brCount" class="mono">${ph ? `${e.cycles} ${e.cycles === 1 ? 'ciclo' : 'ciclos'}` : '00:00'}</span></div></div>
    <div class="stack12 minw">
      ${ph ? `<ol class="steps">${ph.map(([l, s]) => `<li>${esc(l)}: <b>${s} s</b></li>`).join('')}</ol><p class="small muted">O círculo cresce quando é para encher de ar e diminui quando é para soltar. Repete ${e.cycles} ${e.cycles === 1 ? 'vez' : 'vezes'}.</p>` : `<p class="small muted">Siga a descrição acima no seu ritmo. O cronômetro marca o tempo do exercício.</p>`}
      <div class="row"><button class="play sm" id="pPlay" data-act="pPlay" aria-label="Começar ou parar">${playIcon(false)}</button><span class="small muted">Começar / parar</span></div>
    </div>
  </div>`;
}

function wire(e) {
  const S = Store.settings;
  el('pGuide')?.addEventListener('change', ev => { PR.guide = ev.target.checked; Engine.setOpt('guide', guideEff()); });
  el('pDrone')?.addEventListener('change', ev => { PR.drone = ev.target.checked; if (Engine.playing && Engine.owner === 'practice') { if (droneEff()) AudioEng.droneStart(PR.roots[Math.max(0, Engine.rep)]); else AudioEng.droneStop(); Engine.setOpt('drone', droneEff()); } });
  el('vGuide')?.addEventListener('input', ev => { AudioEng.setVol('guideVol', +ev.target.value); saveSettings({ guideVol: +ev.target.value }, true); });
  el('vDrone')?.addEventListener('input', ev => { AudioEng.setVol('droneVol', +ev.target.value); saveSettings({ droneVol: +ev.target.value }, true); });
  el('rVal')?.addEventListener('input', () => { PR.valDirty = true; });
  el('rMin').addEventListener('input', () => { PR.minDirty = true; });
  el('mOn')?.addEventListener('change', ev => toggleListen(ev.target.checked));
  el('mSens')?.addEventListener('input', ev => { Mic.setSens(+ev.target.value); saveSettings({ micSens: +ev.target.value }, true); });
  el('mRec')?.addEventListener('change', ev => { PR.record = ev.target.checked; });
  el('mPhones')?.addEventListener('change', ev => {
    saveSettings({ phones: ev.target.checked }, true);
    const tip = el('mPhoneTip'); if (tip) tip.textContent = ev.target.checked ? 'Com fone, o piano toca normalmente e o microfone ouve só você.' : 'Sem fone, o microfone também ouve o piano. Por isso, com o microfone ligado, o piano só dá o acorde e as notas do modo eco, e o bordão fica desligado.';
    Engine.setOpt('guide', guideEff());
  });
  void S;
}
// Sem fone e com o microfone ligado, o piano não toca junto com a voz (o microfone ouviria o piano).
const quietForMic = () => PR.listen && !Store.settings.phones;
const guideEff = () => PR.guide && !quietForMic();
const droneEff = () => PR.drone && !quietForMic();

export function renderStats() {
  const e = PR.ex; if (!e) return; const box = el('pStats'); if (!box) return;
  const s = stats().ex[e.id], status = s ? (s.mastered ? 'dominado' : 'pratica') : 'novo', mt = metric(e);
  box.innerHTML = `<div class="stats4">
    <div><span class="l">Seu melhor</span><span class="v">${s && s.best != null ? esc(mt.fmt(s.best)) : '—'}</span></div>
    <div><span class="l">Meta</span><span class="v">${esc(mt.fmt(mt.goal))}</span></div>
    <div><span class="l">Último registro</span><span class="v sm">${s ? `${s.last ? esc(mt.fmt(s.last)) + ' · ' : ''}${QUAL[s.lastQ] || ''}` : '—'}</span></div>
    <div><span class="l">Situação</span><span class="v sm"><span class="pill ${status}">${STATUS_LABEL[status]}</span> <span class="small muted">${s ? `${s.n} ${s.n === 1 ? 'treino' : 'treinos'}` : ''}</span></span></div>
  </div>${s && mt.m !== 'rep' && s.hist.filter(h => h.v > 0).length > 1 ? `<div class="chart mt12">${metricChartSVG(s.hist, mt, 680, 160)}</div>` : ''}`;
}
function renderResult() {
  const box = el('micResult'); if (!box) return;
  const r = PR.result;
  if (!r) { box.innerHTML = ''; return; }
  if (r.error) { box.innerHTML = `<div class="ins warn mt12"><b>Sem análise</b><p>${esc(r.error)}</p></div>`; return; }
  if (r.sustain != null && r.score == null) {
    box.innerHTML = `<div class="result mt12"><div class="scorebig good"><b>${r.sustain}</b><span>segundos</span></div><div class="stack8 minw"><p class="vd good">Maior trecho de som contínuo: ${r.sustain} s.</p><p class="small muted">Ao registrar, este valor vai para o campo de segundos.</p></div></div>
      ${PR.recUrl ? `<div class="row mt12"><audio controls src="${PR.recUrl}"></audio>${recsAvailable() ? '<button class="btn sm" data-act="saveRec">Guardar gravação</button>' : ''}</div>` : ''}`;
    return;
  }
  const v = pitchVerdict(r, PR.ex);
  box.innerHTML = `<div class="result mt12">
    <div class="scorebig ${r.score >= 80 ? 'good' : r.score >= 60 ? 'mid' : 'bad'}"><b>${r.score}</b><span>de 100</span></div>
    <div class="stack8 minw">
      <div class="row gap16 small"><span>Média: <b>${centsTxt(r.mean)} cents</b></span><span>Oscilação: <b>${r.sd} cents</b></span><span>Afinado: <b>${r.within}%</b></span><span>Notas: <b>${r.n}</b></span>${r.longest && PR.ex.goal.m === 'sec' ? `<span>Som contínuo: <b>${r.longest} s</b></span>` : ''}</div>
      ${v.map(x => `<p class="vd ${x.k}">${esc(x.t)}</p>`).join('')}
    </div>
  </div>
  ${r.series.length >= 3 ? `<div class="chart mt12"><div class="small muted mb6">Desvio de cada nota (faixa verde = afinado)</div>${devSVG(r.series, 680, 170)}</div>` : ''}
  ${r.roots.length >= 3 ? `<div class="chart mt12"><div class="small muted mb6">Afinação em cada tom da escada</div>${rootsSVG(r.roots, 680, 150)}</div>` : ''}
  ${PR.recUrl ? `<div class="row mt12"><audio controls src="${PR.recUrl}"></audio>${recsAvailable() ? '<button class="btn sm" data-act="saveRec">Guardar gravação</button>' : ''}</div>` : ''}
  <p class="small muted mt8">Ao registrar, este resultado vai junto com o treino.</p>`;
}

function setBpm(v) {
  if (Engine.playing && Engine.owner === 'practice') { toast('Pare para mudar o andamento.'); return; }
  PR.bpm = clamp(Math.round(v), 40, 240);
  const b = el('pBpm'); if (b) b.textContent = `${PR.bpm} bpm`;
  if (PR.ex.goal.m === 'bpm' && !PR.valDirty && el('rVal')) el('rVal').value = PR.bpm;
  preview();
}
function refreshLadder() {
  computeRoots();
  const l = el('pLadder'); if (l) l.textContent = ladderText();
  const n = el('pStepsN'); if (n) n.textContent = PR.steps;
  setKey(0);
  preview();
}
function setKey(rep) {
  const k = el('pKey'); if (!k || !PR.roots.length) return;
  const r = PR.roots[clamp(rep, 0, PR.roots.length - 1)];
  k.firstChild.nodeValue = noteName(r);
  const n = el('pKeyN'); if (n) n.textContent = `tom ${clamp(rep, 0, PR.roots.length - 1) + 1} de ${PR.roots.length}`;
}

// ---------- microfone ----------
function onFrame(fr) {
  const lv = el('mLvl'); if (lv) lv.style.width = Math.min(100, Math.sqrt(fr.r) * 260) + '%';
  const L = lat();
  let err = null, md = fr.m;
  const running = Engine.playing && Engine.owner === 'practice';
  if (PR.roll && fr.m != null) {
    const tgt = running ? PR.roll.targetAt(fr.t - L) : null;
    if (tgt != null) { const raw = (fr.m - tgt) * 100; err = raw - 1200 * Math.round(raw / 1200); md = tgt + err / 100; }
  }
  if (PR.roll && running) PR.roll.push(fr.t - L, md, err);
  const live = el('pLive');
  if (live) {
    if (fr.m == null) live.innerHTML = '<span class="muted">—</span>';
    else { const near = Math.round(fr.m), c = (fr.m - near) * 100; live.innerHTML = `<b>${noteName(near)}</b> <span class="${Math.abs(err ?? c) <= 25 ? 't-good' : Math.abs(err ?? c) <= 50 ? 't-warn' : 't-crit'}">${err != null ? `${centsTxt(err)} da nota` : `${centsTxt(c)} cents`}</span>`; }
  }
}
async function toggleListen(on) {
  if (on) {
    try { await Mic.open(Store.settings.micSens); }
    catch (err) {
      PR.listen = false; const c = el('mOn'); if (c) c.checked = false;
      toast(err && err.name === 'NotAllowedError' ? 'Permissão do microfone negada. Libere nas configurações do navegador.' : 'Não foi possível abrir o microfone.');
      return;
    }
    PR.listen = true; Mic.onFrame = onFrame;
  } else { PR.listen = false; if (Engine.playing && Engine.owner === 'practice') Engine.stop(); stopBreath(false); Mic.close(); const lv = el('pLive'); if (lv) lv.textContent = ''; }
  const body = el('micBody'); if (body) body.hidden = !PR.listen;
  Engine.setOpt('guide', guideEff()); Engine.setOpt('drone', droneEff());
}

async function practiceToggle() {
  if (free()) return breathToggle();
  if (Engine.playing && Engine.owner === 'practice') { Engine.stop(); return; }
  if (PR.starting) return;
  const e = PR.ex, S = Store.settings;
  AudioEng.setVol('guideVol', S.guideVol); AudioEng.setVol('droneVol', S.droneVol);
  computeRoots();
  if (PR.listen) {
    PR.starting = true;
    try { await Mic.open(S.micSens); Mic.onFrame = onFrame; } catch { PR.starting = false; toast('Não foi possível abrir o microfone.'); return; }
    PR.starting = false;
    Mic.startTake(PR.record && !!window.MediaRecorder);
    PR.result = null; renderResult();
  }
  if (PR.roll) PR.roll.clearTrail();
  const ok = Engine.start(timeline(), { bpm: PR.bpm, mode: PR.mode, guide: guideEff(), drone: droneEff(), hasAcc: !!e.accNotes, accOn: true, timbre: S.timbre }, 'practice');
  if (!ok) return;
  PR.expected = Engine.events.filter(x => x.type === 'note' && x.phase === 'sing');
  if (PR.roll) { const { notes, lo, hi } = rollNotes(Engine.events); PR.roll.setRange(lo, hi); PR.roll.setNotes(notes); }
  loop();
}

async function finishListening() {
  const take = Mic.stopTake();
  const res = scorePitch(PR.expected, take.frames, lat());
  const longest = longestSound(take.frames, Mic.gate);
  if (res) res.longest = longest;
  PR.result = res || { error: take.frames.filter(f => f.m != null).length < 10 ? 'O microfone quase não ouviu a sua voz. Cante mais perto do aparelho ou aumente a sensibilidade.' : 'Cante pelo menos duas repetições inteiras para ter uma análise.' };
  prefill();
  const blob = await take.blob;
  if (PR.recUrl) URL.revokeObjectURL(PR.recUrl);
  PR.recBlob = blob; PR.recUrl = blob ? URL.createObjectURL(blob) : '';
  renderResult();
  if (res) el('micResult')?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}
// Preenche o valor do registro com o que o microfone mediu.
function prefill() {
  const r = PR.result, f = el('rVal'); if (!r || r.error || !f || PR.valDirty) return;
  const m = PR.ex.goal.m;
  const v = m === 'afin' ? r.score : m === 'top' ? r.topOk : m === 'low' ? r.lowOk : m === 'sec' ? (r.sustain ?? r.longest) : null;
  if (v != null) f.value = String(v);
}

// ---------- guia de respiração (modo livre) ----------
function breathToggle() { if (PR.br.on) stopBreath(true); else startBreath(); }
async function startBreath() {
  const e = PR.ex;
  if (PR.listen) { try { await Mic.open(Store.settings.micSens); Mic.onFrame = onFrame; } catch {} Mic.startTake(PR.record && !!window.MediaRecorder); PR.result = null; renderResult(); }
  AudioEng.ensure();
  PR.br = { on: true, t0: performance.now(), raf: 0, phase: -1 };
  const b = el('pPlay'); if (b) { b.classList.add('on'); b.innerHTML = playIcon(true); }
  startTimer(); reqWake();
  const ph = e.breath, cyc = ph ? ph.reduce((a, p) => a + p[1], 0) : 0, total = ph ? cyc * e.cycles : 0;
  const orb = el('orb'), lab = el('brPhase'), cnt = el('brCount');
  const kind = l => /inspir|encha|puxe/i.test(l) ? 'in' : /segur|pausa|prend|mantenha/i.test(l) ? 'hold' : 'out';
  const step = () => {
    if (!PR.br.on) return;
    const s = (performance.now() - PR.br.t0) / 1000;
    if (!ph) { if (cnt) cnt.textContent = fmtClock(s); if (lab) lab.textContent = 'Em andamento'; }
    else {
      if (s >= total) { stopBreath(true); AudioEng.chime(); toast('Ciclos concluídos. Registre o treino.'); return; }
      let r = s % cyc, i = 0; while (r >= ph[i][1]) { r -= ph[i][1]; i++; }
      const k = kind(ph[i][0]), p = r / ph[i][1];
      const prevK = i > 0 ? kind(ph[i - 1][0]) : kind(ph[ph.length - 1][0]);
      const scale = k === 'in' ? 0.55 + 0.45 * p : k === 'hold' ? (prevK === 'in' ? 1 : 0.55) : 1 - 0.45 * p;
      if (orb) { orb.style.transform = `scale(${scale.toFixed(3)})`; orb.dataset.k = k; }
      if (i !== PR.br.phase) { PR.br.phase = i; AudioEng.click(AudioEng.ctx.currentTime + 0.01, i === 0); }
      if (lab) lab.textContent = ph[i][0];
      if (cnt) cnt.textContent = `${Math.ceil(ph[i][1] - r)} s · ciclo ${Math.floor(s / cyc) + 1} de ${e.cycles}`;
    }
    PR.br.raf = requestAnimationFrame(step);
  };
  PR.br.raf = requestAnimationFrame(step);
}
function stopBreath(analyze) {
  if (!PR.br.on) return;
  PR.br.on = false; cancelAnimationFrame(PR.br.raf); stopTimer(); releaseWake();
  const b = el('pPlay'); if (b) { b.classList.remove('on'); b.innerHTML = playIcon(false); }
  const orb = el('orb'); if (orb) orb.style.transform = '';
  const lab = el('brPhase'); if (lab) lab.textContent = 'Pronto';
  if (Mic.taking) {
    const take = Mic.stopTake();
    if (analyze) {
      const s = longestSound(take.frames, Mic.gate);
      PR.result = s >= 1 ? { sustain: s } : { error: 'O microfone não ouviu um som contínuo. Aproxime o aparelho ou aumente a sensibilidade.' };
      take.blob.then(blob => { if (PR.recUrl) URL.revokeObjectURL(PR.recUrl); PR.recBlob = blob; PR.recUrl = blob ? URL.createObjectURL(blob) : ''; renderResult(); });
      prefill(); renderResult();
    }
  }
}
let wake = null;
async function reqWake() { try { wake = await navigator.wakeLock?.request('screen'); } catch { wake = null; } }
function releaseWake() { try { wake?.release(); } catch {} wake = null; }

// ---------- cronômetro ----------
function startTimer() { PR.t0 = performance.now(); clearInterval(PR.tick); PR.tick = setInterval(updateTimer, 500); }
function stopTimer() { if (PR.t0) { PR.elapsed += (performance.now() - PR.t0) / 1000; PR.t0 = 0; } clearInterval(PR.tick); updateTimer(); }
const curElapsed = () => PR.elapsed + (PR.t0 ? (performance.now() - PR.t0) / 1000 : 0);
function updateTimer() {
  const s = curElapsed(), t = el('pTimer'); if (t) t.textContent = fmtClock(s);
  if (!PR.minDirty && el('rMin')) el('rMin').value = Math.max(1, Math.round(s / 60));
  if (PR.session) {
    const rem = PR.session.min * 60 - s, r = el('pRemain');
    if (r) r.textContent = rem > 0 ? `${fmtClock(rem)} restantes` : 'tempo do bloco concluído';
    if (rem <= 0 && !PR.blockAlerted) { PR.blockAlerted = true; AudioEng.chime(); toast('Tempo do bloco concluído. Registre e siga para o próximo.'); }
  }
}

Engine.on(ev => {
  if (!(ev.owner === 'practice' || Engine.owner === 'practice') || !PR.ex) return;
  if (ev.type === 'start') { const b = el('pPlay'); if (b) { b.classList.add('on'); b.innerHTML = playIcon(true); } startTimer(); }
  if (ev.type === 'stop') {
    const b = el('pPlay'); if (b) { b.classList.remove('on'); b.innerHTML = playIcon(false); }
    stopTimer(); setKey(0);
    if (Mic.taking) finishListening();
    if (ev.completed) toast('Série concluída.');
    setTimeout(() => { if (!(Engine.playing && Engine.owner === 'practice')) drawOnce(); }, 50);
  }
  if (ev.type === 'rep') setKey(ev.rep);
});

async function savePractice() {
  const e = PR.ex; if (!e) return;
  if (!PR.q) { toast('Escolha como a voz se sentiu (1 a 5) antes de registrar.'); return; }
  const mt = metric(e), f = el('rVal');
  const v = f && f.value !== '' ? Math.round(Number(f.value) * (mt.m === 'sec' ? 10 : 1)) / (mt.m === 'sec' ? 10 : 1) : 0;
  const min = clamp(Math.round(+el('rMin').value || 1), 1, 240);
  const note = (el('rNote').value || '').trim().slice(0, 200);
  const before = stats().ex[e.id]?.mastered, now = new Date();
  const entry = { t: now.toISOString(), d: dkey(now), ex: e.id, v: Number.isFinite(v) ? v : 0, q: PR.q, min };
  if (note) entry.note = note;
  if (PR.result && !PR.result.error && PR.result.score != null) { const { series, roots, pos, ...pr } = PR.result; entry.pitch = { ...pr, pos: (pos || []).slice(0, 16), roots: (roots || []).slice(0, 16).map(r => ({ root: r.root, score: r.score })) }; }
  await addLog(entry);
  const after = stats().ex[e.id]?.mastered;
  if (after && !before) { AudioEng.chime(); toast(`Exercício dominado: ${e.name}!`); } else toast('Treino registrado.');
  PR.elapsed = 0; if (PR.t0) PR.t0 = performance.now(); PR.q = 0; PR.valDirty = false; PR.minDirty = false; PR.result = null;
  el('rNote').value = ''; if (f && mt.m !== 'bpm' && mt.input !== 'note') f.value = '';
  $$('#pQual button').forEach(b => b.setAttribute('aria-pressed', 'false')); updateTimer(); renderStats(); renderResult();
}

registerActions({
  openEx: a => openPractice(a.dataset.ex),
  closePractice: () => closePractice(),
  nextBlock: () => { if (PR.session) openBlock(PR.session.idx + 1); },
  pPlay: () => practiceToggle(),
  pB: a => setBpm(PR.bpm + Number(a.dataset.d)),
  pShift: a => { if (Engine.playing && Engine.owner === 'practice') { toast('Pare para mudar o tom.'); return; } PR.shift = clamp(PR.shift + Number(a.dataset.d), -12, 12); refreshLadder(); },
  pSteps: a => { if (Engine.playing && Engine.owner === 'practice') { toast('Pare para mudar a escada.'); return; } PR.steps = clamp(PR.steps + Number(a.dataset.d), 1, 16); refreshLadder(); },
  pMode: a => { if (Engine.playing && Engine.owner === 'practice') Engine.stop(); PR.mode = a.dataset.v; render(); },
  pQ: a => { PR.q = Number(a.dataset.q); $$('#pQual button').forEach(b => b.setAttribute('aria-pressed', String(+b.dataset.q === PR.q))); },
  pSave: () => savePractice(),
  pTimerReset: () => { PR.elapsed = 0; if (PR.t0) PR.t0 = performance.now(); PR.minDirty = false; PR.blockAlerted = false; updateTimer(); },
  saveRec: async () => {
    if (!PR.recBlob || !PR.ex) return;
    const ok = await addRec({ id: 'r' + Date.now(), t: new Date().toISOString(), d: dkey(), ex: PR.ex.id, name: PR.ex.name, key: PR.roots.length ? noteName(PR.roots[0]) : '', mime: PR.recBlob.type, blob: PR.recBlob, score: PR.result && PR.result.score });
    toast(ok ? 'Gravação guardada. Ela aparece em Ajustes.' : 'Não foi possível guardar a gravação.');
  }
});
window.addEventListener('resize', () => { if (PR.roll) { PR.roll.resize(); drawOnce(); } });
export { practiceToggle };
