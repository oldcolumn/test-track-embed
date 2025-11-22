// A bare-bones service worker that does nothing

self.addEventListener("install", event => {
  // Skip waiting so it activates immediately (optional)
  self.skipWaiting();
});

self.addEventListener("activate", event => {
  // Claim control of pages immediately (optional)
  self.clients.claim();
});

// No fetch handler, no caching — completely inert
