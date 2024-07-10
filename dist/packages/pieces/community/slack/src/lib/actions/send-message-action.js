"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.slackSendMessageAction = void 0;
const tslib_1 = require("tslib");
const pieces_framework_1 = require("@activepieces/pieces-framework");
const props_1 = require("../common/props");
const utils_1 = require("../common/utils");
const __1 = require("../../");
exports.slackSendMessageAction = (0, pieces_framework_1.createAction)({
    auth: __1.slackAuth,
    name: 'send_channel_message',
    displayName: 'Send Message To A Channel',
    description: 'Send message to a channel',
    props: {
        info: props_1.slackInfo,
        channel: (0, props_1.slackChannel)(true),
        text: pieces_framework_1.Property.LongText({
            displayName: 'Message',
            description: 'The text of your message',
            required: true,
        }),
        username: props_1.username,
        profilePicture: props_1.profilePicture,
        file: pieces_framework_1.Property.File({
            displayName: 'Attachment',
            required: false,
        }),
        threadTs: pieces_framework_1.Property.ShortText({
            displayName: 'Thread ts',
            description: 'Provide the ts (timestamp) value of the **parent** message to make this message a reply. Do not use the ts value of the reply itself; use its parent instead. For example `1710304378.475129`.Alternatively, you can easily obtain the message link by clicking on the three dots next to the parent message and selecting the `Copy link` option.',
            required: false,
        }),
        blocks: props_1.blocks,
    },
    run(context) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const token = context.auth.access_token;
            const { text, channel, username, profilePicture, threadTs, file, blocks } = context.propsValue;
            return (0, utils_1.slackSendMessage)({
                token,
                text,
                username,
                profilePicture,
                conversationId: channel,
                threadTs: threadTs ? (0, utils_1.processMessageTimestamp)(threadTs) : undefined,
                file,
                blocks,
            });
        });
    },
});
//# sourceMappingURL=send-message-action.js.map