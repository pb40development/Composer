import { BasePropertySchema, TPropertyValue } from "../common";
import { DropdownState } from "./common";
import { PropertyContext } from "../../../context";
import { ValidationInputType } from "../../../validators/types";
import { PropertyType } from "../property-type";
type DynamicDropdownOptions<T> = (propsValue: Record<string, unknown>, ctx: PropertyContext) => Promise<DropdownState<T>>;
export declare const DropdownProperty: import("@sinclair/typebox").TComposite<[import("@sinclair/typebox").TObject<{
    displayName: import("@sinclair/typebox").TString<string>;
    description: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
}>, import("@sinclair/typebox").TObject<import("@sinclair/typebox").TProperties>, import("@sinclair/typebox").TObject<{
    refreshers: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>;
}>]>;
export type DropdownProperty<T, R extends boolean> = BasePropertySchema & {
    refreshers: string[];
    refreshOnSearch?: boolean;
    options: DynamicDropdownOptions<T>;
} & TPropertyValue<T, PropertyType.DROPDOWN, ValidationInputType.ANY, R>;
export declare const MultiSelectDropdownProperty: import("@sinclair/typebox").TComposite<[import("@sinclair/typebox").TObject<{
    displayName: import("@sinclair/typebox").TString<string>;
    description: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
}>, import("@sinclair/typebox").TObject<import("@sinclair/typebox").TProperties>, import("@sinclair/typebox").TObject<{
    refreshers: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>;
}>]>;
export type MultiSelectDropdownProperty<T, R extends boolean> = BasePropertySchema & {
    refreshers: string[];
    options: DynamicDropdownOptions<T>;
} & TPropertyValue<T[], PropertyType.MULTI_SELECT_DROPDOWN, ValidationInputType.ANY, R>;
export {};
