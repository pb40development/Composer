"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.newLead = void 0;
const tslib_1 = require("tslib");
const pieces_framework_1 = require("@activepieces/pieces-framework");
const common_1 = require("../common");
const __1 = require("../..");
exports.newLead = (0, pieces_framework_1.createTrigger)({
    auth: __1.facebookLeadsAuth,
    name: 'new_lead',
    displayName: 'New Lead',
    description: 'Triggers when a new lead is created',
    type: pieces_framework_1.TriggerStrategy.APP_WEBHOOK,
    sampleData: {},
    props: {
        page: common_1.facebookLeadsCommon.page,
        form: common_1.facebookLeadsCommon.form,
    },
    onEnable(context) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const page = context.propsValue['page'];
            yield common_1.facebookLeadsCommon.subscribePageToApp(page.id, page.accessToken);
            context.app.createListeners({ events: ['lead'], identifierValue: page.id });
        });
    },
    onDisable() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            //
        });
    },
    //Return new lead
    run(context) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            let leadPings = [];
            const leads = [];
            const form = context.propsValue.form;
            const payloadBody = context.payload.body;
            if (form !== undefined && form !== '' && form !== null) {
                for (const lead of payloadBody.entry) {
                    if (form == lead.changes[0].value.form_id) {
                        leadPings.push(lead);
                    }
                }
            }
            else {
                leadPings = payloadBody.entry;
            }
            for (const lead of leadPings) {
                const leadData = yield common_1.facebookLeadsCommon.getLeadDetails(lead.changes[0].value.leadgen_id, context.auth.access_token);
                leads.push(leadData);
            }
            return [leads];
        });
    },
    test(context) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            let form = context.propsValue.form;
            const page = context.propsValue.page;
            if (form == undefined || form == '' || form == null) {
                const forms = yield common_1.facebookLeadsCommon.getPageForms(page.id, page.accessToken);
                form = forms[0].id;
            }
            const data = yield common_1.facebookLeadsCommon.loadSampleData(form, context.auth.access_token);
            return [data.data];
        });
    },
});
//# sourceMappingURL=new-lead.js.map