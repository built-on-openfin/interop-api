import { p as promiseResolve, b as bootstrapLazy } from './index-4a210114.js';
export { s as setNonce } from './index-4a210114.js';

/*
 Stencil Client Patch Browser v3.1.0 | MIT Licensed | https://stenciljs.com
 */
const patchBrowser = () => {
    const importMeta = import.meta.url;
    const opts = {};
    // TODO(STENCIL-663): Remove code related to deprecated `safari10` field.
    if (importMeta !== '') {
        opts.resourcesUrl = new URL('.', importMeta).href;
        // TODO(STENCIL-661): Remove code related to the dynamic import shim
        // TODO(STENCIL-663): Remove code related to deprecated `safari10` field.
    }
    return promiseResolve(opts);
};

patchBrowser().then(options => {
  return bootstrapLazy([["fin-context-group-picker",[[1,"fin-context-group-picker",{"bindViews":[4,"bind-views"],"bindSelf":[4,"bind-self"],"unselectedColor":[1,"unselected-color"],"listDelay":[2,"list-delay"],"showListOnClick":[4,"show-list-on-click"],"unselectedText":[1,"unselected-text"],"selectedText":[1,"selected-text"],"joinText":[1,"join-text"],"leaveText":[1,"leave-text"],"isQueryStringEnabled":[4,"is-query-string-enabled"],"showContextGroupList":[32],"contextGroupId":[32]}]]]], options);
});

//# sourceMappingURL=wc-fin.js.map