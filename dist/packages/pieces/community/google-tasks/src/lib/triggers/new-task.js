"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.newTaskTrigger = void 0;
const tslib_1 = require("tslib");
const pieces_framework_1 = require("@activepieces/pieces-framework");
const __1 = require("../..");
const pieces_common_1 = require("@activepieces/pieces-common");
const common_1 = require("../common");
const props = {
    tasks_list: common_1.googleTasksCommon.tasksList,
};
const polling = {
    strategy: pieces_common_1.DedupeStrategy.TIMEBASED,
    items: (_a) => tslib_1.__awaiter(void 0, [_a], void 0, function* ({ auth, propsValue, lastFetchEpochMS }) {
        const records = yield (0, common_1.getTasks)(auth, propsValue.tasks_list);
        const filtered_records = records.filter((record) => {
            const updated = Date.parse(record.updated);
            return updated > lastFetchEpochMS;
        });
        return filtered_records.map((record) => ({
            epochMilliSeconds: Date.parse(record.updated),
            data: record,
        }));
    }),
};
exports.newTaskTrigger = (0, pieces_framework_1.createTrigger)({
    auth: __1.googleTasksAuth,
    name: 'new_task',
    displayName: 'New Task',
    description: 'Triggers when a task is created',
    type: pieces_framework_1.TriggerStrategy.POLLING,
    props,
    sampleData: {},
    test(context) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const store = context.store;
            const auth = context.auth;
            const propsValue = context.propsValue;
            return yield pieces_common_1.pollingHelper.test(polling, { store, auth, propsValue });
        });
    },
    onEnable(context) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const store = context.store;
            const auth = context.auth;
            const propsValue = context.propsValue;
            yield pieces_common_1.pollingHelper.onEnable(polling, { store, auth, propsValue });
        });
    },
    onDisable(context) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const store = context.store;
            const auth = context.auth;
            const propsValue = context.propsValue;
            yield pieces_common_1.pollingHelper.onEnable(polling, { store, auth, propsValue });
        });
    },
    run(context) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const store = context.store;
            const auth = context.auth;
            const propsValue = context.propsValue;
            return yield pieces_common_1.pollingHelper.poll(polling, { store, auth, propsValue });
        });
    },
});
//# sourceMappingURL=new-task.js.map