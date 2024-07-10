"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getJobResults = void 0;
const tslib_1 = require("tslib");
const pieces_framework_1 = require("@activepieces/pieces-framework");
const pieces_common_1 = require("@activepieces/pieces-common");
const __1 = require("../..");
const common_1 = require("../common");
exports.getJobResults = (0, pieces_framework_1.createAction)({
    // auth: check https://www.activepieces.com/docs/developers/piece-reference/authentication,
    name: 'getJobResults',
    displayName: 'Get job results',
    description: 'Get all results for a specific job',
    auth: __1.captainDataAuth,
    props: {
        workflow: common_1.workflowProp,
        job: pieces_framework_1.Property.Dropdown({
            displayName: 'Job',
            required: true,
            refreshers: ['workflow'],
            options: (_a) => tslib_1.__awaiter(void 0, [_a], void 0, function* ({ auth, workflow }) {
                if (!auth || !workflow) {
                    return {
                        disabled: true,
                        options: [],
                    };
                }
                const response = yield pieces_common_1.httpClient.sendRequest({
                    url: `${__1.CAPTAIN_DATA_BASE_URL}/workflows/${workflow}/jobs`,
                    method: pieces_common_1.HttpMethod.GET,
                    headers: {
                        Authorization: `x-api-key ${auth.apiKey}`,
                        'x-project-id': auth.projectId,
                    },
                });
                return {
                    disabled: false,
                    options: response.body.map((job) => {
                        return {
                            value: job.uid,
                            label: job.start_time,
                        };
                    }),
                };
            }),
        }),
    },
    run(_a) {
        return tslib_1.__awaiter(this, arguments, void 0, function* ({ auth, propsValue }) {
            // We don't do pagination because Captain Data's API doc does provide details nor even examples :shrug:
            const response = yield pieces_common_1.httpClient.sendRequest({
                url: `${__1.CAPTAIN_DATA_BASE_URL}/jobs/${propsValue.job}/results`,
                method: pieces_common_1.HttpMethod.GET,
                headers: {
                    Authorization: `x-api-key ${auth.apiKey}`,
                    'x-project-id': auth.projectId,
                },
            });
            return response.body;
        });
    },
});
//# sourceMappingURL=get-job-results.js.map