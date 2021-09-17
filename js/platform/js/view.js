var currentTicker;

window.addEventListener('locationchange', function () {
    setCurrentTicker();
    if (currentTicker) {
        window.fin.me.interop.setContext({
            type: "instrument",
            id: { ticker: currentTicker }
        });
    }
})

history.pushState = (f => function pushState() {
    var ret = f.apply(this, arguments);
    window.dispatchEvent(new Event('pushstate'));
    window.dispatchEvent(new Event('locationchange'));
    return ret;
})(history.pushState);

history.replaceState = (f => function replaceState() {
    var ret = f.apply(this, arguments);
    window.dispatchEvent(new Event('replacestate'));
    window.dispatchEvent(new Event('locationchange'));
    return ret;
})(history.replaceState);

window.addEventListener('popstate', () => {
    window.dispatchEvent(new Event('locationchange'))
});

function setCurrentTicker() {
    var pathArray = window.location.pathname.split('/');
    currentTicker = pathArray[pathArray.length - 2];
}

window.addEventListener("DOMContentLoaded", async () => {
    debugger;
    setCurrentTicker();

    function handleIncomingContext(contextInfo) {
        const { id } = contextInfo;
        // id.ticker if its different to current then reload
        if (currentTicker !== undefined && currentTicker !== id.ticker) {
            window.location.pathname = `/stocks/${id.ticker}`;
        }
    }

    await fin.me.interop.addContextHandler(handleIncomingContext, "instrument");
});