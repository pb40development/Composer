import { ValidationInputType } from '../../validators/types';
import { TPropertyValue } from '../input/common';
import { PropertyType } from '../input/property-type';
import { LongTextProperty, ShortTextProperty } from '../input/text-property';
import { NumberProperty } from '../input/number-property';
import { CheckboxProperty } from '../input/checkbox-property';
import { StaticDropdownProperty } from '../input/dropdown/static-dropdown';
import { StaticPropsValue } from '..';
import { SecretTextProperty } from './secret-text-property';
import { BasePieceAuthSchema } from './common';
export type CustomAuthProps = Record<string, ShortTextProperty<boolean> | LongTextProperty<boolean> | SecretTextProperty<boolean> | NumberProperty<boolean> | StaticDropdownProperty<unknown, boolean> | CheckboxProperty<boolean>>;
export declare const CustomAuthProperty: import("@sinclair/typebox").TComposite<[import("@sinclair/typebox").TObject<{
    displayName: import("@sinclair/typebox").TString<string>;
    description: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
}>, import("@sinclair/typebox").TObject<{
    props: import("@sinclair/typebox").TRecord<import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TComposite<[import("@sinclair/typebox").TObject<{
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
    }>, import("@sinclair/typebox").TObject<import("@sinclair/typebox").TProperties>]>]>>;
}>, import("@sinclair/typebox").TObject<import("@sinclair/typebox").TProperties>]>;
export type CustomAuthProperty<T extends CustomAuthProps> = BasePieceAuthSchema<StaticPropsValue<T>> & {
    props: T;
} & TPropertyValue<StaticPropsValue<T>, PropertyType.CUSTOM_AUTH, ValidationInputType.ANY, true>;
