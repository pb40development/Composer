"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.channelCreated = void 0;
const tslib_1 = require("tslib");
const pieces_framework_1 = require("@activepieces/pieces-framework");
const __1 = require("../../");
const web_api_1 = require("@slack/web-api");
const sampleData = {
    type: 'channel_created',
    channel: {
        id: 'C024BE91L',
        name: 'fun',
        created: 1360782804,
        creator: 'U024BE7LH',
    },
};
exports.channelCreated = (0, pieces_framework_1.createTrigger)({
    auth: __1.slackAuth,
    name: 'channel_created',
    displayName: 'Channel created',
    description: 'Triggers when a channel is created',
    props: {},
    type: pieces_framework_1.TriggerStrategy.APP_WEBHOOK,
    sampleData: sampleData,
    onEnable: (context) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
        var _a;
        // Older OAuth2 has team_id, newer has team.id
        const teamId = (_a = context.auth.data['team_id']) !== null && _a !== void 0 ? _a : context.auth.data['team']['id'];
        context.app.createListeners({
            events: ['channel_created'],
            identifierValue: teamId,
        });
    }),
    onDisable: (context) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
        // Ignored
    }),
    test: (context) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
        const client = new web_api_1.WebClient(context.auth.access_token);
        const response = yield client.conversations.list({
            exclude_archived: true,
            limit: 10,
            types: 'public_channel,private_channel',
        });
        if (!response.channels) {
            return [];
        }
        return response.channels.map((channel) => {
            return {
                type: 'channel_created',
                channel: {
                    id: channel.id,
                    name: channel.name,
                    created: channel.created,
                    creator: channel.creator,
                },
            };
        });
    }),
    run: (context) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
        const payloadBody = context.payload.body;
        return [payloadBody.event];
    }),
});
//# sourceMappingURL=new-channel.js.map