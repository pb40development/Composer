"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.askAssistant = void 0;
const tslib_1 = require("tslib");
const pieces_framework_1 = require("@activepieces/pieces-framework");
const openai_1 = tslib_1.__importDefault(require("openai"));
const __1 = require("../..");
const common_1 = require("../common/common");
exports.askAssistant = (0, pieces_framework_1.createAction)({
    auth: __1.openaiAuth,
    name: 'ask_assistant',
    displayName: 'Ask Assistant',
    description: 'Ask a GPT assistant anything you want!',
    props: {
        assistant: pieces_framework_1.Property.Dropdown({
            displayName: 'Assistant',
            required: true,
            description: 'The assistant which will generate the completion.',
            refreshers: [],
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
                    const assistants = yield openai.beta.assistants.list();
                    return {
                        disabled: false,
                        options: assistants.data.map((assistant) => {
                            return {
                                label: assistant.name,
                                value: assistant.id,
                            };
                        }),
                    };
                }
                catch (error) {
                    return {
                        disabled: true,
                        options: [],
                        placeholder: "Couldn't load assistants, API key is invalid",
                    };
                }
            }),
        }),
        prompt: pieces_framework_1.Property.LongText({
            displayName: 'Question',
            required: true,
        }),
        memoryKey: pieces_framework_1.Property.ShortText({
            displayName: 'Memory Key',
            validators: [pieces_framework_1.Validators.maxLength(128)],
            description: 'A memory key that will keep the chat history shared across runs and flows. Keep it empty to leave your assistant without memory of previous messages.',
            required: false,
        }),
    },
    run(_a) {
        return tslib_1.__awaiter(this, arguments, void 0, function* ({ auth, propsValue, store }) {
            const openai = new openai_1.default({
                apiKey: auth,
            });
            const { assistant, prompt, memoryKey } = propsValue;
            const runCheckDelay = 1000;
            let response;
            let thread;
            if (memoryKey) {
                // Get existing thread ID or create a new thread for this memory key
                thread = yield store.get(memoryKey, pieces_framework_1.StoreScope.PROJECT);
                if (!thread) {
                    thread = yield openai.beta.threads.create();
                    store.put(memoryKey, thread, pieces_framework_1.StoreScope.PROJECT);
                }
            }
            else {
                thread = yield openai.beta.threads.create();
            }
            const message = yield openai.beta.threads.messages.create(thread.id, {
                role: 'user',
                content: prompt,
            });
            const run = yield openai.beta.threads.runs.create(thread.id, {
                assistant_id: assistant,
            });
            // Wait at least 400ms for inference to finish before checking to save requests
            yield (0, common_1.sleep)(400);
            while (!response) {
                const runCheck = yield openai.beta.threads.runs.retrieve(thread.id, run.id);
                if (runCheck.status == 'completed') {
                    const messages = yield openai.beta.threads.messages.list(thread.id);
                    // Return only messages that are newer than the user's latest message
                    response = messages.data.splice(0, messages.data.findIndex((m) => m.id == message.id));
                    break;
                }
                yield (0, common_1.sleep)(runCheckDelay);
            }
            return response;
        });
    },
});
//# sourceMappingURL=ask-assistant.js.map