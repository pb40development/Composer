"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.amazons3UploadFile = void 0;
const tslib_1 = require("tslib");
const pieces_framework_1 = require("@activepieces/pieces-framework");
const __1 = require("../..");
const common_1 = require("../common");
exports.amazons3UploadFile = (0, pieces_framework_1.createAction)({
    auth: __1.amazonS3Auth,
    name: 'upload-file',
    displayName: 'Upload File',
    description: 'Upload an File to S3',
    props: {
        file: pieces_framework_1.Property.File({
            displayName: 'File',
            required: true,
        }),
        fileName: pieces_framework_1.Property.ShortText({
            displayName: 'File Name',
            required: false,
            description: 'my-file-name (no extension)',
        }),
        acl: pieces_framework_1.Property.StaticDropdown({
            displayName: 'ACL',
            required: false,
            options: {
                options: [
                    {
                        label: 'private',
                        value: 'private',
                    },
                    {
                        label: 'public-read',
                        value: 'public-read',
                    },
                    {
                        label: 'public-read-write',
                        value: 'public-read-write',
                    },
                    {
                        label: 'authenticated-read',
                        value: 'authenticated-read',
                    },
                    {
                        label: 'aws-exec-read',
                        value: 'aws-exec-read',
                    },
                    {
                        label: 'bucket-owner-read',
                        value: 'bucket-owner-read',
                    },
                    {
                        label: 'bucket-owner-full-control',
                        value: 'bucket-owner-full-control',
                    },
                ],
            },
        }),
        type: pieces_framework_1.Property.StaticDropdown({
            displayName: 'Type',
            required: true,
            options: {
                options: [
                    {
                        label: 'image/png',
                        value: 'image/png',
                    },
                    {
                        label: 'image/jpeg',
                        value: 'image/jpeg',
                    },
                    {
                        label: 'image/gif',
                        value: 'image/gif',
                    },
                    {
                        label: 'audio/mpeg',
                        value: 'audio/mpeg',
                    },
                    {
                        label: 'audio/wav',
                        value: 'audio/wav',
                    },
                    {
                        label: 'video/mp4',
                        value: 'video/mp4',
                    },
                    {
                        label: 'application/pdf',
                        value: 'application/pdf',
                    },
                    {
                        label: 'application/msword',
                        value: 'application/msword',
                    },
                    {
                        label: 'text/plain',
                        value: 'text/plain',
                    },
                    {
                        label: 'application/json',
                        value: 'application/json',
                    },
                ],
            },
        }),
    },
    run(context) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const { bucket } = context.auth;
            const { file, fileName, acl, type } = context.propsValue;
            const s3 = (0, common_1.createS3)(context.auth);
            const contentType = type;
            const [_, ext] = contentType.split('/');
            const extension = '.' + ext;
            const generatedName = new Date().toISOString() + Date.now() + extension;
            const finalFileName = fileName ? fileName + extension : generatedName;
            const uploadResponse = yield s3.putObject({
                Bucket: bucket,
                Key: finalFileName,
                ACL: acl,
                ContentType: contentType,
                Body: file.data,
            });
            return {
                fileName: finalFileName,
                etag: uploadResponse.ETag,
            };
        });
    },
});
//# sourceMappingURL=upload-file.js.map