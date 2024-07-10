"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.claude = exports.claudeAuth = void 0;
const tslib_1 = require("tslib");
const pieces_framework_1 = require("@activepieces/pieces-framework");
const pieces_common_1 = require("@activepieces/pieces-common");
const send_prompt_1 = require("./lib/actions/send-prompt");
const common_1 = require("./lib/common/common");
const shared_1 = require("@activepieces/shared");
const markdownDescription = `
Follow these instructions to get your Claude API Key:

1. Visit the following website: https://console.anthropic.com/settings/keys.
2. Once on the website, locate and click on the option to obtain your Claude API Key.

`;
exports.claudeAuth = pieces_framework_1.PieceAuth.SecretText({
    displayName: 'API Key',
    required: true,
    description: markdownDescription,
});
exports.claude = (0, pieces_framework_1.createPiece)({
    displayName: 'Anthropic Claude',
    auth: exports.claudeAuth,
    minimumSupportedRelease: '0.20.0',
    logoUrl: 'https://cdn.activepieces.com/pieces/claude.png',
    categories: [shared_1.PieceCategory.ARTIFICIAL_INTELLIGENCE],
    authors: ['dennisrongo'],
    actions: [
        send_prompt_1.askClaude,
        (0, pieces_common_1.createCustomApiCallAction)({
            auth: exports.claudeAuth,
            baseUrl: () => common_1.baseUrl,
            authMapping: (auth) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
                return {
                    'x-api-key': `${auth}`,
                };
            }),
        }),
    ],
    triggers: [],
});
//# sourceMappingURL=index.js.map