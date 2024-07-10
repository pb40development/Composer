"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.githubCreateIssueAction = void 0;
const tslib_1 = require("tslib");
const pieces_framework_1 = require("@activepieces/pieces-framework");
const pieces_common_1 = require("@activepieces/pieces-common");
const __1 = require("../../");
const common_1 = require("../common");
exports.githubCreateIssueAction = (0, pieces_framework_1.createAction)({
    auth: __1.githubAuth,
    name: 'github_create_issue',
    displayName: 'Create Issue',
    description: 'Create Issue in GitHub Repository',
    props: {
        repository: common_1.githubCommon.repositoryDropdown,
        title: pieces_framework_1.Property.ShortText({
            displayName: 'Title',
            description: 'The title of the issue',
            required: true,
        }),
        description: pieces_framework_1.Property.LongText({
            displayName: 'Description',
            description: 'The description of the issue',
            required: false,
        }),
        labels: common_1.githubCommon.labelDropDown(),
        assignees: common_1.githubCommon.assigneeDropDown(),
    },
    run(configValue) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const { title, assignees, labels, description } = configValue.propsValue;
            const { owner, repo } = configValue.propsValue['repository'];
            const requestBody = {
                title: title,
                body: description,
                labels: labels,
                assignees: assignees,
            };
            const request = {
                method: pieces_common_1.HttpMethod.POST,
                url: `${common_1.githubCommon.baseUrl}/repos/${owner}/${repo}/issues`,
                body: requestBody,
                authentication: {
                    type: pieces_common_1.AuthenticationType.BEARER_TOKEN,
                    token: configValue.auth.access_token,
                },
                queryParams: {},
            };
            return yield pieces_common_1.httpClient.sendRequest(request);
        });
    },
});
//# sourceMappingURL=create-issue.js.map