import { Host, h } from '@stencil/core';
export class ContextMenuPicker {
  render() {
    return (h(Host, null, h("slot", null)));
  }
  static get is() { return "context-menu-picker"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["context-menu-picker.css"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["context-menu-picker.css"]
    };
  }
}
