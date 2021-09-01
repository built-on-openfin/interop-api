import { html, render } from "https://unpkg.com/lit-html@1.0.0/lit-html.js";
import "./interop-context-group-indicator.js";
import "./window-close-component.js";

class TitleBarMain extends HTMLElement {
    constructor() {
        super();
        this.render();
    }

    render = async () => {
        const titleBar = html` <div id="title-bar">
            <interop-context-group-indicator></interop-context-group-indicator>
            <div class="title-bar-draggable">
                    <div id="title"></div>
            </div>
            <button-wrapper id="buttons-wrapper"></button-wrapper>
        </div>`;
        return render(titleBar, this);
    }
}

customElements.define("title-bar-main", TitleBarMain);
