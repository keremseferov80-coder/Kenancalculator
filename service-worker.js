const CACHE_NAME = "kenan-calc-v1";
const urlsToCache = [
  "/",
  "/index.html",
  "/manifest.json",
  "/assets/icon-192x192.png",
  "/assets/icon-512x512.png"
];

// Quraşdırma zamanı faylları keşlə
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

// İstək zamanı keşlənmiş versiyanı göstər
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
