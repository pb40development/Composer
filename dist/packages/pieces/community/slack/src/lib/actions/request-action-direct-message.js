"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.requestActionDirectMessageAction = void 0;
const tslib_1 = require("tslib");
const pieces_framework_1 = require("@activepieces/pieces-framework");
const __1 = require("../..");
const shared_1 = require("@activepieces/shared");
const props_1 = require("../common/props");
const request_action_1 = require("../common/request-action");
exports.requestActionDirectMessageAction = (0, pieces_framework_1.createAction)({
    auth: __1.slackAuth,
    name: 'request_action_direct_message',
    displayName: 'Request Action from A User',
    description: 'Send a message to a user and wait until the user selects an action',
    props: {
        userId: props_1.userId,
        text: props_1.text,
        actions: props_1.actions,
        username: props_1.username,
        profilePicture: props_1.profilePicture,
    },
    run(context) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const { userId } = context.propsValue;
            (0, shared_1.assertNotNullOrUndefined)(userId, 'userId');
            return yield (0, request_action_1.requestAction)(userId, context);
        });
    },
});
//# sourceMappingURL=request-action-direct-message.js.map