"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createWordPressPost = void 0;
const tslib_1 = require("tslib");
const pieces_framework_1 = require("@activepieces/pieces-framework");
const common_1 = require("../common");
const pieces_common_1 = require("@activepieces/pieces-common");
const form_data_1 = tslib_1.__importDefault(require("form-data"));
const __1 = require("../..");
exports.createWordPressPost = (0, pieces_framework_1.createAction)({
    auth: __1.wordpressAuth,
    name: 'create_post',
    description: 'Create new post on WordPress',
    displayName: 'Create Post',
    props: {
        title: pieces_framework_1.Property.ShortText({
            description: 'Title of the post about to be added',
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
            description: 'Post publish date (ISO-8601)',
            displayName: 'Date',
            required: false,
        }),
        featured_media_file: common_1.wordpressCommon.featured_media_file,
        tags: common_1.wordpressCommon.tags,
        acfFields: pieces_framework_1.Property.Object({
            displayName: 'Custom ACF fields',
            description: 'Provide field name with value.You can find out field name from ACF plugin menu.',
            required: false,
        }),
        categories: common_1.wordpressCommon.categories,
        featured_media: common_1.wordpressCommon.featured_media,
        status: common_1.wordpressCommon.status,
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
            if (context.propsValue.categories) {
                requestBody['categories'] = context.propsValue.categories;
            }
            if (context.propsValue.slug) {
                requestBody['slug'] = context.propsValue.slug;
            }
            if (context.propsValue.excerpt) {
                requestBody['excerpt'] = context.propsValue.excerpt;
            }
            if (context.propsValue.tags) {
                requestBody['tags'] = context.propsValue.tags;
            }
            if (context.propsValue.ping_status) {
                requestBody['ping_status'] = context.propsValue.ping_status
                    ? 'open'
                    : 'closed';
            }
            if (context.propsValue.status) {
                requestBody['status'] = context.propsValue.status;
            }
            if (context.propsValue.featured_media) {
                requestBody['featured_media'] = context.propsValue.featured_media;
            }
            if (context.propsValue.acfFields &&
                Object.keys(context.propsValue.acfFields).length > 0) {
                requestBody['acf'] = context.propsValue.acfFields;
            }
            if (context.propsValue.featured_media_file) {
                const formData = new form_data_1.default();
                const { filename, base64 } = context.propsValue.featured_media_file;
                formData.append('file', Buffer.from(base64, 'base64'), filename);
                const uploadMediaResponse = yield pieces_common_1.httpClient.sendRequest({
                    method: pieces_common_1.HttpMethod.POST,
                    url: `${context.auth.website_url.trim()}/wp-json/wp/v2/media`,
                    body: formData,
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                    authentication: {
                        type: pieces_common_1.AuthenticationType.BASIC,
                        username: context.auth.username,
                        password: context.auth.password,
                    },
                });
                requestBody['featured_media'] = uploadMediaResponse.body.id;
            }
            requestBody['content'] = context.propsValue.content;
            requestBody['title'] = context.propsValue.title;
            return yield pieces_common_1.httpClient.sendRequest({
                method: pieces_common_1.HttpMethod.POST,
                url: `${context.auth.website_url.trim()}/wp-json/wp/v2/posts`,
                authentication: {
                    type: pieces_common_1.AuthenticationType.BASIC,
                    username: context.auth.username,
                    password: context.auth.password,
                },
                body: requestBody,
            });
        });
    },
});
//# sourceMappingURL=create-post.action.js.map