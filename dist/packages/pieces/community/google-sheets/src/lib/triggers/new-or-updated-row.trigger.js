"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.newOrUpdatedRowTrigger = void 0;
const tslib_1 = require("tslib");
const shared_1 = require("@activepieces/shared");
const __1 = require("../../");
const common_1 = require("../common/common");
const helpers_1 = require("./helpers");
const pieces_framework_1 = require("@activepieces/pieces-framework");
const crypto_1 = tslib_1.__importDefault(require("crypto"));
const ALL_COLUMNS = 'all_columns';
exports.newOrUpdatedRowTrigger = (0, pieces_framework_1.createTrigger)({
    auth: __1.googleSheetsAuth,
    name: 'google-sheets-new-or-updated-row',
    displayName: 'New or Updated Row',
    description: 'Triggers when a new row is added or modified in a spreadsheet.',
    props: {
        info: pieces_framework_1.Property.MarkDown({
            value: 'Please note that there might be a delay of up to 3 minutes for the trigger to be fired, due to a delay from Google.',
        }),
        spreadsheet_id: common_1.googleSheetsCommon.spreadsheet_id,
        sheet_id: common_1.googleSheetsCommon.sheet_id,
        include_team_drives: common_1.googleSheetsCommon.include_team_drives,
        trigger_column: pieces_framework_1.Property.Dropdown({
            displayName: 'Trigger Column',
            description: `Trigger on changes to cells in this column only.Select **All Columns** if you want the flow to trigger on changes to any cell within the row.`,
            required: false,
            refreshers: ['spreadsheet_id', 'sheet_id'],
            options: (_a) => tslib_1.__awaiter(void 0, [_a], void 0, function* ({ auth, spreadsheet_id, sheet_id }) {
                if (!auth || !spreadsheet_id || (0, shared_1.isNil)(sheet_id)) {
                    return {
                        disabled: true,
                        options: [],
                        placeholder: `Please select sheet first`,
                    };
                }
                const authValue = auth;
                const spreadSheetId = spreadsheet_id;
                const sheetId = sheet_id;
                const sheetName = yield (0, helpers_1.getWorkSheetName)(authValue, spreadSheetId, sheetId);
                const firstRowValues = yield (0, helpers_1.getWorkSheetValues)(authValue, spreadSheetId, `${sheetName}!1:1`);
                const labeledRowValues = (0, helpers_1.transformWorkSheetValues)(firstRowValues, 0);
                const options = [
                    { label: 'All Columns', value: ALL_COLUMNS },
                ];
                Object.entries(labeledRowValues[0].values).forEach(([key, value]) => {
                    options.push({ label: value, value: key });
                });
                return {
                    disabled: false,
                    options,
                };
            }),
        }),
    },
    renewConfiguration: {
        strategy: pieces_framework_1.WebhookRenewStrategy.CRON,
        cronExpression: '0 */12 * * *',
    },
    type: pieces_framework_1.TriggerStrategy.WEBHOOK,
    onEnable(context) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            var _a;
            const spreadSheetId = context.propsValue.spreadsheet_id;
            const sheetId = context.propsValue.sheet_id;
            const triggerColumn = (_a = context.propsValue.trigger_column) !== null && _a !== void 0 ? _a : ALL_COLUMNS;
            const sheetName = yield (0, helpers_1.getWorkSheetName)(context.auth, spreadSheetId, sheetId);
            const sheetValues = yield (0, helpers_1.getWorkSheetValues)(context.auth, spreadSheetId, sheetName);
            const rowHashes = [];
            // create initial row level hashes and used it to check updated row
            for (const row of sheetValues) {
                let targetValue;
                if (triggerColumn === ALL_COLUMNS) {
                    targetValue = row;
                }
                else {
                    const currentTriggerColumnValue = row[(0, common_1.labelToColumn)(triggerColumn)];
                    targetValue =
                        currentTriggerColumnValue !== undefined &&
                            currentTriggerColumnValue !== '' // if column value is empty
                            ? [currentTriggerColumnValue]
                            : [];
                }
                const rowHash = crypto_1.default
                    .createHash('md5')
                    .update(JSON.stringify(targetValue))
                    .digest('hex');
                rowHashes.push(rowHash);
            }
            // store compressed values
            yield context.store.put(`${sheetId}`, rowHashes);
            // create file watch notification
            const fileNotificationRes = yield (0, helpers_1.createFileNotification)(context.auth, spreadSheetId, context.webhookUrl);
            yield context.store.put('google-sheets-new-or-updated-row', fileNotificationRes.data);
        });
    },
    onDisable(context) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const webhook = yield context.store.get('google-sheets-new-or-updated-row');
            if (webhook != null && webhook.id != null && webhook.resourceId != null) {
                yield (0, helpers_1.deleteFileNotification)(context.auth, webhook.id, webhook.resourceId);
            }
        });
    },
    run(context) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            var _a;
            if ((0, helpers_1.isSyncMessage)(context.payload.headers)) {
                return [];
            }
            if (!(0, helpers_1.isChangeContentMessage)(context.payload.headers)) {
                return [];
            }
            const spreadSheetId = context.propsValue.spreadsheet_id;
            const sheetId = context.propsValue.sheet_id;
            const triggerColumn = (_a = context.propsValue.trigger_column) !== null && _a !== void 0 ? _a : ALL_COLUMNS;
            const sheetName = yield (0, helpers_1.getWorkSheetName)(context.auth, spreadSheetId, sheetId);
            const oldValuesHashes = (yield context.store.get(`${sheetId}`));
            /* Fetch rows values with all columns as this will be used on returning updated/new row data
             */
            const currentValues = yield (0, helpers_1.getWorkSheetValues)(context.auth, spreadSheetId, sheetName);
            // const rowCount = Math.max(oldValuesHashes.length, currentValues.length);
            const changedValues = [];
            const newRowHashes = [];
            for (let row = 0; row < currentValues.length; row++) {
                const currentRowValue = currentValues[row];
                /**
                 * This variable store value based on trigger column.
                 * If trigger column is all_columns then store entrie row as target value, else store only column value.
                 */
                let targetValue;
                if (triggerColumn === ALL_COLUMNS) {
                    targetValue = currentRowValue;
                }
                else {
                    const currentTriggerColumnValue = currentRowValue[(0, common_1.labelToColumn)(triggerColumn)];
                    targetValue =
                        currentTriggerColumnValue !== undefined &&
                            currentTriggerColumnValue !== ''
                            ? [currentTriggerColumnValue]
                            : [];
                }
                // create hash for new row values
                const currentRowHash = crypto_1.default
                    .createHash('md5')
                    .update(JSON.stringify(targetValue))
                    .digest('hex');
                newRowHashes.push(currentRowHash);
                // If row is empty then skip
                if (currentRowValue === undefined || currentRowValue.length === 0) {
                    continue;
                }
                const oldRowHash = oldValuesHashes[row];
                if (oldRowHash === undefined || oldRowHash != currentRowHash) {
                    const formattedValues = {};
                    for (let column = 0; column < currentValues[row].length; column++) {
                        formattedValues[(0, common_1.columnToLabel)(column)] = currentValues[row][column];
                    }
                    changedValues.push({
                        row: row + 1,
                        values: formattedValues,
                    });
                }
            }
            // update the row hashes
            yield context.store.put(`${sheetId}`, newRowHashes);
            return changedValues.map((row) => {
                return Object.assign(Object.assign({}, row), { [pieces_framework_1.DEDUPE_KEY_PROPERTY]: (0, helpers_1.hashObject)(row) });
            });
        });
    },
    test(context) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const spreadSheetId = context.propsValue.spreadsheet_id;
            const sheetId = context.propsValue.sheet_id;
            const sheetName = yield (0, helpers_1.getWorkSheetName)(context.auth, spreadSheetId, sheetId);
            const currentSheetValues = yield (0, helpers_1.getWorkSheetValues)(context.auth, spreadSheetId, sheetName);
            // transform row values
            const transformedRowValues = (0, helpers_1.transformWorkSheetValues)(currentSheetValues, 0)
                .slice(-5)
                .reverse();
            return transformedRowValues;
        });
    },
    onRenew(context) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            // get current channel ID & resource ID
            const webhook = yield context.store.get(`google-sheets-new-or-updated-row`);
            if (webhook != null && webhook.id != null && webhook.resourceId != null) {
                // delete current channel
                yield (0, helpers_1.deleteFileNotification)(context.auth, webhook.id, webhook.resourceId);
                const fileNotificationRes = yield (0, helpers_1.createFileNotification)(context.auth, context.propsValue.spreadsheet_id, context.webhookUrl);
                // store channel response
                yield context.store.put('google-sheets-new-or-updated-row', fileNotificationRes.data);
            }
        });
    },
    sampleData: {},
});
//# sourceMappingURL=new-or-updated-row.trigger.js.map