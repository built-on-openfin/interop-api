import { r as registerInstance, h, H as Host } from './index-ed7f248d.js';

const contextMenuPickerCss = ":host{display:block}";

const ContextMenuPicker = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h(Host, null, h("slot", null)));
  }
};
ContextMenuPicker.style = contextMenuPickerCss;

export { ContextMenuPicker as context_menu_picker };
