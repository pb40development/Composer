"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.googleTasks = exports.googleTasksAuth = void 0;
const tslib_1 = require("tslib");
const pieces_common_1 = require("@activepieces/pieces-common");
const pieces_framework_1 = require("@activepieces/pieces-framework");
const shared_1 = require("@activepieces/shared");
const new_task_1 = require("./lib/actions/new-task");
const common_1 = require("./lib/common");
const new_task_2 = require("./lib/triggers/new-task");
exports.googleTasksAuth = pieces_framework_1.PieceAuth.OAuth2({
    description: '',
    authUrl: 'https://accounts.google.com/o/oauth2/auth',
    tokenUrl: 'https://oauth2.googleapis.com/token',
    required: true,
    scope: ['https://www.googleapis.com/auth/tasks'],
});
exports.googleTasks = (0, pieces_framework_1.createPiece)({
    minimumSupportedRelease: '0.5.0',
    logoUrl: 'https://cdn.activepieces.com/pieces/google-tasks.png',
    categories: [shared_1.PieceCategory.PRODUCTIVITY],
    actions: [
        new_task_1.googleTasksAddNewTaskAction,
        (0, pieces_common_1.createCustomApiCallAction)({
            baseUrl: () => common_1.googleTasksCommon.baseUrl,
            auth: exports.googleTasksAuth,
            authMapping: (auth) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
                return ({
                    Authorization: `Bearer ${auth.access_token}`,
                });
            }),
        }),
    ],
    displayName: 'Google Tasks',
    description: 'Task list management application',
    authors: ["Salem-Alaa", "kishanprmr", "MoShizzle", "khaledmashaly", "abuaboud"],
    triggers: [new_task_2.newTaskTrigger],
    auth: exports.googleTasksAuth,
});
//# sourceMappingURL=index.js.map