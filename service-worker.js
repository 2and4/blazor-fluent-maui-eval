import{BrotliDecode}from"./js/external/decode.min.js";const cacheName="app-cache-84ba9b47e1604e45b995dc5189af6693",filesToCache=["/index.html","/404.html","/manifest.webmanifest","/_framework/Blazor.App.Core.c8yk4yk10h.wasm.br","/_framework/Blazor.App.Core.Presenters.2x1n3r2586.wasm.br","/_framework/Blazor.App.Core.Services.0ea1g0tj3z.wasm.br","/_framework/Blazor.App.Core.Views.8qc9vzvtwu.wasm.br","/_framework/Blazor.App.Wasm.ocopy8o1uz.wasm.br","/_framework/blazor.boot.json.br","/_framework/Blazor.Shared.App.g8i5qq845s.wasm.br","/_framework/Blazor.Shared.Presenters.5cqxvtyej9.wasm.br","/_framework/Blazor.Shared.Services.dvtiecp8o7.wasm.br","/_framework/Blazor.Shared.Views.t70k6q32op.wasm.br","/_framework/blazor.webassembly.js.br","/_framework/dotnet.js.br","/_framework/dotnet.native.awsh6613fx.js.br","/_framework/dotnet.native.x24n39gyr5.wasm.br","/_framework/dotnet.runtime.o8gq1i8bk6.js.br","/_framework/icudt.oh1zvcfom8.dat.br","/_framework/Microsoft.AspNetCore.Components.2m23dmwitp.wasm.br","/_framework/Microsoft.AspNetCore.Components.Forms.vhae2zrsel.wasm.br","/_framework/Microsoft.AspNetCore.Components.Web.oc3rophb0l.wasm.br","/_framework/Microsoft.AspNetCore.Components.WebAssembly.5yf1hbjf5z.wasm.br","/_framework/Microsoft.Extensions.Configuration.78lyo20vnw.wasm.br","/_framework/Microsoft.Extensions.Configuration.Abstractions.7z5b3n47rc.wasm.br","/_framework/Microsoft.Extensions.Configuration.Json.9oiuvi1mc3.wasm.br","/_framework/Microsoft.Extensions.DependencyInjection.Abstractions.x9gzp8se75.wasm.br","/_framework/Microsoft.Extensions.DependencyInjection.i4pfk2iy2o.wasm.br","/_framework/Microsoft.Extensions.FileProviders.Abstractions.kqax5dauad.wasm.br","/_framework/Microsoft.Extensions.Logging.0nqf7im5hq.wasm.br","/_framework/Microsoft.Extensions.Logging.Abstractions.2mnq3xvns0.wasm.br","/_framework/Microsoft.Extensions.Options.5gjfb69o3o.wasm.br","/_framework/Microsoft.Extensions.Primitives.zatx90lqto.wasm.br","/_framework/Microsoft.FluentUI.AspNetCore.Components.Icons.Filled.1v1w74kjpb.wasm.br","/_framework/Microsoft.FluentUI.AspNetCore.Components.Icons.Regular.g3c8es92rq.wasm.br","/_framework/Microsoft.FluentUI.AspNetCore.Components.l5m2wqa1i8.wasm.br","/_framework/Microsoft.JSInterop.WebAssembly.heoad7mujs.wasm.br","/_framework/Microsoft.JSInterop.yui3jtddf1.wasm.br","/_framework/System.6bp5k9v1ih.wasm.br","/_framework/System.Collections.Concurrent.7t4uhbev18.wasm.br","/_framework/System.Collections.Immutable.2s1bnu76f4.wasm.br","/_framework/System.Collections.NonGeneric.ry2urqdium.wasm.br","/_framework/System.Collections.sbc6dn8zli.wasm.br","/_framework/System.Collections.Specialized.yoihrj8y84.wasm.br","/_framework/System.ComponentModel.28u698euyz.wasm.br","/_framework/System.ComponentModel.Primitives.x0rensa1nh.wasm.br","/_framework/System.ComponentModel.TypeConverter.oc6j4dv1e6.wasm.br","/_framework/System.Console.gqc0flnw9o.wasm.br","/_framework/System.Diagnostics.DiagnosticSource.7n2ligas7n.wasm.br","/_framework/System.Drawing.Primitives.t4eq08kpaz.wasm.br","/_framework/System.Drawing.zse2axizjh.wasm.br","/_framework/System.IO.Pipelines.wv1s2h4d36.wasm.br","/_framework/System.Linq.Expressions.hyqzfvrl91.wasm.br","/_framework/System.Linq.vvl2qz735y.wasm.br","/_framework/System.Memory.95qfzdlkof.wasm.br","/_framework/System.Net.Http.Json.zwajnyu9pk.wasm.br","/_framework/System.Net.Http.l8omyzfu88.wasm.br","/_framework/System.Net.Primitives.y79cg0kkrt.wasm.br","/_framework/System.ObjectModel.n57laxxjgf.wasm.br","/_framework/System.Private.CoreLib.gklp62y3cv.wasm.br","/_framework/System.Private.Uri.dqe1c6axvk.wasm.br","/_framework/System.Runtime.InteropServices.JavaScript.nh37mohxcm.wasm.br","/_framework/System.Runtime.luk0hmylk3.wasm.br","/_framework/System.Security.Cryptography.c5uhprromz.wasm.br","/_framework/System.Text.Encodings.Web.p0qm2tor58.wasm.br","/_framework/System.Text.Json.tq689m73f4.wasm.br","/_framework/System.Text.RegularExpressions.y4bktts12k.wasm.br","/_framework/System.Threading.cjrcei28ym.wasm.br","/_content/Blazor.App.Core/favicon.ico","/_content/Blazor.App.Core/img/background_dark.webp","/_content/Blazor.App.Core/img/background_light.webp","/_content/Blazor.App.Core/img/icons/icon-72x72.png","/_content/Blazor.Shared.Views/css/bfm-animations.css.br","/_content/Blazor.Shared.Views/css/bfm-scrollbars.css.br","/_content/Microsoft.FluentUI.AspNetCore.Components/Microsoft.FluentUI.AspNetCore.Components.lib.module.js.br","/_content/Microsoft.FluentUI.AspNetCore.Components/Microsoft.FluentUI.AspNetCore.Components.lib.module.js.LEGAL.txt.br","/_content/Microsoft.FluentUI.AspNetCore.Components/Microsoft.FluentUI.AspNetCore.Components.lib.module.js.map.br","/_content/Microsoft.FluentUI.AspNetCore.Components/Microsoft.FluentUI.AspNetCore.Components.nv5wbdzqw1.bundle.scp.css.br","/_content/Microsoft.FluentUI.AspNetCore.Components/Components/Anchor/FluentAnchor.razor.js","/_content/Microsoft.FluentUI.AspNetCore.Components/Components/AnchoredRegion/FluentAnchoredRegion.razor.js","/_content/Microsoft.FluentUI.AspNetCore.Components/Components/Button/FluentButton.razor.js","/_content/Microsoft.FluentUI.AspNetCore.Components/Components/Checkbox/FluentCheckbox.razor.js","/_content/Microsoft.FluentUI.AspNetCore.Components/Components/DataGrid/FluentDataGrid.razor.js","/_content/Microsoft.FluentUI.AspNetCore.Components/Components/DesignSystemProvider/FluentDesignTheme.razor.js","/_content/Microsoft.FluentUI.AspNetCore.Components/Components/Divider/FluentDivider.razor.js","/_content/Microsoft.FluentUI.AspNetCore.Components/Components/Grid/FluentGrid.razor.js","/_content/Microsoft.FluentUI.AspNetCore.Components/Components/HorizontalScroll/FluentHorizontalScroll.razor.js","/_content/Microsoft.FluentUI.AspNetCore.Components/Components/InputFile/FluentInputFile.razor.js","/_content/Microsoft.FluentUI.AspNetCore.Components/Components/KeyCode/FluentKeyCode.razor.js","/_content/Microsoft.FluentUI.AspNetCore.Components/Components/Label/FluentInputLabel.razor.js","/_content/Microsoft.FluentUI.AspNetCore.Components/Components/List/FluentAutocomplete.razor.js","/_content/Microsoft.FluentUI.AspNetCore.Components/Components/List/FluentCombobox.razor.js","/_content/Microsoft.FluentUI.AspNetCore.Components/Components/List/ListComponentBase.razor.js","/_content/Microsoft.FluentUI.AspNetCore.Components/Components/Menu/FluentMenu.razor.js","/_content/Microsoft.FluentUI.AspNetCore.Components/Components/NavMenu/FluentNavMenu.razor.js","/_content/Microsoft.FluentUI.AspNetCore.Components/Components/Overflow/FluentOverflow.razor.js","/_content/Microsoft.FluentUI.AspNetCore.Components/Components/Overlay/FluentOverlay.razor.js","/_content/Microsoft.FluentUI.AspNetCore.Components/Components/PullToRefresh/FluentPullToRefresh.razor.js","/_content/Microsoft.FluentUI.AspNetCore.Components/Components/Search/FluentSearch.razor.js","/_content/Microsoft.FluentUI.AspNetCore.Components/Components/Slider/FluentSlider.razor.js","/_content/Microsoft.FluentUI.AspNetCore.Components/Components/Slider/FluentSliderLabel.razor.js","/_content/Microsoft.FluentUI.AspNetCore.Components/Components/SortableList/FluentSortableList.razor.js","/_content/Microsoft.FluentUI.AspNetCore.Components/Components/Splitter/FluentMultiSplitter.razor.js","/_content/Microsoft.FluentUI.AspNetCore.Components/Components/Tabs/FluentTab.razor.js","/_content/Microsoft.FluentUI.AspNetCore.Components/Components/TextField/FluentTextField.razor.js","/_content/Microsoft.FluentUI.AspNetCore.Components/Components/Tooltip/FluentTooltip.razor.js","/_content/Microsoft.FluentUI.AspNetCore.Components/js/initializersLoader.webview.js.br","/_content/Microsoft.FluentUI.AspNetCore.Components/js/loading-theme.js.br","/css/styles.css.br","/img/icons/icon-192.png","/img/icons/icon-512.png","/js/index.js.br","/js/initialize.js.br","/js/external/decode.min.js.br"];function getBaseUrl(){return self.location.origin+self.location.pathname.replace(/\/[^\/]*$/,"")}function redirectNavigation(e){if("navigate"===e.mode){const o=getBaseUrl();if(e.url.startsWith(self.location.origin)){const t=`${o}/index.html`;return caches.match(t).then((e=>e||fetch(t))).catch((o=>fetch(e)))}return fetch(e)}return fetch(e)}function decompressBrotliBuffer(e){const o=new Int8Array(e);return BrotliDecode(o)}function getContentType(e){let o="application/octet-stream";return e.endsWith(".js")&&(o="text/javascript"),e.endsWith(".css")&&(o="text/css"),e.endsWith(".wasm")&&(o="application/wasm"),o}self.addEventListener("install",(e=>{self.skipWaiting()})),self.addEventListener("activate",(e=>{e.waitUntil(clients.claim()),caches.has(cacheName).then((e=>{if(e)return Promise.resolve();caches.open(cacheName).then((e=>{const o=getBaseUrl(),t=filesToCache.map((e=>`${o}${e}`));return e.addAll(t).catch((e=>caches.delete(cacheName))).then((()=>e.keys().then((o=>{const t=o.map((o=>{if(o.url.endsWith(".br"))return e.match(o).then((t=>t.arrayBuffer().then((t=>{const r=decompressBrotliBuffer(t),n=o.url.replace(".br",""),s=new Request(n),a=getContentType(n),m=new Response(r,{headers:{"content-type":a}});return e.put(s,m)}))))}));return Promise.all(t)}))))}))})).then((()=>{const e=[cacheName];return caches.keys().then((o=>Promise.all(o.map((o=>{if(o.includes("app-cache")&&!e.includes(o))return caches.delete(o)})))))}))})),self.addEventListener("fetch",(e=>{let o=e.request;if("navigate"!==o.mode){let e=new URL(o.url);const t=new URL(o.url);t.search="";t.pathname.endsWith(".js")&&(e=t),o=new Request(e.toString(),{method:o.method,headers:o.headers,mode:o.mode,credentials:o.credentials,redirect:o.redirect,referrer:"",integrity:o.integrity,cache:o.cache})}e.respondWith(caches.match(o).then((e=>{if(e)return e;const t=new URL(o.url).pathname;if(!t.endsWith(".razor.js")&&t.endsWith(".js")||t.endsWith(".css")||t.endsWith(".wasm")||t.endsWith(".dat")){const e=new Request(`${o.url}.br`,{method:o.method,headers:o.headers,mode:o.mode,credentials:o.credentials,redirect:o.redirect,referrer:o.referrer,integrity:o.integrity,cache:o.cache});return fetch(e).then((async e=>{if(e.ok){const o=decompressBrotliBuffer(await e.arrayBuffer()),r=getContentType(t);return new Response(o,{headers:{"content-type":r}})}return redirectNavigation(o)})).catch((e=>redirectNavigation(o)))}return redirectNavigation(o)})).catch((e=>redirectNavigation(o))))}));