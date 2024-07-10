"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.githubNewRepoEvent = void 0;
const tslib_1 = require("tslib");
const pieces_framework_1 = require("@activepieces/pieces-framework");
const pieces_common_1 = require("@activepieces/pieces-common");
const common_1 = require("../common");
const __1 = require("../../");
exports.githubNewRepoEvent = (0, pieces_framework_1.createTrigger)({
    auth: __1.githubAuth,
    name: 'new_star',
    displayName: 'New Star',
    description: 'Triggers when there is a new star on the repository',
    props: {
        repository: common_1.githubCommon.repositoryDropdown,
    },
    sampleData: {
        action: 'created',
        starred_at: '2023-01-23T13:23:24Z',
        repository: {
            id: 573661753,
            name: 'activepieces',
            full_name: 'activepieces/activepieces',
            owner: {
                login: 'activepieces',
                id: 99494700,
            },
            topics: ['automation', 'low-code', 'no-code', 'workflows', 'zapier'],
            visibility: 'public',
            forks: 10,
            open_issues: 49,
            watchers: 155,
            default_branch: 'main',
        },
        organization: {
            login: 'activepieces',
            id: 99494700,
            description: 'Automate your work, Open source alternative to Zapier, Tray.io, make',
        },
        sender: {
            login: 'abuaboud',
            id: 1812998,
            avatar_url: 'https://avatars.githubusercontent.com/u/31868364?v=4',
        },
    },
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
                    events: ['star'],
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
            yield context.store.put('_trigger', {
                webhookId: webhook.id,
                owner: owner,
                repo: repo,
            });
        });
    },
    onDisable(context) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const response = yield context.store.get('_trigger');
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
            if (isVerificationCall(context.payload.body)) {
                return [];
            }
            return [context.payload.body];
        });
    },
});
function isVerificationCall(payload) {
    return payload['zen'] !== undefined;
}
//# sourceMappingURL=new-star.js.map