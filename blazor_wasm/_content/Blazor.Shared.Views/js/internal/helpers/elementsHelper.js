export class ElementsHelper {
    constructor(document) {
        this._document = document;
    }
    removeClass(elementId, className) {
        const element = this._document.getElementById(elementId);
        if (!element)
            return;
        element.classList.remove(className);
    }
}
//# sourceMappingURL=elementsHelper.js.map