const CACHE_NAME = 'offline-cal-v1';
const ASSETS = [
  '/index.html',
  '/manifest.json',
  'https://cdn-icons-png.flaticon.com/512/747/747310.png'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request))
  );
});