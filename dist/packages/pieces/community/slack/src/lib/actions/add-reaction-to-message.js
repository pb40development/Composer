"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addRectionToMessageAction = void 0;
const tslib_1 = require("tslib");
const __1 = require("../../");
const pieces_framework_1 = require("@activepieces/pieces-framework");
const props_1 = require("../common/props");
const web_api_1 = require("@slack/web-api");
const utils_1 = require("../common/utils");
exports.addRectionToMessageAction = (0, pieces_framework_1.createAction)({
    auth: __1.slackAuth,
    name: 'slack-add-reaction-to-message',
    displayName: 'Add Reaction to Message',
    description: 'Add an emoji reaction to a message.',
    props: {
        info: props_1.slackInfo,
        channel: (0, props_1.slackChannel)(true),
        ts: pieces_framework_1.Property.ShortText({
            displayName: 'Message Timestamp',
            description: 'Please provide the timestamp of the message you wish to react, such as `1710304378.475129`. Alternatively, you can easily obtain the message link by clicking on the three dots next to the message and selecting the `Copy link` option.',
            required: true,
        }),
        reaction: pieces_framework_1.Property.ShortText({
            displayName: 'Reaction (emoji) name',
            required: true,
            description: 'e.g.`thumbsup`',
        }),
    },
    run(context) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const { channel, ts, reaction } = context.propsValue;
            const slack = new web_api_1.WebClient(context.auth.access_token);
            const messageTimestamp = (0, utils_1.processMessageTimestamp)(ts);
            if (messageTimestamp) {
                const response = yield slack.reactions.add({
                    channel,
                    timestamp: messageTimestamp,
                    name: reaction,
                });
                return response;
            }
            else {
                throw new Error('Invalid Timestamp Value.');
            }
        });
    },
});
//# sourceMappingURL=add-reaction-to-message.js.map