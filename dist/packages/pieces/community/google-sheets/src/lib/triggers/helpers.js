"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transformWorkSheetValues = exports.hashObject = exports.isChangeContentMessage = exports.isSyncMessage = exports.deleteFileNotification = exports.createFileNotification = exports.getWorkSheetValues = exports.getWorkSheetName = void 0;
const tslib_1 = require("tslib");
const googleapis_1 = require("googleapis");
const googleapis_common_1 = require("googleapis-common");
const nanoid_1 = require("nanoid");
const dayjs_1 = tslib_1.__importDefault(require("dayjs"));
const crypto_1 = tslib_1.__importDefault(require("crypto"));
const common_1 = require("../common/common");
function getWorkSheetName(auth, spreadSheetId, sheetId) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        var _a, _b, _c;
        const authClient = new googleapis_common_1.OAuth2Client();
        authClient.setCredentials(auth);
        const sheets = googleapis_1.google.sheets({ version: 'v4', auth: authClient });
        const res = yield sheets.spreadsheets.get({ spreadsheetId: spreadSheetId });
        const sheetName = (_c = (_b = (_a = res.data.sheets) === null || _a === void 0 ? void 0 : _a.find((f) => { var _a; return ((_a = f.properties) === null || _a === void 0 ? void 0 : _a.sheetId) == sheetId; })) === null || _b === void 0 ? void 0 : _b.properties) === null || _c === void 0 ? void 0 : _c.title;
        if (!sheetName) {
            throw Error(`Sheet with ID ${sheetId} not found in spreadsheet ${spreadSheetId}`);
        }
        return sheetName;
    });
}
exports.getWorkSheetName = getWorkSheetName;
function getWorkSheetValues(auth, spreadsheetId, range) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        var _a;
        const authClient = new googleapis_common_1.OAuth2Client();
        authClient.setCredentials(auth);
        const sheets = googleapis_1.google.sheets({ version: 'v4', auth: authClient });
        const res = yield sheets.spreadsheets.values.get({
            spreadsheetId: spreadsheetId,
            range: range,
        });
        return (_a = res.data.values) !== null && _a !== void 0 ? _a : [];
    });
}
exports.getWorkSheetValues = getWorkSheetValues;
function createFileNotification(auth, fileId, url) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const authClient = new googleapis_common_1.OAuth2Client();
        authClient.setCredentials(auth);
        const drive = googleapis_1.google.drive({ version: 'v3', auth: authClient });
        // create unique UUID for channel
        const channelId = (0, nanoid_1.nanoid)();
        return yield drive.files.watch({
            fileId: fileId,
            requestBody: {
                id: channelId,
                expiration: ((0, dayjs_1.default)().add(6, 'day').unix() * 1000).toString(),
                type: 'web_hook',
                address: url,
            },
        });
    });
}
exports.createFileNotification = createFileNotification;
function deleteFileNotification(auth, channelId, resourceId) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const authClient = new googleapis_common_1.OAuth2Client();
        authClient.setCredentials(auth);
        const drive = googleapis_1.google.drive({ version: 'v3', auth: authClient });
        return yield drive.channels.stop({
            requestBody: {
                id: channelId,
                resourceId: resourceId,
            },
        });
    });
}
exports.deleteFileNotification = deleteFileNotification;
function isSyncMessage(headers) {
    return headers['x-goog-resource-state'] === 'sync';
}
exports.isSyncMessage = isSyncMessage;
function isChangeContentMessage(headers) {
    // https://developers.google.com/drive/api/guides/push#respond-to-notifications
    return (headers['x-goog-resource-state'] === 'update' &&
        ['content', 'properties', 'content,properties'].includes(headers['x-goog-changed']));
}
exports.isChangeContentMessage = isChangeContentMessage;
function hashObject(obj) {
    const hash = crypto_1.default.createHash('sha256');
    hash.update(JSON.stringify(obj));
    return hash.digest('hex');
}
exports.hashObject = hashObject;
function transformWorkSheetValues(rowValues, oldRowCount) {
    const result = [];
    for (let i = 0; i < rowValues.length; i++) {
        const values = {};
        for (let j = 0; j < rowValues[i].length; j++) {
            values[(0, common_1.columnToLabel)(j)] = rowValues[i][j];
        }
        result.push({
            row: oldRowCount + i + 1,
            values,
        });
    }
    return result;
}
exports.transformWorkSheetValues = transformWorkSheetValues;
//# sourceMappingURL=helpers.js.map