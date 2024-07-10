"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.githubRegisterTrigger = void 0;
const tslib_1 = require("tslib");
const pieces_framework_1 = require("@activepieces/pieces-framework");
const pieces_common_1 = require("@activepieces/pieces-common");
const common_1 = require("../common");
const __1 = require("../../");
const githubRegisterTrigger = ({ name, displayName, description, sampleData, }) => (0, pieces_framework_1.createTrigger)({
    auth: __1.githubAuth,
    name: `trigger_${name}`,
    displayName,
    description,
    props: {
        repository: common_1.githubCommon.repositoryDropdown,
    },
    sampleData,
    type: pieces_framework_1.TriggerStrategy.WEBHOOK,
    onEnable(context) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const { repo, owner } = context.propsValue['repository'];
            const request = {
                method: pieces_common_1.HttpMethod.POST,
                url: `${common_1.githubCommon.baseUrl}/repos/${owner}/${repo}/hooks`,
                body: {
                    owner: owner,
                    repo: repo,
                    active: true,
                    events: [name],
                    config: {
                        url: context.webhookUrl,
                        content_type: 'json',
                        insecure_ssl: '0',
                    },
                },
                authentication: {
                    type: pieces_common_1.AuthenticationType.BEARER_TOKEN,
                    token: context.auth.access_token,
                },
                queryParams: {},
            };
            const { body: webhook } = yield pieces_common_1.httpClient.sendRequest(request);
            yield context.store.put(`github_${name}_trigger`, {
                webhookId: webhook.id,
                owner: owner,
                repo: repo,
            });
        });
    },
    onDisable(context) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const response = yield context.store.get(`github_${name}_trigger`);
            if (response !== null && response !== undefined) {
                const request = {
                    method: pieces_common_1.HttpMethod.DELETE,
                    url: `${common_1.githubCommon.baseUrl}/repos/${response.owner}/${response.repo}/hooks/${response.webhookId}`,
                    authentication: {
                        type: pieces_common_1.AuthenticationType.BEARER_TOKEN,
                        token: context.auth.access_token,
                    },
                };
                yield pieces_common_1.httpClient.sendRequest(request);
            }
        });
    },
    run(context) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            console.debug('payload received', context.payload.body);
            if (isVerificationCall(context.payload.body)) {
                return [];
            }
            return [context.payload.body];
        });
    },
});
exports.githubRegisterTrigger = githubRegisterTrigger;
function isVerificationCall(payload) {
    return payload['zen'] !== undefined;
}
//# sourceMappingURL=register-trigger.js.map