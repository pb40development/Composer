"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.extractStructuredDataAction = void 0;
const tslib_1 = require("tslib");
const __1 = require("../../");
const pieces_framework_1 = require("@activepieces/pieces-framework");
const openai_1 = tslib_1.__importDefault(require("openai"));
const common_1 = require("../common/common");
exports.extractStructuredDataAction = (0, pieces_framework_1.createAction)({
    auth: __1.openaiAuth,
    name: 'extract-structured-data',
    displayName: 'Extract Structured Data from Text',
    description: 'Returns structured data from provided unstructured text.',
    props: {
        model: pieces_framework_1.Property.Dropdown({
            displayName: 'Model',
            required: true,
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
        text: pieces_framework_1.Property.LongText({
            displayName: 'Unstructured Text',
            required: true,
        }),
        params: pieces_framework_1.Property.Array({
            displayName: 'Data Definition',
            required: true,
            properties: {
                propName: pieces_framework_1.Property.ShortText({
                    displayName: 'Name',
                    description: 'Provide the name of the value you want to extract from the unstructured text. The name should be unique and short. ',
                    required: true,
                }),
                propDescription: pieces_framework_1.Property.LongText({
                    displayName: 'Description',
                    description: 'Brief description of the data, this hints for the AI on what to look for',
                    required: false,
                }),
                propDataType: pieces_framework_1.Property.StaticDropdown({
                    displayName: 'Data Type',
                    description: 'Type of parameter.',
                    required: true,
                    defaultValue: 'string',
                    options: {
                        disabled: false,
                        options: [
                            { label: 'Text', value: 'string' },
                            { label: 'Number', value: 'number' },
                            { label: 'Boolean', value: 'boolean' },
                        ],
                    },
                }),
                propIsRequired: pieces_framework_1.Property.Checkbox({
                    displayName: 'Fail if Not present?',
                    required: true,
                    defaultValue: false,
                }),
            },
        }),
    },
    run(context) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            var _a;
            const { model, text } = context.propsValue;
            const paramInputArray = context.propsValue.params;
            const functionParams = {};
            const requiredFunctionParams = [];
            for (const param of paramInputArray) {
                functionParams[param.propName] = {
                    type: param.propDataType,
                    description: (_a = param.propDescription) !== null && _a !== void 0 ? _a : param.propName,
                };
                if (param.propIsRequired) {
                    requiredFunctionParams.push(param.propName);
                }
            }
            const prompt = 'Extract the following data from the provided text';
            const openai = new openai_1.default({
                apiKey: context.auth,
            });
            const response = yield openai.chat.completions.create({
                model: model,
                messages: [{ role: 'user', content: text }],
                tools: [
                    {
                        type: 'function',
                        function: {
                            name: 'extract_structured_data',
                            description: prompt,
                            parameters: {
                                type: 'object',
                                properties: functionParams,
                                required: requiredFunctionParams,
                            },
                        },
                    },
                ],
            });
            const toolCallsResponse = response.choices[0].message.tool_calls;
            if (toolCallsResponse) {
                return JSON.parse(toolCallsResponse[0].function.arguments);
            }
            else {
                throw new Error(JSON.stringify({
                    message: "OpenAI couldn't extract the fields from the above text."
                }));
            }
        });
    },
});
//# sourceMappingURL=extract-structure-data.action.js.map