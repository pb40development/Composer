"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.github = exports.githubAuth = void 0;
const tslib_1 = require("tslib");
const pieces_common_1 = require("@activepieces/pieces-common");
const pieces_framework_1 = require("@activepieces/pieces-framework");
const shared_1 = require("@activepieces/shared");
const create_issue_1 = require("./lib/actions/create-issue");
const unlock_issue_1 = require("./lib/actions/unlock-issue");
const trigger_1 = require("./lib/trigger");
const get_issue_information_1 = require("./lib/actions/get-issue-information");
const create_comment_on_a_issue_1 = require("./lib/actions/create-comment-on-a-issue");
const lock_issue_1 = require("./lib/actions/lock-issue");
exports.githubAuth = pieces_framework_1.PieceAuth.OAuth2({
    required: true,
    authUrl: 'https://github.com/login/oauth/authorize',
    tokenUrl: 'https://github.com/login/oauth/access_token',
    scope: ['admin:repo_hook', 'admin:org', 'repo'],
});
exports.github = (0, pieces_framework_1.createPiece)({
    displayName: 'GitHub',
    description: 'Developer platform that allows developers to create, store, manage and share their code',
    minimumSupportedRelease: '0.5.0',
    logoUrl: 'https://cdn.activepieces.com/pieces/github.png',
    categories: [shared_1.PieceCategory.DEVELOPER_TOOLS],
    auth: exports.githubAuth,
    actions: [
        create_issue_1.githubCreateIssueAction,
        get_issue_information_1.githubGetIssueInformation,
        create_comment_on_a_issue_1.githubCreateCommentOnAIssue,
        lock_issue_1.githubLockIssueAction,
        unlock_issue_1.githubUnlockIssueAction,
        (0, pieces_common_1.createCustomApiCallAction)({
            baseUrl: () => 'https://api.github.com',
            auth: exports.githubAuth,
            authMapping: (auth) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
                return ({
                    Authorization: `Bearer ${auth.access_token}`,
                });
            }),
        }),
    ],
    authors: [
        'kishanprmr',
        'MoShizzle',
        'AbdulTheActivePiecer',
        'khaledmashaly',
        'abuaboud',
        'tintinthedev',
    ],
    triggers: trigger_1.githubTriggers,
});
//# sourceMappingURL=index.js.map