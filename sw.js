// Service Worker: Offline-Cache der App-Hülle
var CACHE = "wetter-app-v4";
var ASSETS = ["./", "./index.html", "./manifest.webmanifest",
  "./icons/icon-192.png", "./icons/icon-512.png", "./icons/icon-180.png"];
self.addEventListener("install", function (e) {
  e.waitUntil(caches.open(CACHE).then(function (c) { return c.addAll(ASSETS); }));
});
self.addEventListener("fetch", function (e) {
  var url = new URL(e.request.url);
  if (url.hostname === "api.brightsky.dev" || url.hostname.includes("open-meteo")) return;
  e.respondWith(
    caches.match(e.request).then(function (hit) { return hit || fetch(e.request); })
  );
});
