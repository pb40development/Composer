"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.newMessage = void 0;
const tslib_1 = require("tslib");
const pieces_framework_1 = require("@activepieces/pieces-framework");
const props_1 = require("../common/props");
const __1 = require("../../");
const web_api_1 = require("@slack/web-api");
const sampleData = {
    client_msg_id: '2767cf34-0651-44e0-b9c8-1b167ce9b7a9',
    type: 'message',
    text: 'f',
    user: 'U037UG6FKPU',
    ts: '1678231735.586539',
    blocks: [
        {
            type: 'rich_text',
            block_id: '4CM',
            elements: [
                {
                    type: 'rich_text_section',
                    elements: [
                        {
                            type: 'text',
                            text: 'f',
                        },
                    ],
                },
            ],
        },
    ],
    team: 'T037MS4FGDC',
    channel: 'C037RTX2ZDM',
    event_ts: '1678231735.586539',
    channel_type: 'channel',
};
exports.newMessage = (0, pieces_framework_1.createTrigger)({
    auth: __1.slackAuth,
    name: 'new_message',
    displayName: 'New Message',
    description: 'Triggers when a new message is received',
    props: {
        info: props_1.slackInfo,
        channel: (0, props_1.slackChannel)(true),
    },
    type: pieces_framework_1.TriggerStrategy.APP_WEBHOOK,
    sampleData: sampleData,
    onEnable: (context) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
        var _a;
        // Older OAuth2 has team_id, newer has team.id
        const teamId = (_a = context.auth.data['team_id']) !== null && _a !== void 0 ? _a : context.auth.data['team']['id'];
        context.app.createListeners({
            events: ['message'],
            identifierValue: teamId,
        });
    }),
    onDisable: (context) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
        // Ignored
    }),
    test: (context) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
        const client = new web_api_1.WebClient(context.auth.access_token);
        const response = yield client.conversations.history({
            channel: context.propsValue.channel,
            limit: 10,
        });
        if (!response.messages) {
            return [];
        }
        return response.messages.map((message) => {
            return Object.assign(Object.assign({}, message), { channel: context.propsValue.channel, event_ts: '1678231735.586539', channel_type: 'channel' });
        });
    }),
    run: (context) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
        const payloadBody = context.payload.body;
        if (payloadBody.event.channel === context.propsValue.channel) {
            return [payloadBody.event];
        }
        return [];
    }),
});
//# sourceMappingURL=new-message.js.map