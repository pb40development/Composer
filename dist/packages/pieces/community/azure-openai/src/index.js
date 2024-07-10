"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.azureOpenai = exports.azureOpenaiAuth = void 0;
const pieces_framework_1 = require("@activepieces/pieces-framework");
const ask_gpt_1 = require("./lib/actions/ask-gpt");
exports.azureOpenaiAuth = pieces_framework_1.PieceAuth.CustomAuth({
    props: {
        endpoint: pieces_framework_1.Property.ShortText({
            displayName: 'Endpoint',
            description: 'https://<resource name>.openai.azure.com/',
            required: true,
        }),
        apiKey: pieces_framework_1.PieceAuth.SecretText({
            displayName: 'API Key',
            description: 'Use the Azure Portal to browse to your OpenAI resource and retrieve an API key',
            required: true,
        }),
    },
    required: true,
});
exports.azureOpenai = (0, pieces_framework_1.createPiece)({
    displayName: 'Azure OpenAI',
    description: 'Powerful AI tools from Microsoft',
    auth: exports.azureOpenaiAuth,
    minimumSupportedRelease: '0.9.0',
    logoUrl: 'https://cdn.activepieces.com/pieces/azure-openai.png',
    authors: ["MoShizzle", "abuaboud"],
    actions: [ask_gpt_1.askGpt],
    triggers: [],
});
//# sourceMappingURL=index.js.map