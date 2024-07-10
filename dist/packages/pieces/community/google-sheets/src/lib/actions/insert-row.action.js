"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.insertRowAction = void 0;
const tslib_1 = require("tslib");
const pieces_framework_1 = require("@activepieces/pieces-framework");
const common_1 = require("../common/common");
const __1 = require("../..");
const shared_1 = require("@activepieces/shared");
exports.insertRowAction = (0, pieces_framework_1.createAction)({
    auth: __1.googleSheetsAuth,
    name: 'insert_row',
    description: 'Append a row of values to an existing sheet',
    displayName: 'Insert Row',
    props: {
        spreadsheet_id: common_1.googleSheetsCommon.spreadsheet_id,
        include_team_drives: common_1.googleSheetsCommon.include_team_drives,
        sheet_id: common_1.googleSheetsCommon.sheet_id,
        as_string: pieces_framework_1.Property.Checkbox({
            displayName: 'As String',
            description: 'Inserted values that are dates and formulas will be entered strings and have no effect',
            required: false,
        }),
        first_row_headers: pieces_framework_1.Property.Checkbox({
            displayName: 'Does the first row contain headers?',
            description: 'If the first row is headers',
            required: true,
            defaultValue: false,
        }),
        values: common_1.googleSheetsCommon.values,
    },
    run(_a) {
        return tslib_1.__awaiter(this, arguments, void 0, function* ({ propsValue, auth }) {
            const values = propsValue['values'];
            const sheetName = yield common_1.googleSheetsCommon.findSheetName(auth['access_token'], propsValue['spreadsheet_id'], propsValue['sheet_id']);
            let formattedValues;
            if (propsValue.first_row_headers) {
                formattedValues = (0, common_1.objectToArray)(values);
                for (let i = 0; i < formattedValues.length; i++) {
                    if ((0, shared_1.isNil)(formattedValues[i]))
                        formattedValues[i] = '';
                }
            }
            else {
                formattedValues = values['values'];
            }
            const res = yield common_1.googleSheetsCommon.appendGoogleSheetValues({
                accessToken: auth['access_token'],
                majorDimension: common_1.Dimension.COLUMNS,
                range: sheetName,
                spreadSheetId: propsValue['spreadsheet_id'],
                valueInputOption: propsValue['as_string']
                    ? common_1.ValueInputOption.RAW
                    : common_1.ValueInputOption.USER_ENTERED,
                values: (0, common_1.stringifyArray)(formattedValues),
            });
            //Split the updatedRange string to extract the row number
            const updatedRangeParts = res.body.updates.updatedRange.split('!');
            const updatedRowRange = updatedRangeParts[1];
            const updatedRowNumber = parseInt(updatedRowRange.split(':')[0].substring(1), 10);
            return Object.assign(Object.assign({}, res.body), { row: updatedRowNumber });
        });
    },
});
//# sourceMappingURL=insert-row.action.js.map