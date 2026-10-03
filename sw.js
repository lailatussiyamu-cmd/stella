// Stella — service worker untuk mode offline.
// PENTING: setiap kali menambah/mengganti file suara atau mengubah aplikasi,
// naikkan angka versi di bawah ini (misalnya v1 -> v2) supaya tablet mengambil versi baru.
const CACHE = 'stella-v4';

importScripts('audio-list.js');

const CORE = [
  './',
  'index.html',
  'app.js',
  'manifest.webmanifest',
  'audio-list.js',
  'icons/icon-192.png',
  'icons/icon-512.png',
  'icons/icon-maskable-512.png',
  'icons/apple-touch-icon.png',
  'fonts/baloo-2-latin-800-normal.woff2',
  'fonts/plus-jakarta-sans-latin-400-normal.woff2',
  'fonts/plus-jakarta-sans-latin-600-normal.woff2',
  'fonts/plus-jakarta-sans-latin-700-normal.woff2',
  'fonts/plus-jakarta-sans-latin-800-normal.woff2'
];

self.addEventListener('install', (event) => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE);
    await cache.addAll(CORE);
    // File suara: simpan yang ada saja, yang belum ada dilewati.
    await Promise.all((self.STELLA_AUDIO || []).map(async (key) => {
      const url = 'audio/' + key + '.mp3';
      try {
        const res = await fetch(url, { cache: 'no-cache' });
        if (res.ok) await cache.put(url, res);
      } catch (e) { /* belum ada rekaman — pakai suara bawaan */ }
    }));
    self.skipWaiting();
  })());
});

self.addEventListener('activate', (event) => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)));
    await self.clients.claim();
  })());
});

async function rangeResponse(res, range) {
  const buf = await res.clone().arrayBuffer();
  const size = buf.byteLength;
  const m = /bytes=(\d*)-(\d*)/.exec(range);
  let start = m && m[1] !== '' ? parseInt(m[1], 10) : 0;
  let end = m && m[2] !== '' ? parseInt(m[2], 10) : size - 1;
  if (m && m[1] === '' && m[2] !== '') { start = Math.max(0, size - parseInt(m[2], 10)); end = size - 1; }
  if (isNaN(start) || start >= size) return new Response(null, { status: 416, headers: { 'Content-Range': 'bytes */' + size } });
  end = Math.min(end, size - 1);
  return new Response(buf.slice(start, end + 1), {
    status: 206,
    headers: {
      'Content-Type': res.headers.get('Content-Type') || 'audio/mpeg',
      'Content-Range': 'bytes ' + start + '-' + end + '/' + size,
      'Content-Length': String(end - start + 1),
      'Accept-Ranges': 'bytes'
    }
  });
}

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== self.location.origin) return;
  event.respondWith((async () => {
    const cache = await caches.open(CACHE);
    const hit = await cache.match(req, { ignoreSearch: true });
    // Safari/iPad meminta audio per potongan (header Range); jawab dengan 206 dari cache.
    const range = req.headers.get('range');
    if (hit && range) return rangeResponse(hit, range);
    if (hit) return hit;
    try {
      const res = await fetch(req);
      if (res.ok && !res.headers.get('content-range')) cache.put(req, res.clone());
      return res;
    } catch (e) {
      if (req.mode === 'navigate') return (await cache.match('index.html')) || Response.error();
      return Response.error();
    }
  })());
});
