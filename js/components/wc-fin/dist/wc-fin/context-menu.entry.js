import { r as registerInstance, h, e as Host } from './index-3dacc365.js';

const contextMenuCss = ":host{display:block}";

const fin = window['fin'];
const ContextMenu = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.setupContextMenu = async (intentName = 'ViewChart') => {
      if (fin.me.isView) {
        this.currentWin = await fin.me.getCurrentWindow();
        this.availableIntents = await fin.me.interop.getInfoForIntent({ intent: intentName });
        console.log('available intents', this.availableIntents);
        this.template = this.availableIntents.apps.map(i => ({
          label: i.title,
          visible: {
            isEditable: true,
          },
          data: Object.assign({}, i),
        }));
      }
    };
    this.intentName = undefined;
    this.setupContextMenu = this.setupContextMenu.bind(this);
  }
  async handleContextMenu(ev) {
    ev.preventDefault();
    await this.setupContextMenu(this.intentName);
    const template = this.template;
    console.log("Template", template);
    const win = fin.Window.wrapSync(this.currentWin.identity);
    const result = await win.showPopupMenu({ template });
    console.log("result", result);
  }
  render() {
    return (h(Host, null, h("slot", null)));
  }
};
ContextMenu.style = contextMenuCss;

export { ContextMenu as context_menu };

//# sourceMappingURL=context-menu.entry.js.map