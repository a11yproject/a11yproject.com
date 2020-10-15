importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js');

workbox.routing.registerRoute(
  /\.(?:js|css)$/,
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: 'static-resources'
  })
);

workbox.routing.setDefaultHandler(
  new workbox.strategies.StaleWhileRevalidate()
);
