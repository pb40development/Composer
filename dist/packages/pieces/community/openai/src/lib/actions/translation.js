"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.translateAction = void 0;
const tslib_1 = require("tslib");
const pieces_common_1 = require("@activepieces/pieces-common");
const pieces_framework_1 = require("@activepieces/pieces-framework");
const __1 = require("../..");
const form_data_1 = tslib_1.__importDefault(require("form-data"));
const mime_types_1 = tslib_1.__importDefault(require("mime-types"));
const common_1 = require("../common/common");
exports.translateAction = (0, pieces_framework_1.createAction)({
    name: 'translate',
    displayName: 'Translate Audio',
    description: 'Translate audio to text using whisper-1 model',
    auth: __1.openaiAuth,
    props: {
        audio: pieces_framework_1.Property.File({
            displayName: 'Audio',
            required: true,
            description: 'Audio file to translate',
        }),
    },
    run: (context) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
        const fileData = context.propsValue.audio;
        const mimeType = mime_types_1.default.lookup(fileData.extension ? fileData.extension : '');
        const form = new form_data_1.default();
        form.append('file', fileData.data, {
            filename: fileData.filename,
            contentType: mimeType,
        });
        form.append('model', 'whisper-1');
        const headers = {
            Authorization: `Bearer ${context.auth}`,
        };
        const request = {
            method: pieces_common_1.HttpMethod.POST,
            url: `${common_1.baseUrl}/audio/translations`,
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
//# sourceMappingURL=translation.js.map