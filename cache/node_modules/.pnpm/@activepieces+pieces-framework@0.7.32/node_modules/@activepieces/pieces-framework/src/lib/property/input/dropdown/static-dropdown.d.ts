import { BasePropertySchema, TPropertyValue } from "../common";
import { DropdownState } from "./common";
import { ValidationInputType } from "../../../validators/types";
import { PropertyType } from "../property-type";
export declare const StaticDropdownProperty: import("@sinclair/typebox").TComposite<[import("@sinclair/typebox").TObject<{
    displayName: import("@sinclair/typebox").TString<string>;
    description: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
}>, import("@sinclair/typebox").TObject<{
    options: import("@sinclair/typebox").TObject<{
        disabled: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TBoolean>;
        placeholder: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
        options: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
            label: import("@sinclair/typebox").TString<string>;
            value: import("@sinclair/typebox").TUnknown;
        }>>;
    }>;
}>, import("@sinclair/typebox").TObject<import("@sinclair/typebox").TProperties>]>;
export type StaticDropdownProperty<T, R extends boolean> = BasePropertySchema & {
    options: DropdownState<T>;
} & TPropertyValue<T, PropertyType.STATIC_DROPDOWN, ValidationInputType.ANY, R>;
export declare const StaticMultiSelectDropdownProperty: import("@sinclair/typebox").TComposite<[import("@sinclair/typebox").TObject<{
    displayName: import("@sinclair/typebox").TString<string>;
    description: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
}>, import("@sinclair/typebox").TObject<{
    options: import("@sinclair/typebox").TObject<{
        disabled: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TBoolean>;
        placeholder: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
        options: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
            label: import("@sinclair/typebox").TString<string>;
            value: import("@sinclair/typebox").TUnknown;
        }>>;
    }>;
}>, import("@sinclair/typebox").TObject<import("@sinclair/typebox").TProperties>]>;
export type StaticMultiSelectDropdownProperty<T, R extends boolean> = BasePropertySchema & {
    options: DropdownState<T>;
} & TPropertyValue<T[], PropertyType.STATIC_MULTI_SELECT_DROPDOWN, ValidationInputType.ANY, R>;
