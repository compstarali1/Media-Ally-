const CACHE = 'ally-player-v2';
const FILES = ["./", "./index.html", "./manifest.json", "./icons/icon-192.png", "./icons/icon-512.png", "./images/transparent/btn-back10-cyan.png", "./images/transparent/btn-back10-violet.png", "./images/transparent/btn-forward-cyan.png", "./images/transparent/btn-forward-violet.png", "./images/transparent/btn-fullscreen-cyan.png", "./images/transparent/btn-fullscreen-violet.png", "./images/transparent/btn-fwd10-cyan.png", "./images/transparent/btn-fwd10-violet.png", "./images/transparent/btn-next-cyan.png", "./images/transparent/btn-next-violet.png", "./images/transparent/btn-pause-cyan.png", "./images/transparent/btn-pause-violet.png", "./images/transparent/btn-play-cyan.png", "./images/transparent/btn-play-violet.png", "./images/transparent/btn-prev-cyan.png", "./images/transparent/btn-prev-violet.png", "./images/transparent/btn-rewind-cyan.png", "./images/transparent/btn-rewind-violet.png", "./images/transparent/btn-rotate-cyan.png", "./images/transparent/btn-rotate-violet.png", "./images/transparent/scifi-glass-panel-1024x640.png"];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)));
  self.skipWaiting();
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys =>
    Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
  ));
  self.clients.claim();
});
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  e.respondWith(
    caches.match(e.request).then(hit => hit || fetch(e.request).catch(() => caches.match('./index.html')))
  );
});
