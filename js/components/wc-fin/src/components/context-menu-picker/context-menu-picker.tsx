import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'context-menu-picker',
  styleUrl: 'context-menu-picker.css',
  shadow: true,
})
export class ContextMenuPicker {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
