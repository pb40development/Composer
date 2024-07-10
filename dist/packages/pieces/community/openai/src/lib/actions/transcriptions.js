"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transcribeAction = void 0;
const tslib_1 = require("tslib");
const pieces_common_1 = require("@activepieces/pieces-common");
const pieces_framework_1 = require("@activepieces/pieces-framework");
const __1 = require("../..");
const form_data_1 = tslib_1.__importDefault(require("form-data"));
const mime_types_1 = tslib_1.__importDefault(require("mime-types"));
const common_1 = require("../common/common");
exports.transcribeAction = (0, pieces_framework_1.createAction)({
    name: 'transcribe',
    displayName: 'Transcribe Audio',
    description: 'Transcribe audio to text using whisper-1 model',
    auth: __1.openaiAuth,
    props: {
        audio: pieces_framework_1.Property.File({
            displayName: 'Audio',
            required: true,
            description: 'Audio file to transcribe',
        }),
        language: pieces_framework_1.Property.StaticDropdown({
            displayName: 'Language of the Audio',
            description: 'Language of the audio file the default is en (English).',
            required: false,
            options: {
                options: common_1.Languages,
            },
            defaultValue: 'en',
        }),
    },
    run: (context) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
        const fileData = context.propsValue.audio;
        const mimeType = mime_types_1.default.lookup(fileData.extension ? fileData.extension : '');
        let language = context.propsValue.language;
        // if language is not in languages list, default to english
        if (!common_1.Languages.some((l) => l.value === language)) {
            language = 'en';
        }
        const form = new form_data_1.default();
        form.append('file', fileData.data, {
            filename: fileData.filename,
            contentType: mimeType,
        });
        form.append('model', 'whisper-1');
        form.append('language', language);
        const headers = {
            Authorization: `Bearer ${context.auth}`,
        };
        const request = {
            method: pieces_common_1.HttpMethod.POST,
            url: `${common_1.baseUrl}/audio/transcriptions`,
            body: form,
            headers: Object.assign(Object.assign({}, form.getHeaders()), headers),
        };
        try {
            const response = yield pieces_common_1.httpClient.sendRequest(request);
            return response.body;
        }
        catch (e) {
            throw new Error(`Error while execution:\n${e}`);
        }
    }),
});
//# sourceMappingURL=transcriptions.js.map