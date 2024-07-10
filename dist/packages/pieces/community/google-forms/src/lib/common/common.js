"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.googleFormsCommon = void 0;
const tslib_1 = require("tslib");
const pieces_framework_1 = require("@activepieces/pieces-framework");
const pieces_common_1 = require("@activepieces/pieces-common");
exports.googleFormsCommon = {
    include_team_drives: pieces_framework_1.Property.Checkbox({
        displayName: 'Include Team Drive Forms',
        description: 'Determines if forms from Team Drives should be included in the results.',
        defaultValue: false,
        required: false,
    }),
    form_id: pieces_framework_1.Property.Dropdown({
        displayName: 'Form',
        required: true,
        refreshers: ['include_team_drives'],
        options: (_a) => tslib_1.__awaiter(void 0, [_a], void 0, function* ({ auth, include_team_drives }) {
            if (!auth) {
                return {
                    disabled: true,
                    options: [],
                    placeholder: 'Please authenticate first',
                };
            }
            const authProp = auth;
            const files = (yield pieces_common_1.httpClient.sendRequest({
                method: pieces_common_1.HttpMethod.GET,
                url: `https://www.googleapis.com/drive/v3/files`,
                queryParams: {
                    q: "mimeType='application/vnd.google-apps.form'",
                    includeItemsFromAllDrives: include_team_drives ? 'true' : 'false',
                    supportsAllDrives: 'true',
                },
                authentication: {
                    type: pieces_common_1.AuthenticationType.BEARER_TOKEN,
                    token: authProp['access_token'],
                },
            })).body.files;
            return {
                disabled: false,
                options: files.map((file) => {
                    return {
                        label: file.name,
                        value: file.id,
                    };
                }),
            };
        }),
    }),
};
//# sourceMappingURL=common.js.map