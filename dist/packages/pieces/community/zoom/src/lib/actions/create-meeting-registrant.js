"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.zoomCreateMeetingRegistrant = void 0;
const tslib_1 = require("tslib");
const pieces_framework_1 = require("@activepieces/pieces-framework");
const pieces_common_1 = require("@activepieces/pieces-common");
const props_1 = require("../common/props");
const __1 = require("../..");
exports.zoomCreateMeetingRegistrant = (0, pieces_framework_1.createAction)({
    auth: __1.zoomAuth,
    name: 'zoom_create_meeting_registrant',
    displayName: 'Create Zoom Meeting Registrant',
    description: "Create and submit a user's registration to a meeting.",
    props: (0, props_1.getRegistarantProps)(),
    run(context) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const body = Object.assign({}, context.propsValue);
            delete body['auth'];
            delete body['meeting_id'];
            const request = {
                method: pieces_common_1.HttpMethod.POST,
                url: `https://api.zoom.us/v2/meetings/${context.propsValue.meeting_id}/registrants`,
                body,
                authentication: {
                    type: pieces_common_1.AuthenticationType.BEARER_TOKEN,
                    token: context.auth.access_token,
                },
                queryParams: {},
            };
            const result = yield pieces_common_1.httpClient.sendRequest(request);
            console.debug('Meeting registration response', result);
            if (result.status === 201) {
                return result.body;
            }
            else {
                return result;
            }
        });
    },
});
//# sourceMappingURL=create-meeting-registrant.js.map