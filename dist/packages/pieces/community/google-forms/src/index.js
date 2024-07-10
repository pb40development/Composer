"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.googleForms = exports.googleFormsAuth = void 0;
const tslib_1 = require("tslib");
const pieces_common_1 = require("@activepieces/pieces-common");
const pieces_framework_1 = require("@activepieces/pieces-framework");
const shared_1 = require("@activepieces/shared");
const new_form_response_1 = require("./lib/triggers/new-form-response");
exports.googleFormsAuth = pieces_framework_1.PieceAuth.OAuth2({
    authUrl: 'https://accounts.google.com/o/oauth2/auth',
    tokenUrl: 'https://oauth2.googleapis.com/token',
    required: true,
    scope: [
        'https://www.googleapis.com/auth/forms.responses.readonly',
        'https://www.googleapis.com/auth/drive.readonly',
    ],
});
exports.googleForms = (0, pieces_framework_1.createPiece)({
    displayName: 'Google Forms',
    description: 'Receive form responses from Google Forms',
    minimumSupportedRelease: '0.5.0',
    logoUrl: 'https://cdn.activepieces.com/pieces/google-forms.png',
    categories: [shared_1.PieceCategory.FORMS_AND_SURVEYS],
    authors: ["kishanprmr", "MoShizzle", "khaledmashaly", "abuaboud", "Startouf"],
    auth: exports.googleFormsAuth,
    actions: [
        (0, pieces_common_1.createCustomApiCallAction)({
            baseUrl: () => 'https://forms.googleapis.com/v1',
            auth: exports.googleFormsAuth,
            authMapping: (auth) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
                return ({
                    Authorization: `Bearer ${auth.access_token}`,
                });
            }),
        }),
    ],
    triggers: [new_form_response_1.newResponse],
});
//# sourceMappingURL=index.js.map