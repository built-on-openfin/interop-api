import { getRoot } from './host.js';

let currentContext = {};

export async function init() {
    // entity creates a channel and becomes the channelProvider
    const providerBus = await fin.InterApplicationBus.Channel.create('platform-interop-channel');

    providerBus.onConnection((identity, payload) => {
        // can reject a connection here by throwing an error
        console.info('Actions Channel: Client connection request identity: ', JSON.stringify(identity));
        console.info('Actions Channel: Client connection request payload: ', JSON.stringify(payload));
        if (identity.uuid !== fin.me.identity.uuid) {
            throw new Error("Connections are only allowed for this this application and no external applications have permission to connect.");
        }
    });

    providerBus.register('onContextGroupChange', async (payload, identity) => {
        console.info('platform-interop-channel Channel: onContextGroupChange Action: Requested by client: ' + JSON.stringify(identity));
        console.info('platform-interop-channel Channel: onContextGroupChange Action: Payload sent in request: ' + JSON.stringify(payload));

        if (payload.contextGroupId === undefined) {
            console.error("A request to update context was provided but no context group id was given.");
            return false;
        }

        if (payload.context === undefined) {
            console.error("A request to update context was provided but no context was given.");
            return false;
        }

        if (payload.context.type === undefined) {
            console.error("A request to update context was provided but no context type was given.");
            return false;
        }

        if (currentContext[payload.contextGroupId] === undefined) {
            currentContext[payload.contextGroupId] = {};
        }

        currentContext[payload.contextGroupId][payload.context.type] = payload.context;

        await Promise.all(providerBus.publish('onContextGroupChange', payload));
        return true;
    });

    providerBus.register('getCurrentContext', async (payload, identity) => {
        console.info('platform-interop-channel Channel: getCurrentContext Action: Requested by client: ' + JSON.stringify(identity));
        console.info('platform-interop-channel Channel: getCurrentContext Action: Payload sent in request: ' + JSON.stringify(payload));

        return currentContext;
    });

     
}
