// Ponto de entrada: monta as telas, liga os eventos globais e o modo offline.
import { ui, TABS, setTab, renderTab, registerActions } from './ui.js';
import { initStore, onStore, Store } from './store.js';
import { AudioEng } from './audio.js';
import { PROBLEMS } from './curriculum/index.js';
import { $, toast } from './util.js';
import './views/hoje.js';
import './views/trilha.js';
import { isPracticeOpen, closePractice, practiceToggle, renderStats } from './views/treino.js';
import { vozStop } from './views/voz.js';
import './views/evolucao.js';
import './views/professor.js';
import { applyTheme } from './views/ajustes.js';

registerActions({ tab: (a, ev) => { ev.preventDefault(); if (isPracticeOpen()) closePractice(); if (ui.tab === 'voz' && a.dataset.tab !== 'voz') vozStop(); setTab(a.dataset.tab); } });

// cliques: tudo que tem data-act
document.addEventListener('click', ev => {
  const a = ev.target.closest('[data-act]');
  if (!a || a.disabled) return;
  const fn = ui.actions[a.dataset.act];
  if (fn) fn(a, ev);
});
$('#sheet').addEventListener('click', ev => { if (ev.target.id === 'sheet') closePractice(); });

// teclado: espaço toca/para a sala de treino, Esc fecha
const nativeKey = t => /^(input|textarea|select|summary)$/i.test(t.tagName || '');
document.addEventListener('keyup', ev => { if (ev.code === 'Space' && !nativeKey(ev.target) && isPracticeOpen()) ev.preventDefault(); });
document.addEventListener('keydown', ev => {
  if (ev.key === 'Escape' && isPracticeOpen()) { closePractice(); return; }
  if (nativeKey(ev.target) || !isPracticeOpen()) return;
  if (ev.code === 'Space') { ev.preventDefault(); if (!ev.repeat) practiceToggle(); }
});

// tooltip dos gráficos
(() => {
  const tip = $('#tip');
  document.addEventListener('pointerover', ev => { const t = ev.target.closest && ev.target.closest('[data-tip]'); if (t && t.dataset.tip) { tip.textContent = t.dataset.tip; tip.hidden = false; } });
  document.addEventListener('pointerout', ev => { const t = ev.target.closest && ev.target.closest('[data-tip]'); if (t) tip.hidden = true; });
  document.addEventListener('pointermove', ev => { if (tip.hidden) return; const w = tip.offsetWidth, h = tip.offsetHeight; let x = ev.clientX + 12, y = ev.clientY - h - 10; if (x + w > innerWidth - 8) x = ev.clientX - w - 12; if (y < 8) y = ev.clientY + 16; tip.style.left = x + 'px'; tip.style.top = y + 'px'; });
})();

let rsT = 0;
window.addEventListener('resize', () => { clearTimeout(rsT); rsT = setTimeout(() => { if (ui.tab === 'evolucao') renderTab(); }, 200); });

// instalação (Android/desktop) e atualização do modo offline
window.addEventListener('beforeinstallprompt', ev => { ev.preventDefault(); window.__installPrompt = ev; if (ui.tab === 'ajustes') renderTab(); });
// em localhost o modo offline fica desligado para não atrapalhar o desenvolvimento (use ?sw para testar)
const devHost = /^(localhost|127\.0\.0\.1|\[::1\])$/.test(location.hostname) && !location.search.includes('sw');
if ('serviceWorker' in navigator && location.protocol !== 'file:' && !devHost) {
  navigator.serviceWorker.register('./sw.js').then(reg => {
    const offer = w => {
      const b = $('#update'); if (!b) return; b.hidden = false;
      b.querySelector('button').onclick = () => { w.postMessage('skipWaiting'); };
    };
    if (reg.waiting && navigator.serviceWorker.controller) offer(reg.waiting);
    reg.addEventListener('updatefound', () => {
      const w = reg.installing; if (!w) return;
      w.addEventListener('statechange', () => { if (w.state === 'installed' && navigator.serviceWorker.controller) offer(w); });
    });
  }).catch(err => console.warn('Service worker não registrado', err));
  let reloaded = false;
  navigator.serviceWorker.addEventListener('controllerchange', () => { if (!reloaded) { reloaded = true; location.reload(); } });
}

// início
onStore(() => { applyTheme(); renderTab(); if (isPracticeOpen()) renderStats(); });
const start = TABS.includes(location.hash.slice(1)) ? location.hash.slice(1) : 'hoje';
setTab(start);
initStore().then(() => {
  AudioEng.setVol('guideVol', Store.settings.guideVol); AudioEng.setVol('droneVol', Store.settings.droneVol);
  if (PROBLEMS.length) toast(`Atenção: ${PROBLEMS.length} problemas no currículo (veja o console).`);
});
