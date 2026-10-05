// Modo offline: guarda o app no aparelho para abrir sem internet.
// Ao mudar qualquer arquivo do app, aumente VERSION para os aparelhos baixarem a versão nova.
const VERSION = 'ressoar-1.0.0';
const ASSETS = [
  './', 'index.html', 'manifest.webmanifest', 'css/app.css',
  'icons/icon-192.png', 'icons/icon-512.png', 'icons/icon-maskable-512.png', 'icons/apple-touch-icon.png', 'icons/favicon-32.png',
  'js/app.js', 'js/ui.js', 'js/util.js', 'js/music.js', 'js/audio.js', 'js/pitch.js', 'js/roll.js', 'js/store.js', 'js/stats.js', 'js/teacher.js', 'js/ai.js', 'js/charts.js',
  'js/views/hoje.js', 'js/views/trilha.js', 'js/views/treino.js', 'js/views/voz.js', 'js/views/evolucao.js', 'js/views/professor.js', 'js/views/ajustes.js',
  'js/curriculum/index.js', 'js/curriculum/schema.js', 'js/curriculum/helpers.js',
  'js/curriculum/corpo.js', 'js/curriculum/saude.js', 'js/curriculum/sovt.js', 'js/curriculum/afin.js', 'js/curriculum/resso.js',
  'js/curriculum/ouvido.js', 'js/curriculum/grave.js', 'js/curriculum/regis.js', 'js/curriculum/agudo.js', 'js/curriculum/dinam.js',
  'js/curriculum/ritmo.js', 'js/curriculum/agil.js', 'js/curriculum/harm.js', 'js/curriculum/estilo.js', 'js/curriculum/interp.js'
];
const FONTS = 'ressoar-fonts';

self.addEventListener('install', ev => {
  ev.waitUntil(caches.open(VERSION).then(c => c.addAll(ASSETS)));
});
self.addEventListener('activate', ev => {
  ev.waitUntil((async () => {
    for (const k of await caches.keys()) if (k !== VERSION && k !== FONTS) await caches.delete(k);
    await self.clients.claim();
  })());
});
self.addEventListener('message', ev => { if (ev.data === 'skipWaiting') self.skipWaiting(); });

self.addEventListener('fetch', ev => {
  const req = ev.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  // fontes do Google: guarda na primeira vez
  if (url.hostname === 'fonts.googleapis.com' || url.hostname === 'fonts.gstatic.com') {
    ev.respondWith(caches.open(FONTS).then(async c => {
      const hit = await c.match(req);
      const net = fetch(req).then(r => { if (r.ok || r.type === 'opaque') c.put(req, r.clone()); return r; }).catch(() => hit);
      return hit || net;
    }));
    return;
  }
  if (url.origin !== self.location.origin) return; // API do Gemini e outros: direto para a rede
  // arquivos do app: responde do cache e atualiza em segundo plano
  ev.respondWith(caches.open(VERSION).then(async c => {
    const hit = await c.match(req, { ignoreSearch: true }) || (req.mode === 'navigate' ? await c.match('index.html') : null);
    const net = fetch(req).then(r => { if (r.ok) c.put(req, r.clone()); return r; }).catch(() => hit);
    return hit || net;
  }));
});
