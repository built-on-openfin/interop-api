'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-6a7c23fb.js');

const contextGroupPickerCss = ":host{display:block}@keyframes fadeIn{0%{opacity:0}100%{opacity:1}}.fade-in{animation:fadeIn ease 1s}";

const fin = window['fin'];
const ContextGroupPicker = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.iconColor = null;
    this.iconId = null;
    this.availableContextGroups = [];
    this.showContextGroupList = false;
    this.contextGroupId = undefined;
    this.bindViews = true;
    this.bindSelf = true;
    this.unselectedColor = '#ffffff';
    this.listDelay = 500;
    this.showListOnClick = true;
    this.unselectedText = 'No Context Group Selected' + (this.showListOnClick ? '. Click To Join.' : '');
    this.selectedText = 'Current Context Is {0}' + (this.showListOnClick ? '. Click To Switch/Leave.' : '');
    this.joinText = 'Switch to {0} Context Group';
    this.leaveText = 'Leave {0} Context Group';
    this.isQueryStringEnabled = false;
  }
  async joinContextGroup(contextGroupId, viewIdentity) {
    if (fin !== undefined) {
      if (this.bindViews === true && fin.me.isWindow === true) {
        if (viewIdentity === undefined) {
          let views = await fin.me.getCurrentViews();
          for (let i = 0; i < views.length; i++) {
            await fin.me.interop.joinContextGroup(contextGroupId, views[i].identity);
          }
        }
        else {
          await fin.me.interop.joinContextGroup(contextGroupId, viewIdentity);
        }
      }
      if (this.bindSelf) {
        await fin.me.interop.joinContextGroup(contextGroupId, fin.me.identity);
      }
    }
  }
  async leaveContextGroup(viewIdentity) {
    if (fin !== undefined) {
      if (this.bindViews === true && fin.me.isWindow === true) {
        if (viewIdentity === undefined) {
          let views = await fin.me.getCurrentViews();
          for (let i = 0; i < views.length; i++) {
            await fin.me.interop.removeFromContextGroup(views[i].identity);
          }
        }
        else {
          await fin.me.interop.removeFromContextGroup(viewIdentity);
        }
      }
      if (this.bindSelf) {
        await fin.me.interop.removeFromContextGroup(fin.me.identity);
      }
    }
  }
  async saveSelectedContextGroup(contextGroupId) {
    if (this.bindSelf === false) {
      // if we are not assigning the context group against ourselves but only childViews then it will not fall under interop within options. Save to a backup location.
      await fin.me.updateOptions({ customData: { selectedContextGroup: contextGroupId } });
    }
  }
  async updateContextGroup(contextGroupId, viewIdentity, deselectOnMatch = true) {
    let selectedContextGroup = this.availableContextGroups.find(entry => entry.id === contextGroupId);
    if (selectedContextGroup !== null && selectedContextGroup !== undefined) {
      if (this.contextGroupId === contextGroupId && deselectOnMatch) {
        this.contextGroupId = undefined;
        this.iconColor = this.unselectedColor;
        this.iconId = undefined;
        await this.leaveContextGroup(viewIdentity);
      }
      else {
        let joinAllViews = this.contextGroupId === undefined;
        this.iconColor = selectedContextGroup.color;
        this.iconId = selectedContextGroup.id;
        this.contextGroupId = contextGroupId;
        if (joinAllViews) {
          await this.joinContextGroup(contextGroupId);
        }
        else {
          await this.joinContextGroup(contextGroupId, viewIdentity);
        }
      }
      await this.saveSelectedContextGroup(this.contextGroupId);
      this.showContextGroupList = false;
    }
  }
  showContextList() {
    if (this.showListId !== undefined) {
      clearTimeout(this.showListId);
    }
    this.showListId = setTimeout(() => {
      this.showContextGroupList = true;
      this.showListId = undefined;
    }, this.listDelay);
  }
  hideContextList() {
    this.showContextGroupList = false;
  }
  getContextGroupTooltip(contextGroupId, isSelected = false) {
    let displayContextGroupId = contextGroupId.charAt(0).toUpperCase() + contextGroupId.slice(1);
    if (isSelected) {
      return this.selectedText.replace('{0}', displayContextGroupId);
    }
    if (contextGroupId === this.contextGroupId) {
      return this.leaveText.replace('{0}', displayContextGroupId);
    }
    return this.joinText.replace('{0}', displayContextGroupId);
  }
  async setupContextPicker() {
    if (fin !== undefined) {
      if (this.bindViews && fin.me.isWindow === true) {
        let win = await fin.Window.getCurrent();
        win.on('view-attached', async (attachedView) => {
          if (this.contextGroupId !== undefined) {
            setTimeout(async () => {
              await this.updateContextGroup(this.contextGroupId, attachedView.viewIdentity, false);
            }, 1000);
          }
          else {
            let view = fin.View.wrapSync(attachedView.viewIdentity);
            let options = await view.getOptions();
            if (options.interop !== undefined && options.interop.currentContextGroup !== undefined) {
              await this.updateContextGroup(options.interop.currentContextGroup, attachedView.viewIdentity);
            }
          }
        });
      }
      let contextGroups = await fin.me.interop.getContextGroups();
      contextGroups.forEach(contextGroup => {
        this.availableContextGroups.push({ id: contextGroup.id, color: contextGroup.displayMetadata.color });
      });
      if (this.isQueryStringEnabled) {
        const urlParams = new URLSearchParams(window.location.search);
        const contextGroupId = urlParams.get('contextGroupId');
        if (contextGroupId !== undefined && contextGroupId !== null) {
          await this.updateContextGroup(contextGroupId);
        }
      }
      if (this.contextGroupId === undefined) {
        let options = await fin.me.getOptions();
        let selectedContextGroup;
        if (options.interop !== undefined && options.interop.currentContextGroup !== undefined) {
          selectedContextGroup = options.interop.currentContextGroup;
        }
        else if (this.bindSelf === false && options.customData !== undefined && options.customData.selectedContextGroup !== undefined) {
          selectedContextGroup = options.customData.selectedContextGroup;
        }
        await this.updateContextGroup(selectedContextGroup);
      }
    }
  }
  componentWillLoad() {
    this.setupContextPicker().then(_ => { });
  }
  render() {
    if (this.showContextGroupList) {
      return (index.h("div", { id: "available-context", onMouseLeave: this.hideContextList.bind(this) }, ' ', this.availableContextGroups.map(availableContextGroup => (index.h("span", { title: this.getContextGroupTooltip(availableContextGroup.id), class: "fade-in", style: { padding: '0px 5px', color: availableContextGroup.color, cursor: 'pointer' }, onClick: () => this.updateContextGroup(availableContextGroup.id) }, "\u2B24")))));
    }
    else if (this.contextGroupId === undefined) {
      return (index.h("div", null, this.showListOnClick ? (index.h("span", { onClick: this.showContextList.bind(this), title: this.unselectedText, style: { padding: '0px 5px', color: `${this.unselectedColor}` } }, "\u2B24")) : (index.h("span", { onMouseEnter: this.showContextList.bind(this), title: this.unselectedText, style: { padding: '0px 5px', color: `${this.unselectedColor}` } }, "\u2B24"))));
    }
    else {
      return (index.h("div", { id: "selected-context" }, this.showListOnClick ? (index.h("span", { onClick: this.showContextList.bind(this), title: this.getContextGroupTooltip(this.contextGroupId, true), style: { padding: '0px 5px', color: `${this.iconColor}` } }, "\u2B24")) : (index.h("span", { onMouseEnter: this.showContextList.bind(this), title: this.getContextGroupTooltip(this.contextGroupId, true), style: { padding: '0px 5px', color: `${this.iconColor}` } }, "\u2B24"))));
    }
  }
};
ContextGroupPicker.style = contextGroupPickerCss;

exports.fin_context_group_picker = ContextGroupPicker;

//# sourceMappingURL=fin-context-group-picker.cjs.entry.js.map