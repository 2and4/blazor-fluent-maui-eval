function createManifest(path) {
    const link = document.createElement('link');
    link.rel = 'manifest';
    link.href = path;
    document.head.appendChild(link);
}
function createIcon(path) {
    const link = document.createElement('link');
    link.rel = 'icon';
    link.href = path;
    document.head.appendChild(link);
}
function createStyleSheet(path) {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = path;
    document.head.appendChild(link);
}
function createJavaScript(path) {
    const script = document.createElement('script');
    script.src = path;
    document.head.appendChild(script);
}
async function registerServiceWorker() {
    if ('serviceWorker' in navigator) {
        try {
            const baseUrl = document.querySelector('base').href;
            const serviceWorkerPath = `${baseUrl}service-worker.js`;
            await navigator.serviceWorker.register(serviceWorkerPath, { type: 'module' });
            await navigator.serviceWorker.ready;
            if (navigator.serviceWorker.controller === null) {
                location.reload();
            }
        } catch (error) {
            console.error('Service Worker failed.', error);
        }
    }
}
registerServiceWorker();
createManifest('manifest.webmanifest');
createIcon('_content/Blazor.App.Core/favicon.ico');
createStyleSheet('css/styles.css');
