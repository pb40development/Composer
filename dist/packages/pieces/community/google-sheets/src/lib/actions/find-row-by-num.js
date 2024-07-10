"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findRowByNumAction = void 0;
const tslib_1 = require("tslib");
const pieces_framework_1 = require("@activepieces/pieces-framework");
const common_1 = require("../common/common");
const __1 = require("../..");
exports.findRowByNumAction = (0, pieces_framework_1.createAction)({
    auth: __1.googleSheetsAuth,
    name: 'find_row_by_num',
    description: 'Get a row in a Google Sheet by row number',
    displayName: 'Get Row',
    props: {
        spreadsheet_id: common_1.googleSheetsCommon.spreadsheet_id,
        include_team_drives: common_1.googleSheetsCommon.include_team_drives,
        sheet_id: common_1.googleSheetsCommon.sheet_id,
        rowNumber: pieces_framework_1.Property.Number({
            displayName: 'Row Number',
            description: 'The row number to get from the sheet',
            required: true,
        }),
    },
    run(_a) {
        return tslib_1.__awaiter(this, arguments, void 0, function* ({ propsValue, auth }) {
            const sheetName = yield common_1.googleSheetsCommon.findSheetName(auth['access_token'], propsValue['spreadsheet_id'], propsValue['sheet_id']);
            const row = yield (0, common_1.getGoogleSheetRows)({
                accessToken: auth['access_token'],
                sheetName: sheetName,
                spreadSheetId: propsValue['spreadsheet_id'],
                rowIndex_s: propsValue['rowNumber'],
                rowIndex_e: propsValue['rowNumber'],
            });
            return row[0];
        });
    },
});
//# sourceMappingURL=find-row-by-num.js.map