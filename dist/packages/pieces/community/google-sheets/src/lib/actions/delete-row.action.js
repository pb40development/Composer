"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteRowAction = void 0;
const tslib_1 = require("tslib");
const pieces_framework_1 = require("@activepieces/pieces-framework");
const common_1 = require("../common/common");
const __1 = require("../../");
exports.deleteRowAction = (0, pieces_framework_1.createAction)({
    auth: __1.googleSheetsAuth,
    name: 'delete_row',
    description: 'Delete a row on an existing sheet you have access to',
    displayName: 'Delete Row',
    props: {
        spreadsheet_id: common_1.googleSheetsCommon.spreadsheet_id,
        include_team_drives: common_1.googleSheetsCommon.include_team_drives,
        sheet_id: common_1.googleSheetsCommon.sheet_id,
        row_id: pieces_framework_1.Property.Number({
            displayName: 'Row Number',
            description: 'The row number to remove',
            required: true,
        }),
    },
    run(_a) {
        return tslib_1.__awaiter(this, arguments, void 0, function* ({ propsValue, auth }) {
            yield common_1.googleSheetsCommon.findSheetName(auth.access_token, propsValue['spreadsheet_id'], propsValue['sheet_id']);
            // Subtract 1 from the row_id to convert it to 0-indexed
            const adjustedRowIndex = propsValue.row_id - 1;
            const response = yield common_1.googleSheetsCommon.deleteRow(propsValue.spreadsheet_id, propsValue.sheet_id, adjustedRowIndex, auth['access_token']);
            return {
                success: true,
                body: response,
            };
        });
    },
});
//# sourceMappingURL=delete-row.action.js.map