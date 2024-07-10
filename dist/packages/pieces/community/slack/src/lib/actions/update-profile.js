"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateProfileAction = void 0;
const tslib_1 = require("tslib");
const __1 = require("../../");
const pieces_framework_1 = require("@activepieces/pieces-framework");
const web_api_1 = require("@slack/web-api");
exports.updateProfileAction = (0, pieces_framework_1.createAction)({
    auth: __1.slackAuth,
    name: 'slack-update-profile',
    displayName: 'Update Profile',
    description: 'Update basic profile field such as name or title.',
    props: {
        firstName: pieces_framework_1.Property.ShortText({
            displayName: 'First Name',
            required: false,
        }),
        lastName: pieces_framework_1.Property.ShortText({
            displayName: 'Last Name',
            required: false,
        }),
        email: pieces_framework_1.Property.ShortText({
            displayName: 'Email',
            description: `Changing a user's email address will send an email to both the old and new addresses, and also post a slackbot message to the user informing them of the change.`,
            required: false,
        }),
        userId: pieces_framework_1.Property.ShortText({
            displayName: 'User',
            description: 'ID of user to change. This argument may only be specified by admins on paid teams.You can use **Find User by Email** action to retrieve ID.',
            required: false,
        }),
    },
    run(_a) {
        return tslib_1.__awaiter(this, arguments, void 0, function* ({ auth, propsValue }) {
            var _b;
            const client = new web_api_1.WebClient((_b = auth.data['authed_user']) === null || _b === void 0 ? void 0 : _b.access_token);
            return client.users.profile.set({
                profile: {
                    first_name: propsValue.firstName,
                    last_name: propsValue.lastName,
                    email: propsValue.email,
                },
                user: propsValue.userId,
            });
        });
    },
});
//# sourceMappingURL=update-profile.js.map