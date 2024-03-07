export class ListboxHelper {
    constructor(document) {
        this._document = document;
        this._itemsTagName = "fluent-option";
        this._selectedAttributeName = "selected";
        this._ariaSelectedAttributeName = "aria-selected";
        this._scrollbarsImport = "@import '_content/Blazor.Shared.Views/css/bfm-scrollbars.css';";
        this._animationsImport = "@import '_content/Blazor.Shared.Views/css/bfm-animations.css';";
    }
    insertAnimations(elementId) {
        const element = this._document.getElementById(elementId);
        const fluentSelects = element === null || element === void 0 ? void 0 : element.querySelectorAll("fluent-select");
        if (!fluentSelects)
            return;
        fluentSelects.forEach((fluentSelect) => {
            const shadowRoot = fluentSelect.shadowRoot;
            const listbox = shadowRoot.querySelector(".listbox");
            this.insertAnimationsStyles(listbox);
        });
    }
    insertAnimationsStyles(element) {
        const style = document.createElement("style");
        style.textContent = `${this._scrollbarsImport}${this._animationsImport}`;
        const container = element.parentNode;
        container === null || container === void 0 ? void 0 : container.insertBefore(style, container.firstChild);
    }
    updateSelection(elementId, selectedIndex) {
        const element = this._document.getElementById(elementId);
        const items = element === null || element === void 0 ? void 0 : element.querySelectorAll(`${this._itemsTagName}`);
        if (!items)
            return;
        const selectedItem = items[selectedIndex];
        let itemsToClean = element.querySelectorAll(`[${this._selectedAttributeName}]`);
        itemsToClean === null || itemsToClean === void 0 ? void 0 : itemsToClean.forEach((ele) => {
            if (!selectedItem || ele !== selectedItem)
                ele.removeAttribute(this._selectedAttributeName);
        });
        itemsToClean = element.querySelectorAll(`[${this._ariaSelectedAttributeName}]`);
        itemsToClean === null || itemsToClean === void 0 ? void 0 : itemsToClean.forEach((ele) => {
            if (!selectedItem || ele !== selectedItem)
                ele.setAttribute(this._ariaSelectedAttributeName, "false");
        });
        if (!selectedItem)
            return;
        selectedItem.setAttribute(this._selectedAttributeName, "");
        selectedItem.setAttribute(this._ariaSelectedAttributeName, "true");
    }
}
//# sourceMappingURL=listboxHelper.js.map