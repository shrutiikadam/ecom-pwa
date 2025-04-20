self.addEventListener('install', (e) => {
    console.log('[Service Worker] Installed');
    e.waitUntil(
      caches.open('ecom-cache').then((cache) => {
        return cache.addAll([
          '/ecom-pwa/',
          '/ecom-pwa/index.html',
          '/ecom-pwa/manifest.json',
          '/ecom-pwa/logo192.png',
          '/ecom-pwa/logo512.png',
        ]);
      })
    );
  });
  
  self.addEventListener('fetch', (e) => {
    e.respondWith(
      caches.match(e.request).then((response) => {
        return response || fetch(e.request);
      })
    );
  });
  