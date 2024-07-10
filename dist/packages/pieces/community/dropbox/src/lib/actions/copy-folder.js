"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dropboxCopyFolder = void 0;
const tslib_1 = require("tslib");
const pieces_framework_1 = require("@activepieces/pieces-framework");
const pieces_common_1 = require("@activepieces/pieces-common");
const __1 = require("../../");
exports.dropboxCopyFolder = (0, pieces_framework_1.createAction)({
    auth: __1.dropboxAuth,
    name: 'copy_dropbox_folder',
    description: 'Copy a folder',
    displayName: 'Copy folder',
    props: {
        from_path: pieces_framework_1.Property.ShortText({
            displayName: 'From Path',
            description: 'The source path of the folder (e.g. /folder1/sourceFolder)',
            required: true,
        }),
        to_path: pieces_framework_1.Property.ShortText({
            displayName: 'To Path',
            description: 'The destination path for the copied folder (e.g. /folder2/destinationFolder)',
            required: true,
        }),
        autorename: pieces_framework_1.Property.Checkbox({
            displayName: 'Auto Rename',
            description: "If there's a conflict, have the Dropbox server try to autorename the folder to avoid conflict.",
            defaultValue: false,
            required: false,
        }),
        allow_ownership_transfer: pieces_framework_1.Property.Checkbox({
            displayName: 'Allow Ownership Transfer',
            description: 'Allows copy by owner even if it would result in an ownership transfer.',
            defaultValue: false,
            required: false,
        }),
    },
    run(context) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const params = {
                from_path: context.propsValue.from_path,
                to_path: context.propsValue.to_path,
                autorename: context.propsValue.autorename,
                allow_ownership_transfer: context.propsValue.allow_ownership_transfer,
            };
            const result = yield pieces_common_1.httpClient.sendRequest({
                method: pieces_common_1.HttpMethod.POST,
                url: `https://api.dropboxapi.com/2/files/copy_v2`,
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
//# sourceMappingURL=copy-folder.js.map