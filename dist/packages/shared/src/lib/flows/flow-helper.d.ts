import { Action, ActionType, BranchAction, LoopOnItemsAction } from './actions/action';
import { FlowOperationRequest } from './flow-operations';
import { FlowVersion } from './flow-version';
import { Trigger, TriggerType } from './triggers/trigger';
type Step = Action | Trigger;
type GetAllSubFlowSteps = {
    subFlowStartStep: Step;
};
type GetStepFromSubFlow = {
    subFlowStartStep: Step;
    stepName: string;
};
declare function isValid(flowVersion: FlowVersion): boolean;
declare function isAction(type: ActionType | TriggerType | undefined): boolean;
declare function isTrigger(type: ActionType | TriggerType | undefined): boolean;
declare function getUsedPieces(trigger: Trigger): string[];
declare function transferFlowAsync<T extends Step>(flowVersion: FlowVersion, transferFunction: (step: T) => Promise<T>): Promise<FlowVersion>;
declare function getAllSteps(trigger: Trigger): (Action | Trigger)[];
declare function getAllStepsAtFirstLevel(step: Trigger): (Action | Trigger)[];
declare function getAllChildSteps(action: LoopOnItemsAction | BranchAction): Action[];
declare function getStep(flowVersion: FlowVersion, stepName: string): Action | Trigger | undefined;
declare function isChildOf(parent: LoopOnItemsAction | BranchAction, childStepName: string): boolean;
export declare function getImportOperations(step: Action | Trigger | undefined): FlowOperationRequest[];
declare function normalize(flowVersion: FlowVersion): FlowVersion;
declare function duplicateStep(stepName: string, flowVersionWithArtifacts: FlowVersion): FlowVersion;
declare function doesActionHaveChildren(action: Action | Trigger): action is (LoopOnItemsAction | BranchAction);
declare function findAvailableStepName(flowVersion: FlowVersion, stepPrefix: string): string;
declare function isStepLastChildOfParent(child: Step, trigger: Trigger): boolean;
export declare const flowHelper: {
    isValid: typeof isValid;
    apply(flowVersion: FlowVersion, operation: FlowOperationRequest): FlowVersion;
    getStep: typeof getStep;
    isAction: typeof isAction;
    isTrigger: typeof isTrigger;
    getAllSteps: typeof getAllSteps;
    isStepLastChildOfParent: typeof isStepLastChildOfParent;
    getUsedPieces: typeof getUsedPieces;
    getImportOperations: typeof getImportOperations;
    getAllSubFlowSteps: ({ subFlowStartStep, }: GetAllSubFlowSteps) => Step[];
    normalize: typeof normalize;
    getStepFromSubFlow: ({ subFlowStartStep, stepName, }: GetStepFromSubFlow) => Step | undefined;
    isChildOf: typeof isChildOf;
    transferFlowAsync: typeof transferFlowAsync;
    getAllChildSteps: typeof getAllChildSteps;
    getAllStepsAtFirstLevel: typeof getAllStepsAtFirstLevel;
    duplicateStep: typeof duplicateStep;
    findAvailableStepName: typeof findAvailableStepName;
    doesActionHaveChildren: typeof doesActionHaveChildren;
};
export {};