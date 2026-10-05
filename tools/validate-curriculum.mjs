// Confere o currículo: melodias, campos obrigatórios, metas e ids únicos.
// Uso: node tools/validate-curriculum.mjs            (todos os módulos)
//      node tools/validate-curriculum.mjs afin sovt  (só alguns)
import { readdirSync } from 'node:fs';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { dirname, join } from 'node:path';
import { normEx } from '../js/curriculum/schema.js';

const dir = join(dirname(fileURLToPath(import.meta.url)), '..', 'js', 'curriculum');
const skip = new Set(['schema.js', 'helpers.js', 'index.js']);
const args = process.argv.slice(2);
const files = readdirSync(dir).filter(f => f.endsWith('.js') && !skip.has(f)).filter(f => !args.length || args.includes(f.replace(/\.js$/, '')));

const errors = [], warns = [], ids = new Map();
let totalL = 0, totalE = 0;
const nonEmpty = (v, min = 1) => Array.isArray(v) && v.filter(x => typeof x === 'string' && x.trim()).length >= min;
const long = (v, n) => Array.isArray(v) && v.every(x => typeof x === 'string' && x.trim().length >= n);

for (const f of files) {
  let m;
  try { m = (await import(pathToFileURL(join(dir, f)).href)).default; }
  catch (e) { errors.push(`${f}: não carregou: ${e.message}`); continue; }
  if (!m || !m.id || !m.name || !m.desc || !Array.isArray(m.lessons) || !m.lessons.length) { errors.push(`${f}: módulo sem id/name/desc/lessons`); continue; }
  if (f !== m.id + '.js') errors.push(`${f}: id do módulo "${m.id}" deve ser igual ao nome do arquivo`);
  let nE = 0;
  for (const l of m.lessons) {
    totalL++;
    const L = `${m.id}/${l.id}`;
    if (!l.id || !l.id.startsWith(m.id + '-')) errors.push(`${L}: id da lição deve começar com "${m.id}-"`);
    if (ids.has(l.id)) errors.push(`${L}: id repetido (também em ${ids.get(l.id)})`); ids.set(l.id, f);
    if (!l.name || !l.goal) errors.push(`${L}: falta name/goal`);
    if (![1, 2, 3].includes(l.level)) errors.push(`${L}: level deve ser 1, 2 ou 3`);
    if (!nonEmpty(l.text, 2)) errors.push(`${L}: text precisa de 2+ parágrafos`);
    else if (!long(l.text, 120)) warns.push(`${L}: parágrafo de text muito curto`);
    if (!nonEmpty(l.steps, 3)) errors.push(`${L}: steps precisa de 3+ passos`);
    if (!nonEmpty(l.mistakes, 2)) errors.push(`${L}: mistakes precisa de 2+ itens`);
    if (!nonEmpty(l.tips, 2)) errors.push(`${L}: tips precisa de 2+ itens`);
    if (l.listen != null && !Array.isArray(l.listen)) errors.push(`${L}: listen deve ser lista`);
    const all = [l.name, l.goal, ...(l.text || []), ...(l.steps || []), ...(l.mistakes || []), ...(l.tips || [])].join(' ');
    if (/—/.test(all)) warns.push(`${L}: evite travessão (—) no texto das aulas`);
    if (!Array.isArray(l.ex) || !l.ex.length) { errors.push(`${L}: sem exercícios`); continue; }
    for (const raw of l.ex) {
      totalE++; nE++;
      const E = `${m.id}/${raw.id}`;
      if (!raw.id || !raw.id.startsWith(m.id + '-')) errors.push(`${E}: id deve começar com "${m.id}-"`);
      if (ids.has(raw.id)) errors.push(`${E}: id repetido (também em ${ids.get(raw.id)})`); ids.set(raw.id, f);
      if (!raw.name || !raw.desc) errors.push(`${E}: falta name/desc`);
      const known = new Set(['id', 'name', 'desc', 'mode', 'mel', 'lyr', 'syl', 'acc', 'minor', 'bpm', 'zone', 'dir', 'steps', 'drone', 'solo', 'goal', 'breath', 'cycles', 'cool']);
      for (const k of Object.keys(raw)) if (!known.has(k)) errors.push(`${E}: campo desconhecido "${k}"`);
      const { problems, warns: w } = normEx(raw, E);
      errors.push(...problems); warns.push(...w);
    }
  }
  console.log(`${m.id.padEnd(8)} ${String(m.lessons.length).padStart(3)} lições  ${String(nE).padStart(4)} exercícios  (${m.name})`);
}
console.log(`\nTotal: ${files.length} módulos, ${totalL} lições, ${totalE} exercícios`);
if (warns.length) console.log(`\nAvisos (${warns.length}):\n` + warns.slice(0, 80).map(w => '  - ' + w).join('\n'));
if (errors.length) { console.log(`\nERROS (${errors.length}):\n` + errors.slice(0, 150).map(w => '  - ' + w).join('\n')); process.exit(1); }
console.log('\nOK: nenhum erro.');
