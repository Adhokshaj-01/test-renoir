const CACHE_NAME = "renoirstudio-cache-v2-dev"; // Update to the new cache name
const STATIC_ASSETS = [
  "/",
  "/index.html",
  "/favicon.ico",
  "/manifest.json",
  "/images/6A.jpg"
];

// Install event: cache the static assets
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(STATIC_ASSETS);
    })
  );
  self.skipWaiting(); // Force the new service worker to activate immediately
});

// Activate event: delete old caches that are not the current CACHE_NAME
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key); // Delete old caches
          }
        })
      )
    )
  );
  self.clients.claim(); // Take control of all clients immediately
});

// Fetch event: serve cached assets or fetch from the network if not cached
self.addEventListener("fetch", (event) => {
  const { request } = event;

  event.respondWith(
    caches.match(request).then((cachedResponse) => {
      return (
        cachedResponse || // Return the cached response if found
        fetch(request).catch(() => {
          // If the request is a navigation (e.g., index.html) and there's no network
          if (request.mode === "navigate") {
            return caches.match("/"); // Serve the cached homepage
          }
        })
      );
    })
  );
});
