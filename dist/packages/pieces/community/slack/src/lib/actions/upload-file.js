"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadFile = void 0;
const tslib_1 = require("tslib");
const pieces_framework_1 = require("@activepieces/pieces-framework");
const index_1 = require("../../index");
const web_api_1 = require("@slack/web-api");
exports.uploadFile = (0, pieces_framework_1.createAction)({
    auth: index_1.slackAuth,
    name: 'uploadFile',
    displayName: 'Upload file',
    description: 'Upload file without sharing it to a channel or user',
    props: {
        file: pieces_framework_1.Property.File({
            displayName: 'Attachment',
            required: true,
        }),
        title: pieces_framework_1.Property.ShortText({
            displayName: 'Title',
            required: false,
        }),
        filename: pieces_framework_1.Property.ShortText({
            displayName: 'Filename',
            required: false,
        }),
    },
    run(context) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const token = context.auth.access_token;
            const { file, title, filename } = context.propsValue;
            const client = new web_api_1.WebClient(token);
            return yield client.files.uploadV2({
                file_uploads: [{ file: file.data, filename: filename || file.filename }],
                title: title,
            });
        });
    },
});
//# sourceMappingURL=upload-file.js.map