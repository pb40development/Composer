"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TelemetryEventName = void 0;
var TelemetryEventName;
(function (TelemetryEventName) {
    TelemetryEventName["SIGNED_UP"] = "signed.up";
    TelemetryEventName["QUOTA_ALERT"] = "quota.alert";
    TelemetryEventName["REQUEST_TRIAL_CLICKED"] = "request.trial.clicked";
    TelemetryEventName["REQUEST_TRIAL_SUBMITTED"] = "request.trial.submitted";
    TelemetryEventName["KEY_ACTIVIATED"] = "key.activated";
    TelemetryEventName["FLOW_ISSUE_CLICKED"] = "flow.issue.clicked";
    TelemetryEventName["FLOW_ISSUE_RESOLVED"] = "flow.issue.resolved";
    TelemetryEventName["UPGRADE_CLICKED"] = "upgrade.clicked";
    TelemetryEventName["USER_INVITED"] = "user.invited";
    TelemetryEventName["OPENED_PRICING_FROM_DASHBOARD"] = "pricing.viewed";
    TelemetryEventName["UPGRADE_POPUP"] = "upgrade.popup";
    TelemetryEventName["CREATED_FLOW"] = "flow.created";
    TelemetryEventName["DEMO_IMPORTED"] = "demo.imported";
    TelemetryEventName["FLOW_RUN_CREATED"] = "run.created";
    TelemetryEventName["FLOW_PUBLISHED"] = "flow.published";
    /**used with templates dialog + import flow component + flows imported by uri query param*/
    TelemetryEventName["FLOW_IMPORTED"] = "flow.imported";
    /**used only with import flow dialog*/
    TelemetryEventName["FLOW_IMPORTED_USING_FILE"] = "flow.imported.using.file";
    TelemetryEventName["PIECES_SEARCH"] = "pieces.search";
    TelemetryEventName["REFERRAL"] = "referral";
    TelemetryEventName["REFERRAL_LINK_COPIED"] = "referral.link.copied";
    TelemetryEventName["FLOW_SHARED"] = "flow.shared";
    TelemetryEventName["TEMPLATE_SEARCH"] = "template.search";
    TelemetryEventName["COPILOT_GENERATED_CODE"] = "copilot.code.generated";
    TelemetryEventName["FORMS_VIEWED"] = "forms.viewed";
    TelemetryEventName["FORMS_SUBMITTED"] = "forms.submitted";
    TelemetryEventName["REWARDS_OPENED"] = "rewards.opened";
    TelemetryEventName["REWARDS_INSTRUCTION_CLICKED"] = "rewards.instructions.clicked";
})(TelemetryEventName || (exports.TelemetryEventName = TelemetryEventName = {}));
//# sourceMappingURL=telemetry.js.map