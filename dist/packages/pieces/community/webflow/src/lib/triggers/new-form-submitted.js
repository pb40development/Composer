"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.webflowNewSubmission = void 0;
const tslib_1 = require("tslib");
const common_1 = require("../common/common");
const pieces_framework_1 = require("@activepieces/pieces-framework");
const pieces_common_1 = require("@activepieces/pieces-common");
const __1 = require("../..");
const props_1 = require("../common/props");
const triggerNameInStore = 'webflow_created_form_submissions_trigger';
exports.webflowNewSubmission = (0, pieces_framework_1.createTrigger)({
    auth: __1.webflowAuth,
    name: 'new_submission',
    displayName: 'New Submission',
    description: 'Triggers when Webflow Site receives a new submission',
    props: {
        site_id: props_1.webflowProps.site_id,
        formName: pieces_framework_1.Property.ShortText({
            displayName: 'Form Name',
            required: false,
            description: 'Copy from the form settings, or from one of the responses',
        }),
    },
    type: pieces_framework_1.TriggerStrategy.WEBHOOK,
    // TODO remove and force testing as the data can be custom.
    sampleData: {
        name: 'Sample Form',
        site: '62749158efef318abc8d5a0f',
        data: {
            field_one: 'mock valued',
        },
        d: '2022-09-14T12:35:16.117Z',
        _id: '6321ca84df3949bfc6752327',
    },
    onEnable(context) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            var _a;
            const formSubmissionTag = 'form_submission';
            const res = yield common_1.webflowCommon.subscribeWebhook(context.propsValue['site_id'], formSubmissionTag, context.webhookUrl, (0, pieces_common_1.getAccessTokenOrThrow)(context.auth));
            yield ((_a = context.store) === null || _a === void 0 ? void 0 : _a.put(triggerNameInStore, {
                webhookId: res.body._id,
            }));
        });
    },
    onDisable(context) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            var _a;
            const response = yield ((_a = context.store) === null || _a === void 0 ? void 0 : _a.get(triggerNameInStore));
            if (response !== null && response !== undefined) {
                yield common_1.webflowCommon.unsubscribeWebhook(context.propsValue['site_id'], response.webhookId, (0, pieces_common_1.getAccessTokenOrThrow)(context.auth));
            }
        });
    },
    run(context) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const body = context.payload.body;
            const { formName } = context.propsValue;
            //if formName provided, trigger only required formName if it's matched; else trigger all forms in selected webflow site.
            if (formName) {
                if (body.name == formName) {
                    return [body];
                }
                else {
                    return [];
                }
            }
            else {
                return [body];
            }
        });
    },
});
//# sourceMappingURL=new-form-submitted.js.map