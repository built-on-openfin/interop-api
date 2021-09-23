import { Component, Prop, h, State } from '@stencil/core';

const fin = window['fin'];

@Component({
  tag: 'fin-context-group-picker',
  styleUrl: 'context-group-picker.css',
  shadow: true,
})
export class ContextGroupPicker {
  @State() showContextGroupList = false;
  @State() contextGroupId = undefined;

  iconColor = null;
  iconId = null;
  availableContextGroups = [];
  showListId;

  /**
   * Bind views on Context Selection. Only supported when the control is on a window with childViews
   */
  @Prop() bindViews: boolean = true;

  /**
   * Bind the window/view the control is place on when Context Selection is made
   */
  @Prop() bindSelf: boolean = true;

  /**
   * What should the no context group selected color be
   */
  @Prop() unselectedColor: string = '#ffffff';

  /**
   * What should the delay be before switching to the list of context groups
   */
  @Prop() listDelay: number = 500;

  /**
   * Should the list of available options show when clicked or hovered?
   */
  @Prop() showListOnClick: boolean = true;

  /**
   * What should the tooltip show when no context group is selected
   */
  @Prop() unselectedText: string = 'No Context Group Selected' + (this.showListOnClick ? '. Click To Join.': '');

  /**
   * What should the tooltip show for the currently selected context group? Use {0} to represent where the group id should go
   */
  @Prop() selectedText: string = 'Current Context Is {0}' + (this.showListOnClick ? '. Click To Switch/Leave.': '');

  /**
   * What should the tooltip show for joining the context group? Use {0} to represent where the group id should go
   */
  @Prop() joinText: string = 'Switch to {0} Context Group';

  /**
   * What should the tooltip show for leaving the context group? Use {0} to represent where the group id should go
   */
  @Prop() leaveText: string = 'Leave {0} Context Group';

  /**
   * Support setting context group by Querystring: ?contextGroupId=green
   */
  @Prop() isQueryStringEnabled: boolean = false;

  async joinContextGroup(contextGroupId: string, viewIdentity?: any) {
    if (fin !== undefined) {
      if (this.bindViews === true && fin.me.isWindow === true) {
        if (viewIdentity === undefined) {
          let views = await fin.me.getCurrentViews();
          for (let i = 0; i < views.length; i++) {
            await fin.me.interop.joinContextGroup(contextGroupId, views[i].identity);
          }
        } else {
          await fin.me.interop.joinContextGroup(contextGroupId, viewIdentity);
        }
      }
      if (this.bindSelf) {
        await fin.me.interop.joinContextGroup(contextGroupId, fin.me.identity);
      }

    }
  }

  async leaveContextGroup(viewIdentity?: any) {
    if (fin !== undefined) {
      if (this.bindViews === true && fin.me.isWindow === true) {
        if (viewIdentity === undefined) {
          let views = await fin.me.getCurrentViews();
          for (let i = 0; i < views.length; i++) {
            await fin.me.interop.removeFromContextGroup(views[i].identity);
          }
        } else {
          await fin.me.interop.removeFromContextGroup(viewIdentity);
        }
      }
      if (this.bindSelf) {
        await fin.me.interop.removeFromContextGroup(fin.me.identity);
      }
    }
  }

  async saveSelectedContextGroup(contextGroupId:string) {
    if(this.bindSelf === false) {
      // if we are not assigning the context group against ourselves but only childViews then it will not fall under interop within options. Save to a backup location.
      await fin.me.updateOptions({customData: { selectedContextGroup: contextGroupId }});
    }
  }

  async updateContextGroup(contextGroupId: string, viewIdentity?: any, deselectOnMatch = true) {
    let selectedContextGroup = this.availableContextGroups.find(entry => entry.id === contextGroupId);

    if (selectedContextGroup !== null && selectedContextGroup !== undefined) {
      if (this.contextGroupId === contextGroupId && deselectOnMatch) {
        this.contextGroupId = undefined;
        this.iconColor = this.unselectedColor;
        this.iconId = undefined;
        await this.leaveContextGroup(viewIdentity);
      } else {
        this.iconColor = selectedContextGroup.color;
        this.iconId = selectedContextGroup.id;
        this.contextGroupId = contextGroupId;
        await this.joinContextGroup(contextGroupId, viewIdentity);
      }

      await this.saveSelectedContextGroup(this.contextGroupId);
      this.showContextGroupList = false;
    }
  }

  private showContextList() {
    if (this.showListId !== undefined) {
      clearTimeout(this.showListId);
    }
    this.showListId = setTimeout(() => {
      this.showContextGroupList = true;
      this.showListId = undefined;
    }, this.listDelay);
  }

  private hideContextList() {
    this.showContextGroupList = false;
  }

  private getContextGroupTooltip(contextGroupId: string, isSelected = false) {
    let displayContextGroupId = contextGroupId.charAt(0).toUpperCase() + contextGroupId.slice(1);

    if (isSelected) {
      return this.selectedText.replace('{0}', displayContextGroupId);
    }
    if (contextGroupId === this.contextGroupId) {
      return this.leaveText.replace('{0}', displayContextGroupId);
    }
    return this.joinText.replace('{0}', displayContextGroupId);
  }

  private async setupContextPicker() {
    if (fin !== undefined) {
      if (this.bindViews && fin.me.isWindow === true) {
        let win = await fin.Window.getCurrent();
        win.on('view-attached', async attachedView => {
          if (this.contextGroupId !== undefined) {
            setTimeout(async () => {
              await this.updateContextGroup(this.contextGroupId, attachedView.viewIdentity, false);
            }, 1000);
          } else {
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

      if(this.contextGroupId === undefined) {
        let options = await fin.me.getOptions();
        let selectedContextGroup: string;

        if(options.interop !== undefined && options.interop.currentContextGroup !== undefined) {
            selectedContextGroup = options.interop.currentContextGroup; 
        } else if(this.bindSelf === false && options.customData !== undefined && options.customData.selectedContextGroup !== undefined) {
            selectedContextGroup = options.customData.selectedContextGroup;
        }

        await this.updateContextGroup(selectedContextGroup);
      }
    }
  }

  componentWillLoad() {
    this.setupContextPicker().then(_ => {});
  }

  render() {
    if (this.showContextGroupList) {
      return (
        <div id="available-context" onMouseLeave={this.hideContextList.bind(this)}>
          {' '}
          {this.availableContextGroups.map(availableContextGroup => (
            <span
              title={this.getContextGroupTooltip(availableContextGroup.id)}
              class="fade-in"
              style={{ padding: '0px 5px', color: availableContextGroup.color, cursor: 'pointer' }}
              onClick={() => this.updateContextGroup(availableContextGroup.id)}
            >
              &#11044;
            </span>
          ))}
        </div>
      );
    } else if (this.contextGroupId === undefined) {
      return (
        <div>
          {this.showListOnClick ? (
            <span onClick={this.showContextList.bind(this)} title={this.unselectedText} style={{ padding: '0px 5px', color: `${this.unselectedColor}` }}>
              &#11044;
            </span>
          ) : (
            <span onMouseEnter={this.showContextList.bind(this)} title={this.unselectedText} style={{ padding: '0px 5px', color: `${this.unselectedColor}` }}>
              &#11044;
            </span>
          )}
        </div>
      );
    } else {
      return (
        <div id="selected-context">
          {this.showListOnClick ? (
            <span
              onClick={this.showContextList.bind(this)}
              title={this.getContextGroupTooltip(this.contextGroupId, true)}
              style={{ padding: '0px 5px', color: `${this.iconColor}` }}
            >
              &#11044;
            </span>
          ) : (
            <span
              onMouseEnter={this.showContextList.bind(this)}
              title={this.getContextGroupTooltip(this.contextGroupId, true)}
              style={{ padding: '0px 5px', color: `${this.iconColor}` }}
            >
              &#11044;
            </span>
          )}
        </div>
      );
    }
  }
}
