import { Static } from '@sinclair/typebox';
export declare enum WorkerMachineStatus {
    ONLINE = "ONLINE",
    OFFLINE = "OFFLINE"
}
export declare enum WorkerMachineType {
    DEDICATED = "DEDICATED",
    SHARED = "SHARED"
}
export declare const MachineInformation: import("@sinclair/typebox").TObject<{
    cpuUsagePercentage: import("@sinclair/typebox").TNumber;
    ramUsagePercentage: import("@sinclair/typebox").TNumber;
    totalAvailableRamInBytes: import("@sinclair/typebox").TNumber;
    ip: import("@sinclair/typebox").TString<string>;
}>;
export type MachineInformation = Static<typeof MachineInformation>;
export declare const WorkerMachine: import("@sinclair/typebox").TObject<{
    platformId: import("@sinclair/typebox").TString<string>;
    type: import("@sinclair/typebox").TEnum<typeof WorkerMachineType>;
    information: import("@sinclair/typebox").TObject<{
        cpuUsagePercentage: import("@sinclair/typebox").TNumber;
        ramUsagePercentage: import("@sinclair/typebox").TNumber;
        totalAvailableRamInBytes: import("@sinclair/typebox").TNumber;
        ip: import("@sinclair/typebox").TString<string>;
    }>;
    id: import("@sinclair/typebox").TString<string>;
    created: import("@sinclair/typebox").TString<string>;
    updated: import("@sinclair/typebox").TString<string>;
}>;
export type WorkerMachine = Static<typeof WorkerMachine>;
export declare const WorkerMachineWithStatus: import("@sinclair/typebox").TComposite<[import("@sinclair/typebox").TObject<{
    platformId: import("@sinclair/typebox").TString<string>;
    type: import("@sinclair/typebox").TEnum<typeof WorkerMachineType>;
    information: import("@sinclair/typebox").TObject<{
        cpuUsagePercentage: import("@sinclair/typebox").TNumber;
        ramUsagePercentage: import("@sinclair/typebox").TNumber;
        totalAvailableRamInBytes: import("@sinclair/typebox").TNumber;
        ip: import("@sinclair/typebox").TString<string>;
    }>;
    id: import("@sinclair/typebox").TString<string>;
    created: import("@sinclair/typebox").TString<string>;
    updated: import("@sinclair/typebox").TString<string>;
}>, import("@sinclair/typebox").TObject<{
    status: import("@sinclair/typebox").TEnum<typeof WorkerMachineStatus>;
}>]>;
export type WorkerMachineWithStatus = Static<typeof WorkerMachineWithStatus>;
export declare const WorkerMachineHealthcheckRequest: import("@sinclair/typebox").TObject<{
    cpuUsagePercentage: import("@sinclair/typebox").TNumber;
    ramUsagePercentage: import("@sinclair/typebox").TNumber;
    totalAvailableRamInBytes: import("@sinclair/typebox").TNumber;
    ip: import("@sinclair/typebox").TString<string>;
}>;
export type WorkerMachineHealthcheckRequest = Static<typeof WorkerMachineHealthcheckRequest>;
