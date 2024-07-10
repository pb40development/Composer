"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateRowAction = void 0;
const tslib_1 = require("tslib");
const pieces_framework_1 = require("@activepieces/pieces-framework");
const common_1 = require("../common/common");
const common_2 = require("../common/common");
const __1 = require("../..");
exports.updateRowAction = (0, pieces_framework_1.createAction)({
    auth: __1.googleSheetsAuth,
    name: 'update_row',
    description: 'Overwrite values in an existing row',
    displayName: 'Update Row',
    props: {
        spreadsheet_id: common_2.googleSheetsCommon.spreadsheet_id,
        include_team_drives: common_2.googleSheetsCommon.include_team_drives,
        sheet_id: common_2.googleSheetsCommon.sheet_id,
        row_id: pieces_framework_1.Property.Number({
            displayName: 'Row Number',
            description: 'The row number to update',
            required: true,
        }),
        first_row_headers: pieces_framework_1.Property.Checkbox({
            displayName: 'Does the first row contain headers?',
            description: 'If the first row is headers',
            required: true,
            defaultValue: false,
        }),
        values: common_2.googleSheetsCommon.values,
    },
    run(_a) {
        return tslib_1.__awaiter(this, arguments, void 0, function* ({ propsValue, auth }) {
            const { spreadsheet_id, sheet_id, values, row_id, first_row_headers } = propsValue;
            const sheetName = yield common_2.googleSheetsCommon.findSheetName(auth['access_token'], spreadsheet_id, sheet_id);
            let formattedValues = (first_row_headers ? (0, common_1.objectToArray)(values) : values['values']);
            formattedValues = formattedValues.map((value) => value === '' ? null : value);
            if (formattedValues.length > 0) {
                const res = yield common_2.googleSheetsCommon.updateGoogleSheetRow({
                    accessToken: auth['access_token'],
                    rowIndex: Number(row_id),
                    sheetName: sheetName,
                    spreadSheetId: spreadsheet_id,
                    valueInputOption: common_1.ValueInputOption.USER_ENTERED,
                    values: (0, common_1.stringifyArray)(formattedValues),
                });
                //Split the updatedRange string to extract the row number
                const updatedRangeParts = res.body.updatedRange.split('!');
                const updatedRowRange = updatedRangeParts[1];
                const updatedRowNumber = parseInt(updatedRowRange.split(':')[0].substring(1), 10);
                return { updates: Object.assign({}, res.body), row: updatedRowNumber };
            }
            else {
                throw Error('Values passed are empty or not array ' +
                    JSON.stringify(formattedValues));
            }
        });
    },
});
//# sourceMappingURL=update-row.js.map