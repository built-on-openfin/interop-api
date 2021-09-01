const metaUrl = import.meta.url;
const knownPath = '/js/host.js';
let root;
let host;

export function getRoot () {
    if(root === undefined) {
        root = metaUrl.replace(knownPath, '');
    }
    return root;
}

export function getHost() {
    if(host === undefined) {
        let url = getRoot();
        host = url.replace(location.protocol + '//', '');
    }
    return host;
}
