"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpError = void 0;
class HttpError extends Error {
    constructor(_requestBody, _err) {
        var _a, _b;
        super(JSON.stringify({
            response: {
                status: ((_a = _err === null || _err === void 0 ? void 0 : _err.response) === null || _a === void 0 ? void 0 : _a.status) || 500,
                body: (_b = _err === null || _err === void 0 ? void 0 : _err.response) === null || _b === void 0 ? void 0 : _b.data,
            },
            request: {
                body: _requestBody,
            },
        }));
        this._requestBody = _requestBody;
        this._err = _err;
    }
    errorMessage() {
        var _a, _b, _c, _d;
        return {
            response: {
                status: ((_b = (_a = this._err) === null || _a === void 0 ? void 0 : _a.response) === null || _b === void 0 ? void 0 : _b.status) || 500,
                body: (_d = (_c = this._err) === null || _c === void 0 ? void 0 : _c.response) === null || _d === void 0 ? void 0 : _d.data,
            },
            request: {
                body: this._requestBody,
            },
        };
    }
    get response() {
        var _a, _b, _c, _d;
        return {
            status: ((_b = (_a = this._err) === null || _a === void 0 ? void 0 : _a.response) === null || _b === void 0 ? void 0 : _b.status) || 500,
            body: (_d = (_c = this._err) === null || _c === void 0 ? void 0 : _c.response) === null || _d === void 0 ? void 0 : _d.data,
        };
    }
    get request() {
        return {
            body: this._requestBody,
        };
    }
}
exports.HttpError = HttpError;
//# sourceMappingURL=http-error.js.map