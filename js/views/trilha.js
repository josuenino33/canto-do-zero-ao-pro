// Tela: Trilha (currículo completo).
import { registerView, registerActions, renderTab } from '../ui.js';
import { Store } from '../store.js';
import { MODULES, MOD, TOTAL_EX, LES } from '../curriculum/index.js';
import { LEVEL_NAME } from '../curriculum/schema.js';
import { stats, exStatus, metric, STATUS_LABEL } from '../stats.js';
import { esc, LS } from '../util.js';

let selMod = LS.get('selMod', 'corpo');
let filter = LS.get('trilhaFilter', 'all');
const MODE = { eco: 'eco', junto: 'junto', livre: 'livre' };

function render(v) {
  const st = stats(), P = Store.perfil;
  if (!MOD[selMod]) selMod = MODULES[0].id;
  const m = MOD[selMod];
  const lessons = m.lessons.filter(l => filter === 'all' || String(l.level) === filter);
  v.innerHTML = `
  <div class="stack8"><div class="eyebrow">Currículo</div><h1 class="h-page">Trilha</h1>
  <p class="lead">${MODULES.length} módulos, ${Object.keys(LES).length} lições e ${TOTAL_EX} exercícios, do primeiro som ao palco. Um exercício fica dominado quando você registra a meta com a voz "Solta" ou melhor. A ordem dos módulos é uma sugestão: corpo, saúde, voz sem grito e afinação vêm primeiro.</p></div>
  <div class="mods">${MODULES.map(x => { const n = x.exList.length, d = x.exList.filter(e => st.ex[e.id]?.mastered).length; return `
    <button class="mod" data-act="selMod" data-mod="${x.id}" aria-pressed="${x.id === selMod}">
      <span class="k">Módulo ${x.idx}${(P.focus || []).includes(x.id) ? ' · foco' : ''}</span>
      <h3>${esc(x.name)}</h3><p>${esc(x.desc)}</p>
      <div class="meter"><i style="width:${(d / n * 100).toFixed(1)}%"></i></div>
      <div class="foot"><span>${x.lessons.length} lições</span><span>${d}/${n} dominados</span></div>
    </button>`; }).join('')}</div>
  <div class="card pad24 stack24" id="modBody">
    <div class="row between"><div><span class="eyebrow">Módulo ${m.idx}</span><h2 class="h2">${esc(m.name)}</h2></div>
      <div class="seg">${[['all', 'Todas'], ['1', 'Iniciante'], ['2', 'Intermediário'], ['3', 'Avançado']].map(([k, l]) => `<button data-act="lvFilter" data-v="${k}" aria-pressed="${filter === k}">${l}</button>`).join('')}</div></div>
    ${lessons.length ? lessons.map(l => `
    <section class="lesson" id="l-${l.id}">
      <header><span class="eyebrow">Lição ${l.idx} · ${LEVEL_NAME[l.level] || ''}</span><h3>${esc(l.name)}</h3><p class="goal">${esc(l.goal)}</p></header>
      <details class="th" ${l.idx === 1 ? 'open' : ''}><summary>Aula completa</summary>
        <div class="theory">
          ${l.text.map(p => `<p>${esc(p)}</p>`).join('')}
          <h4>Como estudar</h4><ol class="steps">${l.steps.map(t => `<li>${esc(t)}</li>`).join('')}</ol>
          <h4>Erros comuns</h4><ul class="tips">${l.mistakes.map(t => `<li>${esc(t)}</li>`).join('')}</ul>
          <h4>Dicas</h4><ul class="tips">${l.tips.map(t => `<li>${esc(t)}</li>`).join('')}</ul>
          ${l.listen && l.listen.length ? `<h4>Para ouvir</h4><ul class="tips">${l.listen.map(t => `<li>${esc(t)} · <a href="https://www.youtube.com/results?search_query=${encodeURIComponent(t.split('(')[0].replace('—', ' '))}" target="_blank" rel="noopener">buscar no YouTube</a></li>`).join('')}</ul>` : ''}
        </div>
      </details>
      <div class="exlist">${l.ex.map(e => { const s = st.ex[e.id], status = exStatus(e.id, st), mt = metric(e); return `
        <div class="exrow">
          <div class="minw stack2"><div class="row gap8"><span class="t">${esc(e.name)}</span><span class="pill ${status}">${STATUS_LABEL[status]}</span>${s && s.verified ? '<span class="pill plain good">afinação confirmada</span>' : ''}</div>
            <div class="d">${esc(e.desc)}</div><div class="stp">${e.mode === 'livre' ? '' : 'cante '}"${esc(e.syl)}" · ${MODE[e.mode]}${e.drone ? ' · bordão' : ''}${e.cool ? ' · desaquecimento' : ''}</div></div>
          <div class="bp">${mt.m === 'rep' ? `<b>${s ? s.good : 0}</b> / ${mt.goal} bons` : s && s.best != null ? `<b>${esc(mt.fmt(s.best))}</b><br>meta ${esc(mt.fmt(mt.goal))}` : `meta <b>${esc(mt.fmt(mt.goal))}</b>`}</div>
          <button class="btn sm ${status === 'novo' ? 'primary' : ''}" data-act="openEx" data-ex="${e.id}">Treinar</button>
        </div>`; }).join('')}</div>
    </section>`).join('') : '<p class="muted">Nenhuma lição deste nível neste módulo.</p>'}
  </div>`;
}
registerView('trilha', render);
registerActions({
  selMod: a => { selMod = a.dataset.mod; LS.set('selMod', selMod); renderTab(); document.getElementById('modBody')?.scrollIntoView({ behavior: 'smooth', block: 'start' }); },
  lvFilter: a => { filter = a.dataset.v; LS.set('trilhaFilter', filter); renderTab(); }
});
