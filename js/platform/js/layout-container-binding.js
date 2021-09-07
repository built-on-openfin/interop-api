
    window.addEventListener('DOMContentLoaded', () => {
        const containerId = 'layout-container';
        try {
            console.log("About to bind the layout.");
            fin.Platform.Layout.init({containerId});
            console.log("Layout has been bound to: " + containerId);
        } catch(e) {
           console.error("Error when initialising Layout.", e);
        }
    });
