"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.visionPrompt = void 0;
const tslib_1 = require("tslib");
const pieces_framework_1 = require("@activepieces/pieces-framework");
const openai_1 = tslib_1.__importDefault(require("openai"));
const __1 = require("../..");
exports.visionPrompt = (0, pieces_framework_1.createAction)({
    auth: __1.openaiAuth,
    name: 'vision_prompt',
    displayName: 'Vision Prompt',
    description: 'Ask GPT a question about an image',
    props: {
        image: pieces_framework_1.Property.File({
            displayName: 'Image',
            description: "The image URL or file you want GPT's vision to read.",
            required: true,
        }),
        prompt: pieces_framework_1.Property.LongText({
            displayName: 'Question',
            description: 'What do you want ChatGPT to tell you about the image?',
            required: true,
        }),
        detail: pieces_framework_1.Property.Dropdown({
            displayName: 'Detail',
            required: false,
            description: 'Control how the model processes the image and generates textual understanding.',
            defaultValue: 'auto',
            refreshers: [],
            options: () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
                return {
                    options: [
                        {
                            label: 'low',
                            value: 'low',
                        },
                        {
                            label: 'high',
                            value: 'high',
                        },
                        {
                            label: 'auto',
                            value: 'auto',
                        },
                    ],
                };
            }),
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
            required: false,
            description: "The maximum number of tokens to generate. Requests can use up to 2,048 or 4,096 tokens shared between prompt and completion, don't set the value to maximum and leave some tokens for the input. The exact limit varies by model. (One token is roughly 4 characters for normal English text)",
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
        return tslib_1.__awaiter(this, arguments, void 0, function* ({ auth, propsValue }) {
            const openai = new openai_1.default({
                apiKey: auth,
            });
            const { temperature, maxTokens, topP, frequencyPenalty, presencePenalty } = propsValue;
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
            const completion = yield openai.chat.completions.create({
                model: 'gpt-4-vision-preview',
                messages: [
                    ...roles,
                    {
                        role: 'user',
                        content: [
                            {
                                type: 'text',
                                text: propsValue['prompt'],
                            },
                            {
                                type: 'image_url',
                                image_url: {
                                    url: `data:image/${propsValue.image.extension};base64,${propsValue.image.base64}`,
                                },
                            },
                        ],
                    },
                ],
                temperature: temperature,
                max_tokens: maxTokens,
                top_p: topP,
                frequency_penalty: frequencyPenalty,
                presence_penalty: presencePenalty,
            });
            return completion.choices[0].message.content;
        });
    },
});
//# sourceMappingURL=vision-prompt.js.map