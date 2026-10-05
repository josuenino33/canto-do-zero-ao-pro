// Gera os ícones PNG do app (sem dependências). Uso: node tools/make-icons.mjs
import { writeFileSync, mkdirSync } from 'node:fs';
import { deflateSync } from 'node:zlib';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const out = join(dirname(fileURLToPath(import.meta.url)), '..', 'icons');
mkdirSync(out, { recursive: true });

const BG = [18, 21, 24], TEAL = [76, 195, 177], TEAL_LT = [127, 217, 202], TEAL_DK = [14, 116, 105], INK = [234, 240, 239];

// distâncias com sinal (negativo = dentro)
const sdRoundRect = (x, y, cx, cy, hw, hh, r) => { const qx = Math.abs(x - cx) - hw + r, qy = Math.abs(y - cy) - hh + r; return Math.hypot(Math.max(qx, 0), Math.max(qy, 0)) + Math.min(Math.max(qx, qy), 0) - r; };
const sdRing = (x, y, cx, cy, r, t) => Math.abs(Math.hypot(x - cx, y - cy) - r) - t;

// cena em coordenadas 0..1; s = escala do desenho dentro do ícone (área segura)
function scene(x, y, s) {
  const u = (x - 0.5) / s + 0.5, v = (y - 0.52) / s + 0.5;
  const layers = [];
  // ondas de som dos dois lados
  for (const [r, col] of [[0.3, TEAL_DK], [0.4, TEAL_DK]]) {
    const ring = sdRing(u, v, 0.5, 0.36, r, 0.018);
    const side = Math.abs(u - 0.5) - 0.2; // só as laterais
    const band = Math.abs(v - 0.36) - 0.13;
    layers.push([Math.max(ring, -side, band), col]);
  }
  // suporte em U, haste e base
  const ring = sdRing(u, v, 0.5, 0.4, 0.19, 0.02);
  layers.push([Math.max(ring, 0.4 - v), INK]);
  layers.push([sdRoundRect(u, v, 0.5, 0.68, 0.02, 0.09, 0.01), INK]);
  layers.push([sdRoundRect(u, v, 0.5, 0.78, 0.13, 0.025, 0.025), INK]);
  // cápsula do microfone com a grade
  const cap = sdRoundRect(u, v, 0.5, 0.36, 0.12, 0.2, 0.12);
  layers.push([cap, TEAL]);
  for (const gy of [0.27, 0.34, 0.41]) layers.push([Math.max(cap + 0.025, Math.abs(v - gy) - 0.012), TEAL_DK]);
  layers.push([Math.max(cap, sdRoundRect(u, v, 0.45, 0.25, 0.03, 0.05, 0.03)), TEAL_LT]);
  return layers;
}

function render(size, { rounded, scale }) {
  const px = Buffer.alloc(size * size * 4), SS = 4;
  for (let j = 0; j < size; j++) for (let i = 0; i < size; i++) {
    let r = 0, g = 0, b = 0, a = 0;
    for (let sj = 0; sj < SS; sj++) for (let si = 0; si < SS; si++) {
      const x = (i + (si + 0.5) / SS) / size, y = (j + (sj + 0.5) / SS) / size;
      const inBg = rounded ? sdRoundRect(x, y, 0.5, 0.5, 0.5, 0.5, 0.22) <= 0 : true;
      if (!inBg) continue;
      let c = BG;
      for (const [d, col] of scene(x, y, scale)) if (d <= 0) c = col;
      r += c[0]; g += c[1]; b += c[2]; a += 255;
    }
    const n = SS * SS, o = (j * size + i) * 4;
    const cov = a / n;
    px[o] = cov ? Math.round(r / (a / 255)) : 0; px[o + 1] = cov ? Math.round(g / (a / 255)) : 0; px[o + 2] = cov ? Math.round(b / (a / 255)) : 0; px[o + 3] = Math.round(cov);
  }
  return png(size, size, px);
}

const CRC = (() => { const t = new Uint32Array(256); for (let n = 0; n < 256; n++) { let c = n; for (let k = 0; k < 8; k++) c = c & 1 ? 0xEDB88320 ^ (c >>> 1) : c >>> 1; t[n] = c >>> 0; } return t; })();
const crc32 = buf => { let c = 0xFFFFFFFF; for (const b of buf) c = CRC[(c ^ b) & 255] ^ (c >>> 8); return (c ^ 0xFFFFFFFF) >>> 0; };
function chunk(type, data) { const len = Buffer.alloc(4); len.writeUInt32BE(data.length); const td = Buffer.concat([Buffer.from(type), data]); const crc = Buffer.alloc(4); crc.writeUInt32BE(crc32(td)); return Buffer.concat([len, td, crc]); }
function png(w, h, rgba) {
  const ihdr = Buffer.alloc(13); ihdr.writeUInt32BE(w, 0); ihdr.writeUInt32BE(h, 4); ihdr[8] = 8; ihdr[9] = 6; ihdr[10] = 0; ihdr[11] = 0; ihdr[12] = 0;
  const raw = Buffer.alloc((w * 4 + 1) * h);
  for (let y = 0; y < h; y++) { raw[y * (w * 4 + 1)] = 0; rgba.copy(raw, y * (w * 4 + 1) + 1, y * w * 4, (y + 1) * w * 4); }
  return Buffer.concat([Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]), chunk('IHDR', ihdr), chunk('IDAT', deflateSync(raw, { level: 9 })), chunk('IEND', Buffer.alloc(0))]);
}

writeFileSync(join(out, 'icon-192.png'), render(192, { rounded: true, scale: 0.86 }));
writeFileSync(join(out, 'icon-512.png'), render(512, { rounded: true, scale: 0.86 }));
writeFileSync(join(out, 'icon-maskable-512.png'), render(512, { rounded: false, scale: 0.68 }));
writeFileSync(join(out, 'apple-touch-icon.png'), render(180, { rounded: false, scale: 0.8 }));
writeFileSync(join(out, 'favicon-32.png'), render(32, { rounded: true, scale: 0.95 }));
console.log('Ícones gerados em', out);
