"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchMessages = void 0;
const tslib_1 = require("tslib");
const pieces_framework_1 = require("@activepieces/pieces-framework");
const __1 = require("../..");
const web_api_1 = require("@slack/web-api");
exports.searchMessages = (0, pieces_framework_1.createAction)({
    name: 'searchMessages',
    displayName: 'Search messages',
    description: 'Searches for messages matching a query',
    auth: __1.slackAuth,
    props: {
        query: pieces_framework_1.Property.ShortText({
            displayName: 'Search query',
            required: true,
        }),
    },
    run(_a) {
        return tslib_1.__awaiter(this, arguments, void 0, function* ({ auth, propsValue }) {
            var _b, _c, _d, _e;
            const userToken = (_b = auth.data['authed_user']) === null || _b === void 0 ? void 0 : _b.access_token;
            if (userToken === undefined) {
                throw new Error(JSON.stringify({
                    message: 'Missing user token, please re-authenticate'
                }));
            }
            const client = new web_api_1.WebClient(userToken);
            const matches = [];
            // We can't use the usual "for await ... of" syntax with client.paginate
            // Because search.messages uses a bastardized version of cursor-based pagination
            // Where you need to pass * as first cursor
            // https://api.slack.com/methods/search.messages#arg_cursor
            let cursor = '*';
            do {
                const page = yield client.search.messages({
                    query: propsValue.query,
                    count: 100,
                    // @ts-expect-error TS2353 - SDK is not aware cursor is actually supported
                    cursor,
                });
                if ((_c = page.messages) === null || _c === void 0 ? void 0 : _c.matches) {
                    matches.push(...page.messages.matches);
                }
                // @ts-expect-error TS2353 - SDK is not aware next_cursor is actually returned
                cursor = (_e = (_d = page.messages) === null || _d === void 0 ? void 0 : _d.pagination) === null || _e === void 0 ? void 0 : _e.next_cursor;
            } while (cursor);
            return matches;
        });
    },
});
//# sourceMappingURL=search-messages.js.map