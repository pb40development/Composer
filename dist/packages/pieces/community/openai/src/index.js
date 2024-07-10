"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.openai = exports.openaiAuth = void 0;
const tslib_1 = require("tslib");
const pieces_common_1 = require("@activepieces/pieces-common");
const pieces_framework_1 = require("@activepieces/pieces-framework");
const shared_1 = require("@activepieces/shared");
const ask_assistant_1 = require("./lib/actions/ask-assistant");
const generate_image_1 = require("./lib/actions/generate-image");
const send_prompt_1 = require("./lib/actions/send-prompt");
const text_to_speech_1 = require("./lib/actions/text-to-speech");
const transcriptions_1 = require("./lib/actions/transcriptions");
const translation_1 = require("./lib/actions/translation");
const vision_prompt_1 = require("./lib/actions/vision-prompt");
const common_1 = require("./lib/common/common");
const extract_structure_data_action_1 = require("./lib/actions/extract-structure-data.action");
const markdownDescription = `
Follow these instructions to get your OpenAI API Key:

1. Visit the following website: https://platform.openai.com/account/api-keys.
2. Once on the website, locate and click on the option to obtain your OpenAI API Key.

It is strongly recommended that you add your credit card information to your OpenAI account and upgrade to the paid plan **before** generating the API Key. This will help you prevent 429 errors.
`;
exports.openaiAuth = pieces_framework_1.PieceAuth.SecretText({
    description: markdownDescription,
    displayName: 'API Key',
    required: true,
    validate: (auth) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
        try {
            yield pieces_common_1.httpClient.sendRequest({
                url: `${common_1.baseUrl}/models`,
                method: pieces_common_1.HttpMethod.GET,
                authentication: {
                    type: pieces_common_1.AuthenticationType.BEARER_TOKEN,
                    token: auth.auth,
                },
            });
            return {
                valid: true,
            };
        }
        catch (e) {
            return {
                valid: false,
                error: 'Invalid API key',
            };
        }
    }),
});
exports.openai = (0, pieces_framework_1.createPiece)({
    displayName: 'OpenAI',
    description: 'Use the many tools ChatGPT has to offer.',
    minimumSupportedRelease: '0.5.0',
    logoUrl: 'https://cdn.activepieces.com/pieces/openai.png',
    categories: [shared_1.PieceCategory.ARTIFICIAL_INTELLIGENCE],
    auth: exports.openaiAuth,
    actions: [
        send_prompt_1.askOpenAI,
        ask_assistant_1.askAssistant,
        generate_image_1.generateImage,
        vision_prompt_1.visionPrompt,
        text_to_speech_1.textToSpeech,
        transcriptions_1.transcribeAction,
        translation_1.translateAction,
        extract_structure_data_action_1.extractStructuredDataAction,
        (0, pieces_common_1.createCustomApiCallAction)({
            auth: exports.openaiAuth,
            baseUrl: () => common_1.baseUrl,
            authMapping: (auth) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
                return {
                    Authorization: `Bearer ${auth}`,
                };
            }),
        }),
    ],
    authors: [
        'aboudzein',
        'astorozhevsky',
        'Willianwg',
        'Nilesh',
        'Salem-Alaa',
        'kishanprmr',
        'MoShizzle',
        'khaledmashaly',
        'abuaboud',
    ],
    triggers: [],
});
//# sourceMappingURL=index.js.map