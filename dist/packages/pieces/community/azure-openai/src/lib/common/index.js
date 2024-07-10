"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.modelTokenLimit = exports.tokenLimit = exports.exceedsHistoryLimit = exports.reduceContextSize = exports.calculateMessagesTokenSize = exports.calculateTokensFromString = void 0;
const tslib_1 = require("tslib");
const tiktoken_1 = require("tiktoken");
const calculateTokensFromString = (string, model) => {
    try {
        const encoder = (0, tiktoken_1.encoding_for_model)(model);
        const tokens = encoder.encode(string);
        encoder.free();
        return tokens.length;
    }
    catch (e) {
        // Model not supported by tiktoken, every 4 chars is a token
        return Math.round(string.length / 4);
    }
};
exports.calculateTokensFromString = calculateTokensFromString;
const calculateMessagesTokenSize = (messages, model) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    let tokenLength = 0;
    yield Promise.all(messages.map((message) => {
        return new Promise((resolve) => {
            tokenLength += (0, exports.calculateTokensFromString)(message, model);
            resolve(tokenLength);
        });
    }));
    return tokenLength;
});
exports.calculateMessagesTokenSize = calculateMessagesTokenSize;
const reduceContextSize = (messages, model, maxTokens) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    // TODO: Summarize context instead of cutoff
    const cutoffSize = Math.round(messages.length * 0.1);
    const cutoffMessages = messages.splice(cutoffSize, messages.length - 1);
    if ((yield (0, exports.calculateMessagesTokenSize)(cutoffMessages, model)) >
        maxTokens / 1.5) {
        (0, exports.reduceContextSize)(cutoffMessages, model, maxTokens);
    }
    return cutoffMessages;
});
exports.reduceContextSize = reduceContextSize;
const exceedsHistoryLimit = (tokenLength, model, maxTokens) => {
    if (tokenLength >= exports.tokenLimit / 1.1 ||
        tokenLength >= ((0, exports.modelTokenLimit)(model) - maxTokens) / 1.1) {
        return true;
    }
    return false;
};
exports.exceedsHistoryLimit = exceedsHistoryLimit;
exports.tokenLimit = 32000;
const modelTokenLimit = (model) => {
    switch (model) {
        default:
            return 2048;
    }
};
exports.modelTokenLimit = modelTokenLimit;
//# sourceMappingURL=index.js.map