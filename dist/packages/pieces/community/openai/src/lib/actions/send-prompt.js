"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.askOpenAI = void 0;
const tslib_1 = require("tslib");
const pieces_framework_1 = require("@activepieces/pieces-framework");
const openai_1 = tslib_1.__importDefault(require("openai"));
const __1 = require("../..");
const common_1 = require("../common/common");
exports.askOpenAI = (0, pieces_framework_1.createAction)({
    auth: __1.openaiAuth,
    name: 'ask_chatgpt',
    displayName: 'Ask ChatGPT',
    description: 'Ask ChatGPT anything you want!',
    props: {
        model: pieces_framework_1.Property.Dropdown({
            displayName: 'Model',
            required: true,
            description: 'The model which will generate the completion. Some models are suitable for natural language tasks, others specialize in code.',
            refreshers: [],
            defaultValue: 'gpt-3.5-turbo',
            options: (_a) => tslib_1.__awaiter(void 0, [_a], void 0, function* ({ auth }) {
                if (!auth) {
                    return {
                        disabled: true,
                        placeholder: 'Enter your API key first',
                        options: [],
                    };
                }
                try {
                    const openai = new openai_1.default({
                        apiKey: auth,
                    });
                    const response = yield openai.models.list();
                    // We need to get only LLM models
                    const models = response.data.filter((model) => !common_1.notLLMs.includes(model.id));
                    return {
                        disabled: false,
                        options: models.map((model) => {
                            return {
                                label: model.id,
                                value: model.id,
                            };
                        }),
                    };
                }
                catch (error) {
                    return {
                        disabled: true,
                        options: [],
                        placeholder: "Couldn't load models, API key is invalid",
                    };
                }
            }),
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
            validators: [pieces_framework_1.Validators.maxLength(128)],
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
    run(_a) {
        return tslib_1.__awaiter(this, arguments, void 0, function* ({ auth, propsValue, store }) {
            var _b;
            const openai = new openai_1.default({
                apiKey: auth,
            });
            const { model, temperature, maxTokens, topP, frequencyPenalty, presencePenalty, prompt, memoryKey, } = propsValue;
            let messageHistory = [];
            // If memory key is set, retrieve messages stored in history
            if (memoryKey) {
                messageHistory = (_b = (yield store.get(memoryKey, pieces_framework_1.StoreScope.PROJECT))) !== null && _b !== void 0 ? _b : [];
            }
            // Add user prompt to message history
            messageHistory.push({
                role: 'user',
                content: prompt,
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
            // Send prompt
            const completion = yield openai.chat.completions.create({
                model: model,
                messages: [...roles, ...messageHistory],
                temperature: temperature,
                max_tokens: maxTokens,
                top_p: topP,
                frequency_penalty: frequencyPenalty,
                presence_penalty: presencePenalty,
            });
            // Add response to message history
            messageHistory = [...messageHistory, completion.choices[0].message];
            // Check message history token size
            // System limit is 32K tokens, we can probably make it bigger but this is a safe spot
            const tokenLength = yield (0, common_1.calculateMessagesTokenSize)(messageHistory, model);
            if (memoryKey) {
                // If tokens exceed 90% system limit or 90% of model limit - maxTokens, reduce history token size
                if ((0, common_1.exceedsHistoryLimit)(tokenLength, model, maxTokens)) {
                    messageHistory = yield (0, common_1.reduceContextSize)(messageHistory, model, maxTokens);
                }
                // Store history
                yield store.put(memoryKey, messageHistory, pieces_framework_1.StoreScope.PROJECT);
            }
            return completion.choices[0].message.content;
        });
    },
});
//# sourceMappingURL=send-prompt.js.map