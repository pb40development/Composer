import { BasePropertySchema, TPropertyValue } from "./common";
import { PropertyType } from "./property-type";
import { ValidationInputType } from "../../validators/types";
import { LongTextProperty, ShortTextProperty } from "./text-property";
import { StaticDropdownProperty, StaticMultiSelectDropdownProperty } from "./dropdown/static-dropdown";
import { MultiSelectDropdownProperty } from "./dropdown/dropdown-prop";
import { CheckboxProperty } from "./checkbox-property";
import { NumberProperty } from "./number-property";
export declare const ArrayProperty: import("@sinclair/typebox").TComposite<[import("@sinclair/typebox").TObject<{
    displayName: import("@sinclair/typebox").TString<string>;
    description: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
}>, import("@sinclair/typebox").TObject<{
    properties: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TRecord<import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TComposite<[import("@sinclair/typebox").TObject<{
        displayName: import("@sinclair/typebox").TString<string>;
        description: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
    }>, import("@sinclair/typebox").TObject<import("@sinclair/typebox").TProperties>]>, import("@sinclair/typebox").TComposite<[import("@sinclair/typebox").TObject<{
        displayName: import("@sinclair/typebox").TString<string>;
        description: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
    }>, import("@sinclair/typebox").TObject<import("@sinclair/typebox").TProperties>]>, import("@sinclair/typebox").TComposite<[import("@sinclair/typebox").TObject<{
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
    }>, import("@sinclair/typebox").TObject<import("@sinclair/typebox").TProperties>]>, import("@sinclair/typebox").TComposite<[import("@sinclair/typebox").TObject<{
        displayName: import("@sinclair/typebox").TString<string>;
        description: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
    }>, import("@sinclair/typebox").TObject<import("@sinclair/typebox").TProperties>, import("@sinclair/typebox").TObject<{
        refreshers: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>;
    }>]>, import("@sinclair/typebox").TComposite<[import("@sinclair/typebox").TObject<{
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
    }>, import("@sinclair/typebox").TObject<import("@sinclair/typebox").TProperties>]>, import("@sinclair/typebox").TComposite<[import("@sinclair/typebox").TObject<{
        displayName: import("@sinclair/typebox").TString<string>;
        description: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
    }>, import("@sinclair/typebox").TObject<import("@sinclair/typebox").TProperties>]>, import("@sinclair/typebox").TComposite<[import("@sinclair/typebox").TObject<{
        displayName: import("@sinclair/typebox").TString<string>;
        description: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
    }>, import("@sinclair/typebox").TObject<import("@sinclair/typebox").TProperties>]>]>>>;
}>, import("@sinclair/typebox").TObject<import("@sinclair/typebox").TProperties>]>;
export type ArrayProperty<R extends boolean> = BasePropertySchema & {
    properties?: Record<string, ShortTextProperty<R> | LongTextProperty<R> | StaticDropdownProperty<any, R> | MultiSelectDropdownProperty<any, R> | StaticMultiSelectDropdownProperty<any, R> | CheckboxProperty<R> | NumberProperty<R>>;
} & TPropertyValue<unknown[], PropertyType.ARRAY, ValidationInputType.ARRAY, R>;
