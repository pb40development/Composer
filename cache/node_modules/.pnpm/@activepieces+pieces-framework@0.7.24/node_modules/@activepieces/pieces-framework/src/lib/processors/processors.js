"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Processors = void 0;
const tslib_1 = require("tslib");
const dayjs_1 = tslib_1.__importDefault(require("dayjs"));
const timezone_1 = tslib_1.__importDefault(require("dayjs/plugin/timezone"));
const utc_1 = tslib_1.__importDefault(require("dayjs/plugin/utc"));
const is_base64_1 = tslib_1.__importDefault(require("is-base64"));
const axios_1 = tslib_1.__importDefault(require("axios"));
const shared_1 = require("@activepieces/shared");
const file_property_1 = require("../property/input/file-property");
class Processors {
}
exports.Processors = Processors;
_a = Processors;
Processors.json = (property, value) => {
    if ((0, shared_1.isNil)(value)) {
        return value;
    }
    try {
        if (typeof value === 'object') {
            return value;
        }
        return JSON.parse(value);
    }
    catch (error) {
        console.error(error);
        return undefined;
    }
};
Processors.number = (property, value) => {
    if ((0, shared_1.isNil)(value)) {
        return value;
    }
    if (value === '') {
        return NaN;
    }
    return Number(value);
};
Processors.string = (property, value) => {
    if ((0, shared_1.isNil)(value)) {
        return value;
    }
    if (typeof value === 'object') {
        return JSON.stringify(value);
    }
    return value.toString();
};
Processors.datetime = (property, value) => {
    dayjs_1.default.extend(utc_1.default);
    dayjs_1.default.extend(timezone_1.default);
    const dateTimeString = value;
    try {
        if (!dateTimeString)
            throw Error('Undefined input');
        return dayjs_1.default.tz(dateTimeString, 'UTC').toISOString();
    }
    catch (error) {
        console.error(error);
        return undefined;
    }
};
Processors.file = (property, urlOrBase64) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    // convertUrlOrBase64ToFile
    if ((0, shared_1.isNil)(urlOrBase64) || !(0, shared_1.isString)(urlOrBase64)) {
        return null;
    }
    // Get the file from the URL
    try {
        // Check if the string is a Base64 string
        if ((0, is_base64_1.default)(urlOrBase64, { allowMime: true })) {
            const matches = urlOrBase64.match(/^data:([A-Za-z-+/]+);base64,(.+)$/);
            let base64 = urlOrBase64;
            let contentType = null;
            if (matches && (matches === null || matches === void 0 ? void 0 : matches.length) === 3) {
                contentType = matches[1];
                base64 = matches[2];
                // You need to provide how you decide filename and extension in case of base64 string
                const filename = 'unknown';
                const extension = contentType.split('/')[1];
                return new file_property_1.ApFile(filename + '.' + extension, Buffer.from(base64, 'base64'), extension);
            }
        }
        const response = yield axios_1.default.head(urlOrBase64);
        const contentType = response.headers['content-type'];
        console.info(`Content type: ${contentType}`);
        // Check if content type is file
        if (!contentType ||
            !(contentType.startsWith('application/') ||
                contentType.startsWith('image') ||
                contentType.startsWith('audio') ||
                contentType.startsWith('video') ||
                contentType === 'application/octet-stream')) {
            return null;
        }
        const fileResponse = yield axios_1.default.get(urlOrBase64, {
            responseType: 'arraybuffer',
        });
        // Get filename and extension
        const filename = urlOrBase64.substring(urlOrBase64.lastIndexOf('/') + 1);
        const extension = filename.split('.').pop();
        // Return the ApFile object
        return new file_property_1.ApFile(filename, Buffer.from(fileResponse.data, 'binary'), extension);
    }
    catch (e) {
        console.error(e);
        return null;
    }
});
//# sourceMappingURL=processors.js.map