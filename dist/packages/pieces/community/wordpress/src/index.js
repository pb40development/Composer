"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.wordpress = exports.wordpressAuth = void 0;
const tslib_1 = require("tslib");
const pieces_common_1 = require("@activepieces/pieces-common");
const pieces_framework_1 = require("@activepieces/pieces-framework");
const shared_1 = require("@activepieces/shared");
const create_page_action_1 = require("./lib/actions/create-page.action");
const create_post_action_1 = require("./lib/actions/create-post.action");
const get_post_action_1 = require("./lib/actions/get-post.action");
const common_1 = require("./lib/common");
const new_post_trigger_1 = require("./lib/trigger/new-post.trigger");
const update_post_action_1 = require("./lib/actions/update-post.action");
const markdownPropertyDescription = `
**Enable Basic Authentication:**

1. Download the plugin from: https://github.com/WP-API/Basic-Auth (Click on Code -> Download Zip)
2. Log in to your WordPress dashboard.
3. Go to "Plugins" and click "Add New."
4. Choose "Upload Plugin" and select the downloaded file.
5. Install and activate the plugin.

`;
exports.wordpressAuth = pieces_framework_1.PieceAuth.CustomAuth({
    description: markdownPropertyDescription,
    required: true,
    props: {
        username: pieces_framework_1.Property.ShortText({
            displayName: 'Username',
            required: true,
        }),
        password: pieces_framework_1.PieceAuth.SecretText({
            displayName: 'Password',
            required: true,
        }),
        website_url: pieces_framework_1.Property.ShortText({
            displayName: 'Website URL',
            required: true,
            description: 'URL of the wordpress url i.e https://www.example-website.com',
        }),
    },
    validate: (_a) => tslib_1.__awaiter(void 0, [_a], void 0, function* ({ auth }) {
        const { username, password, website_url } = auth;
        if (!username || !password || !website_url) {
            return {
                valid: false,
                error: 'please fill all the fields [username, password, website_url] ',
            };
        }
        if (!common_1.wordpressCommon.isBaseUrl(website_url.trim())) {
            return {
                valid: false,
                error: 'Please ensure that the website is valid and does not contain any paths, for example, https://example-website.com.',
            };
        }
        const apiEnabled = yield common_1.wordpressCommon.urlExists(website_url.trim() + '/wp-json');
        if (!apiEnabled) {
            return {
                valid: false,
                error: `REST API is not reachable, visit ${website_url.trim()}/wp-json" \n make sure your settings (Settings -> Permalinks) are set to "Post name" (or any option other than "Plain") and disable any security plugins that might block the REST API `,
            };
        }
        try {
            const request = {
                method: pieces_common_1.HttpMethod.GET,
                url: `${website_url}/wp-json/wp/v2/categories`,
                authentication: {
                    type: pieces_common_1.AuthenticationType.BASIC,
                    username: username,
                    password: password,
                },
            };
            yield pieces_common_1.httpClient.sendRequest(request);
            return {
                valid: true,
            };
        }
        catch (e) {
            return {
                valid: false,
                error: 'Credentials are invalid. ' + (e === null || e === void 0 ? void 0 : e.message),
            };
        }
    }),
});
exports.wordpress = (0, pieces_framework_1.createPiece)({
    displayName: 'WordPress',
    description: 'Open-source website creation software',
    minimumSupportedRelease: '0.5.0',
    logoUrl: 'https://cdn.activepieces.com/pieces/wordpress.png',
    categories: [shared_1.PieceCategory.MARKETING],
    auth: exports.wordpressAuth,
    authors: [
        'pfernandez98',
        'Salem-Alaa',
        'kishanprmr',
        'MoShizzle',
        'AbdulTheActivePiecer',
        'khaledmashaly',
        'abuaboud',
    ],
    actions: [
        create_post_action_1.createWordPressPost,
        create_page_action_1.createWordPressPage,
        update_post_action_1.updateWordPressPost,
        get_post_action_1.getWordPressPost,
        (0, pieces_common_1.createCustomApiCallAction)({
            baseUrl: (auth) => auth.website_url.trim() + '/wp-json/wp/v2',
            auth: exports.wordpressAuth,
            authMapping: (auth) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
                return ({
                    Authorization: `Basic ${Buffer.from(`${auth.username}:${auth.password}`).toString('base64')}`,
                });
            }),
        }),
    ],
    triggers: [new_post_trigger_1.wordpressNewPost],
});
//# sourceMappingURL=index.js.map