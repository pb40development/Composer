"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.newResponse = void 0;
const tslib_1 = require("tslib");
const pieces_common_1 = require("@activepieces/pieces-common");
const pieces_framework_1 = require("@activepieces/pieces-framework");
const dayjs_1 = tslib_1.__importDefault(require("dayjs"));
const common_1 = require("../common/common");
const __1 = require("../../");
exports.newResponse = (0, pieces_framework_1.createTrigger)({
    auth: __1.googleFormsAuth,
    name: 'new_response',
    displayName: 'New Response',
    description: 'Triggers when there is new response',
    props: {
        form_id: common_1.googleFormsCommon.form_id,
        include_team_drives: common_1.googleFormsCommon.include_team_drives,
    },
    sampleData: {
        responseId: 'ACYDBNhZI4SENjOwT4QIcXOhgco3JhuLftjpLspxETYljVZofOWuqH7bxKQqJWDwGw2IFqE',
        createTime: '2023-04-01T03:19:28.889Z',
        lastSubmittedTime: '2023-04-01T03:19:28.889881Z',
        answers: {
            '5bdc4001': {
                questionId: '5bdc4001',
                textAnswers: {
                    answers: [
                        {
                            value: 'test',
                        },
                    ],
                },
            },
            '283d759e': {
                questionId: '283d759e',
                textAnswers: {
                    answers: [
                        {
                            value: 'نعم',
                        },
                    ],
                },
            },
            '46f3e9cf': {
                questionId: '46f3e9cf',
                textAnswers: {
                    answers: [
                        {
                            value: 'test',
                        },
                    ],
                },
            },
        },
    },
    type: pieces_framework_1.TriggerStrategy.POLLING,
    test(ctx) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield pieces_common_1.pollingHelper.test(polling, {
                auth: ctx.auth,
                store: ctx.store,
                propsValue: ctx.propsValue,
            });
        });
    },
    onEnable(ctx) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield pieces_common_1.pollingHelper.onEnable(polling, {
                auth: ctx.auth,
                store: ctx.store,
                propsValue: ctx.propsValue,
            });
        });
    },
    onDisable(ctx) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield pieces_common_1.pollingHelper.onDisable(polling, {
                auth: ctx.auth,
                store: ctx.store,
                propsValue: ctx.propsValue,
            });
        });
    },
    run(ctx) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield pieces_common_1.pollingHelper.poll(polling, {
                auth: ctx.auth,
                store: ctx.store,
                propsValue: ctx.propsValue,
            });
        });
    },
});
const polling = {
    strategy: pieces_common_1.DedupeStrategy.TIMEBASED,
    items: (_a) => tslib_1.__awaiter(void 0, [_a], void 0, function* ({ auth, propsValue, lastFetchEpochMS }) {
        const items = yield getResponse(auth, propsValue.form_id, lastFetchEpochMS === 0 ? null : (0, dayjs_1.default)(lastFetchEpochMS).toISOString());
        return items.map((item) => ({
            epochMilliSeconds: (0, dayjs_1.default)(item.lastSubmittedTime).valueOf(),
            data: item,
        }));
    }),
};
const getResponse = (authentication, form_id, startDate) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    let filter = {};
    if (startDate) {
        filter = {
            filter: 'timestamp > ' + startDate,
        };
    }
    const response = yield pieces_common_1.httpClient.sendRequest({
        url: `https://forms.googleapis.com/v1/forms/${form_id}/responses`,
        method: pieces_common_1.HttpMethod.GET,
        headers: {
            Authorization: `Bearer ${authentication.access_token}`,
        },
        queryParams: filter,
    });
    return response.body['responses'];
});
//# sourceMappingURL=new-form-response.js.map