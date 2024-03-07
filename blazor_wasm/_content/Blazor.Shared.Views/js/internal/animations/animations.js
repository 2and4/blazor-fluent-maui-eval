export class Animations {
    constructor(document) {
        this._document = document;
    }
    scaleInDialog(elementId) {
        var _a;
        const fluentDialog = this._document.getElementById(elementId);
        const dialog = fluentDialog === null || fluentDialog === void 0 ? void 0 : fluentDialog.dialog;
        if (!dialog)
            return;
        this.insertAnimationsStyles(dialog);
        const overlay = (_a = fluentDialog === null || fluentDialog === void 0 ? void 0 : fluentDialog.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector(".overlay");
        setTimeout(() => this.showOverlay(overlay), 25);
        setTimeout(() => dialog.classList.add("scale-in"), 50);
    }
    scaleOutDialog(elementId) {
        var _a;
        const fluentDialog = this._document.getElementById(elementId);
        const dialog = fluentDialog === null || fluentDialog === void 0 ? void 0 : fluentDialog.dialog;
        if (!dialog)
            return;
        dialog.classList.add("invisible");
        const overlay = (_a = fluentDialog === null || fluentDialog === void 0 ? void 0 : fluentDialog.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector(".overlay");
        this.hideOverlay(overlay);
        return new Promise((resolve) => setTimeout(resolve, 200));
    }
    slideInDialog(elementId) {
        var _a;
        const fluentDialog = this._document.getElementById(elementId);
        const dialog = fluentDialog === null || fluentDialog === void 0 ? void 0 : fluentDialog.dialog;
        if (!dialog)
            return;
        this.insertAnimationsStyles(dialog);
        const overlay = (_a = fluentDialog === null || fluentDialog === void 0 ? void 0 : fluentDialog.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector(".overlay");
        setTimeout(() => this.showOverlay(overlay), 25);
        setTimeout(() => dialog.classList.add("slide-in-right"), 50);
    }
    slideOutDialog(elementId) {
        var _a;
        const fluentDialog = this._document.getElementById(elementId);
        const dialog = fluentDialog === null || fluentDialog === void 0 ? void 0 : fluentDialog.dialog;
        if (!dialog)
            return;
        dialog.classList.add("invisible");
        const overlay = (_a = fluentDialog === null || fluentDialog === void 0 ? void 0 : fluentDialog.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector(".overlay");
        this.hideOverlay(overlay);
        return new Promise((resolve) => setTimeout(resolve, 200));
    }
    insertAnimationsStyles(dialog) {
        const style = document.createElement("style");
        style.textContent = "@import '_content/Blazor.Shared.Views/css/bfm-animations.css';";
        const container = dialog.parentNode;
        container === null || container === void 0 ? void 0 : container.insertBefore(style, container.firstChild);
    }
    showOverlay(overlay) {
        if (!overlay)
            return;
        overlay.classList.add("visible");
    }
    hideOverlay(overlay) {
        if (!overlay)
            return;
        overlay.classList.remove("visible");
    }
}
//# sourceMappingURL=animations.js.map