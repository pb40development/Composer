import { Static, TSchema } from '@sinclair/typebox';
export type BaseModel<T> = {
    id: T;
    created: string;
    updated: string;
};
export declare const BaseModelSchema: {
    id: import("@sinclair/typebox").TString<string>;
    created: import("@sinclair/typebox").TString<string>;
    updated: import("@sinclair/typebox").TString<string>;
};
export declare const Nullable: <T extends TSchema>(schema: T) => import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnsafe<Static<T> | null>>;
