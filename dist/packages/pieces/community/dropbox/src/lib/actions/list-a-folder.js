"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dropboxListAFolder = void 0;
const tslib_1 = require("tslib");
const pieces_framework_1 = require("@activepieces/pieces-framework");
const pieces_common_1 = require("@activepieces/pieces-common");
const __1 = require("../../");
exports.dropboxListAFolder = (0, pieces_framework_1.createAction)({
    auth: __1.dropboxAuth,
    name: 'list_dropbox_folder',
    description: 'List the contents of a folder',
    displayName: 'List a folder',
    props: {
        path: pieces_framework_1.Property.ShortText({
            displayName: 'Path',
            description: 'The path of the folder to be listed (e.g. /folder1). Use an empty string for the root folder.',
            required: true,
        }),
        recursive: pieces_framework_1.Property.Checkbox({
            displayName: 'Recursive',
            description: 'If set to true, the list folder operation will be applied recursively to all subfolders and the response will contain contents of all subfolders.',
            defaultValue: false,
            required: false,
        }),
        limit: pieces_framework_1.Property.Number({
            displayName: 'Limit',
            description: 'The maximum number of results to return (between 1 and 2000). Default is 2000 if not specified.',
            required: false,
        }),
    },
    run(context) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const params = {
                path: context.propsValue.path,
                recursive: context.propsValue.recursive,
                limit: context.propsValue.limit || 2000,
            };
            const result = yield pieces_common_1.httpClient.sendRequest({
                method: pieces_common_1.HttpMethod.POST,
                url: `https://api.dropboxapi.com/2/files/list_folder`,
                headers: {
                    'Content-Type': 'application/json',
                },
                body: params,
                authentication: {
                    type: pieces_common_1.AuthenticationType.BEARER_TOKEN,
                    token: context.auth.access_token,
                },
            });
            return result.body;
        });
    },
});
//# sourceMappingURL=list-a-folder.js.map