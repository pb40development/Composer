"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AxiosHttpClient = void 0;
const tslib_1 = require("tslib");
const axios_1 = tslib_1.__importDefault(require("axios"));
const delegating_authentication_converter_1 = require("../core/delegating-authentication-converter");
const base_http_client_1 = require("../core/base-http-client");
const http_error_1 = require("../core/http-error");
class AxiosHttpClient extends base_http_client_1.BaseHttpClient {
    constructor(baseUrl = '', authenticationConverter = new delegating_authentication_converter_1.DelegatingAuthenticationConverter()) {
        super(baseUrl, authenticationConverter);
    }
    sendRequest(request) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            var _a, _b;
            try {
                process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';
                const { urlWithoutQueryParams, queryParams } = this.getUrl(request);
                const headers = this.getHeaders(request);
                const axiosRequestMethod = this.getAxiosRequestMethod(request.method);
                const timeout = request.timeout ? request.timeout : 0;
                for (const key in request.queryParams) {
                    queryParams.append(key, request.queryParams[key]);
                }
                const config = {
                    method: axiosRequestMethod,
                    url: urlWithoutQueryParams,
                    params: queryParams,
                    headers,
                    data: request.body,
                    timeout,
                };
                const response = yield axios_1.default.request(config);
                return {
                    status: response.status,
                    headers: response.headers,
                    body: response.data,
                };
            }
            catch (e) {
                console.error('[HttpClient#sendRequest] error:', e);
                if (axios_1.default.isAxiosError(e)) {
                    console.error('[HttpClient#sendRequest] error, responseStatus:', (_a = e.response) === null || _a === void 0 ? void 0 : _a.status);
                    console.error('[HttpClient#sendRequest] error, responseBody:', (_b = e.response) === null || _b === void 0 ? void 0 : _b.data);
                    throw new http_error_1.HttpError(request.body, e);
                }
                throw e;
            }
        });
    }
    getAxiosRequestMethod(httpMethod) {
        return httpMethod.toString();
    }
}
exports.AxiosHttpClient = AxiosHttpClient;
//# sourceMappingURL=axios-http-client.js.map