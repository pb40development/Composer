"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.catchWebhook = void 0;
const tslib_1 = require("tslib");
const pieces_framework_1 = require("@activepieces/pieces-framework");
const shared_1 = require("@activepieces/shared");
const message = `**Live URL:**
\`\`\`text
{{webhookUrl}}
\`\`\`
triggers the flow and **does NOT** generate sample data.
<br>
<br>
**Test URL:**
\`\`\`text
{{webhookUrl}}/test
\`\`\`
generates sample data and **does NOT** trigger the flow.
<br>
<br>
**Synchronous Requests:**
 
If you expect a response from this webhook, add /sync to the end of the URL. 
If it takes more than 30 seconds, it will return a 408 Request Timeout response.

To return data, add an HTTP step to your flow with the Return Response action.
`;
var AuthType;
(function (AuthType) {
    AuthType["NONE"] = "none";
    AuthType["BASIC"] = "basic";
    AuthType["HEADER"] = "header";
})(AuthType || (AuthType = {}));
exports.catchWebhook = (0, pieces_framework_1.createTrigger)({
    name: 'catch_webhook',
    displayName: 'Catch Webhook',
    description: 'Receive incoming HTTP/webhooks using any HTTP method such as GET, POST, PUT, DELETE, etc.',
    props: {
        markdown: pieces_framework_1.Property.MarkDown({
            value: message,
        }),
        authType: pieces_framework_1.Property.StaticDropdown({
            displayName: 'Authentication',
            required: true,
            defaultValue: 'none',
            options: {
                disabled: false,
                options: [
                    { label: 'None', value: AuthType.NONE },
                    { label: 'Basic Auth', value: AuthType.BASIC },
                    { label: 'Header Auth', value: AuthType.HEADER },
                ],
            },
        }),
        authFields: pieces_framework_1.Property.DynamicProperties({
            displayName: 'Authentication Fields',
            required: false,
            refreshers: ['authType'],
            props: (_a) => tslib_1.__awaiter(void 0, [_a], void 0, function* ({ authType }) {
                if (!authType) {
                    return {};
                }
                const authTypeEnum = authType.toString();
                let fields = {};
                switch (authTypeEnum) {
                    case AuthType.NONE:
                        fields = {};
                        break;
                    case AuthType.BASIC:
                        fields = {
                            username: pieces_framework_1.Property.ShortText({
                                displayName: 'Username',
                                description: 'The username to use for authentication.',
                                required: true,
                            }),
                            password: pieces_framework_1.Property.ShortText({
                                displayName: 'Password',
                                description: 'The password to use for authentication.',
                                required: true,
                            }),
                        };
                        break;
                    case AuthType.HEADER:
                        fields = {
                            headerName: pieces_framework_1.Property.ShortText({
                                displayName: 'Header Name',
                                description: 'The name of the header to use for authentication.',
                                required: true,
                            }),
                            headerValue: pieces_framework_1.Property.ShortText({
                                displayName: 'Header Value',
                                description: 'The value to check against the header.',
                                required: true,
                            }),
                        };
                        break;
                    default:
                        throw new Error('Invalid authentication type');
                }
                return fields;
            }),
        }),
    },
    sampleData: null,
    type: pieces_framework_1.TriggerStrategy.WEBHOOK,
    onEnable() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            // ignore
        });
    },
    onDisable() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            // ignore
        });
    },
    run(context) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            var _a;
            const authenticationType = context.propsValue.authType;
            (0, shared_1.assertNotNullOrUndefined)(authenticationType, 'Authentication type is required');
            const verified = verifyAuth(authenticationType, (_a = context.propsValue.authFields) !== null && _a !== void 0 ? _a : {}, context.payload.headers);
            if (!verified) {
                return [];
            }
            return [context.payload];
        });
    },
});
function verifyAuth(authenticationType, authFields, headers) {
    switch (authenticationType) {
        case AuthType.NONE:
            return true;
        case AuthType.BASIC:
            return verifyBasicAuth(headers['authorization'], authFields['username'], authFields['password']);
        case AuthType.HEADER:
            return verifyHeaderAuth(headers, authFields['headerName'], authFields['headerValue']);
        default:
            throw new Error('Invalid authentication type');
    }
}
function verifyHeaderAuth(headers, headerName, headerSecret) {
    const headerValue = headers[headerName.toLocaleLowerCase()];
    return headerValue === headerSecret;
}
function verifyBasicAuth(headerValue, username, password) {
    if (!headerValue.toLocaleLowerCase().startsWith('basic ')) {
        return false;
    }
    const auth = headerValue.substring(6);
    const decodedAuth = Buffer.from(auth, 'base64').toString();
    const [receivedUsername, receivedPassword] = decodedAuth.split(':');
    return receivedUsername === username && receivedPassword === password;
}
//# sourceMappingURL=catch-hook.js.map