"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateImage = void 0;
const tslib_1 = require("tslib");
const pieces_framework_1 = require("@activepieces/pieces-framework");
const openai_1 = tslib_1.__importDefault(require("openai"));
const __1 = require("../..");
exports.generateImage = (0, pieces_framework_1.createAction)({
    auth: __1.openaiAuth,
    name: 'generate_image',
    displayName: 'Generate Image',
    description: 'Generate an image using text-to-image models',
    props: {
        model: pieces_framework_1.Property.Dropdown({
            displayName: 'Model',
            required: true,
            description: 'The model which will generate the image.',
            defaultValue: 'dall-e-3',
            refreshers: [],
            options: () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
                return {
                    options: [
                        {
                            label: 'dall-e-3',
                            value: 'dall-e-3',
                        },
                        {
                            label: 'dall-e-2',
                            value: 'dall-e-2',
                        },
                    ],
                };
            }),
        }),
        prompt: pieces_framework_1.Property.LongText({
            displayName: 'Prompt',
            required: true,
        }),
        resolution: pieces_framework_1.Property.Dropdown({
            displayName: 'Resolution',
            description: 'The resolution to generate the image in.',
            required: false,
            refreshers: ['model'],
            defaultValue: '1024x1024',
            options: (_a) => tslib_1.__awaiter(void 0, [_a], void 0, function* ({ model }) {
                let options = [
                    {
                        label: '1024x1024',
                        value: '1024x1024',
                    },
                    {
                        label: '512x512',
                        value: '512x512',
                    },
                    {
                        label: '256x256',
                        value: '256x256',
                    },
                ];
                if (model == 'dall-e-3')
                    options = [
                        {
                            label: '1024x1024',
                            value: '1024x1024',
                        },
                        {
                            label: '1024x1792',
                            value: '1024x1792',
                        },
                        {
                            label: '1792x1024',
                            value: '1792x1024',
                        },
                    ];
                return {
                    options: options,
                };
            }),
        }),
        quality: pieces_framework_1.Property.Dropdown({
            displayName: 'Quality',
            required: false,
            description: 'Standard is faster, HD has better details.',
            defaultValue: 'standard',
            refreshers: [],
            options: () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
                return {
                    options: [
                        {
                            label: 'standard',
                            value: 'standard',
                        },
                        {
                            label: 'hd',
                            value: 'hd',
                        },
                    ],
                };
            }),
        }),
    },
    run(_a) {
        return tslib_1.__awaiter(this, arguments, void 0, function* ({ auth, propsValue }) {
            const openai = new openai_1.default({
                apiKey: auth,
            });
            const { quality, resolution, model, prompt } = propsValue;
            const image = yield openai.images.generate({
                model: model,
                prompt: prompt,
                quality: quality,
                size: resolution,
            });
            return image;
        });
    },
});
//# sourceMappingURL=generate-image.js.map