'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-2430913f.js');

const contextMenuPickerCss = ":host{display:block}";

const ContextMenuPicker = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h(index.Host, null, index.h("slot", null)));
  }
};
ContextMenuPicker.style = contextMenuPickerCss;

exports.context_menu_picker = ContextMenuPicker;
