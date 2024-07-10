"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.newRowAddedTrigger = void 0;
const tslib_1 = require("tslib");
const pieces_framework_1 = require("@activepieces/pieces-framework");
const helpers_1 = require("./helpers");
const __1 = require("../..");
const common_1 = require("../common/common");
exports.newRowAddedTrigger = (0, pieces_framework_1.createTrigger)({
    auth: __1.googleSheetsAuth,
    name: 'googlesheets_new_row_added',
    displayName: 'New Row Added',
    description: 'Triggers when a new row is added to bottom of a spreadsheet.',
    props: {
        info: pieces_framework_1.Property.MarkDown({
            value: 'Please note that there might be a delay of up to 3 minutes for the trigger to be fired, due to a delay from Google.',
        }),
        spreadsheet_id: common_1.googleSheetsCommon.spreadsheet_id,
        sheet_id: common_1.googleSheetsCommon.sheet_id,
        include_team_drives: common_1.googleSheetsCommon.include_team_drives,
    },
    renewConfiguration: {
        strategy: pieces_framework_1.WebhookRenewStrategy.CRON,
        cronExpression: '0 */12 * * *',
    },
    type: pieces_framework_1.TriggerStrategy.WEBHOOK,
    onEnable(context) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const { spreadsheet_id, sheet_id } = context.propsValue;
            // fetch current sheet values
            const sheetName = yield (0, helpers_1.getWorkSheetName)(context.auth, spreadsheet_id, sheet_id);
            const currentSheetValues = yield (0, helpers_1.getWorkSheetValues)(context.auth, spreadsheet_id, sheetName);
            // store current sheet row count
            yield context.store.put(`${sheet_id}`, currentSheetValues.length);
            const fileNotificationRes = yield (0, helpers_1.createFileNotification)(context.auth, spreadsheet_id, context.webhookUrl);
            // store channel response
            yield context.store.put('googlesheets_new_row_added', fileNotificationRes.data);
        });
    },
    onDisable(context) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const webhook = yield context.store.get(`googlesheets_new_row_added`);
            if (webhook != null && webhook.id != null && webhook.resourceId != null) {
                yield (0, helpers_1.deleteFileNotification)(context.auth, webhook.id, webhook.resourceId);
            }
        });
    },
    run(context) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            // check if notification is a sync message
            if ((0, helpers_1.isSyncMessage)(context.payload.headers)) {
                return [];
            }
            if (!(0, helpers_1.isChangeContentMessage)(context.payload.headers)) {
                return [];
            }
            const { spreadsheet_id, sheet_id } = context.propsValue;
            // fetch old row count for worksheet
            const oldRowCount = (yield context.store.get(`${sheet_id}`));
            // fetch current row count for worksheet
            const sheetName = yield (0, helpers_1.getWorkSheetName)(context.auth, spreadsheet_id, sheet_id);
            const currentRowValues = yield (0, helpers_1.getWorkSheetValues)(context.auth, spreadsheet_id, sheetName);
            const currentRowCount = currentRowValues.length;
            // if no new rows return
            if (oldRowCount >= currentRowCount) {
                if (oldRowCount > currentRowCount) {
                    // Some rows were deleted
                    yield context.store.put(`${sheet_id}`, currentRowCount);
                }
                return [];
            }
            // create A1 notation range for new rows
            const range = `${sheetName}!${oldRowCount + 1}:${currentRowCount}`;
            const newRowValues = yield (0, helpers_1.getWorkSheetValues)(context.auth, spreadsheet_id, range);
            // update row count value
            yield context.store.put(`${sheet_id}`, currentRowCount);
            // transform row values
            const transformedRowValues = (0, helpers_1.transformWorkSheetValues)(newRowValues, oldRowCount);
            return transformedRowValues.map((row) => {
                return Object.assign(Object.assign({}, row), { [pieces_framework_1.DEDUPE_KEY_PROPERTY]: (0, helpers_1.hashObject)(row) });
            });
        });
    },
    onRenew(context) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            // get current channel ID & resource ID
            const webhook = yield context.store.get(`googlesheets_new_row_added`);
            if (webhook != null && webhook.id != null && webhook.resourceId != null) {
                // delete current channel
                yield (0, helpers_1.deleteFileNotification)(context.auth, webhook.id, webhook.resourceId);
                const fileNotificationRes = yield (0, helpers_1.createFileNotification)(context.auth, context.propsValue.spreadsheet_id, context.webhookUrl);
                // store channel response
                yield context.store.put('googlesheets_new_row_added', fileNotificationRes.data);
            }
        });
    },
    test(context) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const { spreadsheet_id, sheet_id } = context.propsValue;
            const sheetName = yield (0, helpers_1.getWorkSheetName)(context.auth, spreadsheet_id, sheet_id);
            const currentSheetValues = yield (0, helpers_1.getWorkSheetValues)(context.auth, spreadsheet_id, sheetName);
            // transform row values
            const transformedRowValues = (0, helpers_1.transformWorkSheetValues)(currentSheetValues, 0)
                .slice(-5)
                .reverse();
            return transformedRowValues;
        });
    },
    sampleData: {},
});
//# sourceMappingURL=new-row-added-webhook.js.map