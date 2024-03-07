export class WindowsFluentSelectHelper {
    constructor(document) {
        this._window = document.defaultView;
        this._document = document;
        this._isSelectionOpen = false;
        this._fleuntSelectMutationDictionary = new Map();
        this.fluentSelectMutationsEvent = (e) => this.onFluentSelectMutation(e);
        this.fluentSelectFocusOutEvent = (e) => this.onFluentSelectFocusOut(e);
        this.fluentSelectKeyDownEvent = (e) => this.onfluentSelectKeyDown(e);
        this._scrollIntoViewEmpty = function () { };
    }
    activate(elementId) {
        const element = this._document.getElementById(elementId);
        const fluentSelects = element === null || element === void 0 ? void 0 : element.querySelectorAll("fluent-select");
        if (!fluentSelects)
            return;
        fluentSelects.forEach((fluentSelect) => {
            this._isSelectionOpen = false;
            const shadowRoot = fluentSelect.shadowRoot;
            const listbox = shadowRoot.querySelector(".listbox");
            let fluentSelectMutationObserver = this._fleuntSelectMutationDictionary.get(fluentSelect);
            if (!fluentSelectMutationObserver) {
                fluentSelectMutationObserver = new MutationObserver(this.fluentSelectMutationsEvent);
                fluentSelectMutationObserver.observe(listbox, { attributes: true });
            }
            fluentSelect.removeEventListener("focusout", this.fluentSelectFocusOutEvent);
            fluentSelect.addEventListener("focusout", this.fluentSelectFocusOutEvent);
            fluentSelect.removeEventListener("keydown", this.fluentSelectKeyDownEvent);
            fluentSelect.addEventListener("keydown", this.fluentSelectKeyDownEvent);
        });
    }
    onFluentSelectMutation(mutations) {
        mutations.forEach((mutation) => {
            if (mutation.type === "attributes" && mutation.attributeName === "hidden") {
                const listbox = mutation.target;
                const isVisible = !listbox.hasAttribute("hidden");
                this._isSelectionOpen = isVisible;
                this._window.setTimeout(() => {
                    const listItemType = this.getFluentOptionConstructor();
                    if (!listItemType)
                        return;
                    if (!this._scrollIntoViewDefault) {
                        this._scrollIntoViewDefault = listItemType.prototype.scrollIntoView;
                    }
                    if (!isVisible) {
                        listItemType.prototype.scrollIntoView = this._scrollIntoViewDefault;
                        return;
                    }
                    listItemType.prototype.scrollIntoView = this._scrollIntoViewEmpty;
                }, 0);
            }
        });
    }
    onFluentSelectFocusOut(event) {
        if (!this._isSelectionOpen)
            return;
        const fluentSelect = event.target;
        fluentSelect.open = true;
        this._isSelectionOpen = false;
    }
    onfluentSelectKeyDown(event) {
        if (!this._isSelectionOpen || !this._scrollIntoViewDefault)
            return;
        const listItemType = this.getFluentOptionConstructor();
        if (!listItemType)
            return;
        listItemType.prototype.scrollIntoView = this._scrollIntoViewDefault;
    }
    getFluentOptionConstructor() {
        if (this._fluentOptionType)
            return this._fluentOptionType;
        const fluentOption = this._document.querySelector("fluent-option");
        this._fluentOptionType = fluentOption === null || fluentOption === void 0 ? void 0 : fluentOption.constructor;
        return this._fluentOptionType;
    }
}
//# sourceMappingURL=windowsFluentSelectHelper.js.map