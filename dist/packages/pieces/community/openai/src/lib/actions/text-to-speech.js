"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.textToSpeech = void 0;
const tslib_1 = require("tslib");
const pieces_framework_1 = require("@activepieces/pieces-framework");
const openai_1 = tslib_1.__importDefault(require("openai"));
const __1 = require("../..");
const common_1 = require("../common/common");
exports.textToSpeech = (0, pieces_framework_1.createAction)({
    auth: __1.openaiAuth,
    name: 'text_to_speech',
    displayName: 'Text-to-Speech',
    description: 'Generate an audio recording from text',
    props: {
        text: pieces_framework_1.Property.LongText({
            displayName: 'Text',
            description: 'The text you want to hear.',
            required: true,
        }),
        model: pieces_framework_1.Property.Dropdown({
            displayName: 'Model',
            required: true,
            description: 'The model which will generate the audio.',
            defaultValue: 'tts-1',
            refreshers: [],
            options: () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
                return {
                    options: [
                        {
                            label: 'tts-1',
                            value: 'tts-1',
                        },
                        {
                            label: 'tts-1-hd',
                            value: 'tts-1-hd',
                        },
                    ],
                };
            }),
        }),
        speed: pieces_framework_1.Property.Number({
            displayName: 'Speed',
            description: 'The speed of the audio. Minimum is 0.25 and maximum is 4.00.',
            defaultValue: 1.0,
            required: false,
        }),
        voice: pieces_framework_1.Property.Dropdown({
            displayName: 'Voice',
            description: 'The voice to generate the audio in.',
            required: false,
            refreshers: [],
            defaultValue: 'alloy',
            options: () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
                return {
                    options: [
                        {
                            label: 'alloy',
                            value: 'alloy',
                        },
                        {
                            label: 'echo',
                            value: 'echo',
                        },
                        {
                            label: 'fable',
                            value: 'fable',
                        },
                        {
                            label: 'onyx',
                            value: 'onyx',
                        },
                        {
                            label: 'nova',
                            value: 'nova',
                        },
                        {
                            label: 'shimmer',
                            value: 'shimmer',
                        },
                    ],
                };
            }),
        }),
        format: pieces_framework_1.Property.Dropdown({
            displayName: 'Output Format',
            required: false,
            description: 'The format you want the audio file in.',
            defaultValue: 'mp3',
            refreshers: [],
            options: () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
                return {
                    options: [
                        {
                            label: 'mp3',
                            value: 'mp3',
                        },
                        {
                            label: 'opus',
                            value: 'opus',
                        },
                        {
                            label: 'aac',
                            value: 'aac',
                        },
                        {
                            label: 'flac',
                            value: 'flac',
                        },
                    ],
                };
            }),
        }),
    },
    run(_a) {
        return tslib_1.__awaiter(this, arguments, void 0, function* ({ auth, propsValue, files }) {
            const openai = new openai_1.default({
                apiKey: auth,
            });
            const { voice, format, model, text, speed } = propsValue;
            const audio = yield openai.audio.speech.create({
                model: model,
                input: text,
                response_format: format,
                voice: voice,
                speed: speed,
            });
            const result = yield (0, common_1.streamToBuffer)(audio.body);
            return files.write({
                fileName: 'test',
                data: result,
            });
        });
    },
});
//# sourceMappingURL=text-to-speech.js.map