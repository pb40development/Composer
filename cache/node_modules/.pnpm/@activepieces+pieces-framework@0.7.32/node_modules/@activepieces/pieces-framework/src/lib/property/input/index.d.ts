import { LongTextProperty, ShortTextProperty } from "./text-property";
import { NumberProperty } from "./number-property";
import { ArrayProperty } from "./array-property";
import { ObjectProperty } from "./object-property";
import { JsonProperty } from "./json-property";
import { DateTimeProperty } from "./date-time-property";
import { FileProperty } from "./file-property";
import { MarkDownProperty } from "./markdown-property";
import { CheckboxProperty } from "./checkbox-property";
import { StaticDropdownProperty, StaticMultiSelectDropdownProperty } from "./dropdown/static-dropdown";
import { DynamicProperties } from "./dynamic-prop";
import { DropdownProperty, MultiSelectDropdownProperty } from "./dropdown/dropdown-prop";
export declare const InputProperty: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TComposite<[import("@sinclair/typebox").TObject<{
    displayName: import("@sinclair/typebox").TString<string>;
    description: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
}>, import("@sinclair/typebox").TObject<import("@sinclair/typebox").TProperties>]>, import("@sinclair/typebox").TComposite<[import("@sinclair/typebox").TObject<{
    displayName: import("@sinclair/typebox").TString<string>;
    description: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
}>, import("@sinclair/typebox").TObject<import("@sinclair/typebox").TProperties>]>, import("@sinclair/typebox").TComposite<[import("@sinclair/typebox").TObject<{
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
}>, import("@sinclair/typebox").TObject<import("@sinclair/typebox").TProperties>, import("@sinclair/typebox").TObject<{
    refreshers: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>;
}>]>, import("@sinclair/typebox").TComposite<[import("@sinclair/typebox").TObject<{
    refreshers: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>;
}>, import("@sinclair/typebox").TObject<{
    displayName: import("@sinclair/typebox").TString<string>;
    description: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
}>, import("@sinclair/typebox").TObject<import("@sinclair/typebox").TProperties>]>, import("@sinclair/typebox").TComposite<[import("@sinclair/typebox").TObject<{
    displayName: import("@sinclair/typebox").TString<string>;
    description: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
}>, import("@sinclair/typebox").TObject<import("@sinclair/typebox").TProperties>]>, import("@sinclair/typebox").TComposite<[import("@sinclair/typebox").TObject<{
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
}>, import("@sinclair/typebox").TObject<import("@sinclair/typebox").TProperties>]>, import("@sinclair/typebox").TComposite<[import("@sinclair/typebox").TObject<{
    displayName: import("@sinclair/typebox").TString<string>;
    description: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
}>, import("@sinclair/typebox").TObject<import("@sinclair/typebox").TProperties>]>, import("@sinclair/typebox").TComposite<[import("@sinclair/typebox").TObject<{
    displayName: import("@sinclair/typebox").TString<string>;
    description: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
}>, import("@sinclair/typebox").TObject<import("@sinclair/typebox").TProperties>]>, import("@sinclair/typebox").TComposite<[import("@sinclair/typebox").TObject<{
    displayName: import("@sinclair/typebox").TString<string>;
    description: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
}>, import("@sinclair/typebox").TObject<import("@sinclair/typebox").TProperties>]>, import("@sinclair/typebox").TComposite<[import("@sinclair/typebox").TObject<{
    displayName: import("@sinclair/typebox").TString<string>;
    description: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
}>, import("@sinclair/typebox").TObject<import("@sinclair/typebox").TProperties>]>]>;
export type InputProperty = ShortTextProperty<boolean> | LongTextProperty<boolean> | MarkDownProperty | CheckboxProperty<boolean> | DropdownProperty<any, boolean> | StaticDropdownProperty<any, boolean> | NumberProperty<boolean> | ArrayProperty<boolean> | ObjectProperty<boolean> | JsonProperty<boolean> | MultiSelectDropdownProperty<unknown, boolean> | StaticMultiSelectDropdownProperty<unknown, boolean> | DynamicProperties<boolean> | DateTimeProperty<boolean> | FileProperty<boolean>;
type Properties<T> = Omit<T, 'valueSchema' | 'type' | 'defaultValidators' | 'defaultProcessors'>;
export declare const Property: {
    ShortText<R extends boolean>(request: Properties<ShortTextProperty<R>>): R extends true ? ShortTextProperty<true> : ShortTextProperty<false>;
    Checkbox<R_1 extends boolean>(request: Properties<CheckboxProperty<R_1>>): R_1 extends true ? CheckboxProperty<true> : CheckboxProperty<false>;
    LongText<R_2 extends boolean>(request: Properties<LongTextProperty<R_2>>): R_2 extends true ? LongTextProperty<true> : LongTextProperty<false>;
    MarkDown(request: {
        value: string;
    }): MarkDownProperty;
    Number<R_3 extends boolean>(request: Properties<NumberProperty<R_3>>): R_3 extends true ? NumberProperty<true> : NumberProperty<false>;
    Json<R_4 extends boolean>(request: Properties<JsonProperty<R_4>>): R_4 extends true ? JsonProperty<true> : JsonProperty<false>;
    Array<R_5 extends boolean>(request: Properties<ArrayProperty<R_5>>): R_5 extends true ? ArrayProperty<true> : ArrayProperty<false>;
    Object<R_6 extends boolean>(request: Properties<ObjectProperty<R_6>>): R_6 extends true ? ObjectProperty<true> : ObjectProperty<false>;
    Dropdown<T, R_7 extends boolean = boolean>(request: Properties<DropdownProperty<T, R_7>>): R_7 extends true ? DropdownProperty<T, true> : DropdownProperty<T, false>;
    StaticDropdown<T_1, R_8 extends boolean = boolean>(request: Properties<StaticDropdownProperty<T_1, R_8>>): R_8 extends true ? StaticDropdownProperty<T_1, true> : StaticDropdownProperty<T_1, false>;
    MultiSelectDropdown<T_2, R_9 extends boolean = boolean>(request: Properties<MultiSelectDropdownProperty<T_2, R_9>>): R_9 extends true ? MultiSelectDropdownProperty<T_2, true> : MultiSelectDropdownProperty<T_2, false>;
    DynamicProperties<R_10 extends boolean = boolean>(request: Properties<DynamicProperties<R_10>>): R_10 extends true ? DynamicProperties<true> : DynamicProperties<false>;
    StaticMultiSelectDropdown<T_3, R_11 extends boolean = boolean>(request: Properties<StaticMultiSelectDropdownProperty<T_3, R_11>>): R_11 extends true ? StaticMultiSelectDropdownProperty<T_3, true> : StaticMultiSelectDropdownProperty<T_3, false>;
    DateTime<R_12 extends boolean>(request: Properties<DateTimeProperty<R_12>>): R_12 extends true ? DateTimeProperty<true> : DateTimeProperty<false>;
    File<R_13 extends boolean>(request: Properties<FileProperty<R_13>>): R_13 extends true ? FileProperty<true> : FileProperty<false>;
};
export {};
