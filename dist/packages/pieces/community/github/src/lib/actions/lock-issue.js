"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.githubLockIssueAction = void 0;
const tslib_1 = require("tslib");
const index_1 = require("../../index");
const pieces_framework_1 = require("@activepieces/pieces-framework");
const common_1 = require("../common");
const pieces_common_1 = require("@activepieces/pieces-common");
exports.githubLockIssueAction = (0, pieces_framework_1.createAction)({
    auth: index_1.githubAuth,
    name: 'lockIssue',
    displayName: 'Lock issue',
    description: 'Locks the specified issue',
    props: {
        repository: common_1.githubCommon.repositoryDropdown,
        issue_number: pieces_framework_1.Property.Number({
            displayName: 'Issue Number',
            description: 'The number of the issue to be locked',
            required: true,
        }),
        lock_reason: pieces_framework_1.Property.Dropdown({
            displayName: 'Lock Reason',
            description: 'The reason for locking the issue',
            required: false,
            refreshers: [],
            options: () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
                return {
                    options: [
                        { value: 'off-topic', label: 'Off-topic' },
                        { value: 'too heated', label: 'Too heated' },
                        { value: 'resolved', label: 'Resolved' },
                        { value: 'spam', label: 'Spam' },
                    ],
                };
            }),
        }),
    },
    run(configValue) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const { issue_number } = configValue.propsValue;
            const { owner, repo } = configValue.propsValue.repository;
            const request = {
                url: `${common_1.githubCommon.baseUrl}/repos/${owner}/${repo}/issues/${issue_number}/lock`,
                method: pieces_common_1.HttpMethod.PUT,
                queryParams: {
                    owner: `${owner}`,
                    repo: `${repo}`,
                    issue_number: `${issue_number}`,
                },
                body: {
                    lock_reason: `${configValue.propsValue.lock_reason}`,
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
//# sourceMappingURL=lock-issue.js.map