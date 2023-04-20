import type { Components, JSX } from "../types/components";

interface ContextMenu extends Components.ContextMenu, HTMLElement {}
export const ContextMenu: {
  prototype: ContextMenu;
  new (): ContextMenu;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
