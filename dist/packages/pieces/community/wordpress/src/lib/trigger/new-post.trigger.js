"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.wordpressNewPost = void 0;
const tslib_1 = require("tslib");
const pieces_framework_1 = require("@activepieces/pieces-framework");
const pieces_common_1 = require("@activepieces/pieces-common");
const common_1 = require("../common");
const dayjs_1 = tslib_1.__importDefault(require("dayjs"));
const __1 = require("../..");
exports.wordpressNewPost = (0, pieces_framework_1.createTrigger)({
    auth: __1.wordpressAuth,
    name: 'new_post',
    displayName: 'New Post',
    sampleData: {
        id: 60,
        date: '2023-02-19T10:08:25',
        date_gmt: '2023-02-19T10:08:25',
        guid: {
            rendered: 'https://yoursite.com/?p=60',
        },
        modified: '2023-02-19T10:08:25',
        modified_gmt: '2023-02-19T10:08:25',
        slug: 'post-slug',
        status: 'publish',
        type: 'post',
        link: '/post-slug/',
        title: {
            rendered: '<h1> post title </h1>',
        },
        content: {
            rendered: '\npost content\n',
            protected: false,
        },
        excerpt: {
            rendered: 'xxx\n',
            protected: false,
        },
        author: 1,
        featured_media: 0,
        comment_status: 'open',
        ping_status: 'open',
        sticky: false,
        template: '',
        format: 'standard',
        meta: [],
        categories: [1],
        tags: [],
        _links: {
            self: [
                {
                    href: '/wp-json/wp/v2/posts/60',
                },
            ],
            collection: [
                {
                    href: '/wp-json/wp/v2/posts',
                },
            ],
            about: [
                {
                    href: '/wp-json/wp/v2/types/post',
                },
            ],
            author: [
                {
                    embeddable: true,
                    href: '/wp-json/wp/v2/users/1',
                },
            ],
            replies: [
                {
                    embeddable: true,
                    href: '/wp-json/wp/v2/comments?post=60',
                },
            ],
            'version-history': [
                {
                    count: 1,
                    href: '/wp-json/wp/v2/posts/60/revisions',
                },
            ],
            'predecessor-version': [
                {
                    id: 61,
                    href: '/wp-json/wp/v2/posts/60/revisions/61',
                },
            ],
            'wp:attachment': [
                {
                    href: '/wp-json/wp/v2/media?parent=60',
                },
            ],
            'wp:term': [
                {
                    taxonomy: 'category',
                    embeddable: true,
                    href: '/wp-json/wp/v2/categories?post=60',
                },
                {
                    taxonomy: 'post_tag',
                    embeddable: true,
                    href: '/wp-json/wp/v2/tags?post=60',
                },
            ],
            curies: [
                {
                    name: 'wp',
                    href: 'https://api.w.org/{rel}',
                    templated: true,
                },
            ],
        },
    },
    description: 'Triggers when a new post is published',
    props: {
        authors: common_1.wordpressCommon.authors,
    },
    type: pieces_framework_1.TriggerStrategy.POLLING,
    test(ctx) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield pieces_common_1.pollingHelper.test(polling, {
                auth: ctx.auth,
                store: ctx.store,
                propsValue: ctx.propsValue,
            });
        });
    },
    onEnable(ctx) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield pieces_common_1.pollingHelper.onEnable(polling, {
                auth: ctx.auth,
                store: ctx.store,
                propsValue: ctx.propsValue,
            });
        });
    },
    onDisable(ctx) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield pieces_common_1.pollingHelper.onDisable(polling, {
                auth: ctx.auth,
                store: ctx.store,
                propsValue: ctx.propsValue,
            });
        });
    },
    run(ctx) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield pieces_common_1.pollingHelper.poll(polling, {
                auth: ctx.auth,
                store: ctx.store,
                propsValue: ctx.propsValue,
            });
        });
    },
});
const polling = {
    strategy: pieces_common_1.DedupeStrategy.TIMEBASED,
    items: (_a) => tslib_1.__awaiter(void 0, [_a], void 0, function* ({ auth, propsValue, lastFetchEpochMS }) {
        const items = yield getPosts(auth, propsValue.authors, lastFetchEpochMS);
        return items.map((item) => ({
            epochMilliSeconds: (0, dayjs_1.default)(item.date).valueOf(),
            data: item,
        }));
    }),
};
const getPosts = (auth, authors, startDate) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    //WordPress accepts date only if they come after the start of the unix time stamp in 1970
    let afterDate = (0, dayjs_1.default)(startDate).toISOString();
    if (startDate === 0) {
        afterDate = (0, dayjs_1.default)(startDate).add(1, 'day').toISOString();
    }
    const getPostsParams = {
        websiteUrl: auth.website_url.trim(),
        username: auth.username,
        password: auth.password,
        authors: authors,
        afterDate: afterDate,
        page: 1,
    };
    return (yield common_1.wordpressCommon.getPosts(getPostsParams)).posts;
});
//# sourceMappingURL=new-post.trigger.js.map