"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dimension = exports.ValueInputOption = exports.stringifyArray = exports.objectToArray = exports.labelToColumn = exports.columnToLabel = exports.getAllGoogleSheetRows = exports.getGoogleSheetRows = exports.findSheetName = exports.googleSheetsCommon = void 0;
const tslib_1 = require("tslib");
const pieces_framework_1 = require("@activepieces/pieces-framework");
const pieces_common_1 = require("@activepieces/pieces-common");
const shared_1 = require("@activepieces/shared");
exports.googleSheetsCommon = {
    baseUrl: 'https://sheets.googleapis.com/v4/spreadsheets',
    include_team_drives: pieces_framework_1.Property.Checkbox({
        displayName: 'Include Team Drive Sheets',
        description: 'Determines if sheets from Team Drives should be included in the results.',
        defaultValue: false,
        required: false,
    }),
    spreadsheet_id: pieces_framework_1.Property.Dropdown({
        displayName: 'Spreadsheet',
        required: true,
        refreshOnSearch: true,
        refreshers: ['include_team_drives'],
        options: (_a, _b) => tslib_1.__awaiter(void 0, [_a, _b], void 0, function* ({ auth, include_team_drives }, { searchValue }) {
            if (!auth) {
                return {
                    disabled: true,
                    options: [],
                    placeholder: 'Please authenticate first',
                };
            }
            const queries = ["mimeType='application/vnd.google-apps.spreadsheet'", "trashed=false"];
            if (searchValue) {
                queries.push(`name contains '${searchValue}'`);
            }
            const authProp = auth;
            const spreadsheets = (yield pieces_common_1.httpClient.sendRequest({
                method: pieces_common_1.HttpMethod.GET,
                url: `https://www.googleapis.com/drive/v3/files`,
                queryParams: {
                    q: queries.join(' and '),
                    includeItemsFromAllDrives: include_team_drives ? 'true' : 'false',
                    supportsAllDrives: 'true',
                },
                authentication: {
                    type: pieces_common_1.AuthenticationType.BEARER_TOKEN,
                    token: authProp['access_token'],
                },
            })).body.files;
            return {
                disabled: false,
                options: spreadsheets.map((sheet) => {
                    return {
                        label: sheet.name,
                        value: sheet.id,
                    };
                }),
            };
        }),
    }),
    sheet_id: pieces_framework_1.Property.Dropdown({
        displayName: 'Sheet',
        required: true,
        refreshers: ['spreadsheet_id'],
        options: (_c) => tslib_1.__awaiter(void 0, [_c], void 0, function* ({ auth, spreadsheet_id }) {
            if (!auth || (spreadsheet_id !== null && spreadsheet_id !== void 0 ? spreadsheet_id : '').toString().length === 0) {
                return {
                    disabled: true,
                    options: [],
                    placeholder: 'Please select a spreadsheet first',
                };
            }
            const authProp = auth;
            const sheets = yield listSheetsName(authProp['access_token'], spreadsheet_id);
            return {
                disabled: false,
                options: sheets.map((sheet) => {
                    return {
                        label: sheet.properties.title,
                        value: sheet.properties.sheetId,
                    };
                }),
            };
        }),
    }),
    values: pieces_framework_1.Property.DynamicProperties({
        displayName: 'Values',
        description: 'The values to insert',
        required: true,
        refreshers: ['sheet_id', 'spreadsheet_id', 'first_row_headers'],
        props: (_d) => tslib_1.__awaiter(void 0, [_d], void 0, function* ({ auth, spreadsheet_id, sheet_id, first_row_headers }) {
            var _e, _f;
            if (!auth ||
                (spreadsheet_id !== null && spreadsheet_id !== void 0 ? spreadsheet_id : '').toString().length === 0 ||
                (sheet_id !== null && sheet_id !== void 0 ? sheet_id : '').toString().length === 0) {
                return {};
            }
            const authentication = auth;
            const values = yield exports.googleSheetsCommon.getValues(spreadsheet_id, (0, pieces_common_1.getAccessTokenOrThrow)(authentication), sheet_id);
            if (!first_row_headers) {
                return {
                    values: pieces_framework_1.Property.Array({
                        displayName: 'Values',
                        required: true,
                    }),
                };
            }
            const firstRow = (_f = (_e = values === null || values === void 0 ? void 0 : values[0]) === null || _e === void 0 ? void 0 : _e.values) !== null && _f !== void 0 ? _f : [];
            const properties = {};
            for (const key in firstRow) {
                properties[key] = pieces_framework_1.Property.ShortText({
                    displayName: firstRow[key].toString(),
                    description: firstRow[key].toString(),
                    required: false,
                    defaultValue: '',
                });
            }
            return properties;
        }),
    }),
    columnName: pieces_framework_1.Property.Dropdown({
        description: 'Column Name',
        displayName: 'The name of the column to search in',
        required: true,
        refreshers: ['sheet_id', 'spreadsheet_id'],
        options: (context) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
            var _g;
            const authentication = context.auth;
            const spreadsheet_id = context.spreadsheet_id;
            const sheet_id = context.sheet_id;
            const accessToken = (_g = authentication['access_token']) !== null && _g !== void 0 ? _g : '';
            if (!context.auth ||
                (spreadsheet_id !== null && spreadsheet_id !== void 0 ? spreadsheet_id : '').toString().length === 0 ||
                (sheet_id !== null && sheet_id !== void 0 ? sheet_id : '').toString().length === 0) {
                return {
                    disabled: true,
                    options: [],
                    placeholder: 'Please select a sheet first',
                };
            }
            const sheetName = yield exports.googleSheetsCommon.findSheetName(accessToken, spreadsheet_id, sheet_id);
            if (!sheetName) {
                throw Error('Sheet not found in spreadsheet');
            }
            const values = yield exports.googleSheetsCommon.getValues(spreadsheet_id, accessToken, sheet_id);
            const ret = [];
            const firstRow = values[0].values;
            const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
            if (firstRow.length === 0) {
                let columnSize = 1;
                for (const row of values) {
                    columnSize = Math.max(columnSize, row.values.length);
                }
                for (let i = 0; i < columnSize; i++) {
                    ret.push({
                        label: alphabet[i].toUpperCase(),
                        value: alphabet[i],
                    });
                }
            }
            else {
                let index = 0;
                for (const key in firstRow) {
                    let value = 'A';
                    if (index >= alphabet.length) {
                        // if the index is greater than the length of the alphabet, we need to add another letter
                        const firstLetter = alphabet[Math.floor(index / alphabet.length) - 1];
                        const secondLetter = alphabet[index % alphabet.length];
                        value = firstLetter + secondLetter;
                    }
                    else {
                        value = alphabet[index];
                    }
                    ret.push({
                        label: firstRow[key].toString(),
                        value: value,
                    });
                    index++;
                }
            }
            return {
                options: ret,
                disabled: false,
            };
        }),
    }),
    getValues: getValues,
    appendGoogleSheetValues: appendGoogleSheetValues,
    updateGoogleSheetRow: updateGoogleSheetRow,
    findSheetName: findSheetName,
    deleteRow: deleteRow,
    clearSheet: clearSheet,
};
function findSheetName(access_token, spreadsheetId, sheetId) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        var _a;
        const sheets = yield listSheetsName(access_token, spreadsheetId);
        const sheetName = (_a = sheets.find((f) => f.properties.sheetId === sheetId)) === null || _a === void 0 ? void 0 : _a.properties.title;
        if (!sheetName) {
            throw Error(`Sheet with ID ${sheetId} not found in spreadsheet ${spreadsheetId}`);
        }
        return sheetName;
    });
}
exports.findSheetName = findSheetName;
function getGoogleSheetRows(params) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const request = {
            method: pieces_common_1.HttpMethod.GET,
            url: `${exports.googleSheetsCommon.baseUrl}/${params.spreadSheetId}/values/${params.sheetName}!A${params.rowIndex_s}:ZZZ${params.rowIndex_e}`,
            authentication: {
                type: pieces_common_1.AuthenticationType.BEARER_TOKEN,
                token: params.accessToken,
            },
        };
        const response = yield pieces_common_1.httpClient.sendRequest(request);
        if (response.body.values === undefined)
            return [];
        const res = [];
        for (let i = 0; i < response.body.values.length; i++) {
            const values = {};
            for (let j = 0; j < response.body.values[i].length; j++) {
                values[(0, exports.columnToLabel)(j)] = response.body.values[i][j];
            }
            res.push({
                row: i + params.rowIndex_s,
                values,
            });
        }
        return res;
    });
}
exports.getGoogleSheetRows = getGoogleSheetRows;
function getAllGoogleSheetRows(params) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const request = {
            method: pieces_common_1.HttpMethod.GET,
            url: `${exports.googleSheetsCommon.baseUrl}/${params.spreadSheetId}/values/${params.sheetName}`,
            authentication: {
                type: pieces_common_1.AuthenticationType.BEARER_TOKEN,
                token: params.accessToken,
            },
        };
        const response = yield pieces_common_1.httpClient.sendRequest(request);
        if (response.body.values === undefined)
            return [];
        const res = [];
        for (let i = 0; i < response.body.values.length; i++) {
            const values = {};
            for (let j = 0; j < response.body.values[i].length; j++) {
                values[(0, exports.columnToLabel)(j)] = response.body.values[i][j];
            }
            res.push({
                row: i + 1,
                values,
            });
        }
        return res;
    });
}
exports.getAllGoogleSheetRows = getAllGoogleSheetRows;
function listSheetsName(access_token, spreadsheet_id) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        return (yield pieces_common_1.httpClient.sendRequest({
            method: pieces_common_1.HttpMethod.GET,
            url: `https://sheets.googleapis.com/v4/spreadsheets/` + spreadsheet_id,
            authentication: {
                type: pieces_common_1.AuthenticationType.BEARER_TOKEN,
                token: access_token,
            },
        })).body.sheets;
    });
}
function updateGoogleSheetRow(params) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        return pieces_common_1.httpClient.sendRequest({
            method: pieces_common_1.HttpMethod.PUT,
            url: `https://sheets.googleapis.com/v4/spreadsheets/${params.spreadSheetId}/values/${params.sheetName}!A${params.rowIndex}:ZZZ${params.rowIndex}`,
            body: {
                majorDimension: Dimension.ROWS,
                range: `${params.sheetName}!A${params.rowIndex}:ZZZ${params.rowIndex}`,
                values: [params.values],
            },
            authentication: {
                type: pieces_common_1.AuthenticationType.BEARER_TOKEN,
                token: params.accessToken,
            },
            queryParams: {
                valueInputOption: params.valueInputOption,
            },
        });
    });
}
function appendGoogleSheetValues(params) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const requestBody = {
            majorDimension: params.majorDimension,
            range: params.range + '!A:A',
            values: params.values.map((val) => ({ values: val })),
        };
        const request = {
            method: pieces_common_1.HttpMethod.POST,
            url: `https://sheets.googleapis.com/v4/spreadsheets/${params.spreadSheetId}/values/${params.range}!A:A:append`,
            body: requestBody,
            authentication: {
                type: pieces_common_1.AuthenticationType.BEARER_TOKEN,
                token: params.accessToken,
            },
            queryParams: {
                valueInputOption: params.valueInputOption,
            },
        };
        return pieces_common_1.httpClient.sendRequest(request);
    });
}
function getValues(spreadsheetId, accessToken, sheetId) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        // Define the API endpoint and headers
        // Send the API request
        const sheetName = yield findSheetName(accessToken, spreadsheetId, sheetId);
        if (!sheetName) {
            return [];
        }
        const request = {
            method: pieces_common_1.HttpMethod.GET,
            url: `${exports.googleSheetsCommon.baseUrl}/${spreadsheetId}/values/${sheetName}`,
            authentication: {
                type: pieces_common_1.AuthenticationType.BEARER_TOKEN,
                token: accessToken,
            },
        };
        const response = yield pieces_common_1.httpClient.sendRequest(request);
        if (response.body.values === undefined)
            return [];
        const res = [];
        for (let i = 0; i < response.body.values.length; i++) {
            const values = {};
            for (let j = 0; j < response.body.values[i].length; j++) {
                values[(0, exports.columnToLabel)(j)] = response.body.values[i][j];
            }
            res.push({
                row: i + 1,
                values,
            });
        }
        return res;
    });
}
const columnToLabel = (columnIndex) => {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let label = '';
    while (columnIndex >= 0) {
        label = alphabet[columnIndex % 26] + label;
        columnIndex = Math.floor(columnIndex / 26) - 1;
    }
    return label;
};
exports.columnToLabel = columnToLabel;
const labelToColumn = (label) => {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let column = 0;
    for (let i = 0; i < label.length; i++) {
        column +=
            (alphabet.indexOf(label[i]) + 1) * Math.pow(26, label.length - i - 1);
    }
    return column - 1;
};
exports.labelToColumn = labelToColumn;
function objectToArray(obj) {
    const maxIndex = Math.max(...Object.keys(obj).map((key) => (0, exports.labelToColumn)(key)));
    const arr = new Array(maxIndex + 1);
    for (const key in obj) {
        arr[(0, exports.labelToColumn)(key)] = obj[key];
    }
    return arr;
}
exports.objectToArray = objectToArray;
function stringifyArray(object) {
    return object.map((val) => {
        if ((0, shared_1.isString)(val)) {
            return val;
        }
        return JSON.stringify(val);
    });
}
exports.stringifyArray = stringifyArray;
function deleteRow(spreadsheetId, sheetId, rowIndex, accessToken) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const request = {
            method: pieces_common_1.HttpMethod.POST,
            url: `${exports.googleSheetsCommon.baseUrl}/${spreadsheetId}/:batchUpdate`,
            authentication: {
                type: pieces_common_1.AuthenticationType.BEARER_TOKEN,
                token: accessToken,
            },
            body: {
                requests: [
                    {
                        deleteDimension: {
                            range: {
                                sheetId: sheetId,
                                dimension: 'ROWS',
                                startIndex: rowIndex,
                                endIndex: rowIndex + 1,
                            },
                        },
                    },
                ],
            },
        };
        yield pieces_common_1.httpClient.sendRequest(request);
    });
}
function clearSheet(spreadsheetId, sheetId, accessToken, rowIndex, numOfRows) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const request = {
            method: pieces_common_1.HttpMethod.POST,
            url: `${exports.googleSheetsCommon.baseUrl}/${spreadsheetId}/:batchUpdate`,
            authentication: {
                type: pieces_common_1.AuthenticationType.BEARER_TOKEN,
                token: accessToken,
            },
            body: {
                requests: [
                    {
                        deleteDimension: {
                            range: {
                                sheetId: sheetId,
                                dimension: 'ROWS',
                                startIndex: rowIndex,
                                endIndex: rowIndex + numOfRows + 1,
                            },
                        },
                    },
                ],
            },
        };
        yield pieces_common_1.httpClient.sendRequest(request);
    });
}
var ValueInputOption;
(function (ValueInputOption) {
    ValueInputOption["RAW"] = "RAW";
    ValueInputOption["USER_ENTERED"] = "USER_ENTERED";
})(ValueInputOption || (exports.ValueInputOption = ValueInputOption = {}));
var Dimension;
(function (Dimension) {
    Dimension["ROWS"] = "ROWS";
    Dimension["COLUMNS"] = "COLUMNS";
})(Dimension || (exports.Dimension = Dimension = {}));
//# sourceMappingURL=common.js.map