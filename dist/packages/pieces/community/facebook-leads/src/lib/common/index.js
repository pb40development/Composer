"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.facebookLeadsCommon = void 0;
const tslib_1 = require("tslib");
const pieces_framework_1 = require("@activepieces/pieces-framework");
const pieces_common_1 = require("@activepieces/pieces-common");
exports.facebookLeadsCommon = {
    baseUrl: 'https://graph.facebook.com',
    page: pieces_framework_1.Property.Dropdown({
        displayName: 'Page',
        required: true,
        refreshers: [],
        options: (_a) => tslib_1.__awaiter(void 0, [_a], void 0, function* ({ auth }) {
            if (!auth) {
                return {
                    disabled: true,
                    options: [],
                    placeholder: 'Connect your account',
                };
            }
            try {
                const authProp = auth;
                const pages = (yield exports.facebookLeadsCommon.getPages(authProp.access_token)).map((page) => {
                    return {
                        label: page.name,
                        value: {
                            id: page.id,
                            accessToken: page.access_token,
                        },
                    };
                });
                return {
                    options: pages,
                    placeholder: 'Choose a page',
                };
            }
            catch (e) {
                console.debug(e);
                return {
                    disabled: true,
                    options: [],
                    placeholder: 'Connect your account',
                };
            }
        }),
    }),
    form: pieces_framework_1.Property.Dropdown({
        displayName: 'Form',
        required: false,
        refreshers: ['page'],
        options: (_b) => tslib_1.__awaiter(void 0, [_b], void 0, function* ({ page }) {
            if (!page) {
                return {
                    disabled: true,
                    options: [],
                    placeholder: 'Choose a page',
                };
            }
            try {
                const modifiedPage = page;
                const forms = (yield exports.facebookLeadsCommon.getPageForms(modifiedPage.id, modifiedPage.accessToken)).map((form) => {
                    return {
                        label: form.name,
                        value: form.id,
                    };
                });
                forms.unshift({
                    label: 'All Forms (Default)',
                    value: undefined,
                });
                return {
                    options: forms,
                    placeholder: 'Choose a form',
                };
            }
            catch (e) {
                console.debug(e);
                return {
                    disabled: true,
                    options: [],
                    placeholder: 'Choose a page',
                };
            }
        }),
    }),
    subscribePageToApp: (pageId, accessToken) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
        const request = {
            method: pieces_common_1.HttpMethod.POST,
            url: `${exports.facebookLeadsCommon.baseUrl}/${pageId}/subscribed_apps`,
            body: {
                access_token: accessToken,
                subscribed_fields: ['leadgen'],
            },
        };
        yield pieces_common_1.httpClient.sendRequest(request);
    }),
    getPages: (accessToken) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
        const request = {
            method: pieces_common_1.HttpMethod.GET,
            url: `${exports.facebookLeadsCommon.baseUrl}/me/accounts`,
            queryParams: {
                access_token: accessToken,
            },
        };
        const response = yield pieces_common_1.httpClient.sendRequest(request);
        return response.body.data;
    }),
    getPageForms: (pageId, accessToken) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
        const request = {
            method: pieces_common_1.HttpMethod.GET,
            url: `${exports.facebookLeadsCommon.baseUrl}/${pageId}/leadgen_forms`,
            queryParams: {
                access_token: accessToken,
            },
        };
        const response = yield pieces_common_1.httpClient.sendRequest(request);
        return response.body.data;
    }),
    getLeadDetails: (leadId, accessToken) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
        const response = yield pieces_common_1.httpClient.sendRequest({
            method: pieces_common_1.HttpMethod.GET,
            url: `${exports.facebookLeadsCommon.baseUrl}/${leadId}`,
            queryParams: {
                access_token: accessToken,
            },
        });
        return response.body;
    }),
    loadSampleData: (formId, accessToken) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
        const response = yield pieces_common_1.httpClient.sendRequest({
            method: pieces_common_1.HttpMethod.GET,
            url: `${exports.facebookLeadsCommon.baseUrl}/${formId}/leads`,
            queryParams: {
                access_token: accessToken,
            },
        });
        return response.body;
    }),
};
//# sourceMappingURL=index.js.map