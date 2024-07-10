"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.actions = exports.text = exports.userId = exports.blocks = exports.profilePicture = exports.username = exports.slackChannel = exports.slackInfo = void 0;
const tslib_1 = require("tslib");
const pieces_framework_1 = require("@activepieces/pieces-framework");
const web_api_1 = require("@slack/web-api");
exports.slackInfo = pieces_framework_1.Property.MarkDown({
    value: `
	Please make sure add the bot to the channel by following these steps:
	  1. Type /invite in the channel's chat.
	  2. Click on Add apps to this channel.
	  3. Search for and add the bot.
    
    **Note**: If you can't find the channel in the dropdown list (which fetches up to 2000 channels), please click on the **(X)** and type the name directly.
  `
});
const slackChannel = (required) => pieces_framework_1.Property.Dropdown({
    displayName: 'Channel',
    required,
    refreshers: [],
    options(_a) {
        return tslib_1.__awaiter(this, arguments, void 0, function* ({ auth }) {
            var _b;
            if (!auth) {
                return {
                    disabled: true,
                    placeholder: 'connect slack account',
                    options: [],
                };
            }
            const authentication = auth;
            const accessToken = authentication['access_token'];
            const client = new web_api_1.WebClient(accessToken);
            const channels = [];
            const CHANNELS_LIMIT = 2000;
            let cursor;
            do {
                const response = yield client.conversations.list({
                    types: 'public_channel,private_channel',
                    exclude_archived: true,
                    limit: 1000,
                    cursor,
                });
                if (response.channels) {
                    channels.push(...response.channels.map((channel) => {
                        return { label: channel.name || '', value: channel.id || '' };
                    }));
                }
                cursor = (_b = response.response_metadata) === null || _b === void 0 ? void 0 : _b.next_cursor;
            } while (cursor && channels.length < CHANNELS_LIMIT);
            return {
                disabled: false,
                placeholder: 'Select channel',
                options: channels,
            };
        });
    },
});
exports.slackChannel = slackChannel;
exports.username = pieces_framework_1.Property.ShortText({
    displayName: 'Username',
    description: 'The username of the bot',
    required: false,
});
exports.profilePicture = pieces_framework_1.Property.ShortText({
    displayName: 'Profile Picture',
    description: 'The profile picture of the bot',
    required: false,
});
exports.blocks = pieces_framework_1.Property.Json({
    displayName: 'Block Kit blocks',
    description: 'See https://api.slack.com/block-kit for specs',
    required: false,
});
exports.userId = pieces_framework_1.Property.Dropdown({
    displayName: 'User',
    required: true,
    refreshers: [],
    options(_a) {
        return tslib_1.__awaiter(this, arguments, void 0, function* ({ auth }) {
            var _b, e_1, _c, _d;
            if (!auth) {
                return {
                    disabled: true,
                    placeholder: 'connect slack account',
                    options: [],
                };
            }
            const accessToken = auth.access_token;
            const client = new web_api_1.WebClient(accessToken);
            const users = [];
            try {
                for (var _e = true, _f = tslib_1.__asyncValues(client.paginate('users.list', {
                    limit: 1000, // Only limits page size, not total number of results
                })), _g; _g = yield _f.next(), _b = _g.done, !_b; _e = true) {
                    _d = _g.value;
                    _e = false;
                    const page = _d;
                    const response = page;
                    if (response.members) {
                        users.push(...response.members
                            .filter((member) => !member.deleted)
                            .map((member) => {
                            return { label: member.name || '', value: member.id || '' };
                        }));
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
            return {
                disabled: false,
                placeholder: 'Select channel',
                options: users,
            };
        });
    },
});
exports.text = pieces_framework_1.Property.LongText({
    displayName: 'Message',
    required: true,
});
exports.actions = pieces_framework_1.Property.Array({
    displayName: 'Action Buttons',
    required: true,
});
//# sourceMappingURL=props.js.map