// Junta todos os módulos do currículo e indexa lições e exercícios.
// Cada módulo é carregado separadamente: se um arquivo tiver erro, os outros continuam funcionando.
import { normEx } from './schema.js';

export const MODULE_IDS = ['corpo', 'saude', 'sovt', 'afin', 'resso', 'ouvido', 'grave', 'regis', 'agudo', 'dinam', 'ritmo', 'agil', 'harm', 'estilo', 'interp'];

const loaded = await Promise.allSettled(MODULE_IDS.map(id => import(`./${id}.js`)));
export const PROBLEMS = [];
export const MODULES = [];
loaded.forEach((r, i) => {
  if (r.status === 'fulfilled' && r.value && r.value.default) MODULES.push(r.value.default);
  else PROBLEMS.push(`Módulo "${MODULE_IDS[i]}" não carregou: ${r.reason && r.reason.message ? r.reason.message : 'arquivo ausente'}`);
});

export const MOD = {}, LES = {}, EX = {}, EXLIST = [];
MODULES.forEach((m, mi) => {
  MOD[m.id] = m; m.idx = mi + 1; m.exList = [];
  m.lessons.forEach((l, li) => {
    l.module = m; l.idx = li + 1; LES[l.id] = l;
    l.ex = l.ex.map(raw => {
      const { ex, problems } = normEx(raw);
      PROBLEMS.push(...problems);
      ex.lesson = l; ex.module = m;
      EX[ex.id] = ex; EXLIST.push(ex); m.exList.push(ex);
      return ex;
    });
  });
});
if (PROBLEMS.length) console.warn('Currículo com problemas:', PROBLEMS);

export const TOTAL_EX = EXLIST.length;
