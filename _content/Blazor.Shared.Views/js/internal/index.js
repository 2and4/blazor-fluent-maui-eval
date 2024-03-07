import { Shell } from "./shells/shell.js";
import { Animations } from "./animations/animations.js";
import { ElementsHelper } from "./helpers/elementsHelper.js";
import { ListViewHelper } from "./helpers/listViewHelper.js";
import { StorageHelper } from "./helpers/storageHelper.js";
import { WindowsFluentSelectHelper } from "./helpers/maui/windowsFluentSelectHelper.js";
window['shell'] = new Shell(document);
window['animations'] = new Animations(document);
window['elementsHelper'] = new ElementsHelper(document);
window['listViewHelper'] = new ListViewHelper(document);
window['storageHelper'] = new StorageHelper(document);
window['windowsFluentSelectHelper'] = new WindowsFluentSelectHelper(document);
//# sourceMappingURL=index.js.map