"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.zoom = exports.zoomAuth = void 0;
const tslib_1 = require("tslib");
const pieces_common_1 = require("@activepieces/pieces-common");
const pieces_framework_1 = require("@activepieces/pieces-framework");
const shared_1 = require("@activepieces/shared");
const create_meeting_1 = require("./lib/actions/create-meeting");
const create_meeting_registrant_1 = require("./lib/actions/create-meeting-registrant");
exports.zoomAuth = pieces_framework_1.PieceAuth.OAuth2({
    description: '',
    authUrl: 'https://zoom.us/oauth/authorize',
    tokenUrl: 'https://zoom.us/oauth/token',
    required: true,
    scope: ['meeting:write:admin', 'meeting:write'],
});
exports.zoom = (0, pieces_framework_1.createPiece)({
    displayName: 'Zoom',
    description: 'Video conferencing, web conferencing, webinars, screen sharing',
    minimumSupportedRelease: '0.5.0',
    logoUrl: 'https://cdn.activepieces.com/pieces/zoom.png',
    categories: [shared_1.PieceCategory.COMMUNICATION],
    actions: [
        create_meeting_1.zoomCreateMeeting,
        create_meeting_registrant_1.zoomCreateMeetingRegistrant,
        (0, pieces_common_1.createCustomApiCallAction)({
            baseUrl: () => 'https://api.zoom.us/v2',
            auth: exports.zoomAuth,
            authMapping: (auth) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
                const typedAuth = auth;
                return {
                    Authorization: `Bearer ${typedAuth.access_token}`,
                };
            }),
        }),
    ],
    auth: exports.zoomAuth,
    authors: ["kanarelo", "kishanprmr", "MoShizzle", "khaledmashaly", "abuaboud"],
    triggers: [],
});
//# sourceMappingURL=index.js.map