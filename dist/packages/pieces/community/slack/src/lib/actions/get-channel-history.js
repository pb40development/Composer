"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getChannelHistory = void 0;
const tslib_1 = require("tslib");
const web_api_1 = require("@slack/web-api");
const pieces_framework_1 = require("@activepieces/pieces-framework");
const __1 = require("../..");
const props_1 = require("../common/props");
exports.getChannelHistory = (0, pieces_framework_1.createAction)({
    // auth: check https://www.activepieces.com/docs/developers/piece-reference/authentication,
    name: 'getChannelHistory',
    auth: __1.slackAuth,
    displayName: 'Get channel history',
    description: 'Retrieve all messages from a specific channel ("conversation") between specified timestamps',
    props: {
        info: props_1.slackInfo,
        channel: (0, props_1.slackChannel)(true),
        oldest: pieces_framework_1.Property.Number({
            displayName: 'Oldest',
            description: 'Only messages after this timestamp will be included in results',
            required: false,
        }),
        latest: pieces_framework_1.Property.Number({
            displayName: 'Latest',
            description: 'Only messages before this timestamp will be included in results. Default is the current time',
            required: false,
        }),
        inclusive: pieces_framework_1.Property.Checkbox({
            displayName: 'Inclusive',
            description: 'Include messages with oldest or latest timestamps in results. Ignored unless either timestamp is specified',
            defaultValue: false,
            required: true,
        }),
        includeAllMetadata: pieces_framework_1.Property.Checkbox({
            displayName: 'Include all metadata',
            description: 'Return all metadata associated with each message',
            defaultValue: false,
            required: true,
        }),
    },
    run(_a) {
        return tslib_1.__awaiter(this, arguments, void 0, function* ({ auth, propsValue }) {
            var _b, e_1, _c, _d;
            const client = new web_api_1.WebClient(auth.access_token);
            const messages = [];
            yield client.conversations.history({ channel: propsValue.channel });
            try {
                for (var _e = true, _f = tslib_1.__asyncValues(client.paginate('conversations.history', {
                    channel: propsValue.channel,
                    oldest: propsValue.oldest,
                    latest: propsValue.latest,
                    limit: 200, // page size, does not limit the total number of results
                    include_all_metadata: propsValue.includeAllMetadata,
                    inclusive: propsValue.inclusive,
                })), _g; _g = yield _f.next(), _b = _g.done, !_b; _e = true) {
                    _d = _g.value;
                    _e = false;
                    const page = _d;
                    const response = page;
                    if (response.messages) {
                        messages.push(...response.messages);
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (!_e && !_b && (_c = _f.return)) yield _c.call(_f);
                }
                finally { if (e_1) throw e_1.error; }
            }
            return messages;
        });
    },
});
//# sourceMappingURL=get-channel-history.js.map