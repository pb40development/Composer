"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.githubGetIssueInformation = void 0;
const tslib_1 = require("tslib");
const index_1 = require("../../index");
const pieces_framework_1 = require("@activepieces/pieces-framework");
const common_1 = require("../common");
const pieces_common_1 = require("@activepieces/pieces-common");
exports.githubGetIssueInformation = (0, pieces_framework_1.createAction)({
    auth: index_1.githubAuth,
    name: 'getIssueInformation',
    displayName: 'Get issue information',
    description: 'Grabs information from a specific issue',
    props: {
        repository: common_1.githubCommon.repositoryDropdown,
        issue_number: pieces_framework_1.Property.Number({
            displayName: 'Issue Number',
            description: 'The number of the issue you want to get information from',
            required: true,
        }),
    },
    run(configValue) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const issueNumber = configValue.propsValue.issue_number;
            const { owner, repo } = configValue.propsValue.repository;
            const request = {
                url: `${common_1.githubCommon.baseUrl}/repos/${owner}/${repo}/issues/${issueNumber}`,
                method: pieces_common_1.HttpMethod.GET,
                headers: {
                    'X-GitHub-Api-Version': '2022-11-28',
                    Authorization: `Bearer ${configValue.auth.access_token}`,
                },
            };
            const response = yield pieces_common_1.httpClient.sendRequest(request);
            return {
                success: response.status === 200,
                issue: response.body,
            };
        });
    },
});
//# sourceMappingURL=get-issue-information.js.map