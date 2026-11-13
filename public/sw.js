// Increment this when either background video at these URLs changes.
const VIDEO_CACHE_NAME = 'blackbox-shared-background-videos-v1';
const HOME_IMAGE_CACHE_NAME = 'blackbox-home-reused-images-v1';
const VIDEO_PATHS = [
  'videos/gradients/dark/base-gradient-1.mp4',
  'videos/gradients/dark/base-gradient-2.mp4',
];
const HOME_IMAGE_PREFIXES = [
  'neoslide-dark-long',
  'labels-dark-long',
  'video-dark-long',
  'code-dark-long',
  'neoslide-dark',
  'labels-dark',
  'video-dark',
  'code-dark',
  'neoslide-transparent',
  'labels-transparent',
  'video-transparent',
  'code-transparent',
  'gradient-1-grain-0',
  'gradient-2-grain-0',
];
const MAX_CACHED_HOME_IMAGES = 128;
const VIDEO_URLS = new Set(
  VIDEO_PATHS.map((path) => new URL(path, self.registration.scope).href),
);
const inFlight = new Map();

self.addEventListener('install', (event) => {
  event.waitUntil(self.skipWaiting());
});

self.addEventListener('activate', (event) => {
  event.waitUntil((async () => {
    const cacheNames = await caches.keys();
    await Promise.all(
      cacheNames
        .filter((name) => (
          name.startsWith('blackbox-shared-background-videos-') && name !== VIDEO_CACHE_NAME
        ) || (
          name.startsWith('blackbox-home-reused-images-') && name !== HOME_IMAGE_CACHE_NAME
        ))
        .map((name) => caches.delete(name)),
    );
    await self.clients.claim();
  })());
});

self.addEventListener('fetch', (event) => {
  const { request } = event;
  if (request.method !== 'GET') return;

  if (VIDEO_URLS.has(request.url)) {
    event.respondWith(getCachedVideo(request).catch((error) => {
      console.error('Background video cache failed; using the network response.', error);
      return fetch(request);
    }));
  } else if (isHomeImageRequest(request)) {
    event.respondWith(getCachedHomeImage(request).catch((error) => {
      console.error('Home image cache failed; using the network response.', error);
      return fetch(request);
    }));
  }
});

async function getCachedVideo(request) {
  const cache = await caches.open(VIDEO_CACHE_NAME);
  const cached = await cache.match(request.url);
  const range = request.headers.get('range');
  if (cached) return range ? createRangeResponse(cached, range) : cached;

  const key = `${request.url}|${range ?? ''}`;
  let responsePromise = inFlight.get(key);
  if (!responsePromise) {
    responsePromise = fetch(request).then((response) => {
      const cacheableResponse = getCompleteResponse(response);
      if (cacheableResponse) {
        void cache.put(request.url, cacheableResponse).catch((error) => {
          console.warn('Could not persist a shared background video in Cache Storage.', error);
        }).finally(() => {
          if (inFlight.get(key) === responsePromise) inFlight.delete(key);
        });
      } else {
        inFlight.delete(key);
      }
      return response;
    }).catch((error) => {
      inFlight.delete(key);
      throw error;
    });
    inFlight.set(key, responsePromise);
  }

  const response = (await responsePromise).clone();
  return range && response.status === 200
    ? createRangeResponse(response, range)
    : response;
}

function getCompleteResponse(response) {
  if (!response.ok) return null;
  if (response.status === 200) return response.clone();
  if (response.status !== 206) return null;

  const contentRange = /^bytes 0-(\d+)\/(\d+)$/.exec(response.headers.get('content-range') ?? '');
  if (!contentRange || Number(contentRange[1]) + 1 !== Number(contentRange[2])) return null;

  const headers = new Headers(response.headers);
  headers.delete('Content-Range');
  headers.set('Content-Length', contentRange[2]);
  headers.set('Accept-Ranges', 'bytes');
  return new Response(response.clone().body, { status: 200, headers });
}

async function createRangeResponse(response, range) {
  const match = /^bytes=(\d*)-(\d*)$/.exec(range);
  const buffer = await response.arrayBuffer();
  const size = buffer.byteLength;
  if (!match || (!match[1] && !match[2])) {
    return new Response(null, {
      status: 416,
      headers: { 'Content-Range': `bytes */${size}` },
    });
  }

  let start;
  let end;
  if (!match[1]) {
    const suffixLength = Number(match[2]);
    if (suffixLength <= 0) {
      return new Response(null, {
        status: 416,
        headers: { 'Content-Range': `bytes */${size}` },
      });
    }
    start = Math.max(size - suffixLength, 0);
    end = size - 1;
  } else {
    start = Number(match[1]);
    end = match[2] ? Number(match[2]) : size - 1;
  }

  if (start >= size || start > end) {
    return new Response(null, {
      status: 416,
      headers: { 'Content-Range': `bytes */${size}` },
    });
  }
  end = Math.min(end, size - 1);

  const headers = new Headers(response.headers);
  headers.set('Accept-Ranges', 'bytes');
  headers.set('Content-Range', `bytes ${start}-${end}/${size}`);
  headers.set('Content-Length', String(end - start + 1));
  return new Response(buffer.slice(start, end + 1), {
    status: 206,
    statusText: 'Partial Content',
    headers,
  });
}

function isHomeImageRequest(request) {
  if (request.destination !== 'image') return false;

  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return false;

  const source = url.pathname.endsWith('/_image')
    ? new URLSearchParams(url.search).get('href')?.split('?')[0]
    : url.pathname;
  const filename = source?.split('/').pop() ?? '';
  return HOME_IMAGE_PREFIXES.some((prefix) => filename.startsWith(`${prefix}.`));
}

async function getCachedHomeImage(request) {
  const cache = await caches.open(HOME_IMAGE_CACHE_NAME);
  const cached = await cache.match(request.url);
  if (cached) return cached;

  const key = `${request.url}|image`;
  let responsePromise = inFlight.get(key);
  if (!responsePromise) {
    responsePromise = fetch(request).then((response) => {
      if (response.status === 200 && response.ok) {
        void cache.put(request.url, response.clone()).then(async () => {
          const entries = await cache.keys();
          const expired = entries.slice(0, Math.max(0, entries.length - MAX_CACHED_HOME_IMAGES));
          await Promise.all(expired.map((entry) => cache.delete(entry)));
        }).catch((error) => {
          console.warn('Could not persist a reused home image in Cache Storage.', error);
        }).finally(() => {
          if (inFlight.get(key) === responsePromise) inFlight.delete(key);
        });
      } else {
        inFlight.delete(key);
      }
      return response;
    }).catch((error) => {
      inFlight.delete(key);
      throw error;
    });
    inFlight.set(key, responsePromise);
  }

  return (await responsePromise).clone();
}
