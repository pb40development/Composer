import { BasePropertySchema, TPropertyValue } from "./common";
import { PropertyType } from "./property-type";
import { ValidationInputType } from "../../validators/types";
export declare const JsonProperty: import("@sinclair/typebox").TComposite<[import("@sinclair/typebox").TObject<{
    displayName: import("@sinclair/typebox").TString<string>;
    description: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
}>, import("@sinclair/typebox").TObject<import("@sinclair/typebox").TProperties>]>;
export type JsonProperty<R extends boolean> = BasePropertySchema & TPropertyValue<Record<string, unknown>, PropertyType.JSON, ValidationInputType.OBJECT, R>;
