"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.askClaude = void 0;
const tslib_1 = require("tslib");
const pieces_framework_1 = require("@activepieces/pieces-framework");
const sdk_1 = tslib_1.__importDefault(require("@anthropic-ai/sdk"));
const mime_types_1 = tslib_1.__importDefault(require("mime-types"));
const __1 = require("../..");
const billingIssueMessage = `Error Occurred: 429 \n

1. Ensure that you have enough tokens on your Anthropic platform. \n
2. Generate a new API key. \n
3. Attempt the process again. \n

For guidance, visit: https://console.anthropic.com/settings/plans`;
const unauthorizedMessage = `Error Occurred: 401 \n

Ensure that your API key is valid. \n
`;
exports.askClaude = (0, pieces_framework_1.createAction)({
    auth: __1.claudeAuth,
    name: 'ask_claude',
    displayName: 'Ask Claude',
    description: 'Ask Claude anything you want!',
    props: {
        model: pieces_framework_1.Property.StaticDropdown({
            displayName: 'Model',
            required: true,
            description: 'The model which will generate the completion. Some models are suitable for natural language tasks, others specialize in code.',
            defaultValue: 'claude-3-haiku-20240307',
            options: {
                disabled: false,
                options: [
                    { value: 'claude-3-haiku-20240307', label: 'Claude 3 Haiku' },
                    { value: 'claude-3-sonnet-20240229', label: 'Claude 3 Sonnet' },
                    { value: 'claude-3-opus-20240229', label: 'Claude 3 Opus' },
                ],
            },
        }),
        systemPrompt: pieces_framework_1.Property.LongText({
            displayName: 'System Prompt',
            required: false,
            defaultValue: "You're a helpful assistant.",
        }),
        temperature: pieces_framework_1.Property.Number({
            displayName: 'Temperature',
            required: false,
            description: 'Controls randomness: Lowering results in less random completions. As the temperature approaches zero, the model will become deterministic and repetitive.',
            validators: [pieces_framework_1.Validators.minValue(0), pieces_framework_1.Validators.maxValue(1.0)],
        }),
        maxTokens: pieces_framework_1.Property.Number({
            displayName: 'Maximum Tokens',
            required: false,
            description: "The maximum number of tokens to generate. Requests can use up to 2,048 or 4,096 tokens shared between prompt and completion, don't set the value to maximum and leave some tokens for the input. The exact limit varies by model. (One token is roughly 4 characters for normal English text)",
        }),
        prompt: pieces_framework_1.Property.LongText({
            displayName: 'Question',
            required: true,
        }),
        image: pieces_framework_1.Property.File({
            displayName: 'Image (URL)',
            required: false,
            description: 'URL of image to be used as input for the model.',
        }),
        roles: pieces_framework_1.Property.Json({
            displayName: 'Roles',
            required: false,
            description: 'Array of roles to specify more accurate response',
            defaultValue: [
                {
                    role: 'assistant',
                    content: [
                        {
                            type: 'text',
                            text: 'Hello, how are you?',
                        },
                    ],
                },
            ],
        }),
    },
    run(_a) {
        return tslib_1.__awaiter(this, arguments, void 0, function* ({ auth, propsValue }) {
            var _b, _c, _d, _e;
            const anthropic = new sdk_1.default({
                apiKey: auth,
            });
            let billingIssue = false;
            let unauthorized = false;
            let model = 'claude-3-haiku-20240307';
            if (propsValue.model) {
                model = propsValue.model;
            }
            let temperature = 0.5;
            if (propsValue.temperature) {
                temperature = Number(propsValue.temperature);
            }
            let maxTokens = 1000;
            if (propsValue.maxTokens) {
                maxTokens = Number(propsValue.maxTokens);
            }
            let systemPrompt = 'You are a helpful assistant.';
            if (propsValue.systemPrompt) {
                systemPrompt = propsValue.systemPrompt;
            }
            const rolesArray = propsValue.roles
                ? propsValue.roles
                : [];
            const rolesEnum = ['user', 'assistant'];
            const roles = rolesArray.map((item) => {
                if (!rolesEnum.includes(item.role)) {
                    throw new Error('The only available roles are: [user, assistant]');
                }
                return item;
            });
            const defaultMimeType = 'image/jpeg';
            roles.unshift({
                role: 'user',
                content: [
                    {
                        type: 'text',
                        text: propsValue['prompt'],
                    },
                    ...(propsValue.image
                        ? [
                            {
                                type: 'image',
                                source: {
                                    type: 'base64',
                                    media_type: propsValue.image.extension
                                        ? mime_types_1.default.lookup(propsValue.image.extension) || defaultMimeType
                                        : defaultMimeType,
                                    data: propsValue.image.base64,
                                },
                            },
                        ]
                        : []),
                ],
            });
            const maxRetries = 4;
            let retries = 0;
            let response;
            while (retries < maxRetries) {
                try {
                    const req = yield (anthropic === null || anthropic === void 0 ? void 0 : anthropic.messages.create({
                        model: model,
                        max_tokens: maxTokens,
                        temperature: temperature,
                        system: systemPrompt,
                        messages: roles,
                    }));
                    response = (_b = req === null || req === void 0 ? void 0 : req.content[0].text) === null || _b === void 0 ? void 0 : _b.trim();
                    break; // Break out of the loop if the request is successful
                }
                catch (e) {
                    if ((_c = e === null || e === void 0 ? void 0 : e.type) === null || _c === void 0 ? void 0 : _c.includes('rate_limit_error')) {
                        billingIssue = true;
                        if (retries + 1 === maxRetries) {
                            throw e;
                        }
                        // Calculate the time delay for the next retry using exponential backoff
                        const delay = Math.pow(6, retries) * 1000;
                        console.log(`Retrying in ${delay} milliseconds...`);
                        yield sleep(delay); // Wait for the calculated delay
                        retries++;
                        break;
                    }
                    else {
                        if ((_e = (_d = e === null || e === void 0 ? void 0 : e.error) === null || _d === void 0 ? void 0 : _d.type) === null || _e === void 0 ? void 0 : _e.includes('not_found_error')) {
                            unauthorized = true;
                            throw e;
                        }
                        const new_error = e;
                        throw e;
                        // throw {
                        //   error: new_error.error.message,
                        // };
                    }
                }
            }
            if (billingIssue) {
                throw new Error(billingIssueMessage);
            }
            if (unauthorized) {
                throw new Error(unauthorizedMessage);
            }
            return response;
        });
    },
});
function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}
//# sourceMappingURL=send-prompt.js.map