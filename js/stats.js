// Estatísticas derivadas dos registros, metas de cada exercício, nível e a aula do dia.
import { Store } from './store.js';
import { MODULES, MOD, EX, EXLIST, TOTAL_EX } from './curriculum/index.js';
import { METRICS } from './curriculum/schema.js';
import { baseOf, noteName, voiceOf, ladder } from './music.js';
import { dkey, addDays, mondayOf, clamp, hash, rng, LS } from './util.js';

export const QUAL = [null, 'Forçado', 'Tenso', 'Ok, com falhas', 'Solto', 'Solto e afinado'];
export const STATUS_LABEL = { novo: 'Novo', pratica: 'Em prática', dominado: 'Dominado' };

// A meta concreta de um exercício para esta voz, como comparar e como mostrar os valores.
export function metric(e, perfil = Store.perfil) {
  const g = e.goal, M = METRICS[g.m], base = baseOf(perfil);
  const out = { m: g.m, label: M.label, short: M.short, lower: false, goal: g.v, fmt: v => String(v), input: 'number' };
  if (g.m === 'afin') { out.fmt = v => `${v}/100`; out.min = 0; out.max = 100; }
  else if (g.m === 'top') { out.goal = base.comfHigh + g.v; out.fmt = v => noteName(v); out.input = 'note'; }
  else if (g.m === 'low') { out.goal = base.comfLow - g.v; out.fmt = v => noteName(v); out.input = 'note'; out.lower = true; }
  else if (g.m === 'sec') { out.fmt = v => `${v} s`; out.min = 1; out.max = 300; }
  else if (g.m === 'bpm') { out.fmt = v => `${v} bpm`; out.min = 30; out.max = 260; }
  else if (g.m === 'rep') { out.fmt = v => `${v} ${v === 1 ? 'treino bom' : 'treinos bons'}`; out.input = 'none'; }
  out.meets = v => v != null && v > 0 && (out.lower ? v <= out.goal : v >= out.goal);
  out.better = (a, b) => b == null || b <= 0 ? true : out.lower ? a < b : a > b;
  return out;
}

let cache = { ver: -1, val: null };
export function stats() {
  if (cache.ver === Store.ver && cache.val) return cache.val;
  const all = Store.logs.filter(e => e && e.t).slice().sort((a, b) => a.t < b.t ? -1 : 1);
  const ex = {}, days = {};
  const mets = {};
  for (const e of all) {
    days[e.d] = (days[e.d] || 0) + (Number(e.min) || 0);
    const X = EX[e.ex]; if (!X) continue;
    const mt = mets[e.ex] || (mets[e.ex] = metric(X));
    const s = ex[e.ex] || (ex[e.ex] = { n: 0, best: null, last: null, lastQ: 0, lastAt: '', lastD: '', mins: 0, hist: [], good: 0, mastered: false, masteredAt: '', verified: false, bestScore: 0 });
    s.n++; s.mins += Number(e.min) || 0; s.last = e.v; s.lastQ = e.q; s.lastAt = e.t; s.lastD = e.d; s.hist.push(e);
    if (e.q >= 4) { s.good++; if (mt.m !== 'rep' && e.v > 0 && mt.better(e.v, s.best)) s.best = e.v; }
    if (mt.m === 'rep') s.best = s.good;
    if (e.pitch && e.pitch.score > s.bestScore) s.bestScore = e.pitch.score;
    const ok = mt.m === 'rep' ? s.good >= mt.goal : e.q >= 4 && mt.meets(e.v);
    if (ok && !s.mastered) { s.mastered = true; s.masteredAt = e.d; }
    if (e.pitch && e.pitch.score >= 80) s.verified = true;
  }
  const today = dkey();
  let streak = 0; { let d = new Date(); if (!days[dkey(d)]) d = addDays(d, -1); while (days[dkey(d)] > 0) { streak++; d = addDays(d, -1); } }
  const totalMin = all.reduce((a, e) => a + (Number(e.min) || 0), 0);
  const mastered = Object.values(ex).filter(s => s.mastered).length;
  const wk0 = mondayOf(new Date()), weeks = [];
  for (let i = 11; i >= 0; i--) {
    const ws = addDays(wk0, -7 * i); let m = 0, dd = 0;
    for (let j = 0; j < 7; j++) { const k = dkey(addDays(ws, j)); if (days[k]) { m += days[k]; dd++; } }
    weeks.push({ start: dkey(ws), min: m, days: dd });
  }
  const pitch = all.filter(e => e.pitch && e.pitch.n >= 4);
  const val = { all, ex, days, today, streak, totalMin, mastered, weeks, thisWeek: weeks[weeks.length - 1], pitch, mets };
  cache = { ver: Store.ver, val };
  return val;
}

const LEVELS = [[0, 'Iniciante'], [0.05, 'Básico'], [0.15, 'Intermediário'], [0.35, 'Avançado'], [0.6, 'Profissional']];
export function level(st) {
  const need = LEVELS.map(([f, n]) => [Math.ceil(f * TOTAL_EX), n]);
  let i = 0; for (let k = 0; k < need.length; k++) if (st.mastered >= need[k][0]) i = k;
  const next = need[i + 1];
  return { name: need[i][1], next: next ? next[1] : null, toNext: next ? next[0] - st.mastered : 0, pct: next ? (st.mastered - need[i][0]) / Math.max(1, next[0] - need[i][0]) : 1 };
}
export function exStatus(id, st) { const s = st.ex[id]; return !s ? 'novo' : s.mastered ? 'dominado' : 'pratica'; }

// Andamento inicial sugerido (só muda nos exercícios de agilidade).
export function suggestBpm(e, st) {
  if (e.goal.m !== 'bpm') return e.bpm;
  const s = st.ex[e.id], tg = e.goal.v;
  if (!s || !s.last) return e.bpm;
  if (s.mastered) return clamp(Math.max(s.best || 0, tg), e.bpm, tg + 30);
  if (s.lastQ && s.lastQ <= 2) return clamp(Math.round(s.last * 0.9), 40, tg);
  if (s.best) return clamp(s.best + (s.lastQ >= 4 ? 4 : 0), e.bpm, tg);
  return clamp(s.last, 40, tg);
}
// Nos exercícios de extensão, a escada vai até uma nota acima do seu melhor registro.
export function suggestSteps(e, st) {
  const s = st.ex[e.id], v = voiceOf(Store.perfil);
  if (!s || !s.best || !['top', 'low'].includes(e.goal.m)) return e.steps;
  let n = e.steps;
  for (; n < 14; n++) {
    const roots = ladder(e, v, 0, n);
    if (e.goal.m === 'top' ? Math.max(...roots) + e.span.hi >= s.best + 1 : Math.min(...roots) + e.span.lo <= s.best - 1) break;
  }
  return n;
}

// ---------- aula do dia ----------
export const frontierOf = (modId, st) => MOD[modId].exList.filter(e => !st.ex[e.id]?.mastered);

function genPlan(salt) {
  const st = stats(), P = Store.perfil, M = clamp(Number(P.dailyMin) || 20, 10, 90);
  const R = rng(hash(dkey() + ':' + salt));
  const used = new Set(), blocks = [];
  const pickFrom = (modId, filter = () => true) => {
    if (!MOD[modId]) return null;
    const fr = frontierOf(modId, st).filter(e => !used.has(e.id) && filter(e));
    if (fr.length) {
      // exercício travado há várias sessões dá lugar ao próximo de vez em quando
      const first = fr[0], s = st.ex[first.id];
      const stuck = s && s.n >= 5 && fr.length > 1;
      return fr[(stuck && R() > 0.5) || (fr.length > 1 && R() > 0.7) ? 1 : 0];
    }
    const pool = MOD[modId].exList.filter(e => !used.has(e.id) && filter(e));
    return pool.length ? pool[Math.floor(R() * pool.length)] : null;
  };
  const add = (e, kind, w) => { if (!e) return; used.add(e.id); blocks.push({ ex: e.id, kind, w }); };
  const notCool = e => !e.cool;
  // aquecimento: respiração ou semioclusão
  add(pickFrom(R() > 0.45 ? 'sovt' : 'corpo', notCool) || pickFrom('sovt', notCool), 'Aquecimento', 0.18);
  // afinação todo dia
  let focus = (P.focus || []).filter(id => MOD[id]);
  const tuneMod = focus.includes('ouvido') && R() > 0.5 ? 'ouvido' : 'afin';
  add(pickFrom(tuneMod, notCool), 'Afinação', 0.2);
  focus = focus.filter(id => id !== tuneMod && id !== 'saude');
  if (!focus.length) focus = ['sovt'];
  const off = Math.floor(R() * focus.length);
  const chosen = focus.length <= 2 ? focus : [focus[off % focus.length], focus[(off + 1) % focus.length]];
  if (chosen.length === 1) { add(pickFrom(chosen[0], notCool), 'Foco', 0.26); add(pickFrom(chosen[0], notCool), 'Foco', 0.2); }
  else chosen.forEach(id => add(pickFrom(id, notCool), 'Foco', 0.22));
  // variação a cada dois dias, revisão quando houver algo dominado
  const dayN = Math.floor(Date.now() / 86400000);
  const others = MODULES.map(m => m.id).filter(id => !['saude', tuneMod].includes(id) && !chosen.includes(id));
  if (dayN % 2 === 0 && others.length) add(pickFrom(others[Math.floor(R() * others.length)], notCool), 'Variação', 0.12);
  const rev = Object.entries(st.ex).filter(([id, s]) => s.mastered && !used.has(id) && EX[id] && !EX[id].cool).sort((a, b) => a[1].lastAt < b[1].lastAt ? -1 : 1)[0];
  if (rev) add(EX[rev[0]], 'Revisão', 0.1);
  // desaquecimento no fim
  const cools = EXLIST.filter(e => e.cool);
  if (cools.length) add(cools[Math.floor(R() * cools.length)], 'Desaquecimento', 0.08);
  const tw = blocks.reduce((a, b) => a + b.w, 0);
  for (const b of blocks) { b.min = Math.max(2, Math.round(M * b.w / tw)); delete b.w; }
  return blocks;
}

let planMem = null;
export function resetPlan() { planMem = null; LS.set('plan', null); }
export function getPlan(regen) {
  const today = dkey();
  let p = planMem || LS.get('plan', null);
  const valid = p && p.date === today && Array.isArray(p.blocks) && p.blocks.length && p.blocks.every(b => EX[b.ex]);
  if (!Store.ready) return valid ? p : { date: today, salt: 0, blocks: genPlan(0) };
  if (regen || !valid) {
    const salt = valid ? (p.salt || 0) + 1 : (regen ? 1 : 0);
    p = { date: today, salt, blocks: genPlan(salt) };
    LS.set('plan', p);
  }
  planMem = p;
  return p;
}
export const blockDone = (b, st) => st.all.some(e => e.d === st.today && e.ex === b.ex);
