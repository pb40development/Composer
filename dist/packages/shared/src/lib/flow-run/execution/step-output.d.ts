import { ActionType } from '../../flows/actions/action';
import { TriggerType } from '../../flows/triggers/trigger';
export declare enum StepOutputStatus {
    FAILED = "FAILED",
    PAUSED = "PAUSED",
    RUNNING = "RUNNING",
    STOPPED = "STOPPED",
    SUCCEEDED = "SUCCEEDED"
}
type BaseStepOutputParams<T extends ActionType | TriggerType, OUTPUT> = {
    type: T;
    status: StepOutputStatus;
    input: unknown;
    output?: OUTPUT;
    duration?: number;
    errorMessage?: unknown;
};
export declare class GenericStepOutput<T extends ActionType | TriggerType, OUTPUT> {
    type: T;
    status: StepOutputStatus;
    input: unknown;
    output?: OUTPUT;
    duration?: number;
    errorMessage?: unknown;
    constructor(step: BaseStepOutputParams<T, OUTPUT>);
    setOutput(output: OUTPUT): GenericStepOutput<T, OUTPUT>;
    setStatus(status: StepOutputStatus): GenericStepOutput<T, OUTPUT>;
    setErrorMessage(errorMessage: unknown): GenericStepOutput<T, OUTPUT>;
    static create<T extends ActionType | TriggerType, OUTPUT>({ input, type, status, output }: {
        input: unknown;
        type: T;
        status: StepOutputStatus;
        output?: OUTPUT;
    }): GenericStepOutput<T, OUTPUT>;
}
export type StepOutput = GenericStepOutput<ActionType.LOOP_ON_ITEMS, LoopStepResult> | GenericStepOutput<ActionType.BRANCH, BranchStepResult> | GenericStepOutput<Exclude<ActionType, ActionType.LOOP_ON_ITEMS | ActionType.BRANCH> | TriggerType, unknown>;
type BranchStepResult = {
    condition: boolean;
};
export declare class BranchStepOutput extends GenericStepOutput<ActionType.BRANCH, BranchStepResult> {
    static init({ input }: {
        input: unknown;
    }): BranchStepOutput;
}
export type LoopStepResult = {
    item: unknown;
    index: number;
    iterations: Record<string, StepOutput>[];
};
export declare class LoopStepOutput extends GenericStepOutput<ActionType.LOOP_ON_ITEMS, LoopStepResult> {
    constructor(step: BaseStepOutputParams<ActionType.LOOP_ON_ITEMS, LoopStepResult>);
    static init({ input }: {
        input: unknown;
    }): LoopStepOutput;
    hasIteration(iteration: number): boolean;
    setItemAndIndex({ item, index }: {
        item: unknown;
        index: number;
    }): LoopStepOutput;
    addIteration(): LoopStepOutput;
}
export {};
