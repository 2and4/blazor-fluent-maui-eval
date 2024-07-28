import { Shell } from "./shells/shell.js";
import { Globalization } from "./globalization/globalization.js";
import { Animations } from "./animations/animations.js";
import { ElementsHelper } from "./helpers/elementsHelper.js";
import { ListViewHelper } from "./helpers/listViewHelper.js";
import { StorageHelper } from "./helpers/storageHelper.js";
window['shell'] = new Shell(document);
window['globalization'] = new Globalization(document);
window['animations'] = new Animations(document);
window['elementsHelper'] = new ElementsHelper(document);
window['listViewHelper'] = new ListViewHelper(document);
window['storageHelper'] = new StorageHelper(document);
//# sourceMappingURL=index.js.map