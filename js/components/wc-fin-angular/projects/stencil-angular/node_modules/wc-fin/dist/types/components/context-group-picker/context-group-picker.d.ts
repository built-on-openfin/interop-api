export declare class ContextGroupPicker {
  showContextGroupList: boolean;
  contextGroupId: any;
  iconColor: any;
  iconId: any;
  availableContextGroups: any[];
  showListId: any;
  /**
   * Bind views on Context Selection. Only supported when the control is on a window with childViews
   */
  bindViews: boolean;
  /**
   * Bind the window/view the control is place on when Context Selection is made
   */
  bindSelf: boolean;
  /**
   * What should the no context group selected color be
   */
  unselectedColor: string;
  /**
   * What should the delay be before switching to the list of context groups
   */
  listDelay: number;
  /**
   * Should the list of available options show when clicked or hovered?
   */
  showListOnClick: boolean;
  /**
   * What should the tooltip show when no context group is selected
   */
  unselectedText: string;
  /**
   * What should the tooltip show for the currently selected context group? Use {0} to represent where the group id should go
   */
  selectedText: string;
  /**
   * What should the tooltip show for joining the context group? Use {0} to represent where the group id should go
   */
  joinText: string;
  /**
   * What should the tooltip show for leaving the context group? Use {0} to represent where the group id should go
   */
  leaveText: string;
  /**
   * Support setting context group by Querystring: ?contextGroupId=green
   */
  isQueryStringEnabled: boolean;
  joinContextGroup(contextGroupId: string, viewIdentity?: any): Promise<void>;
  leaveContextGroup(viewIdentity?: any): Promise<void>;
  saveSelectedContextGroup(contextGroupId: string): Promise<void>;
  updateContextGroup(contextGroupId: string, viewIdentity?: any, deselectOnMatch?: boolean): Promise<void>;
  private showContextList;
  private hideContextList;
  private getContextGroupTooltip;
  private setupContextPicker;
  componentWillLoad(): void;
  render(): any;
}
