import { BasePropertySchema, TPropertyValue } from "./common";
import { PropertyType } from "./property-type";
import { ValidationInputType } from "../../validators/types";
export declare const DateTimeProperty: import("@sinclair/typebox").TComposite<[import("@sinclair/typebox").TObject<{
    displayName: import("@sinclair/typebox").TString<string>;
    description: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
}>, import("@sinclair/typebox").TObject<import("@sinclair/typebox").TProperties>]>;
export type DateTimeProperty<R extends boolean> = BasePropertySchema & TPropertyValue<string, PropertyType.DATE_TIME, ValidationInputType.DATE_TIME, R>;
