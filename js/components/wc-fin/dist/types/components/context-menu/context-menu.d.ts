export declare class ContextMenu {
  constructor();
  availableIntents: any;
  template: any;
  currentWin: any;
  intentName: any;
  handleContextMenu(ev: any): Promise<void>;
  setupContextMenu: (intentName?: string) => Promise<void>;
  render(): any;
}
