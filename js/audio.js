// Áudio: piano sintetizado, tom suave (para deslizes), bordão, clique e o motor que toca a escada de tons.
import { hz } from './music.js';
import { toast } from './util.js';

export const AudioEng = (() => {
  let ctx = null, master, guideBus, droneBus, fxBus, keepEl = null, drone = null;
  const vols = { guideVol: 0.8, droneVol: 0.5 };
  const live = new Set(); // fontes agendadas, para poder parar na hora

  function ensure() {
    if (!ctx) {
      const AC = window.AudioContext || window.webkitAudioContext;
      if (!AC) return null;
      ctx = new AC({ latencyHint: 'interactive' });
      const comp = ctx.createDynamicsCompressor(); comp.threshold.value = -14; comp.ratio.value = 3; comp.connect(ctx.destination);
      master = ctx.createGain(); master.gain.value = 0.9; master.connect(comp);
      guideBus = ctx.createGain(); guideBus.gain.value = vols.guideVol; guideBus.connect(master);
      droneBus = ctx.createGain(); droneBus.gain.value = vols.droneVol; droneBus.connect(master);
      fxBus = ctx.createGain(); fxBus.gain.value = 0.8; fxBus.connect(master);
    }
    if (ctx.state === 'suspended') ctx.resume();
    return ctx;
  }
  const track = (node, end) => { const it = { node, end }; live.add(it); node.onended = () => live.delete(it); };

  // Piano: parciais senoidais com decaimento próprio; abafa no fim da nota.
  function piano(t, m, dur, vel = 1, bus = guideBus) {
    const f = hz(m), out = ctx.createGain(), relAt = t + Math.max(0.12, dur);
    out.gain.setValueAtTime(1, t); out.gain.setValueAtTime(1, relAt); out.gain.exponentialRampToValueAtTime(0.001, relAt + 0.22);
    out.connect(bus);
    const total = Math.min(3.2, Math.max(0.6, dur + 0.4));
    [[1, 1], [2, 0.5], [3, 0.24], [4, 0.13], [5, 0.06], [6, 0.035]].forEach(([k, a]) => {
      const fk = f * k * (1 + 0.0004 * k * k); if (fk > 9000) return;
      const o = ctx.createOscillator(); o.frequency.value = fk;
      const g = ctx.createGain(), dec = total / (0.7 + 0.45 * k), peak = a * vel * 0.3 * (f < 150 ? 1.25 : 1);
      g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(peak, t + 0.005); g.gain.exponentialRampToValueAtTime(0.0001, t + dec);
      o.connect(g); g.connect(out);
      const end = Math.min(t + dec, relAt + 0.25) + 0.02;
      o.start(t); o.stop(end); track(o, end);
    });
  }
  // Tom suave e sustentado (para deslizes e para quem prefere um guia contínuo).
  function soft(t, m, dur, glideTo, vel = 1, bus = guideBus) {
    const o = ctx.createOscillator(); o.type = 'triangle';
    o.frequency.setValueAtTime(hz(m), t);
    if (glideTo != null) o.frequency.exponentialRampToValueAtTime(hz(glideTo), t + dur);
    const lp = ctx.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = Math.min(5000, hz(Math.max(m, glideTo ?? m)) * 5); lp.Q.value = 0.5;
    const g = ctx.createGain(), peak = 0.3 * vel, end = t + dur;
    g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(peak, t + 0.06);
    g.gain.setValueAtTime(peak, Math.max(t + 0.07, end - 0.06)); g.gain.exponentialRampToValueAtTime(0.0001, end + 0.06);
    o.connect(lp); lp.connect(g); g.connect(bus);
    o.start(t); o.stop(end + 0.08); track(o, end + 0.08);
  }
  function note(t, m, dur, { glideTo = null, timbre = 'piano', vel = 1 } = {}) {
    if (!ctx) return;
    if (glideTo != null || timbre === 'suave') soft(t, m, dur, glideTo, vel);
    else piano(t, m, dur, vel);
  }
  function chord(t, notes, dur, vel = 0.55) { if (!ctx) return; notes.forEach((m, i) => piano(t + i * 0.012, m, dur, vel * (i === 0 ? 0.7 : 1))); }

  // Bordão: tônica e quinta graves, contínuas, que mudam de tom junto com o exercício.
  function droneStart(m, t) {
    if (!ctx) return; droneStop(); t = t ?? ctx.currentTime;
    const g = ctx.createGain(); g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(0.16, t + 0.4);
    const lp = ctx.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 900; lp.Q.value = 0.4;
    lp.connect(g); g.connect(droneBus);
    const oscs = [[-12, 'sawtooth', 0.55], [-5, 'sawtooth', 0.3], [0, 'triangle', 0.35]].map(([iv, type, a]) => {
      const o = ctx.createOscillator(); o.type = type; o.frequency.setValueAtTime(hz(m + iv), t);
      const og = ctx.createGain(); og.gain.value = a; o.connect(og); og.connect(lp); o.start(t);
      return { o, iv };
    });
    drone = { g, oscs, m };
  }
  function droneTo(m, t) { if (!drone) return droneStart(m, t); drone.m = m; for (const { o, iv } of drone.oscs) o.frequency.setTargetAtTime(hz(m + iv), t ?? ctx.currentTime, 0.03); }
  function droneStop() {
    if (!drone || !ctx) return; const d = drone; drone = null; const t = ctx.currentTime;
    d.g.gain.cancelScheduledValues(t); d.g.gain.setValueAtTime(Math.max(0.0001, d.g.gain.value), t); d.g.gain.exponentialRampToValueAtTime(0.0001, t + 0.25);
    for (const { o } of d.oscs) o.stop(t + 0.3);
  }
  const droneOn = () => !!drone;

  function click(t, acc) {
    if (!ctx) return;
    const o = ctx.createOscillator(), g = ctx.createGain(), f = acc ? 1600 : 1150;
    o.frequency.setValueAtTime(f, t); g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(acc ? 0.5 : 0.35, t + 0.002); g.gain.exponentialRampToValueAtTime(0.0001, t + 0.04);
    o.connect(g); g.connect(fxBus); o.start(t); o.stop(t + 0.06); track(o, t + 0.06);
  }
  function chime() { if (!ensure()) return; const t = ctx.currentTime + 0.02; [[76, 0], [83, 0.16]].forEach(([m, d]) => piano(t + d, m, 0.6, 0.6, fxBus)); }
  // Nota de referência avulsa (teclado, afinador).
  function ref(m, dur = 1.4, timbre = 'piano') { if (!ensure()) return; const t = ctx.currentTime + 0.02; if (timbre === 'suave') soft(t, m, dur, null, 1, guideBus); else piano(t, m, dur, 1, guideBus); }
  // Para tudo o que já estava agendado (ao apertar parar).
  function hush() {
    if (!ctx) return; const t = ctx.currentTime;
    for (const it of live) { try { it.node.stop(t + 0.03); } catch {} }
    live.clear();
  }
  function setVol(which, v) { vols[which] = v; if (!ctx) return; (which === 'guideVol' ? guideBus : droneBus).gain.setTargetAtTime(v, ctx.currentTime, 0.02); }
  function outLatency() { if (!ctx) return 0; return (ctx.outputLatency || 0) + (ctx.baseLatency || 0); }

  // iPhone: um áudio HTML silencioso em loop faz o som sair mesmo com a chave de silencioso ligada.
  function silentWav() {
    const n = 4000, buf = new Uint8Array(44 + n), dv = new DataView(buf.buffer);
    const w = (o, s) => { for (let i = 0; i < s.length; i++) buf[o + i] = s.charCodeAt(i); };
    w(0, 'RIFF'); dv.setUint32(4, 36 + n, true); w(8, 'WAVE'); w(12, 'fmt '); dv.setUint32(16, 16, true); dv.setUint16(20, 1, true); dv.setUint16(22, 1, true);
    dv.setUint32(24, 8000, true); dv.setUint32(28, 8000, true); dv.setUint16(32, 1, true); dv.setUint16(34, 8, true); w(36, 'data'); dv.setUint32(40, n, true); buf.fill(128, 44);
    let bin = ''; for (let i = 0; i < buf.length; i++) bin += String.fromCharCode(buf[i]);
    return 'data:audio/wav;base64,' + btoa(bin);
  }
  function keepAlive(on) {
    try {
      if (on) {
        try { if (navigator.audioSession) navigator.audioSession.type = 'play-and-record'; } catch {}
        if (!keepEl) { keepEl = new Audio(silentWav()); keepEl.loop = true; keepEl.setAttribute('playsinline', ''); }
        const p = keepEl.play(); if (p && p.catch) p.catch(() => {});
      } else if (keepEl) keepEl.pause();
    } catch {}
  }
  return { ensure, note, chord, droneStart, droneTo, droneStop, droneOn, click, chime, ref, hush, setVol, outLatency, keepAlive, get ctx() { return ctx; } };
})();

/*
  Motor: toca a linha do tempo de um exercício (music.js buildTimeline).
  opts: bpm, mode ('eco'|'junto'), guide (piano toca a melodia no modo junto), drone, timbre
  Expõe os eventos com horário absoluto (ts, te) para o rolo de notas e para a análise do microfone.
*/
export const Engine = (() => {
  let playing = false, owner = null, evs = [], idx = 0, timer = 0, raf = 0, endT = 0, o = null, wake = null, rep = -1, T0 = 0;
  const subs = new Set();
  const emit = ev => subs.forEach(fn => { try { fn(ev); } catch (e) { console.error(e); } });
  function start(tl, opts, who) {
    const c = AudioEng.ensure(); if (!c) { toast('Este navegador não tem suporte a áudio.'); return false; }
    if (playing) stop();
    o = opts; owner = who;
    const spb = 60 / opts.bpm;
    T0 = c.currentTime + 0.2;
    evs = tl.ev.map(e => ({ ...e, ts: T0 + e.t * spb, te: T0 + (e.t + e.d) * spb })).sort((a, b) => a.ts - b.ts);
    endT = T0 + tl.beats * spb + 0.25;
    idx = 0; rep = -1; playing = true;
    AudioEng.keepAlive(true);
    if (opts.drone) { const first = evs.find(e => e.type === 'cue'); if (first) AudioEng.droneStart(first.root, T0); }
    timer = setInterval(tick, 25); tick(); raf = requestAnimationFrame(draw); reqWake();
    emit({ type: 'start', owner });
    return true;
  }
  function audible(e) {
    if (e.type === 'cue') return true;
    if (e.type === 'acc') return o.accOn !== false;
    if (e.phase === 'call') return true;
    return o.mode === 'junto' && o.guide && !o.hasAcc;
  }
  function play(e) {
    if (!audible(e)) return;
    const dur = e.te - e.ts;
    if (e.type === 'cue') { AudioEng.chord(e.ts, e.chord, Math.min(dur, 1.6) * 0.95); if (o.drone && e.rep > 0) AudioEng.droneTo(e.root, e.ts); }
    else AudioEng.note(e.ts, e.m, dur * 0.97, { glideTo: e.g, timbre: o.timbre, vel: e.type === 'acc' ? 0.85 : 1 });
  }
  function tick() {
    const c = AudioEng.ctx; if (!c || !playing) return;
    while (idx < evs.length && evs[idx].ts < c.currentTime + 0.18) { play(evs[idx]); idx++; }
    if (c.currentTime > endT) stop(true);
  }
  function draw() {
    if (!playing) return;
    const now = AudioEng.ctx.currentTime;
    let r = rep; for (const e of evs) { if (e.type === 'cue' && e.ts <= now) r = e.rep; if (e.ts > now) break; }
    if (r !== rep) { rep = r; const cue = evs.find(e => e.type === 'cue' && e.rep === r); emit({ type: 'rep', rep: r, root: cue ? cue.root : null }); }
    raf = requestAnimationFrame(draw);
  }
  async function reqWake() { try { wake = await navigator.wakeLock?.request('screen'); } catch { wake = null; } }
  function stop(completed = false) {
    if (!playing) return;
    playing = false; clearInterval(timer); cancelAnimationFrame(raf);
    if (!completed) AudioEng.hush();
    AudioEng.droneStop(); AudioEng.keepAlive(false);
    try { wake?.release(); } catch {} wake = null;
    emit({ type: 'stop', owner, completed });
  }
  document.addEventListener('visibilitychange', () => { if (document.visibilityState === 'visible' && playing) reqWake(); });
  return {
    start, stop, on: fn => { subs.add(fn); return () => subs.delete(fn); },
    setOpt: (k, v) => { if (o) o[k] = v; },
    get playing() { return playing; }, get owner() { return owner; }, get events() { return evs; }, get t0() { return T0; }, get end() { return endT; }, get rep() { return rep; }
  };
})();
