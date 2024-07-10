"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.googleSheets = exports.googleSheetsAuth = void 0;
const tslib_1 = require("tslib");
const pieces_common_1 = require("@activepieces/pieces-common");
const pieces_framework_1 = require("@activepieces/pieces-framework");
const shared_1 = require("@activepieces/shared");
const clear_sheet_1 = require("./lib/actions/clear-sheet");
const delete_row_action_1 = require("./lib/actions/delete-row.action");
const find_row_by_num_1 = require("./lib/actions/find-row-by-num");
const find_rows_1 = require("./lib/actions/find-rows");
const get_rows_1 = require("./lib/actions/get-rows");
const insert_row_action_1 = require("./lib/actions/insert-row.action");
const update_row_1 = require("./lib/actions/update-row");
const common_1 = require("./lib/common/common");
const new_row_added_webhook_1 = require("./lib/triggers/new-row-added-webhook");
const new_or_updated_row_trigger_1 = require("./lib/triggers/new-or-updated-row.trigger");
const insert_multiple_rows_action_1 = require("./lib/actions/insert-multiple-rows.action");
exports.googleSheetsAuth = pieces_framework_1.PieceAuth.OAuth2({
    description: '',
    authUrl: 'https://accounts.google.com/o/oauth2/auth',
    tokenUrl: 'https://oauth2.googleapis.com/token',
    required: true,
    scope: [
        'https://www.googleapis.com/auth/spreadsheets',
        'https://www.googleapis.com/auth/drive.readonly',
    ],
});
exports.googleSheets = (0, pieces_framework_1.createPiece)({
    minimumSupportedRelease: '0.5.0',
    logoUrl: 'https://cdn.activepieces.com/pieces/google-sheets.png',
    categories: [shared_1.PieceCategory.PRODUCTIVITY],
    authors: [
        'ShayPunter',
        'Ozak93',
        'Abdallah-Alwarawreh',
        'Salem-Alaa',
        'kishanprmr',
        'MoShizzle',
        'AbdulTheActivePiecer',
        'khaledmashaly',
        'abuaboud',
    ],
    actions: [
        insert_row_action_1.insertRowAction,
        insert_multiple_rows_action_1.insertMultipleRowsAction,
        delete_row_action_1.deleteRowAction,
        update_row_1.updateRowAction,
        find_rows_1.findRowsAction,
        clear_sheet_1.clearSheetAction,
        find_row_by_num_1.findRowByNumAction,
        get_rows_1.getRowsAction,
        (0, pieces_common_1.createCustomApiCallAction)({
            auth: exports.googleSheetsAuth,
            baseUrl: () => {
                return common_1.googleSheetsCommon.baseUrl;
            },
            authMapping: (auth) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
                return {
                    Authorization: `Bearer ${auth.access_token}`,
                };
            }),
        }),
    ],
    displayName: 'Google Sheets',
    description: 'Create, edit, and collaborate on spreadsheets online',
    triggers: [new_row_added_webhook_1.newRowAddedTrigger, new_or_updated_row_trigger_1.newOrUpdatedRowTrigger],
    auth: exports.googleSheetsAuth,
});
//# sourceMappingURL=index.js.map