"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dropboxSearch = void 0;
const tslib_1 = require("tslib");
const pieces_framework_1 = require("@activepieces/pieces-framework");
const pieces_common_1 = require("@activepieces/pieces-common");
const __1 = require("../..");
exports.dropboxSearch = (0, pieces_framework_1.createAction)({
    auth: __1.dropboxAuth,
    name: 'search_dropbox',
    description: 'Search for files and folders',
    displayName: 'Search',
    props: {
        query: pieces_framework_1.Property.ShortText({
            displayName: 'Query',
            description: 'The search string. Must be at least 3 characters.',
            required: true,
        }),
        path: pieces_framework_1.Property.ShortText({
            displayName: 'Path',
            description: 'The path to search in. If not specified, the search is performed from the root.',
            required: false,
        }),
        max_results: pieces_framework_1.Property.Number({
            displayName: 'Max Results',
            description: 'The maximum number of search results to return (up to 1000). Default is 100 if not specified.',
            required: false,
        }),
        order_by: pieces_framework_1.Property.StaticDropdown({
            displayName: 'Order By',
            description: 'Specified property of the order of search results.',
            options: {
                options: [
                    { label: 'Relevance', value: 'relevance' },
                    { label: 'Modified Time', value: 'modified_time' },
                ],
            },
            defaultValue: 'relevance',
            required: false,
        }),
        file_status: pieces_framework_1.Property.StaticDropdown({
            displayName: 'File Status',
            description: 'Restricts search to the given file status.',
            options: {
                options: [
                    { label: 'Active', value: 'active' },
                    { label: 'Deleted', value: 'deleted' },
                ],
            },
            defaultValue: 'active',
            required: false,
        }),
        filename_only: pieces_framework_1.Property.Checkbox({
            displayName: 'Filename Only',
            description: 'Restricts search to only match on filenames.',
            defaultValue: false,
            required: false,
        }),
        file_extensions: pieces_framework_1.Property.ShortText({
            displayName: 'File Extensions',
            description: 'Restricts search to only the extensions specified (comma-separated).',
            required: false,
        }),
        file_categories: pieces_framework_1.Property.ShortText({
            displayName: 'File Categories',
            description: 'Restricts search to only the file categories specified (comma-separated).',
            required: false,
        }),
        account_id: pieces_framework_1.Property.ShortText({
            displayName: 'Account ID',
            description: 'Restricts results to the given account id.',
            required: false,
        }),
    },
    run(context) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const options = {
                path: context.propsValue.path || '',
                max_results: context.propsValue.max_results || 100,
                file_status: context.propsValue.file_status,
                filename_only: context.propsValue.filename_only,
                file_extensions: context.propsValue.file_extensions
                    ? context.propsValue.file_extensions.split(',')
                    : undefined,
                file_categories: context.propsValue.file_categories
                    ? context.propsValue.file_categories.split(',')
                    : undefined,
                account_id: context.propsValue.account_id,
            };
            const requestBody = {
                query: context.propsValue.query,
                options: options,
            };
            const result = yield pieces_common_1.httpClient.sendRequest({
                method: pieces_common_1.HttpMethod.POST,
                url: `https://api.dropboxapi.com/2/files/search_v2`,
                headers: {
                    'Content-Type': 'application/json',
                },
                body: requestBody,
                authentication: {
                    type: pieces_common_1.AuthenticationType.BEARER_TOKEN,
                    token: context.auth.access_token,
                },
            });
            return result.body;
        });
    },
});
//# sourceMappingURL=search.js.map