"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.githubCreateCommentOnAIssue = void 0;
const tslib_1 = require("tslib");
const index_1 = require("../../index");
const pieces_framework_1 = require("@activepieces/pieces-framework");
const common_1 = require("../common");
const pieces_common_1 = require("@activepieces/pieces-common");
exports.githubCreateCommentOnAIssue = (0, pieces_framework_1.createAction)({
    auth: index_1.githubAuth,
    name: 'createCommentOnAIssue',
    displayName: 'Create comment on a issue',
    description: 'Adds a comment to the specified issue (also works with pull requests)',
    props: {
        repository: common_1.githubCommon.repositoryDropdown,
        issue_number: pieces_framework_1.Property.Number({
            displayName: 'Issue number',
            description: 'The number of the issue to comment on',
            required: true,
        }),
        comment: pieces_framework_1.Property.LongText({
            displayName: 'Comment',
            description: 'The comment to add to the issue',
            required: true,
        }),
    },
    run(configValue) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const issueNumber = configValue.propsValue.issue_number;
            const { owner, repo } = configValue.propsValue.repository;
            const request = {
                url: `${common_1.githubCommon.baseUrl}/repos/${owner}/${repo}/issues/${issueNumber}/comments`,
                method: pieces_common_1.HttpMethod.POST,
                body: {
                    body: configValue.propsValue.comment,
                },
                authentication: {
                    type: pieces_common_1.AuthenticationType.BEARER_TOKEN,
                    token: configValue.auth.access_token,
                },
            };
            const response = yield pieces_common_1.httpClient.sendRequest(request);
            return {
                success: response.status === 201,
                comment: response.body,
            };
        });
    },
});
//# sourceMappingURL=create-comment-on-a-issue.js.map