async function init() {
    let brokerId = "openfin-browser";

    try {
        var options = await fin.me.getOptions();
        if (options !== undefined && options !== null && options.customData !== undefined
            && options.customData !== null && options.customData.brokerId !== undefined
            && options.customData.brokerId !== null) {
            brokerId = options.customData.brokerId;
        }
        await fin.Interop.init(brokerId);
    }
    catch {
        console.warn(brokerId + " broker already created.")
    }
    
    fin.me.interop = fin.Interop.connectSync(brokerId, {
        currentContextGroup: 'green'
    });
}

init();