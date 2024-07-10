"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dropboxCreateNewFolder = void 0;
const tslib_1 = require("tslib");
const pieces_framework_1 = require("@activepieces/pieces-framework");
const pieces_common_1 = require("@activepieces/pieces-common");
const __1 = require("../../");
exports.dropboxCreateNewFolder = (0, pieces_framework_1.createAction)({
    auth: __1.dropboxAuth,
    name: 'create_new_dropbox_folder',
    description: 'Create a new empty folder',
    displayName: 'Create New Folder',
    props: {
        path: pieces_framework_1.Property.ShortText({
            displayName: 'Path',
            description: 'The path of the new folder e.g. /Homework/math',
            required: true,
        }),
        autorename: pieces_framework_1.Property.Checkbox({
            displayName: 'Auto Rename',
            description: "If there's a conflict, have the Dropbox server try to autorename the folder to avoid the conflict. The default for this field is False.",
            required: false,
        }),
    },
    run(context) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const body = {
                autorename: context.propsValue.autorename ? true : false,
                path: context.propsValue.path,
            };
            const request = {
                method: pieces_common_1.HttpMethod.POST,
                url: `https://api.dropboxapi.com/2/files/create_folder_v2`,
                body,
                authentication: {
                    type: pieces_common_1.AuthenticationType.BEARER_TOKEN,
                    token: context.auth.access_token,
                },
            };
            const result = yield pieces_common_1.httpClient.sendRequest(request);
            console.debug('Folder creation response', result);
            if (result.status == 200) {
                return result.body;
            }
            else {
                return result;
            }
        });
    },
});
//# sourceMappingURL=create-new-folder.js.map