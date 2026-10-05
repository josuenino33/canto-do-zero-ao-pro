// Rolo de notas em canvas: as notas-alvo viram barras e a sua voz vira um traço colorido pela afinação.
import { noteName, isBlack, pc } from './music.js';

const css = n => getComputedStyle(document.documentElement).getPropertyValue(n).trim();

export class Roll {
  constructor(canvas, { past = 2.2, future = 4.6, follow = false } = {}) {
    this.cv = canvas; this.g = canvas.getContext('2d');
    this.notes = []; this.trail = []; this.lo = 48; this.hi = 62; this.past = past; this.future = future; this.follow = follow;
    this.ref = null; this.colors(); this.resize();
  }
  colors() {
    this.c = {
      bg: css('--surface'), row: css('--surface-2'), line: css('--line'), ink: css('--ink'), ink2: css('--ink-2'), muted: css('--muted'),
      acc: css('--accent'), accSoft: css('--accent-soft'), accStrong: css('--accent-strong'), good: css('--good'), warn: css('--warn'), crit: css('--crit')
    };
  }
  resize() {
    const r = this.cv.getBoundingClientRect(), dpr = Math.min(2, window.devicePixelRatio || 1);
    this.W = Math.max(200, r.width); this.H = Math.max(120, r.height);
    this.cv.width = Math.round(this.W * dpr); this.cv.height = Math.round(this.H * dpr);
    this.g.setTransform(dpr, 0, 0, dpr, 0, 0);
  }
  setRange(lo, hi) { this.lo = Math.floor(lo) - 2; this.hi = Math.ceil(hi) + 2; if (this.hi - this.lo < 12) { const c = (this.lo + this.hi) / 2; this.lo = Math.floor(c - 6); this.hi = this.lo + 12; } }
  setNotes(notes) { this.notes = notes || []; }
  clearTrail() { this.trail = []; }
  push(t, m, err) { this.trail.push({ t, m, err }); if (this.trail.length > 600) this.trail.splice(0, this.trail.length - 600); }
  // nota-alvo ativa num instante (para colorir o traço)
  targetAt(t) {
    for (const n of this.notes) if (n.phase === 'sing' && t >= n.ts && t <= n.te) return n.g != null ? n.m + (n.g - n.m) * (t - n.ts) / (n.te - n.ts) : n.m;
    return null;
  }

  draw(now) {
    const { g, W, H, c } = this, gut = 46;
    // no modo livre (afinador), a faixa acompanha a voz
    if (this.follow) {
      const recent = this.trail.filter(p => p.m != null && now - p.t < 1.5).map(p => p.m);
      const center = recent.length ? recent.reduce((a, b) => a + b, 0) / recent.length : (this.ref ?? (this.lo + this.hi) / 2);
      const span = 14, lo0 = Math.round(center - span / 2);
      if (Math.abs(lo0 - this.lo) >= 3 || this.hi - this.lo !== span) { this.lo = lo0; this.hi = lo0 + span; }
    }
    const rows = this.hi - this.lo + 1, rh = H / rows;
    const y = m => H - (m - this.lo + 0.5) * rh;
    const span = this.past + this.future, x = t => gut + (t - (now - this.past)) / span * (W - gut);
    g.clearRect(0, 0, W, H);
    g.fillStyle = c.bg; g.fillRect(0, 0, W, H);
    // linhas das notas, como um teclado deitado
    g.font = `600 ${Math.min(11, Math.max(9, rh * 0.8))}px "Instrument Sans", system-ui, sans-serif`; g.textBaseline = 'middle';
    for (let m = this.lo; m <= this.hi; m++) {
      const yy = y(m);
      if (isBlack(m)) { g.fillStyle = c.row; g.fillRect(gut, yy - rh / 2, W - gut, rh); }
      if (pc(m) === 0) { g.strokeStyle = c.line; g.lineWidth = 1; g.beginPath(); g.moveTo(gut, yy + rh / 2); g.lineTo(W, yy + rh / 2); g.stroke(); }
      const label = !isBlack(m) && (rh >= 15 || [0, 4, 7].includes(pc(m)));
      if (label) { g.fillStyle = pc(m) === 0 ? c.ink : c.muted; g.textAlign = 'right'; g.fillText(noteName(m), gut - 6, yy); }
    }
    if (this.ref != null) { const yy = y(this.ref); g.fillStyle = c.accSoft; g.fillRect(gut, yy - rh / 2, W - gut, rh); }
    // notas-alvo
    const t0 = now - this.past, t1 = now + this.future;
    g.textAlign = 'left';
    for (const n of this.notes) {
      if (n.te < t0 || n.ts > t1) continue;
      const xa = Math.max(gut, x(n.ts)), xb = Math.min(W, x(n.te) - 2), active = now >= n.ts && now < n.te;
      if (xb <= xa) continue;
      if (n.g != null) {
        const ya = y(n.m + (n.g - n.m) * ((xa - x(n.ts)) / Math.max(1, x(n.te) - x(n.ts)))), yb = y(n.m + (n.g - n.m) * ((xb - x(n.ts)) / Math.max(1, x(n.te) - x(n.ts))));
        g.strokeStyle = n.phase === 'sing' ? c.acc : c.muted; g.globalAlpha = n.phase === 'sing' ? (active ? 0.75 : 0.45) : 0.35;
        g.lineWidth = rh * 0.8; g.lineCap = 'round'; g.beginPath(); g.moveTo(xa, ya); g.lineTo(xb, yb); g.stroke(); g.globalAlpha = 1; g.lineCap = 'butt';
        continue;
      }
      const yy = y(n.m), hh = Math.max(4, rh * 0.78), r = Math.min(5, hh / 2);
      g.beginPath(); g.roundRect ? g.roundRect(xa, yy - hh / 2, xb - xa, hh, r) : g.rect(xa, yy - hh / 2, xb - xa, hh);
      if (n.phase === 'sing') { g.fillStyle = active ? c.acc : c.accSoft; g.fill(); g.strokeStyle = c.acc; g.lineWidth = 1.2; g.stroke(); }
      else { g.strokeStyle = c.muted; g.setLineDash([3, 3]); g.lineWidth = 1; g.stroke(); g.setLineDash([]); }
      if (n.lyr && n.phase === 'sing' && xb - xa > 22 && hh >= 10) { g.fillStyle = active ? (css('--accent-ink') || '#fff') : c.accStrong; g.font = `600 ${Math.min(11, hh - 2)}px "Instrument Sans", system-ui, sans-serif`; g.fillText(n.lyr, xa + 5, yy + 0.5); }
    }
    // traço da voz
    g.lineWidth = 3; g.lineCap = 'round'; g.lineJoin = 'round';
    let prev = null;
    for (const p of this.trail) {
      if (p.t < t0 - 0.2) { prev = null; continue; }
      if (p.m == null || p.m < this.lo - 1 || p.m > this.hi + 1) { prev = null; continue; }
      if (prev && p.t - prev.t < 0.15 && Math.abs(p.m - prev.m) < 1.6) {
        const e = p.err; g.strokeStyle = e == null ? c.ink2 : Math.abs(e) <= 25 ? c.good : Math.abs(e) <= 50 ? c.warn : c.crit;
        g.beginPath(); g.moveTo(x(prev.t), y(prev.m)); g.lineTo(x(p.t), y(p.m)); g.stroke();
      }
      prev = p;
    }
    // agora
    const xn = x(now); g.strokeStyle = c.ink2; g.lineWidth = 1.5; g.beginPath(); g.moveTo(xn, 0); g.lineTo(xn, H); g.stroke();
    const last = this.trail[this.trail.length - 1];
    if (last && last.m != null && now - last.t < 0.2 && last.m >= this.lo - 1 && last.m <= this.hi + 1) {
      const e = last.err; g.fillStyle = e == null ? c.ink : Math.abs(e) <= 25 ? c.good : Math.abs(e) <= 50 ? c.warn : c.crit;
      g.beginPath(); g.arc(x(last.t), y(last.m), 5, 0, Math.PI * 2); g.fill();
    }
  }
}
