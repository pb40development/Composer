import { BasePieceAuthSchema } from "./common";
import { TPropertyValue } from "../input/common";
import { PropertyType } from "../input/property-type";
import { ValidationInputType } from "../../validators/types";
export declare const SecretTextProperty: import("@sinclair/typebox").TComposite<[import("@sinclair/typebox").TObject<{
    displayName: import("@sinclair/typebox").TString<string>;
    description: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
}>, import("@sinclair/typebox").TObject<import("@sinclair/typebox").TProperties>]>;
export type SecretTextProperty<R extends boolean> = BasePieceAuthSchema<string> & TPropertyValue<string, PropertyType.SECRET_TEXT, ValidationInputType.STRING, R>;
