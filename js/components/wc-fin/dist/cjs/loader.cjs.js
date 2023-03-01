'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-6a7c23fb.js');

/*
 Stencil Client Patch Esm v3.1.0 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
    return index.promiseResolve();
};

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  return index.bootstrapLazy([["fin-context-group-picker.cjs",[[1,"fin-context-group-picker",{"bindViews":[4,"bind-views"],"bindSelf":[4,"bind-self"],"unselectedColor":[1,"unselected-color"],"listDelay":[2,"list-delay"],"showListOnClick":[4,"show-list-on-click"],"unselectedText":[1,"unselected-text"],"selectedText":[1,"selected-text"],"joinText":[1,"join-text"],"leaveText":[1,"leave-text"],"isQueryStringEnabled":[4,"is-query-string-enabled"],"showContextGroupList":[32],"contextGroupId":[32]}]]]], options);
  });
};

exports.setNonce = index.setNonce;
exports.defineCustomElements = defineCustomElements;

//# sourceMappingURL=loader.cjs.js.map