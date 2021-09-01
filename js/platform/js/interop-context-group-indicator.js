import { html, render } from 'https://unpkg.com/lit-html@1.0.0/lit-html.js';

class InteropContextGroupIndicatorComponent extends HTMLElement {

    constructor() {
        super();
        this.render = this.render.bind(this);
        this.showIcon = false;
        this.showContextGroupList = false;
        this.contextGroupId = undefined;
        this.iconColor = null;
        this.iconId = null;
        this.availableContextGroups = [];
        this.init();
        this.render();
    }

    async updateContextGroup(contextGroupId) {

        let selectedContextGroup = this.availableContextGroups.find(entry => entry.id === contextGroupId);

        if (selectedContextGroup !== null && selectedContextGroup !== undefined) {
            this.iconColor = selectedContextGroup.color;
            this.iconId = selectedContextGroup.id;
            const platform = fin.Platform.getCurrentSync();

            let views = await fin.me.getCurrentViews();

            for (let i = 0; i < views.length; i++) {
                await fin.me.interop.joinContextGroup(contextGroupId, views[i].identity);
            }

            this.contextGroupId = contextGroupId;
            fin.me.interop.joinContextGroup(contextGroupId, fin.me.identity);
            await platform.setWindowContext({ channelId: contextGroupId });
        }
    }

    async init() {

        let win = await fin.Window.getCurrent();
        win.on("view-attached", async (attachedView) => {
            if (this.contextGroupId !== undefined) {
                setTimeout(async () => {
                    await this.updateContextGroup(this.contextGroupId, attachedView.viewIdentity);
                }, 3000);
            }
        });

        let defaultChannel = { id: "default", color: "#FFFFFF" };
        this.showIcon = true;
        this.iconColor = defaultChannel.color;
        this.iconId = defaultChannel.id;

        this.addEventListener('mouseenter', () => {
            this.showContextGroupList = true;
            this.render();
        });
        this.addEventListener('mouseleave', () => {
            this.showContextGroupList = false;
            this.render();
        });

        //await fin.Interop.init('openfin-browser');
        //fin.me.interop = fin.Interop.connectSync('openfin-browser');
        let contextGroups = await fin.me.interop.getContextGroups();

        contextGroups.forEach(contextGroup => {
            this.availableContextGroups.push({ id: contextGroup.id, color: contextGroup.displayMetadata.color });
        });

        await fin.me.on('context-changed', async data => {
            console.info('context changed');
            if (data !== undefined && data.context !== undefined && data.context.channelId !== undefined && data.context.channelId !== this.contextGroupId) {
                console.info('context channel id is different. Old: ' + this.contextGroupId + " New: " + data.context.channelId);
                await this.updateContextGroup(data.context.channelId);
                this.render();
            }
        });

        const urlParams = new URLSearchParams(window.location.search);
        const contextGroupId = urlParams.get('contextGroupId');
        if (contextGroupId !== undefined && contextGroupId !== null) {
            await this.updateContextGroup(contextGroupId);
        } else {
            const platform = fin.Platform.getCurrentSync();
            let context = await platform.getWindowContext();
            console.info('context ' + JSON.stringify(context));
            if (context !== undefined && context !== null && context.channelId !== undefined && context.channelId !== this.contextGroupId) {
                console.info("Context available on host and not currently set. Setting Current channel to ID: " + context.channelId);
                await this.updateContextGroup(context.channelId);
                this.render();
            }
        }

        this.render();
    }

    async render() {
        let baseMs = 200;
        let baseCount = 0;
        const contextGroupIndicator = html`
        ${this.showContextGroupList ? html`
        <span title="Current Context Group is ${this.iconId}" style="padding: 0px 5px;color:${this.iconColor}">&#11044;</span>
        ${this.availableContextGroups.map(availableContextGroup => {
            if (availableContextGroup.id !== this.iconId) {
                baseCount++;
                return html`<span title="Switch to ${availableContextGroup.id} Context Group" class="fade-in" style="padding: 0px 5px;color:${availableContextGroup.color};cursor: pointer;" @click=${async () => { await this.updateContextGroup(availableContextGroup.id); }}>&#11044;</span>`
            } else {
                return null;
            }
        })}
        `
                : html`
        <span title="Current channel is ${this.iconId}" style="padding: 0px 10px;color:${this.iconColor}">&#11044;</span>
        `}


                    `;
        return render(contextGroupIndicator, this);
    }
}

customElements.define('interop-context-group-indicator', InteropContextGroupIndicatorComponent);
