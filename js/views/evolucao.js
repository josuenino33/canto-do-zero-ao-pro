// Tela: Evolução (gráficos e histórico).
import { registerView, registerActions, renderTab, el } from '../ui.js';
import { Store, deleteLog } from '../store.js';
import { MODULES, EX, EXLIST, TOTAL_EX } from '../curriculum/index.js';
import { stats, level, metric, QUAL } from '../stats.js';
import { metricChartSVG, weeksSVG, heatHTML, scoreTrendSVG, rangeHistorySVG } from '../charts.js';
import { voiceOf, noteName, semis } from '../music.js';
import { esc, fmtMin, fmtDate, toast } from '../util.js';

let evoEx = null, confirmDel = null;

function render(v) {
  const st = stats(), lv = level(st), P = Store.perfil, voice = voiceOf(P), R = Store.ranges;
  const withHist = EXLIST.filter(e => st.ex[e.id] && st.ex[e.id].hist.some(h => h.v > 0) && e.goal.m !== 'rep');
  if (!evoEx || !withHist.some(e => e.id === evoEx)) evoEx = withHist.length ? withHist.slice().sort((a, b) => st.ex[b.id].lastAt < st.ex[a.id].lastAt ? -1 : 1)[0].id : null;
  const recent = st.all.slice(-60).reverse();
  const W = Math.max(320, Math.min(1080, (v.clientWidth || 900) - 44)), halfW = W > 820 ? Math.round((W - 22) / 2) - 2 : W;
  const pr = st.pitch;
  const lastScore = pr.length ? Math.round(pr.slice(-5).reduce((a, e) => a + e.pitch.score, 0) / Math.min(5, pr.length)) : null;
  const gain = R.length >= 2 ? (R[R.length - 1].comfHigh - R[R.length - 1].comfLow) - (R[0].comfHigh - R[0].comfLow) : 0;
  v.innerHTML = `
  <div class="stack8"><div class="eyebrow">Seu histórico</div><h1 class="h-page">Evolução</h1>
  <p class="lead">Tudo aqui sai dos treinos que você registra, das medidas do microfone e dos testes de voz. Seja honesto em "como a voz se sentiu": é isso que separa evolução de esforço.</p></div>
  <div class="tiles">
    <div class="tile"><span class="l">Tempo de canto</span><span class="v">${fmtMin(st.totalMin)}</span><span class="d">${Object.keys(st.days).length} dias com treino · sequência de ${st.streak}</span></div>
    <div class="tile"><span class="l">Afinação recente</span><span class="v">${lastScore != null ? `${lastScore}<span class="vs"> / 100</span>` : '—'}</span><span class="d">${lastScore != null ? 'média das 5 últimas análises do microfone' : 'ligue "Ouvir meu canto" nos treinos'}</span></div>
    <div class="tile"><span class="l">Zona confortável</span><span class="v vsm">${noteName(voice.comfLow)}–${noteName(voice.comfHigh)}</span><span class="d">${P.voice ? `${semis(voice.comfHigh - voice.comfLow)}${gain > 0 ? ` · +${gain} desde o 1º teste` : ''}` : 'faça o teste de voz'}</span></div>
    <div class="tile"><span class="l">Nível</span><span class="v">${lv.name}</span><span class="d">${st.mastered} de ${TOTAL_EX} dominados${lv.next ? ` · faltam ${lv.toNext} para ${lv.next}` : ''}</span><div class="meter mt6"><i style="width:${(lv.pct * 100).toFixed(0)}%"></i></div></div>
  </div>
  ${st.all.length === 0 && !R.length ? `<div class="empty"><b>Seus gráficos aparecem aqui.</b><span>Depois dos primeiros treinos e do teste de voz você vê a sua extensão crescendo, a nota de afinação do microfone, os minutos por semana, o calendário de estudo e a evolução de cada exercício.</span><button class="btn primary" data-act="tab" data-tab="hoje">Ir para a aula de hoje</button></div>` : ''}
  <div class="grid2 even">
    <div class="card"><h3>Extensão vocal</h3><div class="sub">Cada barra é um teste: clara = extensão, forte = zona confortável, tracejado = falsete</div>
      <div class="chart mt12">${R.length ? rangeHistorySVG(R.slice(-14), halfW - 40, 240) : '<p class="muted small pad20">Faça o teste de extensão na aba Voz. Refaça a cada mês para ver a voz crescer.</p>'}</div></div>
    <div class="card"><h3>Afinação medida pelo microfone</h3><div class="sub">Nota de 0 a 100 de cada treino analisado</div>
      <div class="chart mt12">${pr.length ? scoreTrendSVG(pr.slice(-40), halfW - 40, 240) : '<p class="muted small pad20">Ligue "Ouvir meu canto" na sala de treino para medir a sua afinação de verdade.</p>'}</div></div>
  </div>
  <div class="grid2 even">
    <div class="card"><h3>Minutos por semana</h3><div class="sub">Últimas 12 semanas · meta de ${fmtMin(P.dailyMin * P.daysPerWeek)} por semana</div>
      <div class="chart mt12">${weeksSVG(st.weeks, P.dailyMin * P.daysPerWeek, halfW - 40, 220)}</div></div>
    <div class="card"><h3>Calendário de estudo</h3><div class="sub">Últimas 18 semanas, de segunda a domingo</div><div class="mt14">${heatHTML(st.days)}</div></div>
  </div>
  <div class="card">
    <div class="row between"><div><h3>Evolução por exercício</h3><div class="sub">Ponto cheio = voz solta (qualidade 4 ou 5) · ponto vazado = com problemas · linha verde = meta</div></div>
      ${withHist.length ? `<label class="f minw240">Exercício<select id="evoSel">${withHist.map(e => `<option value="${e.id}" ${e.id === evoEx ? 'selected' : ''}>${esc(e.module.name)}: ${esc(e.name)}</option>`).join('')}</select></label>` : ''}</div>
    <div class="chart mt12">${evoEx ? metricChartSVG(st.ex[evoEx].hist, metric(EX[evoEx]), W - 40, 260) : '<p class="muted small pad20">Registre um exercício da trilha com um valor (afinação, nota, segundos ou bpm) para ver a curva aqui.</p>'}</div>
  </div>
  <div class="card"><h3>Progresso por módulo</h3><div class="modprog mt14">${MODULES.map(m => { const n = m.exList.length, d = m.exList.filter(e => st.ex[e.id]?.mastered).length, p = m.exList.filter(e => st.ex[e.id] && !st.ex[e.id].mastered).length; return `
    <div class="mp"><span>${esc(m.name)}</span><div class="meter ${d === n ? 'good' : ''}" data-tip="${esc(`${d} dominados, ${p} em prática, ${n - d - p} novos`)}"><i style="width:${(d / n * 100).toFixed(1)}%"></i></div><span>${d}/${n}</span></div>`; }).join('')}</div></div>
  <div class="card">
    <div><h3>Histórico</h3><div class="sub">Últimos ${recent.length} registros</div></div>
    ${recent.length ? `<div class="tablewrap mt10"><table class="log"><thead><tr><th>Data</th><th>Exercício</th><th>Valor</th><th>Como foi</th><th>Afinação</th><th>Min</th><th>Observação</th><th></th></tr></thead><tbody>
      ${recent.map(e => { const X = EX[e.ex], mt = X ? metric(X) : null; return `<tr><td class="n">${fmtDate(e.d)}</td><td>${esc(X?.name || e.name || 'Treino livre')}</td><td class="n">${mt && mt.m !== 'rep' && e.v ? `<b>${esc(mt.fmt(e.v))}</b>` : '<span class="muted">—</span>'}</td>
        <td><span class="qdot" aria-label="${e.q} de 5">${[1, 2, 3, 4, 5].map(i => `<i class="${i <= e.q ? 'on' : ''}"></i>`).join('')}</span> <span class="small muted">${QUAL[e.q] || ''}</span></td>
        <td class="n">${e.pitch ? `${e.pitch.score}/100` : '<span class="muted">—</span>'}</td><td class="n">${e.min}</td><td class="small muted">${esc(e.note || '')}</td>
        <td>${confirmDel === e.t ? `<span class="confirm">Apagar? <button class="btn sm danger" data-act="delLog" data-t="${esc(e.t)}">Sim</button><button class="btn sm ghost" data-act="cancelDel">Não</button></span>` : `<button class="btn ghost sm" data-act="askDel" data-t="${esc(e.t)}">Apagar</button>`}</td></tr>`; }).join('')}
      </tbody></table></div>` : '<p class="muted small mt10">Nenhum registro ainda.</p>'}
  </div>`;
  el('evoSel')?.addEventListener('change', ev => { evoEx = ev.target.value; renderTab(); });
}
registerView('evolucao', render);
registerActions({
  askDel: a => { confirmDel = a.dataset.t; renderTab(); },
  cancelDel: () => { confirmDel = null; renderTab(); },
  delLog: a => { confirmDel = null; deleteLog(a.dataset.t); toast('Registro apagado.'); }
});
