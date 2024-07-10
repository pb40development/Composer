"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dropboxDeleteFile = void 0;
const tslib_1 = require("tslib");
const pieces_framework_1 = require("@activepieces/pieces-framework");
const pieces_common_1 = require("@activepieces/pieces-common");
const __1 = require("../../");
exports.dropboxDeleteFile = (0, pieces_framework_1.createAction)({
    auth: __1.dropboxAuth,
    name: 'delete_dropbox_file',
    description: 'Delete a file',
    displayName: 'Delete file',
    props: {
        path: pieces_framework_1.Property.ShortText({
            displayName: 'Path',
            description: 'The path of the file to be deleted (e.g. /folder1/file.txt)',
            required: true,
        }),
    },
    run(context) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const params = {
                path: context.propsValue.path,
            };
            const result = yield pieces_common_1.httpClient.sendRequest({
                method: pieces_common_1.HttpMethod.POST,
                url: `https://api.dropboxapi.com/2/files/delete_v2`,
                headers: {
                    'Content-Type': 'application/json',
                },
                body: { path: context.propsValue.path },
                authentication: {
                    type: pieces_common_1.AuthenticationType.BEARER_TOKEN,
                    token: context.auth.access_token,
                },
            });
            return result.body;
        });
    },
});
//# sourceMappingURL=delete-file.js.map