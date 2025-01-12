"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.flowHelper = exports.getImportOperations = void 0;
const tslib_1 = require("tslib");
const compiler_1 = require("@sinclair/typebox/compiler");
const semver_1 = tslib_1.__importDefault(require("semver"));
const common_1 = require("../common");
const activepieces_error_1 = require("../common/activepieces-error");
const action_1 = require("./actions/action");
const flow_operations_1 = require("./flow-operations");
const flow_version_1 = require("./flow-version");
const sample_data_1 = require("./sample-data");
const trigger_1 = require("./triggers/trigger");
const actionSchemaValidator = compiler_1.TypeCompiler.Compile(action_1.SingleActionSchema);
const triggerSchemaValidation = compiler_1.TypeCompiler.Compile(trigger_1.Trigger);
function isValid(flowVersion) {
    let valid = true;
    const steps = exports.flowHelper.getAllSteps(flowVersion.trigger);
    for (let i = 0; i < steps.length; i++) {
        const step = steps[i];
        valid = valid && step.valid;
    }
    return valid;
}
function isAction(type) {
    return Object.entries(action_1.ActionType).some(([, value]) => value === type);
}
function isTrigger(type) {
    return Object.entries(trigger_1.TriggerType).some(([, value]) => value === type);
}
function deleteAction(flowVersion, request) {
    return transferFlow(flowVersion, (parentStep) => {
        if (parentStep.nextAction && parentStep.nextAction.name === request.name) {
            const stepToUpdate = parentStep.nextAction;
            parentStep.nextAction = stepToUpdate.nextAction;
        }
        switch (parentStep.type) {
            case action_1.ActionType.BRANCH: {
                if (parentStep.onFailureAction &&
                    parentStep.onFailureAction.name === request.name) {
                    const stepToUpdate = parentStep.onFailureAction;
                    parentStep.onFailureAction = stepToUpdate.nextAction;
                }
                if (parentStep.onSuccessAction &&
                    parentStep.onSuccessAction.name === request.name) {
                    const stepToUpdate = parentStep.onSuccessAction;
                    parentStep.onSuccessAction = stepToUpdate.nextAction;
                }
                break;
            }
            case action_1.ActionType.LOOP_ON_ITEMS: {
                if (parentStep.firstLoopAction &&
                    parentStep.firstLoopAction.name === request.name) {
                    const stepToUpdate = parentStep.firstLoopAction;
                    parentStep.firstLoopAction = stepToUpdate.nextAction;
                }
                break;
            }
            default:
                break;
        }
        return parentStep;
    });
}
function getUsedPieces(trigger) {
    return traverseInternal(trigger)
        .filter((step) => step.type === action_1.ActionType.PIECE || step.type === trigger_1.TriggerType.PIECE)
        .map((step) => step.settings.pieceName)
        .filter((value, index, self) => self.indexOf(value) === index);
}
function traverseInternal(step) {
    const steps = [];
    while (step !== undefined && step !== null) {
        steps.push(step);
        if (step.type === action_1.ActionType.BRANCH) {
            steps.push(...traverseInternal(step.onSuccessAction));
            steps.push(...traverseInternal(step.onFailureAction));
        }
        if (step.type === action_1.ActionType.LOOP_ON_ITEMS) {
            steps.push(...traverseInternal(step.firstLoopAction));
        }
        step = step.nextAction;
    }
    return steps;
}
function transferStepAsync(step, transferFunction) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const updatedStep = yield transferFunction(step);
        if (updatedStep.type === action_1.ActionType.BRANCH) {
            const { onSuccessAction, onFailureAction } = updatedStep;
            if (onSuccessAction) {
                updatedStep.onSuccessAction = (yield transferStepAsync(onSuccessAction, transferFunction));
            }
            if (onFailureAction) {
                updatedStep.onFailureAction = (yield transferStepAsync(onFailureAction, transferFunction));
            }
        }
        else if (updatedStep.type === action_1.ActionType.LOOP_ON_ITEMS) {
            const { firstLoopAction } = updatedStep;
            if (firstLoopAction) {
                updatedStep.firstLoopAction = (yield transferStepAsync(firstLoopAction, transferFunction));
            }
        }
        if (updatedStep.nextAction) {
            updatedStep.nextAction = (yield transferStepAsync(updatedStep.nextAction, transferFunction));
        }
        return updatedStep;
    });
}
function transferStep(step, transferFunction) {
    const updatedStep = transferFunction(step);
    if (updatedStep.type === action_1.ActionType.BRANCH) {
        const { onSuccessAction, onFailureAction } = updatedStep;
        if (onSuccessAction) {
            updatedStep.onSuccessAction = transferStep(onSuccessAction, transferFunction);
        }
        if (onFailureAction) {
            updatedStep.onFailureAction = transferStep(onFailureAction, transferFunction);
        }
    }
    else if (updatedStep.type === action_1.ActionType.LOOP_ON_ITEMS) {
        const { firstLoopAction } = updatedStep;
        if (firstLoopAction) {
            updatedStep.firstLoopAction = transferStep(firstLoopAction, transferFunction);
        }
    }
    if (updatedStep.nextAction) {
        updatedStep.nextAction = transferStep(updatedStep.nextAction, transferFunction);
    }
    return updatedStep;
}
function transferFlowAsync(flowVersion, transferFunction) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const clonedFlow = JSON.parse(JSON.stringify(flowVersion));
        clonedFlow.trigger = (yield transferStepAsync(clonedFlow.trigger, transferFunction));
        return clonedFlow;
    });
}
function transferFlow(flowVersion, transferFunction) {
    const clonedFlow = JSON.parse(JSON.stringify(flowVersion));
    clonedFlow.trigger = transferStep(clonedFlow.trigger, transferFunction);
    return clonedFlow;
}
function getAllSteps(trigger) {
    return traverseInternal(trigger);
}
function getAllStepsAtFirstLevel(step) {
    const steps = [];
    steps.push(step);
    let nextAction = step.nextAction;
    while (nextAction !== undefined) {
        steps.push(nextAction);
        nextAction = nextAction.nextAction;
    }
    return steps;
}
function getAllChildSteps(action) {
    switch (action.type) {
        case action_1.ActionType.LOOP_ON_ITEMS:
            return traverseInternal(action.firstLoopAction);
        default:
            return [
                ...traverseInternal(action.onSuccessAction),
                ...traverseInternal(action.onFailureAction),
            ];
    }
}
function getAllDirectChildStepsForLoop(action) {
    const actions = [];
    let child = action.firstLoopAction;
    while (child) {
        actions.push(child);
        child = child.nextAction;
    }
    return actions;
}
function getAllDirectChildStepsForBranch(action, branch) {
    const actions = [];
    if (branch === 'success') {
        let child = action.onSuccessAction;
        while (child) {
            actions.push(child);
            child = child.nextAction;
        }
    }
    else {
        let child = action.onFailureAction;
        while (child) {
            actions.push(child);
            child = child.nextAction;
        }
    }
    return actions;
}
function getStep(flowVersion, stepName) {
    return getAllSteps(flowVersion.trigger).find((step) => step.name === stepName);
}
const getAllSubFlowSteps = ({ subFlowStartStep, }) => {
    return traverseInternal(subFlowStartStep);
};
const getStepFromSubFlow = ({ subFlowStartStep, stepName, }) => {
    const subFlowSteps = getAllSubFlowSteps({
        subFlowStartStep,
    });
    return subFlowSteps.find((step) => step.name === stepName);
};
function updateAction(flowVersion, request) {
    return transferFlow(flowVersion, (parentStep) => {
        if (parentStep.nextAction && parentStep.nextAction.name === request.name) {
            const actions = extractActions(parentStep.nextAction);
            parentStep.nextAction = createAction(request, actions);
        }
        if (parentStep.type === action_1.ActionType.BRANCH) {
            if (parentStep.onFailureAction &&
                parentStep.onFailureAction.name === request.name) {
                const actions = extractActions(parentStep.onFailureAction);
                parentStep.onFailureAction = createAction(request, actions);
            }
            if (parentStep.onSuccessAction &&
                parentStep.onSuccessAction.name === request.name) {
                const actions = extractActions(parentStep.onSuccessAction);
                parentStep.onSuccessAction = createAction(request, actions);
            }
        }
        if (parentStep.type === action_1.ActionType.LOOP_ON_ITEMS) {
            if (parentStep.firstLoopAction &&
                parentStep.firstLoopAction.name === request.name) {
                const actions = extractActions(parentStep.firstLoopAction);
                parentStep.firstLoopAction = createAction(request, actions);
            }
        }
        return parentStep;
    });
}
function extractActions(step) {
    const nextAction = step.nextAction;
    const onSuccessAction = step.type === action_1.ActionType.BRANCH ? step.onSuccessAction : undefined;
    const onFailureAction = step.type === action_1.ActionType.BRANCH ? step.onFailureAction : undefined;
    const firstLoopAction = step.type === action_1.ActionType.LOOP_ON_ITEMS ? step.firstLoopAction : undefined;
    return { nextAction, onSuccessAction, onFailureAction, firstLoopAction };
}
function moveAction(flowVersion, request) {
    const steps = getAllSteps(flowVersion.trigger);
    const sourceStep = steps.find((step) => step.name === request.name);
    if (!sourceStep || !isAction(sourceStep.type)) {
        throw new activepieces_error_1.ActivepiecesError({
            code: activepieces_error_1.ErrorCode.FLOW_OPERATION_INVALID,
            params: {},
        }, `Source step ${request.name} not found`);
    }
    const destinationStep = steps.find((step) => step.name === request.newParentStep);
    if (!destinationStep) {
        throw new activepieces_error_1.ActivepiecesError({
            code: activepieces_error_1.ErrorCode.FLOW_OPERATION_INVALID,
            params: {},
        }, `Destination step ${request.newParentStep} not found`);
    }
    const childOperation = [];
    const clonedSourceStep = JSON.parse(JSON.stringify(sourceStep));
    if (clonedSourceStep.type === action_1.ActionType.LOOP_ON_ITEMS ||
        clonedSourceStep.type === action_1.ActionType.BRANCH) {
        // Don't Clone the next action for first step only
        clonedSourceStep.nextAction = undefined;
        childOperation.push(...getImportOperations(clonedSourceStep));
    }
    flowVersion = deleteAction(flowVersion, { name: request.name });
    flowVersion = addAction(flowVersion, {
        action: sourceStep,
        parentStep: request.newParentStep,
        stepLocationRelativeToParent: request.stepLocationRelativeToNewParent,
    });
    childOperation.forEach((operation) => {
        flowVersion = exports.flowHelper.apply(flowVersion, operation);
    });
    return flowVersion;
}
function addAction(flowVersion, request) {
    return transferFlow(flowVersion, (parentStep) => {
        if (parentStep.name !== request.parentStep) {
            return parentStep;
        }
        if (parentStep.type === action_1.ActionType.LOOP_ON_ITEMS &&
            request.stepLocationRelativeToParent) {
            if (request.stepLocationRelativeToParent ===
                flow_operations_1.StepLocationRelativeToParent.INSIDE_LOOP) {
                parentStep.firstLoopAction = createAction(request.action, {
                    nextAction: parentStep.firstLoopAction,
                });
            }
            else if (request.stepLocationRelativeToParent ===
                flow_operations_1.StepLocationRelativeToParent.AFTER) {
                parentStep.nextAction = createAction(request.action, {
                    nextAction: parentStep.nextAction,
                });
            }
            else {
                throw new activepieces_error_1.ActivepiecesError({
                    code: activepieces_error_1.ErrorCode.FLOW_OPERATION_INVALID,
                    params: {},
                }, `Loop step parent ${request.stepLocationRelativeToParent} not found`);
            }
        }
        else if (parentStep.type === action_1.ActionType.BRANCH &&
            request.stepLocationRelativeToParent) {
            if (request.stepLocationRelativeToParent ===
                flow_operations_1.StepLocationRelativeToParent.INSIDE_TRUE_BRANCH) {
                parentStep.onSuccessAction = createAction(request.action, {
                    nextAction: parentStep.onSuccessAction,
                });
            }
            else if (request.stepLocationRelativeToParent ===
                flow_operations_1.StepLocationRelativeToParent.INSIDE_FALSE_BRANCH) {
                parentStep.onFailureAction = createAction(request.action, {
                    nextAction: parentStep.onFailureAction,
                });
            }
            else if (request.stepLocationRelativeToParent ===
                flow_operations_1.StepLocationRelativeToParent.AFTER) {
                parentStep.nextAction = createAction(request.action, {
                    nextAction: parentStep.nextAction,
                });
            }
            else {
                throw new activepieces_error_1.ActivepiecesError({
                    code: activepieces_error_1.ErrorCode.FLOW_OPERATION_INVALID,
                    params: {},
                }, `Branch step parernt ${request.stepLocationRelativeToParent} not found`);
            }
        }
        else {
            parentStep.nextAction = createAction(request.action, {
                nextAction: parentStep.nextAction,
            });
        }
        return parentStep;
    });
}
function createAction(request, { nextAction, onFailureAction, onSuccessAction, firstLoopAction, }) {
    const baseProperties = {
        displayName: request.displayName,
        name: request.name,
        valid: false,
        nextAction,
    };
    let action;
    switch (request.type) {
        case action_1.ActionType.BRANCH:
            action = Object.assign(Object.assign({}, baseProperties), { onFailureAction,
                onSuccessAction, type: action_1.ActionType.BRANCH, settings: request.settings });
            break;
        case action_1.ActionType.LOOP_ON_ITEMS:
            action = Object.assign(Object.assign({}, baseProperties), { firstLoopAction, type: action_1.ActionType.LOOP_ON_ITEMS, settings: request.settings });
            break;
        case action_1.ActionType.PIECE:
            action = Object.assign(Object.assign({}, baseProperties), { type: action_1.ActionType.PIECE, settings: request.settings });
            break;
        case action_1.ActionType.CODE:
            action = Object.assign(Object.assign({}, baseProperties), { type: action_1.ActionType.CODE, settings: request.settings });
            break;
    }
    return Object.assign(Object.assign({}, action), { valid: ((0, common_1.isNil)(request.valid) ? true : request.valid) && actionSchemaValidator.Check(action) });
}
function isChildOf(parent, childStepName) {
    switch (parent.type) {
        case action_1.ActionType.LOOP_ON_ITEMS: {
            const children = getAllChildSteps(parent);
            return children.findIndex((c) => c.name === childStepName) > -1;
        }
        default: {
            const children = getAllChildSteps(parent);
            return children.findIndex((c) => c.name === childStepName) > -1;
        }
    }
}
function createTrigger(name, request, nextAction) {
    const baseProperties = {
        displayName: request.displayName,
        name,
        valid: false,
        nextAction,
    };
    let trigger;
    switch (request.type) {
        case trigger_1.TriggerType.EMPTY:
            trigger = Object.assign(Object.assign({}, baseProperties), { type: trigger_1.TriggerType.EMPTY, settings: request.settings });
            break;
        case trigger_1.TriggerType.PIECE:
            trigger = Object.assign(Object.assign({}, baseProperties), { type: trigger_1.TriggerType.PIECE, settings: request.settings });
            break;
    }
    return Object.assign(Object.assign({}, trigger), { valid: ((0, common_1.isNil)(request.valid) ? true : request.valid) && triggerSchemaValidation.Check(trigger) });
}
function getImportOperations(step) {
    const steps = [];
    while (step) {
        if (step.nextAction) {
            steps.push({
                type: flow_operations_1.FlowOperationType.ADD_ACTION,
                request: {
                    parentStep: step.name,
                    action: removeAnySubsequentAction(step.nextAction),
                },
            });
        }
        switch (step.type) {
            case action_1.ActionType.BRANCH: {
                if (step.onFailureAction) {
                    steps.push({
                        type: flow_operations_1.FlowOperationType.ADD_ACTION,
                        request: {
                            parentStep: step.name,
                            stepLocationRelativeToParent: flow_operations_1.StepLocationRelativeToParent.INSIDE_FALSE_BRANCH,
                            action: removeAnySubsequentAction(step.onFailureAction),
                        },
                    });
                    steps.push(...getImportOperations(step.onFailureAction));
                }
                if (step.onSuccessAction) {
                    steps.push({
                        type: flow_operations_1.FlowOperationType.ADD_ACTION,
                        request: {
                            parentStep: step.name,
                            stepLocationRelativeToParent: flow_operations_1.StepLocationRelativeToParent.INSIDE_TRUE_BRANCH,
                            action: removeAnySubsequentAction(step.onSuccessAction),
                        },
                    });
                    steps.push(...getImportOperations(step.onSuccessAction));
                }
                break;
            }
            case action_1.ActionType.LOOP_ON_ITEMS: {
                if (step.firstLoopAction) {
                    steps.push({
                        type: flow_operations_1.FlowOperationType.ADD_ACTION,
                        request: {
                            parentStep: step.name,
                            stepLocationRelativeToParent: flow_operations_1.StepLocationRelativeToParent.INSIDE_LOOP,
                            action: removeAnySubsequentAction(step.firstLoopAction),
                        },
                    });
                    steps.push(...getImportOperations(step.firstLoopAction));
                }
                break;
            }
            case action_1.ActionType.CODE:
            case action_1.ActionType.PIECE:
            case trigger_1.TriggerType.PIECE:
            case trigger_1.TriggerType.EMPTY:
                {
                    break;
                }
        }
        step = step.nextAction;
    }
    return steps;
}
exports.getImportOperations = getImportOperations;
function removeAnySubsequentAction(action) {
    const clonedAction = JSON.parse(JSON.stringify(action));
    switch (clonedAction.type) {
        case action_1.ActionType.BRANCH: {
            delete clonedAction.onSuccessAction;
            delete clonedAction.onFailureAction;
            break;
        }
        case action_1.ActionType.LOOP_ON_ITEMS: {
            delete clonedAction.firstLoopAction;
            break;
        }
        case action_1.ActionType.PIECE:
        case action_1.ActionType.CODE:
            break;
    }
    delete clonedAction.nextAction;
    return clonedAction;
}
function normalize(flowVersion) {
    return transferFlow(flowVersion, (step) => {
        const clonedStep = JSON.parse(JSON.stringify(step));
        clonedStep.settings.inputUiInfo = sample_data_1.DEFAULT_SAMPLE_DATA_SETTINGS;
        return upgradePiece(clonedStep, clonedStep.name);
    });
}
function upgradePiece(step, stepName) {
    if (step.name !== stepName) {
        return step;
    }
    const clonedStep = JSON.parse(JSON.stringify(step));
    switch (step.type) {
        case action_1.ActionType.PIECE:
        case trigger_1.TriggerType.PIECE: {
            const { pieceVersion, pieceName } = step.settings;
            if (isLegacyApp({ pieceName, pieceVersion })) {
                return step;
            }
            if (pieceVersion.startsWith('^') || pieceVersion.startsWith('~')) {
                return step;
            }
            if (semver_1.default.valid(pieceVersion) && semver_1.default.lt(pieceVersion, '1.0.0')) {
                clonedStep.settings.pieceVersion = `~${pieceVersion}`;
            }
            else {
                clonedStep.settings.pieceVersion = `^${pieceVersion}`;
            }
            break;
        }
        default:
            break;
    }
    return clonedStep;
}
// TODO Remove this in 2024, these pieces didn't follow the standard versioning where the minor version has to be increased when there is breaking change.
function isLegacyApp({ pieceName, pieceVersion }) {
    let newVersion = pieceVersion;
    if (newVersion.startsWith('^') || newVersion.startsWith('~')) {
        newVersion = newVersion.substring(1);
    }
    if (pieceName === '@activepieces/piece-google-sheets' &&
        semver_1.default.lt(newVersion, '0.3.0')) {
        return true;
    }
    if (pieceName === '@activepieces/piece-gmail' &&
        semver_1.default.lt(newVersion, '0.3.0')) {
        return true;
    }
    return false;
}
function duplicateStep(stepName, flowVersionWithArtifacts) {
    const clonedStep = JSON.parse(JSON.stringify(exports.flowHelper.getStep(flowVersionWithArtifacts, stepName)));
    clonedStep.nextAction = undefined;
    if (!clonedStep) {
        throw new Error(`step with name '${stepName}' not found`);
    }
    const existingNames = getAllSteps(flowVersionWithArtifacts.trigger).map((step) => step.name);
    const oldStepsNameToReplace = getAllSteps(clonedStep).map((step) => step.name);
    const oldNameToNewName = {};
    oldStepsNameToReplace.forEach((name) => {
        const newName = findUnusedName(existingNames, 'step');
        oldNameToNewName[name] = newName;
        existingNames.push(newName);
    });
    const duplicatedStep = transferStep(clonedStep, (step) => {
        step.displayName = `${step.displayName} Copy`;
        step.name = oldNameToNewName[step.name];
        if (step.settings.inputUiInfo) {
            step.settings.inputUiInfo.currentSelectedData = undefined;
            step.settings.inputUiInfo.lastTestDate = undefined;
        }
        oldStepsNameToReplace.forEach((oldName) => {
            step.settings.input = (0, common_1.applyFunctionToValuesSync)(step.settings.input, (value) => {
                if ((0, common_1.isString)(value)) {
                    return replaceOldStepNameWithNewOne({ input: value, oldStepName: oldName, newStepName: oldNameToNewName[oldName] });
                }
                return value;
            });
        });
        return step;
    });
    let finalFlow = addAction(flowVersionWithArtifacts, {
        action: duplicatedStep,
        parentStep: stepName,
        stepLocationRelativeToParent: flow_operations_1.StepLocationRelativeToParent.AFTER,
    });
    const operations = getImportOperations(duplicatedStep);
    operations.forEach((operation) => {
        finalFlow = exports.flowHelper.apply(finalFlow, operation);
    });
    return finalFlow;
}
function replaceOldStepNameWithNewOne({ input, oldStepName, newStepName }) {
    const regex = /{{(.*?)}}/g; // Regular expression to match strings inside {{ }}
    return input.replace(regex, (match, content) => {
        // Replace the content inside {{ }} using the provided function
        const replacedContent = content.replaceAll(new RegExp(`\\b${oldStepName}\\b`, 'g'), `${newStepName}`);
        // Reconstruct the {{ }} with the replaced content
        return `{{${replacedContent}}}`;
    });
}
function doesActionHaveChildren(action) {
    if (action.type === action_1.ActionType.BRANCH || action.type === action_1.ActionType.LOOP_ON_ITEMS) {
        return true;
    }
    return false;
}
function findUnusedName(names, stepPrefix) {
    let availableNumber = 1;
    let availableName = `${stepPrefix}_${availableNumber}`;
    while (names.includes(availableName)) {
        availableNumber++;
        availableName = `${stepPrefix}_${availableNumber}`;
    }
    return availableName;
}
function findAvailableStepName(flowVersion, stepPrefix) {
    const steps = exports.flowHelper
        .getAllSteps(flowVersion.trigger)
        .map((f) => f.name);
    return findUnusedName(steps, stepPrefix);
}
function getDirectParentStep(child, parent) {
    var _a, _b, _c, _d;
    if (!parent) {
        return undefined;
    }
    if (isTrigger(parent.type)) {
        let next = parent.nextAction;
        while (next) {
            if (next.name === child.name) {
                return parent;
            }
            next = next.nextAction;
        }
    }
    if (parent.type === action_1.ActionType.BRANCH) {
        const isChildOfBranch = isChildOf(parent, child.name);
        if (isChildOfBranch) {
            const directTrueBranchChildren = getAllDirectChildStepsForBranch(parent, 'success');
            const directFalseBranchChildren = getAllDirectChildStepsForBranch(parent, 'failure');
            if (((_a = directTrueBranchChildren.at(-1)) === null || _a === void 0 ? void 0 : _a.name) === child.name || ((_b = directFalseBranchChildren.at(-1)) === null || _b === void 0 ? void 0 : _b.name) === child.name) {
                return parent;
            }
            return (_c = getDirectParentStep(child, parent.onSuccessAction)) !== null && _c !== void 0 ? _c : getDirectParentStep(child, parent.onFailureAction);
        }
    }
    if (parent.type === action_1.ActionType.LOOP_ON_ITEMS) {
        const isChildOfLoop = isChildOf(parent, child.name);
        if (isChildOfLoop) {
            const directChildren = getAllDirectChildStepsForLoop(parent);
            if (((_d = directChildren.at(-1)) === null || _d === void 0 ? void 0 : _d.name) === child.name) {
                return parent;
            }
            return getDirectParentStep(child, parent.firstLoopAction);
        }
    }
    return getDirectParentStep(child, parent.nextAction);
}
function isStepLastChildOfParent(child, trigger) {
    var _a, _b, _c;
    const parent = getDirectParentStep(child, trigger);
    if (parent) {
        if (doesStepHaveChildren(parent)) {
            if (parent.type === action_1.ActionType.LOOP_ON_ITEMS) {
                const children = getAllDirectChildStepsForLoop(parent);
                return ((_a = children[children.length - 1]) === null || _a === void 0 ? void 0 : _a.name) === child.name;
            }
            const trueBranchChildren = getAllDirectChildStepsForBranch(parent, 'success');
            const falseBranchChildren = getAllDirectChildStepsForBranch(parent, 'failure');
            return ((_b = trueBranchChildren[trueBranchChildren.length - 1]) === null || _b === void 0 ? void 0 : _b.name) === child.name || ((_c = falseBranchChildren[falseBranchChildren.length - 1]) === null || _c === void 0 ? void 0 : _c.name) === child.name;
        }
        let next = parent.nextAction;
        while (next) {
            if (next.nextAction === undefined && next.name === child.name) {
                return true;
            }
            next = next.nextAction;
        }
    }
    return false;
}
function doesStepHaveChildren(step) {
    return step.type === action_1.ActionType.BRANCH || step.type === action_1.ActionType.LOOP_ON_ITEMS;
}
exports.flowHelper = {
    isValid,
    apply(flowVersion, operation) {
        let clonedVersion = JSON.parse(JSON.stringify(flowVersion));
        switch (operation.type) {
            case flow_operations_1.FlowOperationType.MOVE_ACTION:
                clonedVersion = moveAction(clonedVersion, operation.request);
                break;
            case flow_operations_1.FlowOperationType.LOCK_FLOW:
                clonedVersion.state = flow_version_1.FlowVersionState.LOCKED;
                break;
            case flow_operations_1.FlowOperationType.CHANGE_NAME:
                clonedVersion.displayName = operation.request.displayName;
                break;
            case flow_operations_1.FlowOperationType.DELETE_ACTION:
                clonedVersion = deleteAction(clonedVersion, operation.request);
                break;
            case flow_operations_1.FlowOperationType.ADD_ACTION: {
                clonedVersion = transferFlow(addAction(clonedVersion, operation.request), (step) => upgradePiece(step, operation.request.action.name));
                break;
            }
            case flow_operations_1.FlowOperationType.UPDATE_ACTION:
                clonedVersion = transferFlow(updateAction(clonedVersion, operation.request), (step) => upgradePiece(step, operation.request.name));
                break;
            case flow_operations_1.FlowOperationType.UPDATE_TRIGGER:
                clonedVersion.trigger = createTrigger(clonedVersion.trigger.name, operation.request, clonedVersion.trigger.nextAction);
                clonedVersion = transferFlow(clonedVersion, (step) => upgradePiece(step, operation.request.name));
                break;
            case flow_operations_1.FlowOperationType.DUPLICATE_ACTION: {
                clonedVersion = duplicateStep(operation.request.stepName, clonedVersion);
                break;
            }
            default:
                break;
        }
        clonedVersion.valid = isValid(clonedVersion);
        return clonedVersion;
    },
    getStep,
    isAction,
    isTrigger,
    getAllSteps,
    isStepLastChildOfParent,
    getUsedPieces,
    getImportOperations,
    getAllSubFlowSteps,
    normalize,
    getStepFromSubFlow,
    isChildOf,
    transferFlowAsync,
    getAllChildSteps,
    getAllStepsAtFirstLevel,
    duplicateStep,
    findAvailableStepName,
    doesActionHaveChildren,
};
//# sourceMappingURL=flow-helper.js.map