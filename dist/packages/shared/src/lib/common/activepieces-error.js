"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorCode = exports.ActivepiecesError = void 0;
class ActivepiecesError extends Error {
    constructor(error, message) {
        super(error.code + (message ? `: ${message}` : ''));
        this.error = error;
    }
}
exports.ActivepiecesError = ActivepiecesError;
var ErrorCode;
(function (ErrorCode) {
    ErrorCode["AUTHENTICATION"] = "AUTHENTICATION";
    ErrorCode["AUTHORIZATION"] = "AUTHORIZATION";
    ErrorCode["CONFIG_NOT_FOUND"] = "CONFIG_NOT_FOUND";
    ErrorCode["DOMAIN_NOT_ALLOWED"] = "DOMAIN_NOT_ALLOWED";
    ErrorCode["EMAIL_IS_NOT_VERIFIED"] = "EMAIL_IS_NOT_VERIFIED";
    ErrorCode["ENGINE_OPERATION_FAILURE"] = "ENGINE_OPERATION_FAILURE";
    ErrorCode["ENTITY_NOT_FOUND"] = "ENTITY_NOT_FOUND";
    ErrorCode["EXECUTION_TIMEOUT"] = "EXECUTION_TIMEOUT";
    ErrorCode["EMAIL_AUTH_DISABLED"] = "EMAIL_AUTH_DISABLED";
    ErrorCode["EXISTING_USER"] = "EXISTING_USER";
    ErrorCode["EXISTING_ALERT_CHANNEL"] = "EXISTING_ALERT_CHANNEL";
    ErrorCode["FLOW_FORM_NOT_FOUND"] = "FLOW_FORM_NOT_FOUND";
    ErrorCode["FILE_NOT_FOUND"] = "FILE_NOT_FOUND";
    ErrorCode["FLOW_INSTANCE_NOT_FOUND"] = "INSTANCE_NOT_FOUND";
    ErrorCode["FLOW_NOT_FOUND"] = "FLOW_NOT_FOUND";
    ErrorCode["FLOW_OPERATION_INVALID"] = "FLOW_OPERATION_INVALID";
    ErrorCode["FLOW_IN_USE"] = "FLOW_IN_USE";
    ErrorCode["FLOW_RUN_NOT_FOUND"] = "FLOW_RUN_NOT_FOUND";
    ErrorCode["INVALID_API_KEY"] = "INVALID_API_KEY";
    ErrorCode["INVALID_APP_CONNECTION"] = "INVALID_APP_CONNECTION";
    ErrorCode["INVALID_BEARER_TOKEN"] = "INVALID_BEARER_TOKEN";
    ErrorCode["INVALID_CLAIM"] = "INVALID_CLAIM";
    ErrorCode["INVALID_CLOUD_CLAIM"] = "INVALID_CLOUD_CLAIM";
    ErrorCode["INVALID_CREDENTIALS"] = "INVALID_CREDENTIALS";
    ErrorCode["INVALID_OR_EXPIRED_JWT_TOKEN"] = "INVALID_OR_EXPIRED_JWT_TOKEN";
    ErrorCode["INVALID_OTP"] = "INVALID_OTP";
    ErrorCode["INVALID_SAML_RESPONSE"] = "INVALID_SAML_RESPONSE";
    ErrorCode["INVITATION_ONLY_SIGN_UP"] = "INVITATION_ONLY_SIGN_UP";
    ErrorCode["JOB_REMOVAL_FAILURE"] = "JOB_REMOVAL_FAILURE";
    ErrorCode["OPEN_AI_FAILED"] = "OPEN_AI_FAILED";
    ErrorCode["PAUSE_METADATA_MISSING"] = "PAUSE_METADATA_MISSING";
    ErrorCode["PERMISSION_DENIED"] = "PERMISSION_DENIED";
    ErrorCode["PIECE_NOT_FOUND"] = "PIECE_NOT_FOUND";
    ErrorCode["PIECE_TRIGGER_NOT_FOUND"] = "PIECE_TRIGGER_NOT_FOUND";
    ErrorCode["QUOTA_EXCEEDED"] = "QUOTA_EXCEEDED";
    ErrorCode["FEATURE_DISABLED"] = "FEATURE_DISABLED";
    ErrorCode["SIGN_UP_DISABLED"] = "SIGN_UP_DISABLED";
    ErrorCode["STEP_NOT_FOUND"] = "STEP_NOT_FOUND";
    ErrorCode["SYSTEM_PROP_INVALID"] = "SYSTEM_PROP_INVALID";
    ErrorCode["SYSTEM_PROP_NOT_DEFINED"] = "SYSTEM_PROP_NOT_DEFINED";
    ErrorCode["TEST_TRIGGER_FAILED"] = "TEST_TRIGGER_FAILED";
    ErrorCode["TRIGGER_DISABLE"] = "TRIGGER_DISABLE";
    ErrorCode["TRIGGER_ENABLE"] = "TRIGGER_ENABLE";
    ErrorCode["TRIGGER_FAILED"] = "TRIGGER_FAILED";
    ErrorCode["USER_IS_INACTIVE"] = "USER_IS_INACTIVE";
    ErrorCode["VALIDATION"] = "VALIDATION";
    ErrorCode["ACTIVATION_KEY_NOT_FOUND"] = "ACTIVATION_KEY_NOT_FOUND";
    ErrorCode["ACTIVATION_KEY_ALREADY_ACTIVATED"] = "ACTIVATION_KEY_ALREADY_ACTIVATED";
    ErrorCode["EMAIL_ALREADY_HAS_ACTIVATION_KEY"] = "EMAIL_ALREADY_HAS_ACTIVATION_KEY";
})(ErrorCode || (exports.ErrorCode = ErrorCode = {}));
//# sourceMappingURL=activepieces-error.js.map