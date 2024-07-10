"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dropboxCreateNewTextFile = void 0;
const tslib_1 = require("tslib");
const pieces_framework_1 = require("@activepieces/pieces-framework");
const pieces_common_1 = require("@activepieces/pieces-common");
const __1 = require("../../");
exports.dropboxCreateNewTextFile = (0, pieces_framework_1.createAction)({
    auth: __1.dropboxAuth,
    name: 'create_new_dropbox_text_file',
    description: 'Create a new text file from text input',
    displayName: 'Create New Text File',
    props: {
        path: pieces_framework_1.Property.ShortText({
            displayName: 'Path',
            description: 'The path of the new folder e.g. /Homework/math',
            required: true,
        }),
        text: pieces_framework_1.Property.LongText({
            displayName: 'Text',
            description: 'The text to write into the file.',
            required: true,
        }),
        autorename: pieces_framework_1.Property.Checkbox({
            displayName: 'Autorename',
            description: "If there's a conflict, have the Dropbox server try to autorename the folder to avoid the conflict. The default for this field is False.",
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
            const params = {
                autorename: context.propsValue.autorename,
                path: context.propsValue.path,
                mode: 'add',
                mute: context.propsValue.mute,
                strict_conflict: context.propsValue.strict_conflict,
            };
            const request = {
                method: pieces_common_1.HttpMethod.POST,
                url: `https://content.dropboxapi.com/2/files/upload`,
                body: Buffer.from(context.propsValue.text, 'utf-8'),
                authentication: {
                    type: pieces_common_1.AuthenticationType.BEARER_TOKEN,
                    token: context.auth.access_token,
                },
                headers: {
                    'Dropbox-API-Arg': JSON.stringify(params),
                    'Content-Type': 'application/octet-stream',
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
//# sourceMappingURL=create-new-text-file.js.map