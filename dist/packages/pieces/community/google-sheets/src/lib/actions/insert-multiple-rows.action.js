"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.insertMultipleRowsAction = void 0;
const tslib_1 = require("tslib");
const __1 = require("../../");
const pieces_framework_1 = require("@activepieces/pieces-framework");
const common_1 = require("../common/common");
const pieces_common_1 = require("@activepieces/pieces-common");
const helpers_1 = require("../triggers/helpers");
const googleapis_1 = require("googleapis");
const googleapis_common_1 = require("googleapis-common");
exports.insertMultipleRowsAction = (0, pieces_framework_1.createAction)({
    auth: __1.googleSheetsAuth,
    name: 'google-sheets-insert-multiple-rows',
    displayName: 'Insert Multiple Rows',
    description: 'Add one or more new rows in a specific spreadsheet.',
    props: {
        spreadsheet_id: common_1.googleSheetsCommon.spreadsheet_id,
        include_team_drives: common_1.googleSheetsCommon.include_team_drives,
        sheet_id: common_1.googleSheetsCommon.sheet_id,
        as_string: pieces_framework_1.Property.Checkbox({
            displayName: 'As String',
            description: 'Inserted values that are dates and formulas will be entered as strings and have no effect',
            required: false,
        }),
        values: pieces_framework_1.Property.DynamicProperties({
            displayName: 'Values',
            description: 'The values to insert.',
            required: true,
            refreshers: ['sheet_id', 'spreadsheet_id'],
            props: (_a) => tslib_1.__awaiter(void 0, [_a], void 0, function* ({ auth, sheet_id, spreadsheet_id }) {
                var _b, _c;
                if (!auth ||
                    (spreadsheet_id !== null && spreadsheet_id !== void 0 ? spreadsheet_id : '').toString().length === 0 ||
                    (sheet_id !== null && sheet_id !== void 0 ? sheet_id : '').toString().length === 0) {
                    return {};
                }
                const fields = {};
                const authentication = auth;
                const values = yield common_1.googleSheetsCommon.getValues(spreadsheet_id, (0, pieces_common_1.getAccessTokenOrThrow)(authentication), sheet_id);
                const firstRow = (_c = (_b = values === null || values === void 0 ? void 0 : values[0]) === null || _b === void 0 ? void 0 : _b.values) !== null && _c !== void 0 ? _c : [];
                const columns = {};
                for (const key in firstRow) {
                    columns[key] = pieces_framework_1.Property.ShortText({
                        displayName: firstRow[key].toString(),
                        description: firstRow[key].toString(),
                        required: false,
                        defaultValue: '',
                    });
                }
                fields['values'] = pieces_framework_1.Property.Array({
                    displayName: 'Values',
                    required: false,
                    properties: columns,
                });
                return fields;
            }),
        }),
    },
    run(context) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const spreadSheetId = context.propsValue.spreadsheet_id;
            const sheetId = context.propsValue.sheet_id;
            const rowValuesInput = context.propsValue.values['values'];
            const sheetName = yield (0, helpers_1.getWorkSheetName)(context.auth, spreadSheetId, sheetId);
            const formattedValues = [];
            for (const rowInput of rowValuesInput) {
                formattedValues.push((0, common_1.objectToArray)(rowInput));
            }
            const authClient = new googleapis_common_1.OAuth2Client();
            authClient.setCredentials(context.auth);
            const sheets = googleapis_1.google.sheets({ version: 'v4', auth: authClient });
            const response = yield sheets.spreadsheets.values.append({
                range: sheetName + '!A:A',
                spreadsheetId: spreadSheetId,
                valueInputOption: context.propsValue.as_string
                    ? common_1.ValueInputOption.RAW
                    : common_1.ValueInputOption.USER_ENTERED,
                requestBody: {
                    values: formattedValues,
                    majorDimension: common_1.Dimension.ROWS,
                },
            });
            return response.data;
        });
    },
});
//# sourceMappingURL=insert-multiple-rows.action.js.map