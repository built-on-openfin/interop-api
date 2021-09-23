import { html, render } from "https://unpkg.com/lit-html@1.0.0/lit-html.js";
import "./window-buttons.js";

class TitleBarMain extends HTMLElement {
    constructor() {
        super();
        this.render();
    }

    render = async () => {
        const titleBar = html` <div id="title-bar">
    <fin-context-group-picker ></fin-context-group-picker>
            <div class="title-bar-draggable">
                    <div id="title"></div>
            </div>
            <window-buttons id="buttons-wrapper"></window-buttons>
        </div>`;
        return render(titleBar, this);
    }
}

customElements.define("title-bar-main", TitleBarMain);
