var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export class Shell {
    constructor(document) {
        this._document = document;
        this._body = this._document.body;
        this._window = this._document.defaultView;
        this._designThemeElement = this._body.querySelector("fluent-design-theme");
        this._mediaQueryMaxWidth = this._window.matchMedia("(max-width: 680px)");
        this._mediaQueryMaxWidth.addEventListener("change", (e) => this.OnScreenSizeChangedAsync(e.matches));
        this._mediaQueryPreferedColor = this._window.matchMedia("(prefers-color-scheme: dark)");
        this._mediaQueryPreferedColor.addEventListener("change", (e) => this.setTheme(e.matches ? "dark" : "light"));
    }
    setCallback(callback) {
        this._callback = callback;
        this.OnScreenSizeChangedAsync(this._mediaQueryMaxWidth.matches);
    }
    getAccent() {
        var _a;
        return (_a = this._designThemeElement) === null || _a === void 0 ? void 0 : _a.getAttribute("primary-color");
    }
    setAccent(color) {
        var _a;
        (_a = this._designThemeElement) === null || _a === void 0 ? void 0 : _a.setAttribute("primary-color", color);
    }
    getTheme() {
        var _a;
        return (_a = this._designThemeElement) === null || _a === void 0 ? void 0 : _a.getAttribute("mode");
    }
    getIsThemeDark() {
        const isDarkColor = window.matchMedia('(prefers-color-scheme: dark)').matches;
        return isDarkColor;
    }
    setTheme(theme) {
        var _a;
        (_a = this._designThemeElement) === null || _a === void 0 ? void 0 : _a.setAttribute("mode", theme);
        const themeClasses = Array.from(this._body.classList).filter(v => v.startsWith("color-scheme"));
        themeClasses.forEach(cls => this._body.classList.remove(cls));
        if (theme === "system") {
            theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? "dark" : "light";
        }
        this._body.classList.add(`color-scheme-${theme}`);
    }
    changeBackgroundImage(imagePath) {
        return __awaiter(this, void 0, void 0, function* () {
            const backgroundContainers = Array.from(this._document.getElementsByClassName("bfm-shell-background"));
            for (let backgroundContainer of backgroundContainers) {
                const image = this._document.createElement("img");
                image.classList.add("opacity-0");
                image.alt = "background image";
                image.src = imagePath;
                backgroundContainer.innerHTML = '';
                backgroundContainer.appendChild(image);
                yield image.decode();
                if (!image.offsetHeight)
                    return;
                this._window.setTimeout(() => image.classList.add("opacity-fade-in"), 100);
            }
        });
    }
    OnScreenSizeChangedAsync(isMobile) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a, _b;
            if (!isMobile) {
                yield ((_a = this._callback) === null || _a === void 0 ? void 0 : _a.invokeMethodAsync("OnScreenChanged", isMobile));
                return;
            }
            yield ((_b = this._callback) === null || _b === void 0 ? void 0 : _b.invokeMethodAsync("OnScreenChanged", isMobile));
        });
    }
}
//# sourceMappingURL=shell.js.map