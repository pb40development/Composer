"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.googleTasksAddNewTaskAction = void 0;
const tslib_1 = require("tslib");
const pieces_framework_1 = require("@activepieces/pieces-framework");
const common_1 = require("../common");
const __1 = require("../../");
exports.googleTasksAddNewTaskAction = (0, pieces_framework_1.createAction)({
    auth: __1.googleTasksAuth,
    name: 'add_task',
    description: 'Add a new task to a specified task list',
    displayName: 'Add Task',
    props: {
        tasks_list: common_1.googleTasksCommon.tasksList,
        title: common_1.googleTasksCommon.title,
        notes: common_1.googleTasksCommon.notes,
        completed: common_1.googleTasksCommon.completed,
    },
    run(_a) {
        return tslib_1.__awaiter(this, arguments, void 0, function* ({ auth, propsValue }) {
            const task = {
                kind: 'tasks#task',
                status: propsValue.completed
                    ? common_1.TaskStatus.COMPLETED
                    : common_1.TaskStatus.NEEDS_ACTION,
                title: propsValue.title,
                completed: propsValue.completed ? new Date().toISOString() : '',
                notes: propsValue.notes,
            };
            return (0, common_1.createTask)(auth, propsValue.tasks_list, task);
        });
    },
});
//# sourceMappingURL=new-task.js.map