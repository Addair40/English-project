const staticDevCoffee = "dev-coffee-site-v1";
const assets = [
  "/",
  "/index.html",
  "/css/style.css",
  "/js/app.js",
  "/images/moneda1.jpg",
  "/images/moneda2.jpg",
  "/images/moneda3.jpg",
  "/images/moneda4.jpg",
  "/images/moneda5.jpg",
  "/images/moneda6.jpg",
  "/images/moneda7.jpg",
  "/images/moneda8.jpg",
  "/images/moneda9.jpg"
];

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticDevCoffee).then(cache => {
      cache.addAll(assets);
    })
  );
});

self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request);
    })
  );
});
