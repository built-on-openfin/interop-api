import { Component, Host, Listen, Prop, h } from '@stencil/core';

const fin = window['fin'];

@Component({
  tag: 'context-menu',
  styleUrl: 'context-menu.css',
  shadow: true,
})
export class ContextMenu {
  constructor() {
    this.setupContextMenu = this.setupContextMenu.bind(this);
  }

  availableIntents;
  template;
  currentWin;
  
  @Prop() intentName;
  @Listen('contextmenu', { target: 'window', capture: true })
  async handleContextMenu(ev) {
    ev.preventDefault();
    await this.setupContextMenu(this.intentName);
    const template = this.template;
    console.log(this.template[0])
    const win = fin.Window.wrapSync(this.currentWin.identity);
    win.showPopupMenu({ template });
  }

  setupContextMenu = async (intentName = 'ViewChart') => {
    if (fin.me.isView) {
      this.currentWin = await fin.me.getCurrentWindow();
      this.availableIntents = await fin.me.interop.getInfoForIntent({ intent: intentName });
      console.log('available intents', this.availableIntents);
      this.template = this.availableIntents.apps.map(i => ({
        label: i.title,
        visible: {
          isEditable: true,
        },
        click: (target) => {
          console.log(target)
        },
        data: { ...i },
      }));
      console.log('template', this.template);
    }
  };

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
