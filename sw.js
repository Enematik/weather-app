// Service Worker: Offline-Cache der App-Huelle
var CACHE = "wetter-app-v6";
var ASSETS = ["./", "./index.html", "./manifest.webmanifest",
  "./icons/icon-192.png", "./icons/icon-512.png", "./icons/icon-180.png"];
self.addEventListener("install", function (e) {
  e.waitUntil(caches.open(CACHE).then(function (c) { return c.addAll(ASSETS); }));
});
self.addEventListener("fetch", function (e) {
  var u = new URL(e.request.url);
  if (u.hostname === "api.rainviewer.com" || u.hostname.indexOf("open-meteo") !== -1 ||
      u.hostname.indexOf("basemaps.cartocdn.com") !== -1 || u.hostname.indexOf("tile.openstreetmap") !== -1) return;
  e.respondWith(caches.match(e.request).then(function (hit) { return hit || fetch(e.request); }));
});
