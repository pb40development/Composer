"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dropboxUploadFile = void 0;
const tslib_1 = require("tslib");
const pieces_framework_1 = require("@activepieces/pieces-framework");
const pieces_common_1 = require("@activepieces/pieces-common");
const __1 = require("../../");
exports.dropboxUploadFile = (0, pieces_framework_1.createAction)({
    auth: __1.dropboxAuth,
    name: 'upload_dropbox_file',
    description: 'Upload a file',
    displayName: 'Upload file',
    props: {
        path: pieces_framework_1.Property.ShortText({
            displayName: 'Path',
            description: 'The path where the file should be saved (e.g. /folder1/file.txt)',
            required: true,
        }),
        file: pieces_framework_1.Property.File({
            displayName: 'File',
            description: 'The file URL or base64 to upload',
            required: true,
        }),
        autorename: pieces_framework_1.Property.Checkbox({
            displayName: 'Auto Rename',
            description: "If there's a conflict, as determined by mode, have the Dropbox server try to autorename the file to avoid conflict.",
            defaultValue: false,
            required: false,
        }),
        mute: pieces_framework_1.Property.Checkbox({
            displayName: 'Mute',
            description: "Normally, users are made aware of any file modifications in their Dropbox account via notifications in the client software. If true, this tells the clients that this modification shouldn't result in a user notification.",
            required: false,
        }),
        strict_conflict: pieces_framework_1.Property.Checkbox({
            displayName: 'Strict conflict',
            description: 'Be more strict about how each WriteMode detects conflict. For example, always return a conflict error when mode = WriteMode.update and the given "rev" doesn\'t match the existing file\'s "rev", even if the existing file has been deleted.',
            required: false,
        }),
    },
    run(context) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const fileData = context.propsValue.file;
            const params = {
                autorename: context.propsValue.autorename,
                path: context.propsValue.path,
                mode: 'add',
                mute: context.propsValue.mute,
                strict_conflict: context.propsValue.strict_conflict,
            };
            const fileBuffer = Buffer.from(fileData.base64, 'base64');
            const result = yield pieces_common_1.httpClient.sendRequest({
                method: pieces_common_1.HttpMethod.POST,
                url: `https://content.dropboxapi.com/2/files/upload`,
                body: fileBuffer,
                headers: {
                    'Dropbox-API-Arg': JSON.stringify(params),
                    'Content-Type': 'application/octet-stream',
                },
                authentication: {
                    type: pieces_common_1.AuthenticationType.BEARER_TOKEN,
                    token: context.auth.access_token,
                },
            });
            return result.body;
        });
    },
});
//# sourceMappingURL=upload-file.js.map