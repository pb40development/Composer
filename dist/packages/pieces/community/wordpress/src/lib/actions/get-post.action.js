"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getWordPressPost = void 0;
const tslib_1 = require("tslib");
const pieces_framework_1 = require("@activepieces/pieces-framework");
const common_1 = require("../common");
const pieces_common_1 = require("@activepieces/pieces-common");
const __1 = require("../..");
exports.getWordPressPost = (0, pieces_framework_1.createAction)({
    auth: __1.wordpressAuth,
    name: 'get_post',
    description: 'Get a post from WordPress',
    displayName: 'Get Post Details',
    props: {
        id: pieces_framework_1.Property.Number({
            description: 'The ID of the post to get',
            displayName: 'Post ID',
            required: true,
        }),
    },
    run(context) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (!(yield common_1.wordpressCommon.urlExists(context.auth.website_url.trim()))) {
                throw new Error('Website url is invalid: ' + context.auth.website_url);
            }
            return yield pieces_common_1.httpClient.sendRequest({
                method: pieces_common_1.HttpMethod.GET,
                url: `${context.auth.website_url.trim()}/wp-json/wp/v2/posts/${context.propsValue.id}`,
                authentication: {
                    type: pieces_common_1.AuthenticationType.BASIC,
                    username: context.auth.username,
                    password: context.auth.password,
                },
            });
        });
    },
});
//# sourceMappingURL=get-post.action.js.map