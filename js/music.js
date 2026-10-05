// Notas, frequências, tipos de voz, a escada de tons de cada exercício e a linha do tempo que o piano toca.

const PT = ['Dó', 'Dó#', 'Ré', 'Ré#', 'Mi', 'Fá', 'Fá#', 'Sol', 'Sol#', 'Lá', 'Lá#', 'Si'];
const EN = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
const NS = { style: 'pt', oct: 0, a4: 440 };

// noteStyle: 'pt' (Dó Ré Mi) ou 'en' (C D E) · octStyle: 'int' (dó central = Dó4) ou 'fr' (dó central = Dó3)
export function setNotation({ noteStyle, octStyle, a4 } = {}) {
  NS.style = noteStyle === 'en' ? 'en' : 'pt'; NS.oct = octStyle === 'fr' ? -1 : 0; NS.a4 = a4 || 440;
}
export const pc = m => ((Math.round(m) % 12) + 12) % 12;
export const isBlack = m => [1, 3, 6, 8, 10].includes(pc(m));
export const keyName = m => (NS.style === 'en' ? EN : PT)[pc(m)];
export const noteName = m => keyName(m) + (Math.floor(Math.round(m) / 12) - 1 + NS.oct);
export const hz = m => NS.a4 * 2 ** ((m - 69) / 12);
export const midiOf = f => 69 + 12 * Math.log2(f / NS.a4);
export const semis = n => `${Math.abs(n)} ${Math.abs(n) === 1 ? 'semitom' : 'semitons'}`;
export const centsTxt = c => `${c > 0 ? '+' : c < 0 ? '−' : ''}${Math.abs(Math.round(c))}`;

// Extensões de referência (notas MIDI) de cantores treinados. Servem só de comparação.
export const VOICE_TYPES = {
  baixo: { name: 'Baixo', low: 40, high: 64 },
  baritono: { name: 'Barítono', low: 43, high: 67 },
  tenor: { name: 'Tenor', low: 48, high: 72 },
  contralto: { name: 'Contralto', low: 53, high: 77 },
  mezzo: { name: 'Mezzo-soprano', low: 57, high: 81 },
  soprano: { name: 'Soprano', low: 60, high: 84 }
};

// Classificação provável a partir do teste. O grave pesa mais: em quem está começando o agudo ainda é curto.
export function guessType(low, high) {
  let best = 'baritono', bd = 1e9;
  for (const [id, T] of Object.entries(VOICE_TYPES)) {
    const d = Math.abs(low - T.low) + 0.5 * Math.max(0, high - T.high) + 0.3 * Math.max(0, T.high - 10 - high);
    if (d < bd) { bd = d; best = id; }
  }
  return best;
}

// Zona confortável sugerida a partir das notas extremas medidas.
export const comfortFrom = (low, high) => {
  const cl = low + 2, ch = Math.max(cl + 7, high - 2);
  return { comfLow: cl, comfHigh: ch };
};

// Voz sem teste: usa o tipo escolhido (ou barítono) com uma zona conservadora.
export function defaultVoice(type) {
  const T = VOICE_TYPES[type] || VOICE_TYPES.baritono;
  return { low: T.low + 2, high: T.high - 5, head: null, comfLow: T.low + 3, comfHigh: T.high - 7, type: VOICE_TYPES[type] ? type : 'baritono', measured: false };
}
export const voiceOf = perfil => (perfil.voice && perfil.voice.comfLow != null ? perfil.voice : defaultVoice(perfil.voiceType));
// Referência fixa para as metas de extensão: a zona confortável do primeiro teste.
export const baseOf = perfil => perfil.voiceBase || voiceOf(perfil);

// Tônicas de cada repetição do exercício, dentro da zona confortável.
export function ladder(e, voice, shift = 0, steps = e.steps) {
  const n = Math.max(1, steps | 0);
  const rMin = voice.comfLow - e.span.lo, rMax = Math.max(rMin, voice.comfHigh - e.span.hi);
  let a, b;
  switch (e.zone) {
    case 'low': a = rMin; b = rMin + n - 1; break;
    case 'high': b = rMax; a = rMax - n + 1; break;
    case 'top': a = rMax - Math.ceil(n / 2) + 1; b = a + n - 1; break;
    case 'bottom': b = rMin + Math.ceil(n / 2) - 1; a = b - n + 1; break;
    default: { const c = Math.round((rMin + rMax) / 2); a = c - Math.floor((n - 1) / 2); b = a + n - 1; }
  }
  // em zonas estreitas a escada não passa do limite (exceto nos exercícios de extensão)
  if (e.zone !== 'top' && b > rMax && a > rMin) { const over = Math.min(b - rMax, a - rMin); a -= over; b -= over; }
  if (e.zone !== 'bottom' && a < rMin && b < rMax) { const under = Math.min(rMin - a, rMax - b); a += under; b += under; }
  a += shift; b += shift;
  if (e.dir === 'stay') {
    const r = e.zone === 'low' || e.zone === 'bottom' ? a : e.zone === 'high' || e.zone === 'top' ? b : Math.round((a + b) / 2);
    return Array(n).fill(r);
  }
  const up = Array.from({ length: b - a + 1 }, (_, i) => a + i);
  if (e.dir === 'down') return up.reverse();
  if (e.dir === 'updown') return [...up, ...up.slice(0, -1).reverse()];
  return up;
}

const triad = (root, minor) => [root - 12, root, root + (minor ? 3 : 4), root + 7];

/*
  Linha do tempo de um exercício, em tempos. Cada repetição:
    eco:   acorde (1) · piano toca a melodia · pausa (1) · você canta · pausa (1)
    junto: acorde (2) · você canta junto
  Eventos: cue (acorde), note (phase 'call' = o piano toca, 'sing' = você canta), acc (o piano acompanha).
*/
export function buildTimeline(e, roots, mode) {
  const ev = [];
  let t = 0;
  roots.forEach((root, rep) => {
    const cue = mode === 'eco' ? 1 : 2;
    ev.push({ type: 'cue', t, d: cue, root, rep, chord: triad(root, e.minor) });
    t += cue;
    const put = (phase, t0) => {
      let u = t0, k = 0;
      e.notes.forEach(n => {
        if (n.s != null) { ev.push({ type: 'note', phase, t: u, d: n.d, m: root + n.s, g: n.g != null ? root + n.g : null, idx: k, rep, root, lyr: e.lyr[k] || '' }); k++; }
        u += n.d;
      });
    };
    if (mode === 'eco') { put('call', t); t += e.beats + 1; }
    put('sing', t);
    if (e.accNotes) { let u = t; e.accNotes.forEach(n => { if (n.s != null) ev.push({ type: 'acc', t: u, d: n.d, m: root + n.s, g: n.g != null ? root + n.g : null, rep }); u += n.d; }); }
    t += e.beats + (mode === 'eco' ? 1 : 0);
  });
  return { ev, beats: t };
}

// Notas mais grave e mais aguda que o exercício vai pedir.
export function rangeOf(e, roots) {
  const lo = Math.min(...roots) + e.span.lo, hi = Math.max(...roots) + e.span.hi;
  return { lo, hi };
}

// Transposição em semitons separada em mudança de tom (−5 a +6) e oitavas.
export function splitKey(k) { let semi = ((k % 12) + 12) % 12; if (semi > 6) semi -= 12; return { semi, oct: (k - semi) / 12 }; }

// Melhor transposição de uma melodia (nota mais grave e mais aguda) para caber na zona confortável.
export function fitSong(lo, hi, voice) {
  const span = hi - lo, room = voice.comfHigh - voice.comfLow, out = [];
  for (let k = -24; k <= 24; k++) {
    const a = lo + k, b = hi + k, up = Math.max(0, b - voice.comfHigh), down = Math.max(0, voice.comfLow - a);
    // passar do agudo pesa o dobro: é ali que nasce o grito
    out.push({ k, over: up + down, cost: 2 * up + down, center: Math.abs((a + b) / 2 - (voice.comfLow + voice.comfHigh) / 2), ...splitKey(k) });
  }
  // primeiro o que cabe (ou passa menos do agudo); depois a menor mudança de tom (oitava inteira conta como "mesmo tom")
  out.sort((x, y) => x.cost - y.cost || Math.abs(x.semi) - Math.abs(y.semi) || x.center - y.center);
  return { span, room, fits: span <= room, best: out[0], options: out.filter(o => o.cost === out[0].cost).slice(0, 4) };
}
