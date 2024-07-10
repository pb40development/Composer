"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.launchWorkflow = void 0;
const tslib_1 = require("tslib");
const pieces_framework_1 = require("@activepieces/pieces-framework");
const pieces_common_1 = require("@activepieces/pieces-common");
const __1 = require("../..");
const common_1 = require("../common");
exports.launchWorkflow = (0, pieces_framework_1.createAction)({
    // auth: check https://www.activepieces.com/docs/developers/piece-reference/authentication,
    name: 'launchWorkflow',
    displayName: 'Launch a workflow',
    description: '',
    auth: __1.captainDataAuth,
    props: {
        workflow: common_1.workflowProp,
        jobName: pieces_framework_1.Property.ShortText({
            displayName: 'Job name',
            required: false,
        }),
        inputs: pieces_framework_1.Property.Json({
            displayName: 'Inputs',
            description: 'Inputs are the starting point of your workflow.',
            defaultValue: [],
            required: false,
        }),
        steps: pieces_framework_1.Property.Json({
            displayName: 'Steps',
            description: 'You need to configure each steps with:\n' +
                '- accounts : The identifiers of the accounts you want to use for this step. The accounts indicated must match the integration used in the step (e.g A Linkedin account for a Search Linkedin People Profile step). You can find the UIDs in the "Integrations\' tab on the platform by clicking on a specific account "Action" button (copy account UID).\n' +
                '- accounts_rotation_enabled: (Optional) Whether or not you want to enable the Accounts Rotation feature for this step (only certain Linkedin & Outlook automations are applicable for this feature).\n' +
                '- parameters: The specific parameters for this given step - (Can be empty but is required)\n' +
                '- step_uid: The UID of the step to configure. You can find it in the API Playground, on Captain Data\'s platform by clicking on "view body to schedule".\n.' +
                'See https://docs.captaindata.co/#36e905b6-3a31-4bcd-8c6f-0eb6093b5a8a for details',
            defaultValue: [],
            required: false,
        }),
        delay: pieces_framework_1.Property.Number({
            displayName: 'Delay (seconds)',
            required: false,
        }),
    },
    run(_a) {
        return tslib_1.__awaiter(this, arguments, void 0, function* ({ auth, propsValue }) {
            const payload = {
                job_name: propsValue.jobName,
                inputs: propsValue.inputs,
                steps: propsValue.steps,
                delay: propsValue.delay,
            };
            const response = yield pieces_common_1.httpClient.sendRequest({
                url: `${__1.CAPTAIN_DATA_BASE_URL}/workflows/${propsValue.workflow}/schedule`,
                method: pieces_common_1.HttpMethod.POST,
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `x-api-key ${auth.apiKey}`,
                    'x-project-id': auth.projectId,
                },
                body: JSON.stringify(payload),
            });
            return response.body;
        });
    },
});
//# sourceMappingURL=launch-workflow.js.map