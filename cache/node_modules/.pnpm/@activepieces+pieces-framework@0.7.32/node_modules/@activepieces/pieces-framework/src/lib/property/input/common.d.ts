import { Static, TObject, TSchema } from "@sinclair/typebox";
import { PropertyType } from "./property-type";
import { ProcessorFn } from "../../processors/types";
import { TypedValidatorFn, ValidationInputType } from "../../validators/types";
import { ApFile } from "./file-property";
export declare const BasePropertySchema: TObject<{
    displayName: import("@sinclair/typebox").TString<string>;
    description: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
}>;
export type BasePropertySchema = Static<typeof BasePropertySchema>;
export declare const TPropertyValue: <T extends TSchema, U extends PropertyType>(T: T, propertyType: U) => TObject;
export type TPropertyValue<T, U extends PropertyType, VALIDATION_INPUT extends ValidationInputType, REQUIRED extends boolean> = {
    valueSchema: T;
    type: U;
    required: REQUIRED;
    defaultProcessors?: ProcessorFn[];
    processors?: ProcessorFn[];
    validators?: TypedValidatorFn<VALIDATION_INPUT>[];
    defaultValidators?: TypedValidatorFn<VALIDATION_INPUT>[];
    defaultValue?: U extends PropertyType.ARRAY ? unknown[] : U extends PropertyType.JSON ? object : U extends PropertyType.CHECKBOX ? boolean : U extends PropertyType.LONG_TEXT ? string : U extends PropertyType.SHORT_TEXT ? string : U extends PropertyType.NUMBER ? number : U extends PropertyType.DROPDOWN ? unknown : U extends PropertyType.MULTI_SELECT_DROPDOWN ? unknown[] : U extends PropertyType.STATIC_MULTI_SELECT_DROPDOWN ? unknown[] : U extends PropertyType.STATIC_DROPDOWN ? unknown : U extends PropertyType.DATE_TIME ? string : U extends PropertyType.FILE ? ApFile : unknown;
};
