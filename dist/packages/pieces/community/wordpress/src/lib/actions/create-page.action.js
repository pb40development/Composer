"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createWordPressPage = void 0;
const tslib_1 = require("tslib");
const pieces_framework_1 = require("@activepieces/pieces-framework");
const common_1 = require("../common");
const pieces_common_1 = require("@activepieces/pieces-common");
const __1 = require("../..");
exports.createWordPressPage = (0, pieces_framework_1.createAction)({
    auth: __1.wordpressAuth,
    name: 'create_page',
    description: 'Create new page on WordPress',
    displayName: 'Create Page',
    props: {
        title: pieces_framework_1.Property.ShortText({
            description: 'Title of the page about to be added',
            displayName: 'Title',
            required: true,
        }),
        content: pieces_framework_1.Property.LongText({
            description: 'Uses the WordPress Text Editor which supports HTML',
            displayName: 'Content',
            required: true,
        }),
        slug: pieces_framework_1.Property.ShortText({
            displayName: 'Slug',
            required: false,
        }),
        date: pieces_framework_1.Property.ShortText({
            description: 'Page publish date (ISO-8601)',
            displayName: 'Date',
            required: false,
        }),
        status: pieces_framework_1.Property.StaticDropdown({
            description: 'Choose status',
            displayName: 'Status',
            required: false,
            options: {
                disabled: false,
                options: [
                    { value: 'publish', label: 'Published' },
                    { value: 'future', label: 'Scheduled' },
                    { value: 'draft', label: 'Draft' },
                    { value: 'pending', label: 'Pending' },
                    { value: 'private', label: 'Private' },
                ],
            },
        }),
        excerpt: pieces_framework_1.Property.LongText({
            description: 'Uses the WordPress Text Editor which supports HTML',
            displayName: 'Excerpt',
            required: false,
        }),
        comment_status: pieces_framework_1.Property.Checkbox({
            displayName: 'Enable Comments',
            required: false,
        }),
        ping_status: pieces_framework_1.Property.Checkbox({
            displayName: 'Open to Pinging',
            required: false,
        }),
    },
    run(context) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (!(yield common_1.wordpressCommon.urlExists(context.auth.website_url.trim()))) {
                throw new Error('Website url is invalid: ' + context.auth.website_url);
            }
            const requestBody = {};
            if (context.propsValue.date) {
                requestBody['date'] = context.propsValue.date;
            }
            if (context.propsValue.comment_status) {
                requestBody['comment_status'] = context.propsValue.comment_status
                    ? 'open'
                    : 'closed';
            }
            if (context.propsValue.slug) {
                requestBody['slug'] = context.propsValue.slug;
            }
            if (context.propsValue.excerpt) {
                requestBody['excerpt'] = context.propsValue.excerpt;
            }
            if (context.propsValue.status) {
                requestBody['status'] = context.propsValue.status;
            }
            requestBody['content'] = context.propsValue.content;
            requestBody['title'] = context.propsValue.title;
            const request = {
                method: pieces_common_1.HttpMethod.POST,
                url: `${context.auth.website_url.trim()}/wp-json/wp/v2/pages`,
                authentication: {
                    type: pieces_common_1.AuthenticationType.BASIC,
                    username: context.auth.username,
                    password: context.auth.password,
                },
                body: requestBody,
            };
            const response = yield pieces_common_1.httpClient.sendRequest(request);
            return response;
        });
    },
});
//# sourceMappingURL=create-page.action.js.map