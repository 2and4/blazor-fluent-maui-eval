self.addEventListener('fetch', (event) => {
    const request = event.request;
    const url = new URL(request.url);

    // Check if the request is for a static file
    if (url.pathname.endsWith('.js') || url.pathname.endsWith('.map') || url.pathname.endsWith('.css') || url.pathname.endsWith('.html') || url.pathname.endsWith('.wasm') || url.pathname.endsWith('.dat')) {
        // Clone the request and modify it to request the .br file
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
                // If the .br file is found, return it with the appropriate Content-Encoding header
                if (response.ok) {
                    const modifiedHeaders = new Headers(response.headers);
                    modifiedHeaders.set('Content-Encoding', 'br');
                    return new Response(response.body, {
                        status: response.status,
                        statusText: response.statusText,
                        headers: modifiedHeaders,
                    });
                }
                // If the .br file is not found, fall back to the original request
                return fetch(request);
            })
        );
    } else {
        // For other requests, use the default behavior
        event.respondWith(fetch(request));
    }
});