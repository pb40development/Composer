"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTask = exports.getTasks = exports.getLists = exports.googleTasksCommon = exports.TaskStatus = void 0;
const tslib_1 = require("tslib");
const pieces_framework_1 = require("@activepieces/pieces-framework");
const pieces_common_1 = require("@activepieces/pieces-common");
var TaskStatus;
(function (TaskStatus) {
    TaskStatus["NEEDS_ACTION"] = "needsAction";
    TaskStatus["COMPLETED"] = "completed";
})(TaskStatus || (exports.TaskStatus = TaskStatus = {}));
exports.googleTasksCommon = {
    baseUrl: `https://tasks.googleapis.com`,
    /**
     * @property Target task list ID where the new task will be created
     */
    tasksList: pieces_framework_1.Property.Dropdown({
        displayName: 'Tasks List',
        refreshers: [],
        required: true,
        options: (_a) => tslib_1.__awaiter(void 0, [_a], void 0, function* ({ auth }) {
            if (!auth) {
                return {
                    disabled: true,
                    placeholder: 'Please connect your account first',
                    options: [],
                };
            }
            const authProp = auth;
            const tasksLists = yield getLists(authProp);
            return {
                disabled: false,
                options: tasksLists.map((list) => {
                    return {
                        label: list.title,
                        value: list.id,
                    };
                }),
            };
        }),
    }),
    title: pieces_framework_1.Property.ShortText({
        displayName: 'Title',
        required: true,
    }),
    notes: pieces_framework_1.Property.LongText({
        displayName: 'Notes',
        required: false,
    }),
    completed: pieces_framework_1.Property.Checkbox({
        displayName: 'Completed',
        description: 'Mark task as completed',
        required: false,
    }),
};
function getLists(authProp) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        // docs: https://developers.google.com/tasks/reference/rest/v1/tasklists/list
        const request = {
            method: pieces_common_1.HttpMethod.GET,
            url: `${exports.googleTasksCommon.baseUrl}/tasks/v1/users/@me/lists`,
            authentication: {
                type: pieces_common_1.AuthenticationType.BEARER_TOKEN,
                token: authProp.access_token,
            },
        };
        const response = yield pieces_common_1.httpClient.sendRequest(request);
        return response.body.items;
    });
}
exports.getLists = getLists;
function getTasks(authProp, tasklist) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        // docs: https://developers.google.com/tasks/reference/rest/v1/tasklists/list
        const request = {
            method: pieces_common_1.HttpMethod.GET,
            url: `${exports.googleTasksCommon.baseUrl}/tasks/v1/lists/${tasklist}/tasks`,
            authentication: {
                type: pieces_common_1.AuthenticationType.BEARER_TOKEN,
                token: authProp.access_token,
            },
        };
        const response = yield pieces_common_1.httpClient.sendRequest(request);
        return response.body.items;
    });
}
exports.getTasks = getTasks;
function createTask(authProp, taskListId, task) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const request = {
            method: pieces_common_1.HttpMethod.POST,
            url: `${exports.googleTasksCommon.baseUrl}/tasks/v1/lists/${taskListId}/tasks`,
            authentication: {
                type: pieces_common_1.AuthenticationType.BEARER_TOKEN,
                token: authProp.access_token,
            },
            body: task,
        };
        return pieces_common_1.httpClient.sendRequest(request);
    });
}
exports.createTask = createTask;
//# sourceMappingURL=index.js.map