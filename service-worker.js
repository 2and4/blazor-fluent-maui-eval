import{BrotliDecode}from"./js/external/decode.min.js";const cacheName="app-cache-7d2a656ca0254f92ae5dd175e53056c4",filesToCache=["/index.html","/404.html","/manifest.webmanifest","/_framework/Blazor.App.Core.ga9noefjt9.wasm","/_framework/Blazor.App.Core.ga9noefjt9.wasm.br","/_framework/Blazor.App.Core.Presenters.4n0knhuoh9.wasm","/_framework/Blazor.App.Core.Presenters.4n0knhuoh9.wasm.br","/_framework/Blazor.App.Core.Services.toq3mgu7qc.wasm","/_framework/Blazor.App.Core.Services.toq3mgu7qc.wasm.br","/_framework/Blazor.App.Core.Views.lcz5l1vi5q.wasm","/_framework/Blazor.App.Core.Views.lcz5l1vi5q.wasm.br","/_framework/Blazor.App.Wasm.d1veiew19h.wasm","/_framework/Blazor.App.Wasm.d1veiew19h.wasm.br","/_framework/blazor.boot.json","/_framework/blazor.boot.json.br","/_framework/Blazor.Shared.App.eppbwpwot6.wasm","/_framework/Blazor.Shared.App.eppbwpwot6.wasm.br","/_framework/Blazor.Shared.Presenters.qqvmb6w0kx.wasm","/_framework/Blazor.Shared.Presenters.qqvmb6w0kx.wasm.br","/_framework/Blazor.Shared.Services.7e715me7op.wasm","/_framework/Blazor.Shared.Services.7e715me7op.wasm.br","/_framework/Blazor.Shared.Views.cwsbmtgveh.wasm","/_framework/Blazor.Shared.Views.cwsbmtgveh.wasm.br","/_framework/blazor.webassembly.js","/_framework/blazor.webassembly.js.br","/_framework/dotnet.js","/_framework/dotnet.js.br","/_framework/dotnet.native.awsh6613fx.js","/_framework/dotnet.native.awsh6613fx.js.br","/_framework/dotnet.native.nt390xka6u.wasm","/_framework/dotnet.native.nt390xka6u.wasm.br","/_framework/dotnet.runtime.o8gq1i8bk6.js","/_framework/dotnet.runtime.o8gq1i8bk6.js.br","/_framework/icudt.oh1zvcfom8.dat","/_framework/icudt.oh1zvcfom8.dat.br","/_framework/Microsoft.AspNetCore.Components.2m23dmwitp.wasm","/_framework/Microsoft.AspNetCore.Components.2m23dmwitp.wasm.br","/_framework/Microsoft.AspNetCore.Components.Forms.vhae2zrsel.wasm","/_framework/Microsoft.AspNetCore.Components.Forms.vhae2zrsel.wasm.br","/_framework/Microsoft.AspNetCore.Components.Web.oc3rophb0l.wasm","/_framework/Microsoft.AspNetCore.Components.Web.oc3rophb0l.wasm.br","/_framework/Microsoft.AspNetCore.Components.WebAssembly.5yf1hbjf5z.wasm","/_framework/Microsoft.AspNetCore.Components.WebAssembly.5yf1hbjf5z.wasm.br","/_framework/Microsoft.Extensions.Configuration.78lyo20vnw.wasm","/_framework/Microsoft.Extensions.Configuration.78lyo20vnw.wasm.br","/_framework/Microsoft.Extensions.Configuration.Abstractions.7z5b3n47rc.wasm","/_framework/Microsoft.Extensions.Configuration.Abstractions.7z5b3n47rc.wasm.br","/_framework/Microsoft.Extensions.Configuration.Json.9oiuvi1mc3.wasm","/_framework/Microsoft.Extensions.Configuration.Json.9oiuvi1mc3.wasm.br","/_framework/Microsoft.Extensions.DependencyInjection.Abstractions.x9gzp8se75.wasm","/_framework/Microsoft.Extensions.DependencyInjection.Abstractions.x9gzp8se75.wasm.br","/_framework/Microsoft.Extensions.DependencyInjection.i4pfk2iy2o.wasm","/_framework/Microsoft.Extensions.DependencyInjection.i4pfk2iy2o.wasm.br","/_framework/Microsoft.Extensions.FileProviders.Abstractions.kqax5dauad.wasm","/_framework/Microsoft.Extensions.FileProviders.Abstractions.kqax5dauad.wasm.br","/_framework/Microsoft.Extensions.Logging.0nqf7im5hq.wasm","/_framework/Microsoft.Extensions.Logging.0nqf7im5hq.wasm.br","/_framework/Microsoft.Extensions.Logging.Abstractions.2mnq3xvns0.wasm","/_framework/Microsoft.Extensions.Logging.Abstractions.2mnq3xvns0.wasm.br","/_framework/Microsoft.Extensions.Options.5gjfb69o3o.wasm","/_framework/Microsoft.Extensions.Options.5gjfb69o3o.wasm.br","/_framework/Microsoft.Extensions.Primitives.zatx90lqto.wasm","/_framework/Microsoft.Extensions.Primitives.zatx90lqto.wasm.br","/_framework/Microsoft.FluentUI.AspNetCore.Components.Icons.Filled.1v1w74kjpb.wasm","/_framework/Microsoft.FluentUI.AspNetCore.Components.Icons.Filled.1v1w74kjpb.wasm.br","/_framework/Microsoft.FluentUI.AspNetCore.Components.Icons.Regular.g3c8es92rq.wasm","/_framework/Microsoft.FluentUI.AspNetCore.Components.Icons.Regular.g3c8es92rq.wasm.br","/_framework/Microsoft.FluentUI.AspNetCore.Components.l5m2wqa1i8.wasm","/_framework/Microsoft.FluentUI.AspNetCore.Components.l5m2wqa1i8.wasm.br","/_framework/Microsoft.JSInterop.WebAssembly.heoad7mujs.wasm","/_framework/Microsoft.JSInterop.WebAssembly.heoad7mujs.wasm.br","/_framework/Microsoft.JSInterop.yui3jtddf1.wasm","/_framework/Microsoft.JSInterop.yui3jtddf1.wasm.br","/_framework/System.6bp5k9v1ih.wasm","/_framework/System.6bp5k9v1ih.wasm.br","/_framework/System.Collections.Concurrent.7t4uhbev18.wasm","/_framework/System.Collections.Concurrent.7t4uhbev18.wasm.br","/_framework/System.Collections.Immutable.2s1bnu76f4.wasm","/_framework/System.Collections.Immutable.2s1bnu76f4.wasm.br","/_framework/System.Collections.NonGeneric.ry2urqdium.wasm","/_framework/System.Collections.NonGeneric.ry2urqdium.wasm.br","/_framework/System.Collections.sbc6dn8zli.wasm","/_framework/System.Collections.sbc6dn8zli.wasm.br","/_framework/System.Collections.Specialized.yoihrj8y84.wasm","/_framework/System.Collections.Specialized.yoihrj8y84.wasm.br","/_framework/System.ComponentModel.28u698euyz.wasm","/_framework/System.ComponentModel.28u698euyz.wasm.br","/_framework/System.ComponentModel.Primitives.x0rensa1nh.wasm","/_framework/System.ComponentModel.Primitives.x0rensa1nh.wasm.br","/_framework/System.ComponentModel.TypeConverter.oc6j4dv1e6.wasm","/_framework/System.ComponentModel.TypeConverter.oc6j4dv1e6.wasm.br","/_framework/System.Console.gqc0flnw9o.wasm","/_framework/System.Console.gqc0flnw9o.wasm.br","/_framework/System.Diagnostics.DiagnosticSource.7n2ligas7n.wasm","/_framework/System.Diagnostics.DiagnosticSource.7n2ligas7n.wasm.br","/_framework/System.Drawing.Primitives.t4eq08kpaz.wasm","/_framework/System.Drawing.Primitives.t4eq08kpaz.wasm.br","/_framework/System.Drawing.zse2axizjh.wasm","/_framework/System.Drawing.zse2axizjh.wasm.br","/_framework/System.IO.Pipelines.wv1s2h4d36.wasm","/_framework/System.IO.Pipelines.wv1s2h4d36.wasm.br","/_framework/System.Linq.Expressions.hyqzfvrl91.wasm","/_framework/System.Linq.Expressions.hyqzfvrl91.wasm.br","/_framework/System.Linq.vvl2qz735y.wasm","/_framework/System.Linq.vvl2qz735y.wasm.br","/_framework/System.Memory.95qfzdlkof.wasm","/_framework/System.Memory.95qfzdlkof.wasm.br","/_framework/System.Net.Http.Json.zwajnyu9pk.wasm","/_framework/System.Net.Http.Json.zwajnyu9pk.wasm.br","/_framework/System.Net.Http.l8omyzfu88.wasm","/_framework/System.Net.Http.l8omyzfu88.wasm.br","/_framework/System.Net.Primitives.y79cg0kkrt.wasm","/_framework/System.Net.Primitives.y79cg0kkrt.wasm.br","/_framework/System.ObjectModel.n57laxxjgf.wasm","/_framework/System.ObjectModel.n57laxxjgf.wasm.br","/_framework/System.Private.CoreLib.gklp62y3cv.wasm","/_framework/System.Private.CoreLib.gklp62y3cv.wasm.br","/_framework/System.Private.Uri.dqe1c6axvk.wasm","/_framework/System.Private.Uri.dqe1c6axvk.wasm.br","/_framework/System.Runtime.InteropServices.JavaScript.nh37mohxcm.wasm","/_framework/System.Runtime.InteropServices.JavaScript.nh37mohxcm.wasm.br","/_framework/System.Runtime.luk0hmylk3.wasm","/_framework/System.Runtime.luk0hmylk3.wasm.br","/_framework/System.Security.Cryptography.c5uhprromz.wasm","/_framework/System.Security.Cryptography.c5uhprromz.wasm.br","/_framework/System.Text.Encodings.Web.p0qm2tor58.wasm","/_framework/System.Text.Encodings.Web.p0qm2tor58.wasm.br","/_framework/System.Text.Json.tq689m73f4.wasm","/_framework/System.Text.Json.tq689m73f4.wasm.br","/_framework/System.Text.RegularExpressions.y4bktts12k.wasm","/_framework/System.Text.RegularExpressions.y4bktts12k.wasm.br","/_framework/System.Threading.cjrcei28ym.wasm","/_framework/System.Threading.cjrcei28ym.wasm.br","/_content/Blazor.App.Core/favicon.ico","/_content/Blazor.App.Core/img/background_dark.webp","/_content/Blazor.App.Core/img/background_light.webp","/_content/Blazor.App.Core/img/icons/icon-72x72.png","/_content/Blazor.Shared.Views/css/bfm-animations.css","/_content/Blazor.Shared.Views/css/bfm-animations.css.br","/_content/Blazor.Shared.Views/css/bfm-scrollbars.css","/_content/Blazor.Shared.Views/css/bfm-scrollbars.css.br","/_content/Microsoft.FluentUI.AspNetCore.Components/Microsoft.FluentUI.AspNetCore.Components.lib.module.js","/_content/Microsoft.FluentUI.AspNetCore.Components/Microsoft.FluentUI.AspNetCore.Components.lib.module.js.br","/_content/Microsoft.FluentUI.AspNetCore.Components/Microsoft.FluentUI.AspNetCore.Components.lib.module.js.LEGAL.txt","/_content/Microsoft.FluentUI.AspNetCore.Components/Microsoft.FluentUI.AspNetCore.Components.lib.module.js.LEGAL.txt.br","/_content/Microsoft.FluentUI.AspNetCore.Components/Microsoft.FluentUI.AspNetCore.Components.lib.module.js.map","/_content/Microsoft.FluentUI.AspNetCore.Components/Microsoft.FluentUI.AspNetCore.Components.lib.module.js.map.br","/_content/Microsoft.FluentUI.AspNetCore.Components/Microsoft.FluentUI.AspNetCore.Components.nv5wbdzqw1.bundle.scp.css","/_content/Microsoft.FluentUI.AspNetCore.Components/Microsoft.FluentUI.AspNetCore.Components.nv5wbdzqw1.bundle.scp.css.br","/_content/Microsoft.FluentUI.AspNetCore.Components/Components/Anchor/FluentAnchor.razor.js","/_content/Microsoft.FluentUI.AspNetCore.Components/Components/AnchoredRegion/FluentAnchoredRegion.razor.js","/_content/Microsoft.FluentUI.AspNetCore.Components/Components/Button/FluentButton.razor.js","/_content/Microsoft.FluentUI.AspNetCore.Components/Components/Checkbox/FluentCheckbox.razor.js","/_content/Microsoft.FluentUI.AspNetCore.Components/Components/DataGrid/FluentDataGrid.razor.js","/_content/Microsoft.FluentUI.AspNetCore.Components/Components/DesignSystemProvider/FluentDesignTheme.razor.js","/_content/Microsoft.FluentUI.AspNetCore.Components/Components/Divider/FluentDivider.razor.js","/_content/Microsoft.FluentUI.AspNetCore.Components/Components/Grid/FluentGrid.razor.js","/_content/Microsoft.FluentUI.AspNetCore.Components/Components/HorizontalScroll/FluentHorizontalScroll.razor.js","/_content/Microsoft.FluentUI.AspNetCore.Components/Components/InputFile/FluentInputFile.razor.js","/_content/Microsoft.FluentUI.AspNetCore.Components/Components/KeyCode/FluentKeyCode.razor.js","/_content/Microsoft.FluentUI.AspNetCore.Components/Components/Label/FluentInputLabel.razor.js","/_content/Microsoft.FluentUI.AspNetCore.Components/Components/List/FluentAutocomplete.razor.js","/_content/Microsoft.FluentUI.AspNetCore.Components/Components/List/FluentCombobox.razor.js","/_content/Microsoft.FluentUI.AspNetCore.Components/Components/List/ListComponentBase.razor.js","/_content/Microsoft.FluentUI.AspNetCore.Components/Components/Menu/FluentMenu.razor.js","/_content/Microsoft.FluentUI.AspNetCore.Components/Components/NavMenu/FluentNavMenu.razor.js","/_content/Microsoft.FluentUI.AspNetCore.Components/Components/Overflow/FluentOverflow.razor.js","/_content/Microsoft.FluentUI.AspNetCore.Components/Components/Overlay/FluentOverlay.razor.js","/_content/Microsoft.FluentUI.AspNetCore.Components/Components/PullToRefresh/FluentPullToRefresh.razor.js","/_content/Microsoft.FluentUI.AspNetCore.Components/Components/Search/FluentSearch.razor.js","/_content/Microsoft.FluentUI.AspNetCore.Components/Components/Slider/FluentSlider.razor.js","/_content/Microsoft.FluentUI.AspNetCore.Components/Components/Slider/FluentSliderLabel.razor.js","/_content/Microsoft.FluentUI.AspNetCore.Components/Components/SortableList/FluentSortableList.razor.js","/_content/Microsoft.FluentUI.AspNetCore.Components/Components/Splitter/FluentMultiSplitter.razor.js","/_content/Microsoft.FluentUI.AspNetCore.Components/Components/Tabs/FluentTab.razor.js","/_content/Microsoft.FluentUI.AspNetCore.Components/Components/TextField/FluentTextField.razor.js","/_content/Microsoft.FluentUI.AspNetCore.Components/Components/Tooltip/FluentTooltip.razor.js","/_content/Microsoft.FluentUI.AspNetCore.Components/js/initializersLoader.webview.js","/_content/Microsoft.FluentUI.AspNetCore.Components/js/initializersLoader.webview.js.br","/_content/Microsoft.FluentUI.AspNetCore.Components/js/loading-theme.js","/_content/Microsoft.FluentUI.AspNetCore.Components/js/loading-theme.js.br","/css/styles.css","/css/styles.css.br","/img/icons/icon-192.png","/img/icons/icon-512.png","/js/index.js","/js/index.js.br","/js/initialize.js","/js/initialize.js.br","/js/external/decode.min.js","/js/external/decode.min.js.br"];function redirectToErrorPage(e){if("navigate"===e.mode){const o=`${self.registration.scope}404.html`;return caches.match(o).then((e=>e?(console.log("cached redirect"),e):(console.log("redirect"),fetch(o)))).catch((o=>fetch(e)))}return fetch(e)}self.addEventListener("install",(e=>{self.skipWaiting()})),self.addEventListener("activate",(e=>{e.waitUntil(clients.claim().then((()=>caches.open(cacheName).then((e=>{const o=self.location.origin,r=filesToCache.map((e=>`${o}${e}`));return e.addAll(r).catch((e=>(console.error("Failed to add files to cache:",e),fetch("index.html").then((e=>{if(!e.ok)throw new Error("Network response was not ok");return console.log("Test fetch successful:",e),e})).catch((e=>{console.error("Test fetch failed:",e)})))))})))).then((()=>{const e=[cacheName];return caches.keys().then((o=>Promise.all(o.map((o=>{if(o.includes("app-cache")&&!e.includes(o))return caches.delete(o)})))))})))})),self.addEventListener("fetch",(e=>{let o=e.request;if("navigate"!==o.mode){let e=new URL(o.url);const r=new URL(o.url);r.search="";r.pathname.endsWith(".js")&&(e=r),o=new Request(e.toString(),{method:o.method,headers:o.headers,mode:o.mode,credentials:o.credentials,redirect:o.redirect,referrer:"",integrity:o.integrity,cache:o.cache})}e.respondWith(caches.match(o).then((e=>{if(e)return e;const r=new URL(o.url).pathname;if(!r.endsWith(".razor.js")&&r.endsWith(".js")||r.endsWith(".css")||r.endsWith(".wasm")||r.endsWith(".dat")){const e=new Request(o.url+".br",{method:o.method,headers:o.headers,mode:o.mode,credentials:o.credentials,redirect:o.redirect,referrer:o.referrer,integrity:o.integrity,cache:o.cache});return fetch(e).then((async e=>{if(e.ok){const o=await e.arrayBuffer(),t=new Int8Array(o),s=BrotliDecode(t);let n="application/octet-stream";return r.endsWith(".js")&&(n="text/javascript"),r.endsWith(".css")&&(n="text/css"),r.endsWith(".wasm")&&(n="application/wasm"),new Response(s,{headers:{"content-type":n}})}return redirectToErrorPage(o)})).catch((e=>redirectToErrorPage(o)))}return redirectToErrorPage(o)})).catch((e=>redirectToErrorPage(o))))}));