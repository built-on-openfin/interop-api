import { p as promiseResolve, b as bootstrapLazy } from './index-ed7f248d.js';

/*
 Stencil Client Patch Esm v2.18.1 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
    return promiseResolve();
};

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  return bootstrapLazy([["context-menu-picker",[[1,"context-menu-picker"]]],["fin-context-group-picker",[[1,"fin-context-group-picker",{"bindViews":[4,"bind-views"],"bindSelf":[4,"bind-self"],"unselectedColor":[1,"unselected-color"],"listDelay":[2,"list-delay"],"showListOnClick":[4,"show-list-on-click"],"unselectedText":[1,"unselected-text"],"selectedText":[1,"selected-text"],"joinText":[1,"join-text"],"leaveText":[1,"leave-text"],"isQueryStringEnabled":[4,"is-query-string-enabled"],"showContextGroupList":[32],"contextGroupId":[32]}]]]], options);
  });
};

export { defineCustomElements };
