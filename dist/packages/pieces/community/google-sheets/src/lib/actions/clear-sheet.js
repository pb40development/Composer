"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clearSheetAction = void 0;
const tslib_1 = require("tslib");
const pieces_framework_1 = require("@activepieces/pieces-framework");
const common_1 = require("../common/common");
const __1 = require("../..");
exports.clearSheetAction = (0, pieces_framework_1.createAction)({
    auth: __1.googleSheetsAuth,
    name: 'clear_sheet',
    description: 'Clears all rows on an existing sheet',
    displayName: 'Clear Sheet',
    props: {
        spreadsheet_id: common_1.googleSheetsCommon.spreadsheet_id,
        include_team_drives: common_1.googleSheetsCommon.include_team_drives,
        sheet_id: common_1.googleSheetsCommon.sheet_id,
        is_first_row_headers: pieces_framework_1.Property.Checkbox({
            displayName: 'Is First row Headers?',
            description: 'If the first row is headers',
            required: true,
            defaultValue: true,
        }),
    },
    run(_a) {
        return tslib_1.__awaiter(this, arguments, void 0, function* ({ propsValue, auth }) {
            yield common_1.googleSheetsCommon.findSheetName(auth['access_token'], propsValue['spreadsheet_id'], propsValue['sheet_id']);
            const rowsToDelete = [];
            const values = yield common_1.googleSheetsCommon.getValues(propsValue.spreadsheet_id, auth['access_token'], propsValue.sheet_id);
            for (const key in values) {
                if (key === '0' && propsValue.is_first_row_headers) {
                    continue;
                }
                rowsToDelete.push(parseInt(key) + 1);
            }
            for (let i = 0; i < rowsToDelete.length; i++) {
                yield common_1.googleSheetsCommon.clearSheet(propsValue.spreadsheet_id, propsValue.sheet_id, auth['access_token'], propsValue.is_first_row_headers ? 1 : 0, rowsToDelete.length);
            }
            return {
                deletedRow: rowsToDelete,
            };
        });
    },
});
//# sourceMappingURL=clear-sheet.js.map