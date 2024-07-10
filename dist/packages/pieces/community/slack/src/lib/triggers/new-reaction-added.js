"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.newReactionAdded = void 0;
const tslib_1 = require("tslib");
const pieces_framework_1 = require("@activepieces/pieces-framework");
const __1 = require("../../");
const props_1 = require("../common/props");
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
exports.newReactionAdded = (0, pieces_framework_1.createTrigger)({
    auth: __1.slackAuth,
    name: 'new_reaction_added',
    displayName: 'New Reaction',
    description: 'Triggers when a new reaction is added to a message',
    props: {
        emojis: pieces_framework_1.Property.Array({
            displayName: 'Emojis (E.g fire, smile)',
            description: 'Select emojis to trigger on',
            required: false,
        }),
        channel: (0, props_1.slackChannel)(false),
    },
    type: pieces_framework_1.TriggerStrategy.APP_WEBHOOK,
    sampleData: sampleData,
    onEnable: (context) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
        var _a;
        // Older OAuth2 has team_id, newer has team.id
        const teamId = (_a = context.auth.data['team_id']) !== null && _a !== void 0 ? _a : context.auth.data['team']['id'];
        context.app.createListeners({
            events: ['reaction_added'],
            identifierValue: teamId,
        });
    }),
    onDisable: (context) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
        // Ignored
    }),
    test: (context) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
        var _b;
        const client = new web_api_1.WebClient((_b = context.auth.data['authed_user']) === null || _b === void 0 ? void 0 : _b.access_token);
        const response = yield client.reactions.list({ limit: 10, full: true });
        if (!response.items) {
            return [];
        }
        return response.items
            .filter((item) => item.type === 'message')
            .map((item) => {
            var _a, _b, _c, _d, _e, _f, _g;
            return {
                type: 'reaction_added',
                user: (_c = (_b = (_a = item.message) === null || _a === void 0 ? void 0 : _a.reactions) === null || _b === void 0 ? void 0 : _b[0].users) === null || _c === void 0 ? void 0 : _c[0],
                reaction: (_e = (_d = item.message) === null || _d === void 0 ? void 0 : _d.reactions) === null || _e === void 0 ? void 0 : _e[0].name,
                item_user: (_f = item.message) === null || _f === void 0 ? void 0 : _f.user,
                item: {
                    type: 'message',
                    channel: item.channel,
                    ts: (_g = item.message) === null || _g === void 0 ? void 0 : _g.ts,
                },
                event_ts: '1360782804.083113',
            };
        });
    }),
    run: (context) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
        const payloadBody = context.payload.body;
        if (context.propsValue.emojis) {
            if (!context.propsValue.emojis.includes(payloadBody.event.reaction)) {
                return [];
            }
        }
        if (context.propsValue.channel) {
            if (payloadBody.event.item['channel'] !== context.propsValue.channel) {
                return [];
            }
        }
        return [payloadBody.event];
    }),
});
//# sourceMappingURL=new-reaction-added.js.map