"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.captainData = exports.captainDataAuth = exports.CAPTAIN_DATA_BASE_URL = void 0;
const tslib_1 = require("tslib");
const pieces_framework_1 = require("@activepieces/pieces-framework");
const pieces_common_1 = require("@activepieces/pieces-common");
const launch_workflow_1 = require("./lib/actions/launch-workflow");
const get_job_results_1 = require("./lib/actions/get-job-results");
exports.CAPTAIN_DATA_BASE_URL = 'https://api.captaindata.co/v3';
exports.captainDataAuth = pieces_framework_1.PieceAuth.CustomAuth({
    required: true,
    props: {
        apiKey: pieces_framework_1.PieceAuth.SecretText({
            displayName: 'API key',
            required: true,
        }),
        projectId: pieces_framework_1.Property.ShortText({
            displayName: 'Project ID',
            required: true,
        }),
    },
});
exports.captainData = (0, pieces_framework_1.createPiece)({
    displayName: 'Captain-data',
    auth: exports.captainDataAuth,
    minimumSupportedRelease: '0.20.0',
    logoUrl: 'https://cdn.activepieces.com/pieces/captain-data.png',
    authors: ['AdamSelene'],
    actions: [
        launch_workflow_1.launchWorkflow,
        get_job_results_1.getJobResults,
        (0, pieces_common_1.createCustomApiCallAction)({
            auth: exports.captainDataAuth,
            baseUrl: () => exports.CAPTAIN_DATA_BASE_URL,
            authMapping: (auth) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
                return ({
                    Authorization: `x-api-key ${auth.apiKey}`,
                    'x-project-id': auth.projectId,
                });
            }),
        }),
    ],
    triggers: [],
});
//# sourceMappingURL=index.js.map