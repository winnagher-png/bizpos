// BizPos Service Worker
// Caches the app shell for offline use — data always comes from Firebase

const CACHE = 'bizpos-v1';
const SHELL = ['/bizpos/', '/bizpos/index.html'];

self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open(CACHE).then(function(cache) {
      return cache.addAll(SHELL);
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', function(e) {
  e.waitUntil(
    caches.keys().then(function(keys) {
      return Promise.all(keys.filter(function(k){ return k !== CACHE; }).map(function(k){ return caches.delete(k); }));
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', function(e) {
  // Firebase requests — always go to network
  if (e.request.url.includes('firebaseio.com') || 
      e.request.url.includes('firebase') ||
      e.request.url.includes('googleapis')) {
    return;
  }
  
  // App shell — cache first, network fallback
  e.respondWith(
    caches.match(e.request).then(function(cached) {
      var networkFetch = fetch(e.request).then(function(response) {
        if (response.ok) {
          var clone = response.clone();
          caches.open(CACHE).then(function(cache) { cache.put(e.request, clone); });
        }
        return response;
      });
      return cached || networkFetch;
    })
  );
});
