"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatErrorMessage = void 0;
function formatErrorMessage(errorMessage, tokens) {
    let formattedMessage = errorMessage;
    for (const key in tokens) {
        formattedMessage = formattedMessage.replace(`{${key}}`, tokens[key]);
    }
    return formattedMessage;
}
exports.formatErrorMessage = formatErrorMessage;
//# sourceMappingURL=utils.js.map