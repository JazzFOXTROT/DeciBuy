// Bump VERSION on every release, or visitors stay on the old cached version.
var VERSION = "decibuy-v20";
var CORE = ["./", "./index.html", "./manifest.webmanifest", "./icon.svg", "./icon-192.png", "./icon-512.png", "./apple-touch-icon.png"];

self.addEventListener("install", function (e) {
  e.waitUntil(caches.open(VERSION).then(function (c) { return c.addAll(CORE); }));
  self.skipWaiting();
});

self.addEventListener("activate", function (e) {
  e.waitUntil(caches.keys().then(function (keys) {
    return Promise.all(keys.filter(function (k) { return k !== VERSION; }).map(function (k) { return caches.delete(k); }));
  }));
  self.clients.claim();
});

// Network first, so updates show up right away; the cache is the offline fallback (also keeps the fonts).
self.addEventListener("fetch", function (e) {
  if (e.request.method !== "GET") return;
  e.respondWith(
    fetch(e.request).then(function (res) {
      var copy = res.clone();
      caches.open(VERSION).then(function (c) { c.put(e.request, copy); });
      return res;
    }).catch(function () {
      return caches.match(e.request).then(function (hit) { return hit || caches.match("./index.html"); });
    })
  );
});
