"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebsocketServerEvent = exports.WebsocketClientEvent = void 0;
var WebsocketClientEvent;
(function (WebsocketClientEvent) {
    WebsocketClientEvent["TEST_FLOW_RUN_STARTED"] = "TEST_FLOW_RUN_STARTED";
    WebsocketClientEvent["TEST_FLOW_RUN_PROGRESS"] = "TEST_FLOW_RUN_PROGRESS";
    WebsocketClientEvent["GENERATE_CODE_FINISHED"] = "GENERATE_CODE_FINIISHED";
    WebsocketClientEvent["TEST_STEP_FINISHED"] = "TEST_STEP_FINISHED";
})(WebsocketClientEvent || (exports.WebsocketClientEvent = WebsocketClientEvent = {}));
var WebsocketServerEvent;
(function (WebsocketServerEvent) {
    WebsocketServerEvent["TEST_STEP_RUN"] = "TEST_STEP_RUN";
    WebsocketServerEvent["GENERATE_CODE"] = "GENERATE_CODE";
    WebsocketServerEvent["TEST_FLOW_RUN"] = "TEST_FLOW_RUN";
})(WebsocketServerEvent || (exports.WebsocketServerEvent = WebsocketServerEvent = {}));
//# sourceMappingURL=index.js.map