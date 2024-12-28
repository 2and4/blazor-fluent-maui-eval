self.addEventListener('install', event => self.skipWaiting());
self.addEventListener('activate', event => event.waitUntil(clients.claim()));
self.addEventListener('fetch', (event) => {
    const request = event.request;
    const url = new URL(request.url);
    const path = url.pathname;
    if (path.endsWith('.js') || path.endsWith('.map') || path.endsWith('.css') || path.endsWith('.html') || path.endsWith('.wasm') || path.endsWith('.dat')) {
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
            fetch(modifiedRequest).then((response) => {
                if (response.ok) {
                    const modifiedHeaders = new Headers(response.headers);
                    modifiedHeaders.set('Content-Encoding', 'br');
                    return new Response(response.body, {
                        status: response.status,
                        statusText: response.statusText,
                        headers: modifiedHeaders,
                    });
                }
                return fetch(request);
            })
        );
    } else {
        event.respondWith(fetch(request));
    }
});