export class Globalization {
    constructor(document) {
        this._document = document;
        this._body = this._document.body;
        const window = document.defaultView;
        this._localStorage = window.localStorage;
        this._navigator = window.navigator;
    }
    initialize(languages) {
        this._languages = languages;
        this._language = this._languages[0];
        let language = this._navigator.language;
        const lang = this._localStorage.getItem("lang");
        if (lang) {
            language = lang;
        }
        return this.setLanguage(language);
    }
    setLanguage(language) {
        if (!this._languages)
            return undefined;
        let genericLanguage = new Intl.Locale(language).language;
        if (!this._languages.includes(genericLanguage)) {
            genericLanguage = this._languages[0];
        }
        this._language = genericLanguage;
        const documentElement = this._document.documentElement;
        documentElement.setAttribute('lang', this._language);
        this._localStorage.setItem("lang", this._language);
        return this._language;
    }
    getLanguage() {
        return this._language;
    }
    setFlowDirection(flowDirection) {
        this._body.setAttribute("dir", flowDirection);
    }
}
//# sourceMappingURL=globalization.js.map