import { BrotliDecode } from './js/external/decode.min.js';

self.addEventListener('install', event => self.skipWaiting());
self.addEventListener('activate', event => event.waitUntil(clients.claim()));
self.addEventListener('fetch', (event) => {
    const request = event.request;
    const url = new URL(request.url);
    const path = url.pathname;

    if ((!path.endsWith('.razor.js') && path.endsWith('.js')) || path.endsWith('.css') || path.endsWith('.wasm') || path.endsWith('.dat')) {
        const modifiedRequest = new Request(request.url + '.br', {
            method: request.method,
            headers: request.headers,
            mode: request.mode,
            credentials: request.credentials,
            redirect: request.redirect,
            referrer: request.referrer,
            integrity: request.integrity,
            cache: request.cache,
        });
        event.respondWith(
            fetch(modifiedRequest).then(async (response) => {
                if (response.ok) {
                    const originalResponseBuffer = await response.arrayBuffer();
                    const originalResponseArray = new Int8Array(originalResponseBuffer);
                    const decompressedResponseArray = BrotliDecode(originalResponseArray);

                    let contentType = 'application/octet-stream';
                    if (path.endsWith('.js'))
                        contentType = 'text/javascript';
                    if (path.endsWith('.css'))
                        contentType = 'text/css';
                    if (path.endsWith('.wasm'))
                        contentType = 'application/wasm';

                    return new Response(decompressedResponseArray, { headers: { 'content-type': contentType } });
                }
                return fetch(request);

            }).catch((error) => {
                return fetch(request);
            })
        );
    }
    else {
        event.respondWith(fetch(request));
    }
});
