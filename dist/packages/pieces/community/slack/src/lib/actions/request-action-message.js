"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.requestActionMessageAction = void 0;
const tslib_1 = require("tslib");
const pieces_framework_1 = require("@activepieces/pieces-framework");
const __1 = require("../..");
const shared_1 = require("@activepieces/shared");
const props_1 = require("../common/props");
const request_action_1 = require("../common/request-action");
exports.requestActionMessageAction = (0, pieces_framework_1.createAction)({
    auth: __1.slackAuth,
    name: 'request_action_message',
    displayName: 'Request Action in A Channel',
    description: 'Send a message in a channel and wait until an action is selected',
    props: {
        info: props_1.slackInfo,
        channel: (0, props_1.slackChannel)(true),
        text: props_1.text,
        actions: props_1.actions,
        username: props_1.username,
        profilePicture: props_1.profilePicture,
    },
    run(context) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const { channel } = context.propsValue;
            (0, shared_1.assertNotNullOrUndefined)(channel, 'channel');
            return yield (0, request_action_1.requestAction)(channel, context);
        });
    },
});
//# sourceMappingURL=request-action-message.js.map