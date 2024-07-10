"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRowsAction = void 0;
const tslib_1 = require("tslib");
const pieces_framework_1 = require("@activepieces/pieces-framework");
const __1 = require("../..");
const common_1 = require("../common/common");
const shared_1 = require("@activepieces/shared");
const pieces_common_1 = require("@activepieces/pieces-common");
function getRows(store, accessToken, spreadsheetId, sheetId, memKey, groupSize, startRow, testing) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const sheetName = yield common_1.googleSheetsCommon.findSheetName(accessToken, spreadsheetId, sheetId);
        const memVal = yield store.get(memKey, pieces_framework_1.StoreScope.FLOW);
        let startingRow;
        if ((0, shared_1.isNil)(memVal) || memVal === '')
            startingRow = startRow || 1;
        else {
            startingRow = parseInt(memVal);
            if (isNaN(startingRow)) {
                throw Error('The value stored in memory key : ' +
                    memKey +
                    ' is ' +
                    memVal +
                    ' and it is not a number');
            }
        }
        if (startingRow < 1)
            throw Error('Starting row : ' + startingRow + ' is less than 1' + memVal);
        const endRow = startingRow + groupSize;
        if (testing == false)
            yield store.put(memKey, endRow, pieces_framework_1.StoreScope.FLOW);
        const row = yield (0, common_1.getGoogleSheetRows)({
            accessToken: accessToken,
            sheetName: sheetName,
            spreadSheetId: spreadsheetId,
            rowIndex_s: startingRow,
            rowIndex_e: endRow - 1,
        });
        if (row.length == 0) {
            const allRows = yield (0, common_1.getAllGoogleSheetRows)({
                accessToken: accessToken,
                sheetName: sheetName,
                spreadSheetId: spreadsheetId,
            });
            const lastRow = allRows.length + 1;
            if (testing == false)
                yield store.put(memKey, lastRow, pieces_framework_1.StoreScope.FLOW);
        }
        return row;
    });
}
exports.getRowsAction = (0, pieces_framework_1.createAction)({
    auth: __1.googleSheetsAuth,
    name: 'get_next_rows',
    description: 'Get next group of rows from a Google Sheet',
    displayName: 'Get next row(s)',
    props: {
        spreadsheet_id: common_1.googleSheetsCommon.spreadsheet_id,
        include_team_drives: common_1.googleSheetsCommon.include_team_drives,
        sheet_id: common_1.googleSheetsCommon.sheet_id,
        startRow: pieces_framework_1.Property.Number({
            displayName: 'Start Row',
            description: 'Which row to start from?',
            required: true,
            defaultValue: 1,
            validators: [pieces_framework_1.Validators.minValue(1)],
        }),
        memKey: pieces_framework_1.Property.ShortText({
            displayName: 'Memory Key',
            description: 'The key used to store the current row number in memory',
            required: true,
            defaultValue: 'row_number',
        }),
        groupSize: pieces_framework_1.Property.Number({
            displayName: 'Group Size',
            description: 'The number of rows to get',
            required: true,
            defaultValue: 1,
            validators: [pieces_framework_1.Validators.minValue(1)],
        }),
    },
    run(_a) {
        return tslib_1.__awaiter(this, arguments, void 0, function* ({ store, auth, propsValue }) {
            try {
                return yield getRows(store, auth['access_token'], propsValue['spreadsheet_id'], propsValue['sheet_id'], propsValue['memKey'], propsValue['groupSize'], propsValue['startRow'], false);
            }
            catch (error) {
                if (error instanceof pieces_common_1.HttpError) {
                    const errorBody = error.response.body;
                    throw new Error(errorBody['error']['message']);
                }
                throw error;
            }
        });
    },
    test(_a) {
        return tslib_1.__awaiter(this, arguments, void 0, function* ({ store, auth, propsValue }) {
            try {
                return yield getRows(store, auth['access_token'], propsValue['spreadsheet_id'], propsValue['sheet_id'], propsValue['memKey'], propsValue['groupSize'], propsValue['startRow'], true);
            }
            catch (error) {
                if (error instanceof pieces_common_1.HttpError) {
                    const errorBody = error.response.body;
                    throw new Error(errorBody['error']['message']);
                }
                throw error;
            }
        });
    },
});
//# sourceMappingURL=get-rows.js.map