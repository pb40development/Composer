"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.githubCommon = void 0;
const tslib_1 = require("tslib");
const pieces_framework_1 = require("@activepieces/pieces-framework");
const pieces_common_1 = require("@activepieces/pieces-common");
exports.githubCommon = {
    baseUrl: 'https://api.github.com',
    repositoryDropdown: pieces_framework_1.Property.Dropdown({
        displayName: 'Repository',
        refreshers: [],
        required: true,
        options: (_a) => tslib_1.__awaiter(void 0, [_a], void 0, function* ({ auth }) {
            if (!auth) {
                return {
                    disabled: true,
                    options: [],
                    placeholder: 'please authenticate first',
                };
            }
            const authProp = auth;
            const repositories = yield getUserRepo(authProp);
            return {
                disabled: false,
                options: repositories.map((repo) => {
                    return {
                        label: repo.owner.login + '/' + repo.name,
                        value: {
                            owner: repo.owner.login,
                            repo: repo.name,
                        },
                    };
                }),
            };
        }),
    }),
    assigneeDropDown: (required = false) => pieces_framework_1.Property.MultiSelectDropdown({
        displayName: 'Assignees',
        description: 'Assignees for the Issue',
        refreshers: ['repository'],
        required,
        options: (_b) => tslib_1.__awaiter(void 0, [_b], void 0, function* ({ auth, repository }) {
            if (!auth || !repository) {
                return {
                    disabled: true,
                    options: [],
                    placeholder: 'please authenticate first and select repo',
                };
            }
            const authProp = auth;
            const { owner, repo } = repository;
            const assignees = yield getAssignee(authProp, owner, repo);
            return {
                disabled: false,
                options: assignees.map((assignee) => {
                    return {
                        label: assignee.login,
                        value: assignee.login,
                    };
                }),
            };
        }),
    }),
    labelDropDown: (required = false) => pieces_framework_1.Property.MultiSelectDropdown({
        displayName: 'Labels',
        description: 'Labels for the Issue',
        refreshers: ['repository'],
        required,
        options: (_c) => tslib_1.__awaiter(void 0, [_c], void 0, function* ({ auth, repository }) {
            if (!auth || !repository) {
                return {
                    disabled: true,
                    options: [],
                    placeholder: 'please authenticate first and select repo',
                };
            }
            const authProp = auth;
            const { owner, repo } = repository;
            const labels = yield listIssueLabels(authProp, owner, repo);
            return {
                disabled: false,
                options: labels.map((label) => {
                    return {
                        label: label.name,
                        value: label.name,
                    };
                }),
            };
        }),
    }),
};
function getUserRepo(authProp) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        var _a, _b;
        let page = 1;
        let hasNext;
        const repos = [];
        do {
            const request = {
                method: pieces_common_1.HttpMethod.GET,
                url: `${exports.githubCommon.baseUrl}/user/repos`,
                queryParams: {
                    page: page.toString(),
                    per_page: '100',
                },
                authentication: {
                    type: pieces_common_1.AuthenticationType.BEARER_TOKEN,
                    token: authProp.access_token,
                },
            };
            const response = yield pieces_common_1.httpClient.sendRequest(request);
            repos.push(...response.body);
            hasNext = (_b = (_a = response.headers) === null || _a === void 0 ? void 0 : _a.link) === null || _b === void 0 ? void 0 : _b.includes('rel="next"');
            page += 1;
        } while (hasNext);
        return repos;
    });
}
function getAssignee(authProp, owner, repo) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const request = {
            method: pieces_common_1.HttpMethod.GET,
            url: `${exports.githubCommon.baseUrl}/repos/${owner}/${repo}/assignees`,
            queryParams: {
                per_page: '30',
            },
            authentication: {
                type: pieces_common_1.AuthenticationType.BEARER_TOKEN,
                token: authProp.access_token,
            },
        };
        const response = yield pieces_common_1.httpClient.sendRequest(request);
        return response.body;
    });
}
function listIssueLabels(authProp, owner, repo) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const request = {
            method: pieces_common_1.HttpMethod.GET,
            url: `${exports.githubCommon.baseUrl}/repos/${owner}/${repo}/labels`,
            queryParams: {
                per_page: '30',
            },
            authentication: {
                type: pieces_common_1.AuthenticationType.BEARER_TOKEN,
                token: authProp.access_token,
            },
        };
        const response = yield pieces_common_1.httpClient.sendRequest(request);
        return response.body;
    });
}
//# sourceMappingURL=index.js.map