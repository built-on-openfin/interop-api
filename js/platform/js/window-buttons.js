import { html, render } from 'https://unpkg.com/lit-html@1.0.0/lit-html.js';

class WindowButtons extends HTMLElement {

    constructor() {
        super();
        this.render = this.render.bind(this);
        this.render();
    }

    maxOrRestore = async () => {
        if (await fin.me.getState() === 'normal') {
            return await fin.me.maximize();
        }

        return fin.me.restore();
    }

    async render() {
        const wrapper = html`
        <div class="button" title="Minimize Window" id="minimize-button" @click=${() => fin.me.minimize().catch(console.error)}></div>
        <div class="button" title="Maximize Window" id="expand-button" @click=${() => this.maxOrRestore().catch(console.error)}></div>
        <div class="button" title="Close Window" id="close-button" @click=${() => fin.me.close().catch(console.error)}></div>`;
        return render(wrapper, this);
    }

}

customElements.define('window-buttons', WindowButtons);
