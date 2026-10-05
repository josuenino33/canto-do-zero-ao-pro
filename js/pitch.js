// "Professor que ouve": capta o microfone, acha a altura da voz (YIN) e compara com as notas do exercício.
import { AudioEng } from './audio.js';
import { midiOf } from './music.js';
import { mean, sd, median, clamp } from './util.js';

// FFT complexa radix-2 (in place), com tabelas guardadas por tamanho.
const PLANS = {};
function plan(n) {
  if (PLANS[n]) return PLANS[n];
  const bits = Math.log2(n), rev = new Uint32Array(n), cos = new Float64Array(n / 2), sin = new Float64Array(n / 2);
  for (let i = 0; i < n; i++) { let r = 0; for (let b = 0, x = i; b < bits; b++, x >>= 1) r = (r << 1) | (x & 1); rev[i] = r; }
  for (let i = 0; i < n / 2; i++) { cos[i] = Math.cos(2 * Math.PI * i / n); sin[i] = Math.sin(2 * Math.PI * i / n); }
  return (PLANS[n] = { n, rev, cos, sin, ar: new Float64Array(n), ai: new Float64Array(n), br: new Float64Array(n), bi: new Float64Array(n) });
}
function fft(re, im, P, inv) {
  const n = P.n, { rev, cos, sin } = P;
  for (let i = 0; i < n; i++) { const j = rev[i]; if (j > i) { let t = re[i]; re[i] = re[j]; re[j] = t; t = im[i]; im[i] = im[j]; im[j] = t; } }
  for (let size = 2; size <= n; size <<= 1) {
    const half = size >> 1, step = n / size;
    for (let i = 0; i < n; i += size) for (let j = 0, k = 0; j < half; j++, k += step) {
      const wr = cos[k], wi = inv ? sin[k] : -sin[k], a = i + j, b = a + half;
      const tr = re[b] * wr - im[b] * wi, ti = re[b] * wi + im[b] * wr;
      re[b] = re[a] - tr; im[b] = im[a] - ti; re[a] += tr; im[a] += ti;
    }
  }
}

// Frequência fundamental em Hz (ou -1) e a clareza da detecção (0 a 1).
// YIN: a função diferença sai da autocorrelação calculada por FFT (rápido o bastante para celular).
export function yin(x, sr, fMin = 50, fMax = 1100) {
  const N = x.length, tauMin = Math.max(2, Math.floor(sr / fMax)), tauMax = Math.min(Math.floor(sr / fMin), (N >> 1) - 1);
  const W = N - tauMax;
  let M = 1; while (M < N + W) M <<= 1;
  const P = plan(M), { ar, ai, br, bi } = P;
  ar.fill(0); ai.fill(0); br.fill(0); bi.fill(0);
  for (let i = 0; i < W; i++) ar[i] = x[i];
  for (let i = 0; i < N; i++) br[i] = x[i];
  fft(ar, ai, P, false); fft(br, bi, P, false);
  // conj(A)·B → correlação r[τ] = Σ x[i]·x[i+τ]
  for (let k = 0; k < M; k++) { const re = ar[k] * br[k] + ai[k] * bi[k], im = ar[k] * bi[k] - ai[k] * br[k]; ar[k] = re; ai[k] = im; }
  fft(ar, ai, P, true);
  // energia das janelas por somas acumuladas
  const sq = new Float64Array(N + 1); for (let i = 0; i < N; i++) sq[i + 1] = sq[i] + x[i] * x[i];
  const e0 = sq[W], d = new Float64Array(tauMax + 2);
  for (let tau = 1; tau <= tauMax + 1 && tau + W <= N; tau++) d[tau] = Math.max(0, e0 + (sq[tau + W] - sq[tau]) - 2 * ar[tau] / M);
  // diferença média cumulativa normalizada
  let run = 0; const cm = new Float64Array(tauMax + 2); cm[0] = 1;
  for (let tau = 1; tau <= tauMax + 1; tau++) { run += d[tau]; cm[tau] = d[tau] * tau / (run || 1); }
  let tau = -1;
  for (let t = tauMin; t <= tauMax; t++) if (cm[t] < 0.15) { while (t + 1 <= tauMax && cm[t + 1] < cm[t]) t++; tau = t; break; }
  if (tau < 0) return { f: -1, c: 0 };
  const a = cm[tau - 1], b = cm[tau], c = cm[tau + 1], den = a - 2 * b + c;
  const shift = den ? clamp((a - c) / (2 * den), -1, 1) : 0;
  return { f: sr / (tau + shift), c: clamp(1 - b, 0, 1) };
}

export const Mic = {
  ready: false, stream: null, src: null, an: null, sink: null, buf: null, half: null, raf: 0, last: 0,
  gate: 0.012, frames: [], taking: false, recorder: null, chunks: [], mime: '', onFrame: null, hist: [],

  supported() { return !!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia && window.isSecureContext); },

  async open(sens = 0.5) {
    if (this.ready) return true;
    const ctx = AudioEng.ensure(); if (!ctx) throw new Error('Sem áudio neste navegador.');
    this.stream = await navigator.mediaDevices.getUserMedia({ audio: { echoCancellation: false, noiseSuppression: false, autoGainControl: false } });
    this.src = ctx.createMediaStreamSource(this.stream);
    // tira o ronco abaixo das vozes mais graves
    const hp = ctx.createBiquadFilter(); hp.type = 'highpass'; hp.frequency.value = 45; hp.Q.value = 0.7;
    this.an = ctx.createAnalyser(); this.an.fftSize = 4096; this.an.smoothingTimeConstant = 0;
    this.sink = ctx.createGain(); this.sink.gain.value = 0;
    this.src.connect(hp); hp.connect(this.an); this.an.connect(this.sink); this.sink.connect(ctx.destination);
    this.hp = hp;
    this.buf = new Float32Array(this.an.fftSize);
    this.down = ctx.sampleRate > 32000 ? 2 : 1;
    this.half = new Float32Array(this.an.fftSize / this.down);
    this.win = this.an.fftSize / ctx.sampleRate;
    this.setSens(sens);
    this.ready = true; this.hist = [];
    // um temporizador (e não a animação da tela) para a análise seguir mesmo se a janela ficar atrás de outra
    clearInterval(this.raf); this.raf = setInterval(() => { if (this.ready) this.analyze(); }, 30);
    return true;
  },
  close() {
    clearInterval(this.raf);
    try { this.recorder && this.recorder.state !== 'inactive' && this.recorder.stop(); } catch {}
    try { this.stream && this.stream.getTracks().forEach(t => t.stop()); } catch {}
    try { this.src && this.src.disconnect(); this.hp && this.hp.disconnect(); this.an && this.an.disconnect(); this.sink && this.sink.disconnect(); } catch {}
    this.ready = false; this.stream = null; this.recorder = null; this.taking = false;
  },
  // sensibilidade 0..1 → limiar de volume (mais sensível = ouve vozes mais baixas)
  setSens(s) { this.gate = 0.04 * Math.pow(0.1, clamp(s, 0, 1) * 1.4) + 0.0015; },

  analyze() {
    const ctx = AudioEng.ctx; if (!ctx || !this.an) return;
    this.an.getFloatTimeDomainData(this.buf);
    let rms = 0; for (let i = 0; i < this.buf.length; i++) rms += this.buf[i] * this.buf[i];
    rms = Math.sqrt(rms / this.buf.length);
    const t = ctx.currentTime - this.win / 2 - (ctx.baseLatency || 0);
    let m = null, cl = 0;
    if (rms >= this.gate) {
      const k = this.down, h = this.half;
      if (k === 2) for (let i = 0; i < h.length; i++) h[i] = (this.buf[2 * i] + this.buf[2 * i + 1]) * 0.5;
      else h.set(this.buf);
      const r = yin(h, ctx.sampleRate / k);
      if (r.f > 0) { m = midiOf(r.f); cl = r.c; }
    }
    // corrige saltos de oitava isolados (erro comum da detecção) olhando os últimos quadros;
    // o histórico guarda o valor bruto, então um salto de oitava de verdade é aceito depois de 2 ou 3 quadros
    const raw = m;
    if (m != null) {
      const prev = this.hist.filter(x => x != null);
      if (prev.length >= 3) { const med = median(prev.slice(-5)); const j = Math.round((m - med) / 12); if (j !== 0 && Math.abs(m - 12 * j - med) < 1.5) m -= 12 * j; }
    }
    this.hist.push(raw); if (this.hist.length > 8) this.hist.shift();
    const fr = { t, m, r: rms, c: cl };
    if (this.taking) this.frames.push(fr);
    this.onFrame && this.onFrame(fr);
  },

  startTake(record) {
    this.frames = []; this.chunks = []; this.taking = true;
    if (record && window.MediaRecorder && this.stream) {
      const types = ['audio/webm;codecs=opus', 'audio/webm', 'audio/mp4', 'audio/aac'];
      this.mime = types.find(t => MediaRecorder.isTypeSupported && MediaRecorder.isTypeSupported(t)) || '';
      try {
        this.recorder = new MediaRecorder(this.stream, this.mime ? { mimeType: this.mime } : undefined);
        this.recorder.ondataavailable = e => { if (e.data && e.data.size) this.chunks.push(e.data); };
        this.recorder.start(1000);
      } catch { this.recorder = null; }
    }
  },
  stopTake() {
    this.taking = false;
    const frames = this.frames.slice(), rec = this.recorder;
    const blob = new Promise(res => {
      if (!rec || rec.state === 'inactive') return res(null);
      rec.onstop = () => res(this.chunks.length ? new Blob(this.chunks, { type: rec.mimeType || this.mime || 'audio/webm' }) : null);
      try { rec.stop(); } catch { res(null); }
    });
    this.recorder = null;
    return { frames, blob };
  }
};

// Maior trecho de som contínuo (voz ou "sss"), em segundos. Buracos de até 0,25 s não interrompem.
export function longestSound(frames, gate) {
  let best = 0, start = null, lastOn = null;
  for (const f of frames) {
    const on = f.r >= gate * 1.2;
    if (on) { if (start == null || f.t - lastOn > 0.25) start = f.t; lastOn = f.t; best = Math.max(best, lastOn - start); }
  }
  return Math.round(best * 10) / 10;
}

/*
  expected: notas que você devia cantar [{ ts, te, m, g, idx, rep, root }] (horário do relógio do áudio)
  frames:   [{ t, m, r }] do microfone
  lat:      atraso do som até o ouvido (alto-falante), somado ao horário esperado
*/
export function scorePitch(expected, frames, lat = 0) {
  const notes = [], all = [];
  let octFrames = 0, voicedTotal = 0;
  for (const e of expected) {
    const dur = e.te - e.ts;
    const a = e.ts + lat + Math.min(0.2, dur * 0.3), b = e.te + lat - Math.min(0.08, dur * 0.12);
    const F = frames.filter(f => f.t >= a && f.t <= b);
    if (F.length < 2) continue;
    const V = F.filter(f => f.m != null);
    const vr = V.length / F.length;
    const tol = e.g != null ? 50 : 25;
    if (vr < 0.35) { notes.push({ ...pick(e), miss: true, acc: 0, w: dur }); continue; }
    const errs = V.map(f => {
      const target = e.g != null ? e.m + (e.g - e.m) * clamp((f.t - lat - e.ts) / dur, 0, 1) : e.m;
      const raw = (f.m - target) * 100, oct = Math.round(raw / 1200);
      if (oct !== 0) octFrames++;
      return raw - 1200 * oct;
    });
    voicedTotal += V.length;
    const ok = errs.filter(x => Math.abs(x) <= tol).length, near = errs.filter(x => Math.abs(x) > tol && Math.abs(x) <= 2 * tol).length;
    const acc = ((ok + 0.5 * near) / errs.length) * Math.min(1, vr / 0.6);
    const med = median(errs);
    notes.push({ ...pick(e), miss: false, acc, med: Math.round(med), sd: Math.round(sd(errs)), w: dur, t: e.ts });
    all.push(...errs);
  }
  if (notes.length < 2 || !all.length) return null;
  const W = notes.reduce((x, n) => x + n.w, 0);
  const score = Math.round(100 * notes.reduce((x, n) => x + n.acc * n.w, 0) / W);
  const sung = notes.filter(n => !n.miss);
  const res = {
    score, n: notes.length, misses: notes.length - sung.length,
    mean: Math.round(mean(sung.map(n => n.med))), sd: Math.round(mean(sung.map(n => n.sd))),
    within: Math.round(100 * all.filter(x => Math.abs(x) <= 25).length / all.length),
    octave: voicedTotal ? Math.round(100 * octFrames / voicedTotal) : 0
  };
  // por posição na melodia (1ª nota, 2ª nota...)
  const byPos = {};
  for (const n of sung) (byPos[n.idx] || (byPos[n.idx] = { idx: n.idx, d: [], a: [], m: n.m - n.root })).d.push(n.med), byPos[n.idx].a.push(n.acc);
  res.pos = Object.values(byPos).filter(p => p.d.length >= 2).map(p => ({ idx: p.idx, semi: p.m, n: p.d.length, mean: Math.round(mean(p.d)), acc: Math.round(100 * mean(p.a)) })).sort((x, y) => x.idx - y.idx);
  // por tom da escada
  const byRoot = {};
  for (const n of notes) (byRoot[n.rep] || (byRoot[n.rep] = { rep: n.rep, root: n.root, top: -1e9, a: [], w: 0 })), byRoot[n.rep].a.push(n.acc * n.w), byRoot[n.rep].w += n.w, byRoot[n.rep].top = Math.max(byRoot[n.rep].top, n.g != null ? Math.max(n.m, n.g) : n.m);
  res.roots = Object.values(byRoot).sort((x, y) => x.rep - y.rep).map(r => ({ rep: r.rep, root: r.root, top: r.top, score: Math.round(100 * r.a.reduce((x, y) => x + y, 0) / r.w) }));
  // notas mais aguda e mais grave cantadas afinadas (nota com acerto de 60% ou mais)
  const good = sung.filter(n => n.acc >= 0.6);
  res.topOk = good.length ? Math.max(...good.map(n => n.g != null ? Math.max(n.m, n.g) : n.m)) : null;
  res.lowOk = good.length ? Math.min(...good.map(n => n.g != null ? Math.min(n.m, n.g) : n.m)) : null;
  res.series = notes.filter(n => !n.miss).map(n => [n.t, n.med, n.m]);
  return res;
}
const pick = e => ({ idx: e.idx, rep: e.rep, root: e.root, m: e.m, g: e.g });

// Nota extrema sustentada (teste de voz): trechos de pelo menos 0,35 s com a altura estável.
export function stableNotes(frames) {
  const out = [], V = frames.filter(f => f.m != null && f.c >= 0.6);
  for (let i = 0; i < V.length; i++) {
    const seg = []; for (let j = i; j < V.length && V[j].t - V[i].t <= 0.4; j++) seg.push(V[j]);
    if (seg.length < 6 || seg[seg.length - 1].t - seg[0].t < 0.3) continue;
    const ms = seg.map(f => f.m);
    if (sd(ms) < 0.35) out.push(median(ms));
  }
  return out;
}
