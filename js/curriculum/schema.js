// Definições compartilhadas entre o app e o validador do currículo.

// Graus da escala maior e da menor natural, em semitons a partir da tônica.
export const MAJOR = [0, 2, 4, 5, 7, 9, 11];
export const MINOR = [0, 2, 3, 5, 7, 8, 10];

// eco: o piano toca, depois você repete sozinho · junto: você canta com o piano · livre: sem piano (respiração, relaxamento, texto)
export const MODES = ['eco', 'junto', 'livre'];
// Onde a escada de tons fica dentro da sua extensão confortável.
// low: parte grave · mid: meio · high: parte aguda · top: passa um pouco do agudo confortável · bottom: passa um pouco do grave
export const ZONES = ['low', 'mid', 'high', 'top', 'bottom'];
// up: sobe de meio em meio tom · down: desce · updown: sobe e desce · stay: repete no mesmo tom
export const DIRS = ['up', 'down', 'updown', 'stay'];

// Métricas de cada exercício. A meta (goal.v) é interpretada assim:
//  afin: nota de afinação de 0 a 100 medida pelo microfone
//  top:  semitons acima do seu agudo confortável do primeiro teste de voz
//  low:  semitons abaixo do seu grave confortável do primeiro teste de voz
//  sec:  segundos (fôlego, nota longa)
//  bpm:  andamento da melodia (agilidade)
//  rep:  número de treinos registrados como "Solto" ou melhor
export const METRICS = {
  afin: { label: 'Afinação', short: 'afinação', min: 40, max: 100 },
  top: { label: 'Nota mais aguda livre', short: 'agudo', min: 1, max: 12 },
  low: { label: 'Nota mais grave com som', short: 'grave', min: 1, max: 12 },
  sec: { label: 'Segundos sustentando', short: 'segundos', min: 3, max: 120 },
  bpm: { label: 'Andamento limpo', short: 'bpm', min: 40, max: 240 },
  rep: { label: 'Treinos bons', short: 'treinos', min: 1, max: 20 }
};
export const LEVEL_NAME = { 1: 'Iniciante', 2: 'Intermediário', 3: 'Avançado' };

/*
  Melodia em graus da escala, separados por espaço:
    1 2 3 4 5 6 7   graus; 8 = oitava acima, 9 = 2ª acima da oitava … até 15
    b3  #4          bemol e sustenido
    5,  1'          vírgula = uma oitava abaixo, apóstrofo = uma oitava acima
    5:2  3:0.5      duração em tempos (padrão 1)
    1~8:4           glissando (sirene) do 1 ao 8 em 4 tempos
    r:1             pausa
*/
const TOK = /^(?:(r)|([b#]?)(\d{1,2})([,']*)(?:~([b#]?)(\d{1,2})([,']*))?)(?::(\d+(?:\.\d+)?))?$/;
export function parseMel(str, minor = false, where = '') {
  const problems = [], notes = [], sc = minor ? MINOR : MAJOR;
  const semi = (acc, deg, oct) => {
    const d = deg - 1, up = (oct.match(/'/g) || []).length, down = (oct.match(/,/g) || []).length;
    return sc[d % 7] + 12 * Math.floor(d / 7) + (acc === 'b' ? -1 : acc === '#' ? 1 : 0) + 12 * (up - down);
  };
  for (const tok of String(str || '').trim().split(/\s+/).filter(Boolean)) {
    const m = tok.match(TOK);
    if (!m) { problems.push(`${where}: nota inválida "${tok}"`); continue; }
    const d = m[8] != null ? Number(m[8]) : 1;
    if (!(d > 0 && d <= 16)) problems.push(`${where}: duração inválida em "${tok}"`);
    if (m[1]) { notes.push({ s: null, d }); continue; }
    const deg = Number(m[3]);
    if (deg < 1 || deg > 15) { problems.push(`${where}: grau fora de 1 a 15 em "${tok}"`); continue; }
    const n = { s: semi(m[2] || '', deg, m[4] || ''), d };
    if (m[6] != null) {
      const deg2 = Number(m[6]);
      if (deg2 < 1 || deg2 > 15) problems.push(`${where}: grau fora de 1 a 15 em "${tok}"`);
      else n.g = semi(m[5] || '', deg2, m[7] || '');
    }
    notes.push(n);
  }
  if (!notes.some(n => n.s != null)) problems.push(`${where}: melodia sem notas`);
  return { notes, problems };
}
export const beatsOf = notes => notes.reduce((a, n) => a + n.d, 0);
export function melSpan(notes) {
  const v = []; for (const n of notes) if (n.s != null) { v.push(n.s); if (n.g != null) v.push(n.g); }
  return v.length ? { lo: Math.min(...v), hi: Math.max(...v) } : { lo: 0, hi: 0 };
}
const words = s => Array.isArray(s) ? s.map(String) : String(s || '').trim().split(/\s+/).filter(Boolean);

// Normaliza um exercício (valores padrão e melodias já convertidas) e lista os problemas.
export function normEx(e, where = e.id) {
  const problems = [], warns = [];
  const x = { mode: 'junto', zone: 'mid', dir: 'up', steps: 5, bpm: 80, ...e };
  if (!MODES.includes(x.mode)) problems.push(`${where}: mode inválido "${x.mode}"`);
  if (!ZONES.includes(x.zone)) problems.push(`${where}: zone inválida "${x.zone}"`);
  if (!DIRS.includes(x.dir)) problems.push(`${where}: dir inválido "${x.dir}"`);
  if (!(Number.isInteger(x.steps) && x.steps >= 1 && x.steps <= 16)) problems.push(`${where}: steps deve ser inteiro de 1 a 16`);
  if (!(x.bpm >= 30 && x.bpm <= 220)) problems.push(`${where}: bpm deve ficar entre 30 e 220`);
  if (typeof x.syl !== 'string' || !x.syl.trim()) problems.push(`${where}: falta syl (o que cantar)`);
  const g = x.goal, M = g && METRICS[g.m];
  if (!M) problems.push(`${where}: goal.m deve ser um de ${Object.keys(METRICS).join(', ')}`);
  else if (!(g.v >= M.min && g.v <= M.max)) problems.push(`${where}: goal.v de "${g.m}" deve ficar entre ${M.min} e ${M.max}`);
  else if (g.m === 'bpm' && !(g.v > x.bpm)) problems.push(`${where}: na métrica bpm a meta deve ser maior que o bpm inicial`);
  if (M && g.m === 'top' && x.zone !== 'top') warns.push(`${where}: métrica "top" costuma usar zone "top"`);
  if (M && g.m === 'low' && x.zone !== 'bottom') warns.push(`${where}: métrica "low" costuma usar zone "bottom"`);
  if (x.mode === 'livre') {
    x.notes = []; x.span = { lo: 0, hi: 0 }; x.beats = 0; x.lyr = [];
    if (x.breath != null) {
      if (!Array.isArray(x.breath) || !x.breath.length || !x.breath.every(p => Array.isArray(p) && typeof p[0] === 'string' && p[1] > 0)) problems.push(`${where}: breath deve ser [['fase', segundos], ...]`);
      if (!(Number.isInteger(x.cycles) && x.cycles >= 1 && x.cycles <= 40)) problems.push(`${where}: cycles deve ser inteiro de 1 a 40`);
    }
    if (M && ['afin', 'top', 'low', 'bpm'].includes(g.m)) problems.push(`${where}: exercício livre não mede ${g.m}`);
  } else {
    const p = parseMel(x.mel, !!x.minor, `${where}.mel`); problems.push(...p.problems);
    x.notes = p.notes; x.span = melSpan(p.notes); x.beats = beatsOf(p.notes);
    if (x.span.hi - x.span.lo > 19) warns.push(`${where}: melodia com mais de uma oitava e meia (${x.span.hi - x.span.lo} semitons)`);
    const sung = p.notes.filter(n => n.s != null).length;
    x.lyr = words(x.lyr);
    if (x.lyr.length && x.lyr.length !== sung) problems.push(`${where}: lyr tem ${x.lyr.length} sílabas para ${sung} notas`);
    if (x.acc != null) {
      const a = parseMel(x.acc, !!x.minor, `${where}.acc`); problems.push(...a.problems);
      x.accNotes = a.notes;
      if (Math.abs(beatsOf(a.notes) - x.beats) > 1e-6) problems.push(`${where}: acc dura ${beatsOf(a.notes)} tempos e mel dura ${x.beats}`);
    }
    if (x.breath != null) problems.push(`${where}: breath só vale em exercício livre`);
  }
  return { ex: x, problems, warns };
}
