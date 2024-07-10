"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTrigger = exports.ITrigger = exports.WebhookRenewConfiguration = exports.WebhookHandshakeConfiguration = exports.WebhookRenewStrategy = exports.WebhookHandshakeStrategy = exports.TriggerStrategy = exports.DEDUPE_KEY_PROPERTY = void 0;
const tslib_1 = require("tslib");
const typebox_1 = require("@sinclair/typebox");
const shared_1 = require("@activepieces/shared");
exports.DEDUPE_KEY_PROPERTY = '_dedupe_key';
var TriggerStrategy;
(function (TriggerStrategy) {
    TriggerStrategy["POLLING"] = "POLLING";
    TriggerStrategy["WEBHOOK"] = "WEBHOOK";
    TriggerStrategy["APP_WEBHOOK"] = "APP_WEBHOOK";
})(TriggerStrategy || (exports.TriggerStrategy = TriggerStrategy = {}));
var WebhookHandshakeStrategy;
(function (WebhookHandshakeStrategy) {
    WebhookHandshakeStrategy["NONE"] = "NONE";
    WebhookHandshakeStrategy["HEADER_PRESENT"] = "HEADER_PRESENT";
    WebhookHandshakeStrategy["QUERY_PRESENT"] = "QUERY_PRESENT";
    WebhookHandshakeStrategy["BODY_PARAM_PRESENT"] = "BODY_PARAM_PRESENT";
})(WebhookHandshakeStrategy || (exports.WebhookHandshakeStrategy = WebhookHandshakeStrategy = {}));
var WebhookRenewStrategy;
(function (WebhookRenewStrategy) {
    WebhookRenewStrategy["CRON"] = "CRON";
    WebhookRenewStrategy["NONE"] = "NONE";
})(WebhookRenewStrategy || (exports.WebhookRenewStrategy = WebhookRenewStrategy = {}));
exports.WebhookHandshakeConfiguration = typebox_1.Type.Object({
    strategy: typebox_1.Type.Enum(WebhookHandshakeStrategy),
    paramName: typebox_1.Type.Optional(typebox_1.Type.String()),
});
exports.WebhookRenewConfiguration = typebox_1.Type.Union([
    typebox_1.Type.Object({
        strategy: typebox_1.Type.Literal(WebhookRenewStrategy.CRON),
        cronExpression: typebox_1.Type.String(),
    }),
    typebox_1.Type.Object({
        strategy: typebox_1.Type.Literal(WebhookRenewStrategy.NONE),
    }),
]);
class ITrigger {
    constructor(name, displayName, description, props, type, handshakeConfiguration, onHandshake, renewConfiguration, onRenew, onEnable, onDisable, run, test, sampleData, testStrategy) {
        this.name = name;
        this.displayName = displayName;
        this.description = description;
        this.props = props;
        this.type = type;
        this.handshakeConfiguration = handshakeConfiguration;
        this.onHandshake = onHandshake;
        this.renewConfiguration = renewConfiguration;
        this.onRenew = onRenew;
        this.onEnable = onEnable;
        this.onDisable = onDisable;
        this.run = run;
        this.test = test;
        this.sampleData = sampleData;
        this.testStrategy = testStrategy;
    }
}
exports.ITrigger = ITrigger;
// TODO refactor and extract common logic
const createTrigger = (params) => {
    var _a, _b, _c, _d, _e, _f, _g;
    switch (params.type) {
        case TriggerStrategy.WEBHOOK:
            return new ITrigger(params.name, params.displayName, params.description, params.props, params.type, (_a = params.handshakeConfiguration) !== null && _a !== void 0 ? _a : { strategy: WebhookHandshakeStrategy.NONE }, (_b = params.onHandshake) !== null && _b !== void 0 ? _b : (() => tslib_1.__awaiter(void 0, void 0, void 0, function* () { return ({ status: 200 }); })), (_c = params.renewConfiguration) !== null && _c !== void 0 ? _c : { strategy: WebhookRenewStrategy.NONE }, (_d = params.onRenew) !== null && _d !== void 0 ? _d : (() => tslib_1.__awaiter(void 0, void 0, void 0, function* () { return Promise.resolve(); })), params.onEnable, params.onDisable, params.run, (_e = params.test) !== null && _e !== void 0 ? _e : (() => Promise.resolve([params.sampleData])), params.sampleData, params.test ? shared_1.TriggerTestStrategy.TEST_FUNCTION : shared_1.TriggerTestStrategy.SIMULATION);
        case TriggerStrategy.POLLING:
            return new ITrigger(params.name, params.displayName, params.description, params.props, params.type, { strategy: WebhookHandshakeStrategy.NONE }, () => tslib_1.__awaiter(void 0, void 0, void 0, function* () { return ({ status: 200 }); }), { strategy: WebhookRenewStrategy.NONE }, (() => tslib_1.__awaiter(void 0, void 0, void 0, function* () { return Promise.resolve(); })), params.onEnable, params.onDisable, params.run, (_f = params.test) !== null && _f !== void 0 ? _f : (() => Promise.resolve([params.sampleData])), params.sampleData, shared_1.TriggerTestStrategy.TEST_FUNCTION);
        case TriggerStrategy.APP_WEBHOOK:
            return new ITrigger(params.name, params.displayName, params.description, params.props, params.type, { strategy: WebhookHandshakeStrategy.NONE }, () => tslib_1.__awaiter(void 0, void 0, void 0, function* () { return ({ status: 200 }); }), { strategy: WebhookRenewStrategy.NONE }, (() => tslib_1.__awaiter(void 0, void 0, void 0, function* () { return Promise.resolve(); })), params.onEnable, params.onDisable, params.run, (_g = params.test) !== null && _g !== void 0 ? _g : (() => Promise.resolve([params.sampleData])), params.sampleData, shared_1.TriggerTestStrategy.TEST_FUNCTION);
    }
};
exports.createTrigger = createTrigger;
//# sourceMappingURL=trigger.js.map