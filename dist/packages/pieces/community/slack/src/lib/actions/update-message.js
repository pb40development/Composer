"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateMessage = void 0;
const tslib_1 = require("tslib");
const pieces_framework_1 = require("@activepieces/pieces-framework");
const __1 = require("../..");
const props_1 = require("../common/props");
const utils_1 = require("../common/utils");
const web_api_1 = require("@slack/web-api");
exports.updateMessage = (0, pieces_framework_1.createAction)({
    // auth: check https://www.activepieces.com/docs/developers/piece-reference/authentication,
    name: 'updateMessage',
    displayName: 'Update message',
    description: 'Update an existing message',
    auth: __1.slackAuth,
    props: {
        info: props_1.slackInfo,
        channel: (0, props_1.slackChannel)(true),
        ts: pieces_framework_1.Property.ShortText({
            displayName: 'Message Timestamp',
            description: 'Please provide the timestamp of the message you wish to update, such as `1710304378.475129`. Alternatively, you can easily obtain the message link by clicking on the three dots next to the message and selecting the `Copy link` option.',
            required: true,
        }),
        text: pieces_framework_1.Property.LongText({
            displayName: 'Message',
            description: 'The updated text of your message',
            required: true,
        }),
        blocks: props_1.blocks,
    },
    run(_a) {
        return tslib_1.__awaiter(this, arguments, void 0, function* ({ auth, propsValue }) {
            const messageTimestamp = (0, utils_1.processMessageTimestamp)(propsValue.ts);
            if (!messageTimestamp) {
                throw new Error('Invalid Timestamp Value.');
            }
            const client = new web_api_1.WebClient(auth.access_token);
            return yield client.chat.update({
                channel: propsValue.channel,
                ts: messageTimestamp,
                text: propsValue.text,
                blocks: propsValue.blocks,
            });
        });
    },
});
//# sourceMappingURL=update-message.js.map