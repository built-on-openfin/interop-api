'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-6a7c23fb.js');

/*
 Stencil Client Patch Browser v3.1.0 | MIT Licensed | https://stenciljs.com
 */
const patchBrowser = () => {
    const importMeta = (typeof document === 'undefined' ? new (require('u' + 'rl').URL)('file:' + __filename).href : (document.currentScript && document.currentScript.src || new URL('wc-fin.cjs.js', document.baseURI).href));
    const opts = {};
    // TODO(STENCIL-663): Remove code related to deprecated `safari10` field.
    if (importMeta !== '') {
        opts.resourcesUrl = new URL('.', importMeta).href;
        // TODO(STENCIL-661): Remove code related to the dynamic import shim
        // TODO(STENCIL-663): Remove code related to deprecated `safari10` field.
    }
    return index.promiseResolve(opts);
};

patchBrowser().then(options => {
  return index.bootstrapLazy([["fin-context-group-picker.cjs",[[1,"fin-context-group-picker",{"bindViews":[4,"bind-views"],"bindSelf":[4,"bind-self"],"unselectedColor":[1,"unselected-color"],"listDelay":[2,"list-delay"],"showListOnClick":[4,"show-list-on-click"],"unselectedText":[1,"unselected-text"],"selectedText":[1,"selected-text"],"joinText":[1,"join-text"],"leaveText":[1,"leave-text"],"isQueryStringEnabled":[4,"is-query-string-enabled"],"showContextGroupList":[32],"contextGroupId":[32]}]]]], options);
});

exports.setNonce = index.setNonce;

//# sourceMappingURL=wc-fin.cjs.js.map