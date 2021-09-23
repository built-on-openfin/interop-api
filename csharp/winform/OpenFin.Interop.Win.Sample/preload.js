async function init() {
    try {
        await fin.Interop.init("openfin-browser");
    }
    catch {
        console.warn("openfin-browser broker already created.")
    }
    

    fin.me.interop = fin.Interop.connectSync('openfin-browser', {
        currentContextGroup: 'green'
    });
}

init();