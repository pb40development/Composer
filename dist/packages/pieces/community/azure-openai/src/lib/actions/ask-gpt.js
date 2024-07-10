"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.askGpt = void 0;
const tslib_1 = require("tslib");
const pieces_framework_1 = require("@activepieces/pieces-framework");
const openai_1 = require("@azure/openai");
const common_1 = require("../common");
exports.askGpt = (0, pieces_framework_1.createAction)({
    name: 'ask_gpt',
    displayName: 'Ask GPT',
    description: 'Ask ChatGPT anything you want!',
    props: {
        deploymentId: pieces_framework_1.Property.ShortText({
            displayName: 'Deployment Name',
            description: 'The name of your model deployment.',
            required: true,
        }),
        prompt: pieces_framework_1.Property.LongText({
            displayName: 'Question',
            required: true,
        }),
        temperature: pieces_framework_1.Property.Number({
            displayName: 'Temperature',
            required: false,
            description: 'Controls randomness: Lowering results in less random completions. As the temperature approaches zero, the model will become deterministic and repetitive.',
            validators: [pieces_framework_1.Validators.minValue(0), pieces_framework_1.Validators.maxValue(1.0)],
            defaultValue: 0.9,
        }),
        maxTokens: pieces_framework_1.Property.Number({
            displayName: 'Maximum Tokens',
            required: true,
            description: "The maximum number of tokens to generate. Requests can use up to 2,048 or 4,096 tokens shared between prompt and completion depending on the model. Don't set the value to maximum and leave some tokens for the input. (One token is roughly 4 characters for normal English text)",
            defaultValue: 2048,
        }),
        topP: pieces_framework_1.Property.Number({
            displayName: 'Top P',
            required: false,
            description: 'An alternative to sampling with temperature, called nucleus sampling, where the model considers the results of the tokens with top_p probability mass. So 0.1 means only the tokens comprising the top 10% probability mass are considered.',
            defaultValue: 1,
        }),
        frequencyPenalty: pieces_framework_1.Property.Number({
            displayName: 'Frequency penalty',
            required: false,
            description: "Number between -2.0 and 2.0. Positive values penalize new tokens based on their existing frequency in the text so far, decreasing the model's likelihood to repeat the same line verbatim.",
            defaultValue: 0,
        }),
        presencePenalty: pieces_framework_1.Property.Number({
            displayName: 'Presence penalty',
            required: false,
            description: "Number between -2.0 and 2.0. Positive values penalize new tokens based on whether they appear in the text so far, increasing the mode's likelihood to talk about new topics.",
            defaultValue: 0.6,
        }),
        memoryKey: pieces_framework_1.Property.ShortText({
            displayName: 'Memory Key',
            description: 'A memory key that will keep the chat history shared across runs and flows. Keep it empty to leave ChatGPT without memory of previous messages.',
            required: false,
        }),
        roles: pieces_framework_1.Property.Json({
            displayName: 'Roles',
            required: false,
            description: 'Array of roles to specify more accurate response',
            defaultValue: [
                { role: 'system', content: 'You are a helpful assistant.' },
            ],
        }),
    },
    run(context) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            var _a, _b;
            const { propsValue, store } = context;
            const auth = context.auth;
            const openai = new openai_1.OpenAIClient(auth.endpoint, new openai_1.AzureKeyCredential(auth.apiKey));
            let messageHistory = [];
            // If memory key is set, retrieve messages stored in history
            if (propsValue.memoryKey) {
                messageHistory = (_a = (yield store.get(propsValue.memoryKey, pieces_framework_1.StoreScope.PROJECT))) !== null && _a !== void 0 ? _a : [];
            }
            // Add user prompt to message history
            messageHistory.push({
                role: 'user',
                content: propsValue.prompt,
            });
            // Add system instructions if set by user
            const rolesArray = propsValue.roles ? propsValue.roles : [];
            const roles = rolesArray.map((item) => {
                const rolesEnum = ['system', 'user', 'assistant'];
                if (!rolesEnum.includes(item.role)) {
                    throw new Error('The only available roles are: [system, user, assistant]');
                }
                return {
                    role: item.role,
                    content: item.content,
                };
            });
            const completion = yield openai.getChatCompletions(propsValue.deploymentId, [...roles, ...messageHistory], {
                maxTokens: propsValue.maxTokens,
                temperature: propsValue.temperature,
                frequencyPenalty: propsValue.frequencyPenalty,
                presencePenalty: propsValue.presencePenalty,
                topP: propsValue.topP,
            });
            const responseText = (_b = completion.choices[0].message) === null || _b === void 0 ? void 0 : _b.content;
            // Add response to message history
            messageHistory = [...messageHistory, responseText];
            // Check message history token size
            // System limit is 32K tokens, we can probably make it bigger but this is a safe spot
            const tokenLength = yield (0, common_1.calculateMessagesTokenSize)(messageHistory, '');
            if (propsValue.memoryKey) {
                // If tokens exceed 90% system limit or 90% of model limit - maxTokens, reduce history token size
                if ((0, common_1.exceedsHistoryLimit)(tokenLength, '', propsValue.maxTokens)) {
                    messageHistory = yield (0, common_1.reduceContextSize)(messageHistory, '', propsValue.maxTokens);
                }
                // Store history
                yield store.put(propsValue.memoryKey, messageHistory, pieces_framework_1.StoreScope.PROJECT);
            }
            return responseText;
        });
    },
});
//# sourceMappingURL=ask-gpt.js.map