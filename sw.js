// EXPO DVT 2026 · cierre: este service worker borra la copia guardada y se da de baja.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    const ks = await caches.keys();
    await Promise.all(ks.map(k => caches.delete(k)));
    await self.registration.unregister();
    const tabs = await self.clients.matchAll({ type: 'window' });
    tabs.forEach(c => c.navigate(c.url).catch(() => {}));
  })());
});
