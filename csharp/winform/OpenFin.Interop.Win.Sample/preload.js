async function init() {
    await fin.Interop.init("IRESS");

    fin.me.interop = fin.Interop.connectSync('IRESS', {
        currentContextGroup: 'green'
    });
}

init();