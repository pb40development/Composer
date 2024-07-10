"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.slackSendDirectMessageAction = void 0;
const tslib_1 = require("tslib");
const pieces_framework_1 = require("@activepieces/pieces-framework");
const utils_1 = require("../common/utils");
const __1 = require("../../");
const shared_1 = require("@activepieces/shared");
const props_1 = require("../common/props");
exports.slackSendDirectMessageAction = (0, pieces_framework_1.createAction)({
    auth: __1.slackAuth,
    name: 'send_direct_message',
    displayName: 'Send Message To A User',
    description: 'Send message to a user',
    props: {
        userId: props_1.userId,
        text: props_1.text,
        username: props_1.username,
        profilePicture: props_1.profilePicture,
        blocks: props_1.blocks,
    },
    run(context) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const token = context.auth.access_token;
            const { text, userId, blocks } = context.propsValue;
            (0, shared_1.assertNotNullOrUndefined)(token, 'token');
            (0, shared_1.assertNotNullOrUndefined)(text, 'text');
            (0, shared_1.assertNotNullOrUndefined)(userId, 'userId');
            return (0, utils_1.slackSendMessage)({
                token,
                text,
                username: context.propsValue.username,
                profilePicture: context.propsValue.profilePicture,
                conversationId: userId,
                blocks,
            });
        });
    },
});
//# sourceMappingURL=send-direct-message-action.js.map