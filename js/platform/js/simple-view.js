
let contextLabel = document.getElementById("simple-view-context-label");

function handleIncomingContext(contextInfo) {
    const { type, id } = contextInfo;
    alert(type);
    contextLabel.innerHTML = JSON.stringify(type);
}

fin.me.interop.addContextHandler(handleIncomingContext, "instrument");