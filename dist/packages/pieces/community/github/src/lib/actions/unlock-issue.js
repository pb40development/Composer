"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.githubUnlockIssueAction = void 0;
const tslib_1 = require("tslib");
const index_1 = require("../../index");
const pieces_framework_1 = require("@activepieces/pieces-framework");
const common_1 = require("../common");
const pieces_common_1 = require("@activepieces/pieces-common");
exports.githubUnlockIssueAction = (0, pieces_framework_1.createAction)({
    auth: index_1.githubAuth,
    name: 'unlockIssue',
    displayName: 'Unlock issue',
    description: 'Unlocks the specified issue',
    props: {
        repository: common_1.githubCommon.repositoryDropdown,
        issue_number: pieces_framework_1.Property.Number({
            displayName: 'Issue Number',
            description: 'The number of the issue to be unlocked',
            required: true,
        }),
    },
    run(configValue) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const { issue_number } = configValue.propsValue;
            const { owner, repo } = configValue.propsValue.repository;
            const request = {
                url: `${common_1.githubCommon.baseUrl}/repos/${owner}/${repo}/issues/${issue_number}/lock`,
                method: pieces_common_1.HttpMethod.DELETE,
                queryParams: {
                    owner: `${owner}`,
                    repo: `${repo}`,
                    issue_number: `${issue_number}`,
                },
                authentication: {
                    type: pieces_common_1.AuthenticationType.BEARER_TOKEN,
                    token: configValue.auth.access_token,
                },
            };
            const response = yield pieces_common_1.httpClient.sendRequest(request);
            return {
                success: response.status === 204,
            };
        });
    },
});
//# sourceMappingURL=unlock-issue.js.map