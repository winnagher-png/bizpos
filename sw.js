// BizPOS Service Worker — NETWORK ALWAYS FIRST, NO CACHING OF APP
// This ensures every device always loads the latest version

const CACHE = 'bizpos-static-v1';

// Only cache Firebase and external scripts, NEVER the app itself
const STATIC = [
  'https://www.gstatic.com/firebasejs/9.23.0/firebase-app-compat.js',
  'https://www.gstatic.com/firebasejs/9.23.0/firebase-database-compat.js',
];

self.addEventListener('install', e => {
  self.skipWaiting();
  e.waitUntil(
    caches.open(CACHE).then(c => c.addAll(STATIC)).catch(()=>{})
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))
    ).then(()=>self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  const url = e.request.url;
  
  // NEVER cache index.html or bizpos pages — always network
  if(url.includes('winnagher-png.github.io')) {
    e.respondWith(
      fetch(e.request, {cache: 'no-store'}).catch(() =>
        caches.match(e.request)
      )
    );
    return;
  }
  
  // For Firebase/external scripts — cache first
  if(STATIC.some(s=>url.includes(s))){
    e.respondWith(
      caches.match(e.request).then(cached =>
        cached || fetch(e.request).then(res => {
          caches.open(CACHE).then(c=>c.put(e.request,res.clone()));
          return res;
        })
      )
    );
    return;
  }
  
  // Everything else — network first
  e.respondWith(fetch(e.request).catch(()=>caches.match(e.request)));
});
