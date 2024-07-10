"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.readFile = void 0;
const tslib_1 = require("tslib");
const pieces_framework_1 = require("@activepieces/pieces-framework");
const __1 = require("../..");
const common_1 = require("../common");
exports.readFile = (0, pieces_framework_1.createAction)({
    auth: __1.amazonS3Auth,
    name: 'read-file',
    displayName: 'Read File',
    description: 'Read a file from S3 to use it in other steps',
    props: {
        key: pieces_framework_1.Property.ShortText({
            displayName: 'Key',
            description: 'The key of the file to read',
            required: true,
        }),
    },
    run(context) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            var _a;
            const { bucket } = context.auth;
            const { key } = context.propsValue;
            const s3 = (0, common_1.createS3)(context.auth);
            const file = yield s3.getObject({
                Bucket: bucket,
                Key: key,
            });
            const base64 = yield ((_a = file.Body) === null || _a === void 0 ? void 0 : _a.transformToString('base64'));
            if (!base64) {
                throw new Error(`Could not read file ${key} from S3`);
            }
            return yield context.files.write({
                fileName: key,
                data: Buffer.from(base64, 'base64'),
            });
        });
    },
});
//# sourceMappingURL=read-file.js.map