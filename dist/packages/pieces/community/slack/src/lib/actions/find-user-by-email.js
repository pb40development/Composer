"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findUserByEmailAction = void 0;
const tslib_1 = require("tslib");
const __1 = require("../../");
const pieces_framework_1 = require("@activepieces/pieces-framework");
const web_api_1 = require("@slack/web-api");
exports.findUserByEmailAction = (0, pieces_framework_1.createAction)({
    auth: __1.slackAuth,
    name: 'slack-find-user-by-email',
    displayName: 'Find User by Email',
    description: 'Finds a user by matching against their email address.',
    props: {
        email: pieces_framework_1.Property.ShortText({
            displayName: 'Email',
            required: true,
        }),
    },
    run(_a) {
        return tslib_1.__awaiter(this, arguments, void 0, function* ({ auth, propsValue }) {
            const email = propsValue.email;
            const client = new web_api_1.WebClient(auth.access_token);
            return yield client.users.lookupByEmail({
                email,
            });
        });
    },
});
//# sourceMappingURL=find-user-by-email.js.map