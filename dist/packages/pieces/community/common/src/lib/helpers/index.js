"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCustomApiCallAction = exports.getAccessTokenOrThrow = void 0;
const tslib_1 = require("tslib");
const pieces_framework_1 = require("@activepieces/pieces-framework");
const http_1 = require("../http");
const shared_1 = require("@activepieces/shared");
const getAccessTokenOrThrow = (auth) => {
    const accessToken = auth === null || auth === void 0 ? void 0 : auth.access_token;
    if (accessToken === undefined) {
        throw new Error("Invalid bearer token");
    }
    return accessToken;
};
exports.getAccessTokenOrThrow = getAccessTokenOrThrow;
function createCustomApiCallAction({ auth, baseUrl, authMapping, description, displayName, name }) {
    return (0, pieces_framework_1.createAction)({
        name: name ? name : 'custom_api_call',
        displayName: displayName ? displayName : 'Custom API Call',
        description: description ? description : 'Make a custom API call to a specific endpoint',
        auth: auth ? auth : undefined,
        requireAuth: auth ? true : false,
        props: {
            url: pieces_framework_1.Property.DynamicProperties({
                displayName: '',
                required: true,
                refreshers: [],
                props: (_a) => tslib_1.__awaiter(this, [_a], void 0, function* ({ auth }) {
                    return {
                        url: pieces_framework_1.Property.ShortText({
                            displayName: 'URL',
                            description: 'The full URL to use, including the base URL',
                            required: true,
                            defaultValue: baseUrl(auth)
                        })
                    };
                })
            }),
            method: pieces_framework_1.Property.StaticDropdown({
                displayName: 'Method',
                required: true,
                options: {
                    options: Object.values(http_1.HttpMethod).map(v => {
                        return {
                            label: v,
                            value: v,
                        };
                    })
                }
            }),
            headers: pieces_framework_1.Property.Object({
                displayName: 'Headers',
                description: 'Authorization headers are injected automatically from your connection.',
                required: true,
            }),
            queryParams: pieces_framework_1.Property.Object({
                displayName: 'Query Parameters',
                required: true,
            }),
            body: pieces_framework_1.Property.Json({
                displayName: 'Body',
                required: false,
            }),
            failsafe: pieces_framework_1.Property.Checkbox({
                displayName: 'No Error on Failure',
                required: false,
            }),
            timeout: pieces_framework_1.Property.Number({
                displayName: 'Timeout (in seconds)',
                required: false,
            }),
        },
        run: (context) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            const { method, url, headers, queryParams, body, failsafe, timeout } = context.propsValue;
            (0, shared_1.assertNotNullOrUndefined)(method, 'Method');
            (0, shared_1.assertNotNullOrUndefined)(url, 'URL');
            let headersValue = headers;
            if (authMapping) {
                const headers = yield authMapping(context.auth);
                if (headers) {
                    headersValue = Object.assign(Object.assign({}, headersValue), headers);
                }
            }
            const request = {
                method,
                url: url['url'],
                headers: headersValue,
                queryParams: queryParams,
                timeout: timeout ? timeout * 1000 : 0,
            };
            if (body) {
                request.body = body;
            }
            try {
                return yield http_1.httpClient.sendRequest(request);
            }
            catch (error) {
                if (failsafe) {
                    return error.errorMessage();
                }
                throw error;
            }
        })
    });
}
exports.createCustomApiCallAction = createCustomApiCallAction;
//# sourceMappingURL=index.js.map