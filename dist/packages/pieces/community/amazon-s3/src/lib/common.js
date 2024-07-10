"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createS3 = void 0;
const shared_1 = require("@activepieces/shared");
const client_s3_1 = require("@aws-sdk/client-s3");
function createS3(auth) {
    const s3 = new client_s3_1.S3({
        credentials: {
            accessKeyId: auth.accessKeyId,
            secretAccessKey: auth.secretAccessKey,
        },
        forcePathStyle: auth.endpoint ? true : undefined,
        region: auth.region,
        endpoint: auth.endpoint === '' || (0, shared_1.isNil)(auth.endpoint) ? undefined : auth.endpoint,
    });
    return s3;
}
exports.createS3 = createS3;
//# sourceMappingURL=common.js.map