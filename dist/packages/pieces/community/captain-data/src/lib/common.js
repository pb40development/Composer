"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.workflowProp = void 0;
const tslib_1 = require("tslib");
const pieces_framework_1 = require("@activepieces/pieces-framework");
const pieces_common_1 = require("@activepieces/pieces-common");
const __1 = require("..");
exports.workflowProp = pieces_framework_1.Property.Dropdown({
    displayName: 'Workflow',
    required: true,
    refreshers: [],
    options: (_a) => tslib_1.__awaiter(void 0, [_a], void 0, function* ({ auth }) {
        if (!auth) {
            return {
                disabled: true,
                options: [],
            };
        }
        const response = yield pieces_common_1.httpClient.sendRequest({
            url: `${__1.CAPTAIN_DATA_BASE_URL}/workflows`,
            method: pieces_common_1.HttpMethod.GET,
            headers: {
                Authorization: `x-api-key ${auth.apiKey}`,
                'x-project-id': auth.projectId,
            },
        });
        return {
            disabled: false,
            options: response.body.map((workflow) => {
                return { label: workflow.name, value: workflow.uid };
            }),
        };
    }),
});
//# sourceMappingURL=common.js.map