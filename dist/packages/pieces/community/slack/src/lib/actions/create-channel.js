"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createChannelAction = void 0;
const tslib_1 = require("tslib");
const __1 = require("../../");
const pieces_framework_1 = require("@activepieces/pieces-framework");
const web_api_1 = require("@slack/web-api");
exports.createChannelAction = (0, pieces_framework_1.createAction)({
    auth: __1.slackAuth,
    name: 'slack-create-channel',
    displayName: 'Create Channel',
    description: 'Creates a new channel.',
    props: {
        channelName: pieces_framework_1.Property.ShortText({
            displayName: 'Channel Name',
            required: true,
        }),
        isPrivate: pieces_framework_1.Property.Checkbox({
            displayName: 'Is Private?',
            required: false,
            defaultValue: false,
        }),
    },
    run(_a) {
        return tslib_1.__awaiter(this, arguments, void 0, function* ({ auth, propsValue }) {
            const client = new web_api_1.WebClient(auth.access_token);
            return yield client.conversations.create({
                name: propsValue.channelName,
                is_private: propsValue.isPrivate,
            });
        });
    },
});
//# sourceMappingURL=create-channel.js.map