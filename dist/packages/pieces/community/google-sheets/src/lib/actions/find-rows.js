"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findRowsAction = void 0;
const tslib_1 = require("tslib");
const pieces_framework_1 = require("@activepieces/pieces-framework");
const common_1 = require("../common/common");
const __1 = require("../..");
exports.findRowsAction = (0, pieces_framework_1.createAction)({
    auth: __1.googleSheetsAuth,
    name: 'find_rows',
    description: 'Find or get rows in a Google Sheet by column name and search value',
    displayName: 'Find Rows',
    props: {
        spreadsheet_id: common_1.googleSheetsCommon.spreadsheet_id,
        include_team_drives: common_1.googleSheetsCommon.include_team_drives,
        sheet_id: common_1.googleSheetsCommon.sheet_id,
        columnName: common_1.googleSheetsCommon.columnName,
        searchValue: pieces_framework_1.Property.ShortText({
            displayName: 'Search Value',
            description: 'The value to search for in the specified column. If left empty, all rows will be returned.',
            required: false,
        }),
        matchCase: pieces_framework_1.Property.Checkbox({
            displayName: 'Exact match',
            description: 'Whether to choose the rows with exact match or choose the rows that contain the search value',
            required: true,
            defaultValue: false,
        }),
        startingRow: pieces_framework_1.Property.Number({
            displayName: 'Starting Row',
            description: 'The row number to start searching from',
            required: false,
            validators: [pieces_framework_1.Validators.minValue(1)],
        }),
        numberOfRows: pieces_framework_1.Property.Number({
            displayName: 'Number of Rows',
            description: 'The number of rows to return ( the default is 1 if not specified )',
            required: false,
            defaultValue: 1,
            validators: [pieces_framework_1.Validators.minValue(1)],
        }),
    },
    run(_a) {
        return tslib_1.__awaiter(this, arguments, void 0, function* ({ propsValue, auth }) {
            var _b, _c, _d;
            const spreadSheetId = propsValue.spreadsheet_id;
            const sheetId = propsValue.sheet_id;
            const startingRow = (_b = propsValue.startingRow) !== null && _b !== void 0 ? _b : 1;
            const numberOfRowsToReturn = (_c = propsValue.numberOfRows) !== null && _c !== void 0 ? _c : 1;
            const sheetName = yield common_1.googleSheetsCommon.findSheetName(auth.access_token, spreadSheetId, sheetId);
            let rows = yield (0, common_1.getAllGoogleSheetRows)({
                accessToken: auth.access_token,
                sheetName: `${sheetName}!A${startingRow}:ZZZ`,
                spreadSheetId: spreadSheetId,
            });
            // modify row number based on starting row number
            rows = rows.map((row) => {
                return {
                    row: row.row + startingRow - 1,
                    values: row.values,
                };
            });
            const values = rows.map((row) => {
                return row.values;
            });
            const matchingRows = [];
            const columnName = propsValue.columnName ? propsValue.columnName : 'A';
            const columnNumber = (0, common_1.labelToColumn)(columnName);
            const searchValue = (_d = propsValue.searchValue) !== null && _d !== void 0 ? _d : '';
            let matchedRowCount = 0;
            for (let i = 0; i < values.length; i++) {
                const row = values[i];
                if (matchedRowCount === numberOfRowsToReturn)
                    break;
                if (searchValue === '') {
                    matchingRows.push(rows[i]);
                    matchedRowCount += 1;
                    continue;
                }
                const keys = Object.keys(row);
                if (keys.length <= columnNumber)
                    continue;
                const entry_value = row[keys[columnNumber]];
                if (entry_value === undefined) {
                    continue;
                }
                if (propsValue.matchCase) {
                    if (entry_value === searchValue) {
                        matchedRowCount += 1;
                        matchingRows.push(rows[i]);
                    }
                }
                else {
                    if (entry_value.toLowerCase().includes(searchValue.toLowerCase())) {
                        matchedRowCount += 1;
                        matchingRows.push(rows[i]);
                    }
                }
            }
            return matchingRows;
        });
    },
});
//# sourceMappingURL=find-rows.js.map