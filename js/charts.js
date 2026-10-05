// Gráficos em SVG desenhados à mão (sem bibliotecas).
import { esc, fmtDate, fmtMin, addDays, mondayOf, dkey } from './util.js';
import { noteName, isBlack, pc } from './music.js';
import { QUAL } from './stats.js';

export function niceStep(v) { if (v <= 0) return 1; const p = Math.pow(10, Math.floor(Math.log10(v))); const n = v / p; return (n <= 1 ? 1 : n <= 2 ? 2 : n <= 2.5 ? 2.5 : n <= 5 ? 5 : 10) * p; }

// Evolução da métrica de um exercício: ponto cheio = solto (qualidade 4 ou 5), vazado = com problemas.
export function metricChartSVG(hist, mt, W, H) {
  const pts0 = hist.filter(h => h.v > 0);
  if (!pts0.length) return '<p class="muted small pad20">Ainda sem valores registrados neste exercício.</p>';
  const pl = 44, pr = 70, pt = 12, pb = 24, iw = W - pl - pr, ih = H - pt - pb;
  const note = mt.input === 'note', vals = pts0.map(h => h.v);
  let lo = Math.min(...vals, mt.goal), hi = Math.max(...vals, mt.goal);
  if (note) { lo -= 2; hi += 2; } else { const pad = Math.max(2, (hi - lo) * 0.15); lo = Math.max(0, Math.floor(lo - pad)); hi = Math.ceil(hi + pad); }
  if (hi === lo) hi = lo + 1;
  const y = v => pt + ih - (v - lo) / (hi - lo) * ih;
  const x = i => pl + (pts0.length === 1 ? iw / 2 : i / (pts0.length - 1) * iw);
  let g = '';
  if (note) { for (let v = Math.ceil(lo); v <= hi; v++) if (!isBlack(v) && (hi - lo <= 12 || [0, 4, 7].includes(pc(v)))) g += `<line x1="${pl}" x2="${pl + iw}" y1="${y(v)}" y2="${y(v)}" class="gl"/><text class="tk" x="${pl - 6}" y="${y(v) + 4}" text-anchor="end">${noteName(v)}</text>`; }
  else { const step = niceStep((hi - lo) / 4); for (let v = Math.ceil(lo / step) * step; v <= hi; v += step) g += `<line x1="${pl}" x2="${pl + iw}" y1="${y(v)}" y2="${y(v)}" class="gl"/><text class="tk" x="${pl - 6}" y="${y(v) + 4}" text-anchor="end">${Math.round(v * 10) / 10}</text>`; }
  const path = pts0.map((h, i) => `${i ? 'L' : 'M'}${x(i).toFixed(1)},${y(h.v).toFixed(1)}`).join('');
  const pts = pts0.map((h, i) => { const c = h.q >= 4; return `<circle cx="${x(i)}" cy="${y(h.v)}" r="4.5" fill="${c ? 'var(--accent)' : 'var(--surface)'}" stroke="${c ? 'var(--surface)' : 'var(--accent)'}" stroke-width="2"/><circle cx="${x(i)}" cy="${y(h.v)}" r="11" fill="transparent" data-tip="${esc(`${fmtDate(h.d)}: ${mt.fmt(h.v)} · ${QUAL[h.q] || ''}${h.min ? ` · ${h.min} min` : ''}${h.pitch ? ` · afinação ${h.pitch.score}/100` : ''}`)}"/>`; }).join('');
  return `<svg viewBox="0 0 ${W} ${H}" role="img" aria-label="Evolução: ${esc(mt.label)}">${g}
    <line x1="${pl}" x2="${pl + iw}" y1="${y(mt.goal)}" y2="${y(mt.goal)}" stroke="var(--good)" stroke-width="1.5"/>
    <text x="${pl + iw + 6}" y="${y(mt.goal) + 4}" class="tg">meta ${esc(mt.fmt(mt.goal).replace('/100', ''))}</text>
    <path d="${path}" fill="none" stroke="var(--accent)" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"/>${pts}
    <text x="${pl}" y="${H - 6}">${fmtDate(pts0[0].d)}</text><text x="${pl + iw}" y="${H - 6}" text-anchor="end">${fmtDate(pts0[pts0.length - 1].d)}</text>
  </svg>`;
}

// Minutos por semana com a meta.
export function weeksSVG(weeks, goal, W, H) {
  const pl = 34, pr = 40, pt = 14, pb = 26, iw = W - pl - pr, ih = H - pt - pb;
  const mx = niceStep(Math.max(goal, ...weeks.map(w => w.min)) * 1.1 / 4) * 4;
  const y = v => pt + ih - v / mx * ih, band = iw / weeks.length, bw = Math.min(24, band * 0.6);
  let g = '';
  for (let k = 0; k <= 4; k++) { const v = mx * k / 4; g += `<line x1="${pl}" x2="${pl + iw}" y1="${y(v)}" y2="${y(v)}" class="gl"/><text class="tk" x="${pl - 6}" y="${y(v) + 4}" text-anchor="end">${Math.round(v)}</text>`; }
  const bars = weeks.map((w, i) => {
    const cx = pl + band * i + band / 2, top = y(w.min), h = pt + ih - top, cur = i === weeks.length - 1, rr = Math.min(4, h);
    const d = h <= 0 ? '' : `M${cx - bw / 2},${pt + ih}V${top + rr}Q${cx - bw / 2},${top} ${cx - bw / 2 + rr},${top}H${cx + bw / 2 - rr}Q${cx + bw / 2},${top} ${cx + bw / 2},${top + rr}V${pt + ih}Z`;
    return `${d ? `<path d="${d}" fill="${cur ? 'var(--accent)' : 'var(--accent-dim)'}"/>` : ''}<rect x="${cx - band / 2}" y="${pt}" width="${band}" height="${ih}" fill="transparent" data-tip="${esc(`Semana de ${fmtDate(w.start)}: ${fmtMin(w.min)} em ${w.days} ${w.days === 1 ? 'dia' : 'dias'}`)}"/>${i % 2 === 1 || cur ? `<text x="${cx}" y="${H - 8}" text-anchor="middle">${cur ? 'esta' : fmtDate(w.start)}</text>` : ''}`;
  }).join('');
  return `<svg viewBox="0 0 ${W} ${H}" role="img" aria-label="Minutos por semana">${g}
    <line x1="${pl}" x2="${pl + iw}" y1="${y(goal)}" y2="${y(goal)}" stroke="var(--good)" stroke-width="1.5"/><text x="${pl + iw + 6}" y="${y(goal) + 4}" class="tg">meta</text>
    <line x1="${pl}" x2="${pl + iw}" y1="${pt + ih}" y2="${pt + ih}" class="ax"/>${bars}</svg>`;
}

// Calendário das últimas 18 semanas.
export function heatHTML(days) {
  const today = new Date(), start = addDays(mondayOf(today), -7 * 17), tk = dkey(today), cells = [];
  for (let i = 0; i < 18 * 7; i++) {
    const d = addDays(start, i), k = dkey(d), m = days[k] || 0, fut = d > today && k !== tk;
    const l = m <= 0 ? 0 : m < 10 ? 1 : m < 20 ? 2 : m < 40 ? 3 : 4;
    cells.push(`<i data-l="${l}" class="${k === tk ? 'today' : ''} ${fut ? 'fut' : ''}" data-tip="${fut ? '' : esc(`${d.toLocaleDateString('pt-BR', { weekday: 'short', day: '2-digit', month: '2-digit' })}: ${m ? fmtMin(m) : 'sem treino'}`)}"></i>`);
  }
  return `<div class="heatwrap"><div class="heat">${cells.join('')}</div></div>
    <div class="heatlegend"><span>menos</span><i style="background:var(--heat-0)"></i><i style="background:var(--heat-1)"></i><i style="background:var(--heat-2)"></i><i style="background:var(--heat-3)"></i><i style="background:var(--heat-4)"></i><span>mais</span><span class="hl2">(0, até 10, 10–20, 20–40, 40+ min)</span></div>`;
}

// Desvio de cada nota em cents (resultado do microfone).
export function devSVG(series, W, H) {
  const pl = 40, pr = 12, pt = 12, pb = 22, iw = W - pl - pr, ih = H - pt - pb;
  const lim = Math.max(50, Math.min(150, Math.ceil(Math.max(...series.map(s => Math.abs(s[1]))) / 25) * 25));
  const t0 = series[0][0], T = Math.max(1, series[series.length - 1][0] - t0);
  const x = t => pl + (t - t0) / T * iw, y = v => pt + ih / 2 - v / lim * (ih / 2);
  let g = `<rect x="${pl}" y="${y(25)}" width="${iw}" height="${y(-25) - y(25)}" fill="var(--good)" opacity=".1"/>`;
  for (const v of [-lim, -lim / 2, 0, lim / 2, lim]) g += `<line x1="${pl}" x2="${pl + iw}" y1="${y(v)}" y2="${y(v)}" class="${v === 0 ? 'ax' : 'gl'}"/><text class="tk" x="${pl - 6}" y="${y(v) + 4}" text-anchor="end">${v > 0 ? '+' : ''}${Math.round(v)}</text>`;
  const pts = series.map(([t, d, m]) => { const c = Math.max(-lim, Math.min(lim, d)); return `<circle cx="${x(t).toFixed(1)}" cy="${y(c).toFixed(1)}" r="3.4" fill="${Math.abs(d) <= 25 ? 'var(--good)' : Math.abs(d) <= 50 ? 'var(--warn)' : 'var(--crit)'}" data-tip="${esc(`${noteName(m)}: ${d > 0 ? '+' : ''}${d} cents`)}"/>`; }).join('');
  return `<svg viewBox="0 0 ${W} ${H}" role="img" aria-label="Desvio de cada nota em cents">${g}${pts}
    <text x="${pl + 4}" y="${pt + 10}">acima</text><text x="${pl + 4}" y="${H - pb - 4}">abaixo</text><text x="${pl + iw}" y="${H - 6}" text-anchor="end">${Math.round(T)} s</text></svg>`;
}

// Nota de afinação em cada tom da escada.
export function rootsSVG(roots, W, H) {
  const pl = 34, pr = 8, pt = 10, pb = 26, iw = W - pl - pr, ih = H - pt - pb;
  const y = v => pt + ih - v / 100 * ih, band = iw / roots.length, bw = Math.min(30, band * 0.62);
  let g = '';
  for (const v of [0, 50, 100]) g += `<line x1="${pl}" x2="${pl + iw}" y1="${y(v)}" y2="${y(v)}" class="gl"/><text class="tk" x="${pl - 6}" y="${y(v) + 4}" text-anchor="end">${v}</text>`;
  const bars = roots.map((r, i) => {
    const cx = pl + band * i + band / 2, top = y(Math.max(2, r.score));
    const col = r.score >= 80 ? 'var(--good)' : r.score >= 60 ? 'var(--warn)' : 'var(--crit)';
    return `<rect x="${cx - bw / 2}" y="${top}" width="${bw}" height="${pt + ih - top}" rx="3" fill="${col}" opacity=".85" data-tip="${esc(`Tom ${noteName(r.root)} (até ${noteName(r.top)}): ${r.score}/100`)}"/>${roots.length <= 12 || i % 2 === 0 ? `<text x="${cx}" y="${H - 8}" text-anchor="middle">${noteName(r.root)}</text>` : ''}`;
  }).join('');
  return `<svg viewBox="0 0 ${W} ${H}" role="img" aria-label="Afinação em cada tom">${g}${bars}</svg>`;
}

// Nota de afinação do microfone ao longo do tempo.
export function scoreTrendSVG(entries, W, H) {
  const pl = 34, pr = 16, pt = 12, pb = 24, iw = W - pl - pr, ih = H - pt - pb;
  const y = v => pt + ih - v / 100 * ih, x = i => pl + (entries.length === 1 ? iw / 2 : i / (entries.length - 1) * iw);
  let g = '';
  for (const v of [0, 25, 50, 75, 100]) g += `<line x1="${pl}" x2="${pl + iw}" y1="${y(v)}" y2="${y(v)}" class="gl"/><text class="tk" x="${pl - 6}" y="${y(v) + 4}" text-anchor="end">${v}</text>`;
  const path = entries.map((e, i) => `${i ? 'L' : 'M'}${x(i).toFixed(1)},${y(e.pitch.score).toFixed(1)}`).join('');
  const pts = entries.map((e, i) => `<circle cx="${x(i)}" cy="${y(e.pitch.score)}" r="4" fill="var(--accent)" stroke="var(--surface)" stroke-width="2"/><circle cx="${x(i)}" cy="${y(e.pitch.score)}" r="10" fill="transparent" data-tip="${esc(`${fmtDate(e.d)}: ${e.pitch.score}/100 · média ${e.pitch.mean > 0 ? '+' : ''}${e.pitch.mean} cents · oscilação ${e.pitch.sd} cents`)}"/>`).join('');
  return `<svg viewBox="0 0 ${W} ${H}" role="img" aria-label="Afinação medida pelo microfone">${g}<path d="${path}" fill="none" stroke="var(--accent)" stroke-width="2"/>${pts}
    <text x="${pl}" y="${H - 6}">${fmtDate(entries[0].d)}</text><text x="${pl + iw}" y="${H - 6}" text-anchor="end">${fmtDate(entries[entries.length - 1].d)}</text></svg>`;
}

// Extensão vocal em cada teste: barra do grave ao agudo, zona confortável mais forte e falsete tracejado.
export function rangeHistorySVG(ranges, W, H) {
  const pl = 44, pr = 12, pt = 12, pb = 24, iw = W - pl - pr, ih = H - pt - pb;
  const lo = Math.min(...ranges.map(r => r.low)) - 2, hi = Math.max(...ranges.map(r => Math.max(r.high, r.head || 0))) + 2;
  const y = v => pt + ih - (v - lo) / (hi - lo) * ih, band = iw / Math.max(ranges.length, 4), bw = Math.min(26, band * 0.5);
  let g = '';
  for (let v = Math.ceil(lo); v <= hi; v++) if ([0, 7].includes(pc(v)) || (hi - lo <= 16 && !isBlack(v))) g += `<line x1="${pl}" x2="${pl + iw}" y1="${y(v)}" y2="${y(v)}" class="${pc(v) === 0 ? 'ax' : 'gl'}"/><text class="tk" x="${pl - 6}" y="${y(v) + 4}" text-anchor="end">${noteName(v)}</text>`;
  const bars = ranges.map((r, i) => {
    const cx = pl + band * i + band / 2;
    const head = r.head && r.head > r.high ? `<line x1="${cx}" x2="${cx}" y1="${y(r.head)}" y2="${y(r.high)}" stroke="var(--accent)" stroke-width="3" stroke-dasharray="3 3"/>` : '';
    return `${head}<rect x="${cx - bw / 2}" y="${y(r.high)}" width="${bw}" height="${Math.max(2, y(r.low) - y(r.high))}" rx="4" fill="var(--accent-dim)"/>
      <rect x="${cx - bw / 2}" y="${y(r.comfHigh)}" width="${bw}" height="${Math.max(2, y(r.comfLow) - y(r.comfHigh))}" rx="4" fill="var(--accent)"/>
      <rect x="${cx - band / 2}" y="${pt}" width="${band}" height="${ih}" fill="transparent" data-tip="${esc(`${fmtDate(r.d)}: ${noteName(r.low)} a ${noteName(r.high)} · confortável ${noteName(r.comfLow)} a ${noteName(r.comfHigh)}${r.head ? ` · falsete até ${noteName(r.head)}` : ''}`)}"/>
      <text x="${cx}" y="${H - 8}" text-anchor="middle">${fmtDate(r.d)}</text>`;
  }).join('');
  return `<svg viewBox="0 0 ${W} ${H}" role="img" aria-label="Extensão vocal em cada teste">${g}${bars}</svg>`;
}

// Teclado com as faixas da voz marcadas. marks: { low, high, comfLow, comfHigh, head, live }
export function keyboardSVG(from, to, marks = {}, W = 760) {
  from -= pc(from) === 0 ? 0 : (pc(from) <= 4 ? pc(from) : pc(from) - 5); // começa num Dó ou Fá
  const whites = []; for (let m = from; m <= to; m++) if (!isBlack(m)) whites.push(m);
  const kw = W / whites.length, H = Math.max(70, Math.min(110, kw * 4.2)), bh = H * 0.6, bw = kw * 0.62;
  const fill = m => {
    if (marks.live != null && Math.round(marks.live) === m) return 'var(--live)';
    if (marks.comfLow != null && m >= marks.comfLow && m <= marks.comfHigh) return 'var(--accent)';
    if (marks.low != null && m >= marks.low && m <= marks.high) return 'var(--accent-dim)';
    if (marks.head != null && m > (marks.high ?? 0) && m <= marks.head) return 'var(--accent-soft)';
    return null;
  };
  let wk = '', bk = '', lab = '';
  whites.forEach((m, i) => {
    const f = fill(m);
    wk += `<rect x="${i * kw + 0.5}" y="0.5" width="${kw - 1}" height="${H - 1}" rx="3" fill="${f || 'var(--key-w)'}" stroke="var(--key-edge)" data-key="${m}"/>`;
    if (pc(m) === 0) lab += `<text x="${i * kw + kw / 2}" y="${H - 6}" text-anchor="middle" class="kl ${f ? 'on' : ''}">${noteName(m)}</text>`;
  });
  for (let m = from; m <= to; m++) {
    if (!isBlack(m)) continue;
    const i = whites.indexOf(m - 1); if (i < 0) continue;
    const f = fill(m);
    bk += `<rect x="${(i + 1) * kw - bw / 2}" y="0" width="${bw}" height="${bh}" rx="2" fill="${f ? `color-mix(in srgb, ${f} 62%, #000)` : 'var(--key-b)'}" data-key="${m}"/>`;
  }
  return `<svg class="kbd" viewBox="0 0 ${W} ${H}" role="img" aria-label="Teclado com a extensão da voz">${wk}${bk}${lab}</svg>`;
}
