export class StorageHelper {
    constructor(document) {
        this._window = document.defaultView;
    }
    load(key) {
        const localStorage = this._window.localStorage;
        return localStorage.getItem(key);
    }
    save(key, value) {
        const localStorage = this._window.localStorage;
        localStorage.setItem(key, value);
    }
}
//# sourceMappingURL=storageHelper.js.map