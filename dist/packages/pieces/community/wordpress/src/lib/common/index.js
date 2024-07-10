"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.wordpressCommon = void 0;
const tslib_1 = require("tslib");
const pieces_framework_1 = require("@activepieces/pieces-framework");
const pieces_common_1 = require("@activepieces/pieces-common");
const PAGE_HEADER = 'x-wp-totalpages';
exports.wordpressCommon = {
    featured_media_file: pieces_framework_1.Property.File({
        displayName: 'Featured Media (URL)',
        required: false,
        description: 'URL of featured media',
    }),
    authors: pieces_framework_1.Property.Dropdown({
        displayName: 'Authors',
        required: false,
        refreshers: [],
        options: (_a) => tslib_1.__awaiter(void 0, [_a], void 0, function* ({ auth }) {
            const connection = auth;
            const websiteUrl = connection.website_url;
            if (!(connection === null || connection === void 0 ? void 0 : connection.username) || !(connection === null || connection === void 0 ? void 0 : connection.password) || !websiteUrl) {
                return {
                    disabled: true,
                    placeholder: 'Connect your account first',
                    options: [],
                };
            }
            const request = {
                method: pieces_common_1.HttpMethod.GET,
                url: `${websiteUrl.trim()}/wp-json/wp/v2/users`,
                authentication: {
                    type: pieces_common_1.AuthenticationType.BASIC,
                    username: connection.username,
                    password: connection.password,
                },
            };
            const response = yield pieces_common_1.httpClient.sendRequest(request);
            return {
                options: response.body.map((usr) => {
                    return { value: usr.id, label: usr.name };
                }),
            };
        }),
    }),
    tags: pieces_framework_1.Property.MultiSelectDropdown({
        description: 'Post tags',
        displayName: 'Tags',
        required: false,
        refreshers: [],
        options: (_b) => tslib_1.__awaiter(void 0, [_b], void 0, function* ({ auth }) {
            const connection = auth;
            if (!connection) {
                return {
                    disabled: true,
                    options: [],
                    placeholder: 'Please connect your account first',
                };
            }
            if (!(yield exports.wordpressCommon.urlExists(connection.website_url.trim()))) {
                return {
                    disabled: true,
                    placeholder: 'Incorrect website url',
                    options: [],
                };
            }
            let pageCursor = 1;
            const getTagsParams = {
                websiteUrl: connection.website_url.trim(),
                username: connection.username,
                password: connection.password,
                page: pageCursor,
            };
            const result = [];
            let hasNext = true;
            let tags = yield exports.wordpressCommon.getTags(getTagsParams);
            while (hasNext) {
                result.push(...tags.tags);
                hasNext = pageCursor <= tags.totalPages;
                if (hasNext) {
                    pageCursor++;
                    tags = yield exports.wordpressCommon.getTags(Object.assign(Object.assign({}, getTagsParams), { page: pageCursor }));
                }
            }
            if (result.length === 0) {
                return {
                    disabled: true,
                    options: [],
                    placeholder: 'Please add tags from your admin dashboard',
                };
            }
            const options = result.map((res) => {
                return {
                    label: res.name,
                    value: res.id,
                };
            });
            return {
                options: options,
                disabled: false,
            };
        }),
    }),
    categories: pieces_framework_1.Property.MultiSelectDropdown({
        description: 'Post categories',
        displayName: 'Categories',
        required: false,
        refreshers: [],
        options: (_c) => tslib_1.__awaiter(void 0, [_c], void 0, function* ({ auth }) {
            const connection = auth;
            if (!connection) {
                return {
                    disabled: true,
                    options: [],
                    placeholder: 'Please connect your account first',
                };
            }
            if (!(yield exports.wordpressCommon.urlExists(connection.website_url.trim()))) {
                return {
                    disabled: true,
                    placeholder: 'Incorrect website url',
                    options: [],
                };
            }
            let pageCursor = 1;
            const getTagsParams = {
                websiteUrl: connection.website_url,
                username: connection.username,
                password: connection.password,
                perPage: 10,
                page: pageCursor,
            };
            const result = [];
            let categories = yield exports.wordpressCommon.getCategories(getTagsParams);
            let hasNext = true;
            while (hasNext) {
                result.push(...categories.categories);
                hasNext = pageCursor <= categories.totalPages;
                if (hasNext) {
                    pageCursor++;
                    categories = yield exports.wordpressCommon.getCategories(Object.assign(Object.assign({}, getTagsParams), { page: pageCursor }));
                }
            }
            if (result.length === 0) {
                return {
                    disabled: true,
                    options: [],
                    placeholder: 'Please add categories from your admin dashboard',
                };
            }
            const options = result.map((res) => {
                return {
                    label: res.name,
                    value: res.id,
                };
            });
            return {
                options: options,
                disabled: false,
            };
        }),
    }),
    featured_media: pieces_framework_1.Property.Dropdown({
        description: 'Choose from one of your uploaded media files',
        displayName: 'Featured Media (image)',
        required: false,
        refreshers: [],
        options: (_d) => tslib_1.__awaiter(void 0, [_d], void 0, function* ({ auth }) {
            const connection = auth;
            if (!connection) {
                return {
                    disabled: true,
                    options: [],
                    placeholder: 'Please connect your account first',
                };
            }
            if (!(yield exports.wordpressCommon.urlExists(connection.website_url.trim()))) {
                return {
                    disabled: true,
                    placeholder: 'Incorrect website url',
                    options: [],
                };
            }
            let pageCursor = 1;
            const getMediaParams = {
                websiteUrl: connection.website_url,
                username: connection.username,
                password: connection.password,
                page: pageCursor,
            };
            const result = [];
            let media = yield exports.wordpressCommon.getMedia(getMediaParams);
            if (media.totalPages === 0) {
                result.push(...media.media);
            }
            while (media.media.length > 0 && pageCursor <= media.totalPages) {
                result.push(...media.media);
                pageCursor++;
                media = yield exports.wordpressCommon.getMedia(getMediaParams);
            }
            if (result.length === 0) {
                return {
                    disabled: true,
                    options: [],
                    placeholder: 'Please add an image to your media from your admin dashboard',
                };
            }
            const options = result.map((res) => {
                return {
                    label: res.title.rendered,
                    value: res.id,
                };
            });
            return {
                options: options,
                disabled: false,
            };
        }),
    }),
    status: pieces_framework_1.Property.StaticDropdown({
        description: 'Choose post status',
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
                { value: 'trash', label: 'Trash' },
            ],
        },
    }),
    post: pieces_framework_1.Property.Dropdown({
        displayName: 'Post',
        required: true,
        refreshers: [],
        options: (_e) => tslib_1.__awaiter(void 0, [_e], void 0, function* ({ auth }) {
            var _f;
            const connection = auth;
            const websiteUrl = connection.website_url;
            if (!(connection === null || connection === void 0 ? void 0 : connection.username) || !(connection === null || connection === void 0 ? void 0 : connection.password) || !websiteUrl) {
                return {
                    disabled: true,
                    placeholder: 'Connect your account first',
                    options: [],
                };
            }
            const postOptions = [];
            let currentPage = 0;
            let totalPage = 0;
            do {
                currentPage += 1;
                const request = {
                    method: pieces_common_1.HttpMethod.GET,
                    url: `${websiteUrl.trim()}/wp-json/wp/v2/posts`,
                    authentication: {
                        type: pieces_common_1.AuthenticationType.BASIC,
                        username: connection.username,
                        password: connection.password,
                    },
                    queryParams: {
                        orderby: 'date',
                        order: 'desc',
                        per_page: '50',
                        page: currentPage.toString(),
                    },
                };
                const response = yield pieces_common_1.httpClient.sendRequest(request);
                totalPage = parseInt((_f = response.headers) === null || _f === void 0 ? void 0 : _f['x-wp-totalpages'], 10);
                postOptions.push(...response.body.map((post) => {
                    return {
                        label: post.title.rendered
                            ? post.title.rendered
                            : post.id.toString(),
                        value: post.id,
                    };
                }));
            } while (totalPage !== currentPage);
            return {
                disabled: false,
                options: postOptions,
            };
        }),
    }),
    getPosts(params) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const queryParams = {
                orderby: 'date',
                order: 'desc',
                before: new Date().toISOString(),
                after: params.afterDate,
                page: params.page.toString(),
            };
            if (params.authors) {
                queryParams['author'] = params.authors;
            }
            const request = {
                method: pieces_common_1.HttpMethod.GET,
                url: `${params.websiteUrl}/wp-json/wp/v2/posts`,
                authentication: {
                    type: pieces_common_1.AuthenticationType.BASIC,
                    username: params.username,
                    password: params.password,
                },
                queryParams: queryParams,
            };
            const response = yield pieces_common_1.httpClient.sendRequest(request);
            return {
                posts: response.body,
                totalPages: response.headers && response.headers[PAGE_HEADER]
                    ? Number(response.headers[PAGE_HEADER])
                    : 0,
            };
        });
    },
    getMedia(params) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const request = {
                method: pieces_common_1.HttpMethod.GET,
                url: `${params.websiteUrl}/wp-json/wp/v2/media`,
                queryParams: {
                    page: params.page.toString(),
                },
                authentication: {
                    type: pieces_common_1.AuthenticationType.BASIC,
                    username: params.username,
                    password: params.password,
                },
            };
            const response = yield pieces_common_1.httpClient.sendRequest(request);
            return {
                media: response.body,
                totalPages: response.headers && response.headers[PAGE_HEADER]
                    ? Number(response.headers[PAGE_HEADER])
                    : 0,
            };
        });
    },
    getTags(params) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const request = {
                method: pieces_common_1.HttpMethod.GET,
                url: `${params.websiteUrl}/wp-json/wp/v2/tags`,
                queryParams: {
                    page: params.page.toString(),
                },
                authentication: {
                    type: pieces_common_1.AuthenticationType.BASIC,
                    username: params.username,
                    password: params.password,
                },
            };
            const response = yield pieces_common_1.httpClient.sendRequest(request);
            return {
                tags: response.body,
                totalPages: response.headers && response.headers[PAGE_HEADER]
                    ? Number(response.headers[PAGE_HEADER])
                    : 0,
            };
        });
    },
    getCategories(params) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const request = {
                method: pieces_common_1.HttpMethod.GET,
                url: `${params.websiteUrl}/wp-json/wp/v2/categories`,
                authentication: {
                    type: pieces_common_1.AuthenticationType.BASIC,
                    username: params.username,
                    password: params.password,
                },
                queryParams: {
                    page: params.page.toString(),
                },
            };
            const response = yield pieces_common_1.httpClient.sendRequest(request);
            return {
                categories: response.body,
                totalPages: response.headers && response.headers[PAGE_HEADER]
                    ? Number(response.headers[PAGE_HEADER])
                    : 0,
            };
        });
    },
    urlExists(url) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                const request = {
                    method: pieces_common_1.HttpMethod.GET,
                    url: url,
                };
                yield pieces_common_1.httpClient.sendRequest(request);
                return true;
            }
            catch (e) {
                return false;
            }
        });
    },
    isBaseUrl(urlString) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                const url = new URL(urlString);
                return !url.pathname || url.pathname === '/';
            }
            catch (error) {
                // Handle invalid URLs here, e.g., return false or throw an error
                return false;
            }
        });
    },
};
//# sourceMappingURL=index.js.map