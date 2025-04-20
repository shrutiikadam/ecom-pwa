const CACHE_NAME = 'ecom-cache-v1';
const CACHE_URLS = [
  '/',
  '/index.html',
  '/manifest.json',
  '/logo192.png',
  '/logo512.png',
  // Add other static assets and resources you want to cache
];

// Install event: caches assets during the first install
self.addEventListener('install', (e) => {
  console.log('[Service Worker] Installed');
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('[Service Worker] Caching all assets');
      return cache.addAll(CACHE_URLS);  // Add all URLs to the cache
    })
  );
});

// Activate event: cleanup old caches when service worker is updated
self.addEventListener('activate', (e) => {
  console.log('[Service Worker] Activated');
  const cacheWhitelist = [CACHE_NAME];
  e.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (!cacheWhitelist.includes(cacheName)) {
            console.log('[Service Worker] Deleting old cache: ', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// Fetch event: Serve cached assets or fetch new ones
self.addEventListener('fetch', (e) => {
  console.log('[Service Worker] Fetching', e.request.url);
  e.respondWith(
    caches.match(e.request).then((response) => {
      // Return cached response if available, else fetch from network
      return response || fetch(e.request).then((networkResponse) => {
        // Optionally cache the dynamic responses (e.g. API calls)
        if (networkResponse && networkResponse.status === 200) {
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(e.request, networkResponse.clone());
          });
        }
        return networkResponse;
      });
    })
  );
});
