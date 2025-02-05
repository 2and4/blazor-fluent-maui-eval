Blazor Fluent Maui Evaluation ([.NET 9](https://learn.microsoft.com/en-us/dotnet/core/whats-new/dotnet-9/overview))
===
### Version 1.1.1

This application serves as an evaluation tool for combining Microsoft technologies: ASP.NET Blazor, Fluent UI, and .NET MAUI.
It facilitates the utilization of a unified codebase for both web applications (Server, Wasm) and native applications (Android, iOS, iPadOS, MacOS, Windows).

The shared codebase offers flexibility in choosing various platforms. It reduces maintenance overhead and enables the development of a consistent infrastructure and testing strategy.

* **[Architecture](/ARCHITECTURE.md)**
* **[Changelog](/CHANGELOG.md)**

## Platforms

### Web ([Blazor](https://learn.microsoft.com/en-us/aspnet/core/blazor/?view=aspnetcore-9.0))
* WebAssambly **(wasm)**
    * **[Show Application](https://2and4.github.io/blazor-fluent-maui-eval/)**
* Server **(x64/arm64)**
    * Linux/MacOS/Windows

### Native ([Blazor Hybrid](https://learn.microsoft.com/en-us/aspnet/core/blazor/hybrid/?view=aspnetcore-9.0))

#### Desktop
* Windows **(x64/arm64)**
    * Version >= 10.0.17763
    * WinUI3/WPF/WinForms
* MacOS **(x64/arm64)**
    * Version >= 15.0
    * AppKit

#### Mobile
* Android **(x64/arm64)**
    * Version >= 7.0
    * Jetpack Compose
* iOS & iPadOS **(arm64)**
    * Version >= 15.0
    * UIKit

## Native Applications Screenshots

### Windows
![Windows Theme](https://2and4.github.io/blazor-fluent-maui-eval/_assets/BFM_Windows.png "Windows Theme")

### MacOS
![MacOs Theme](https://2and4.github.io/blazor-fluent-maui-eval/_assets/BFM_MacOS.png "MacOs Theme")

### Android and iOS
![Android and iOS Theme](https://2and4.github.io/blazor-fluent-maui-eval/_assets/BFM_Mobile_DarkAndLight.png "Android and iOS Theme")
