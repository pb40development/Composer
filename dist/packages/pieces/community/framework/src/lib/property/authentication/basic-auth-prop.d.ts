import { Static } from '@sinclair/typebox';
import { TPropertyValue } from '../input/common';
import { PropertyType } from '../input/property-type';
import { BasePieceAuthSchema } from './common';
import { ValidationInputType } from '../../validators/types';
export declare const BasicAuthPropertyValue: import("@sinclair/typebox").TObject<{
    username: import("@sinclair/typebox").TString<string>;
    password: import("@sinclair/typebox").TString<string>;
}>;
export type BasicAuthPropertyValue = Static<typeof BasicAuthPropertyValue>;
export declare const BasicAuthProperty: import("@sinclair/typebox").TComposite<[import("@sinclair/typebox").TObject<{
    displayName: import("@sinclair/typebox").TString<string>;
    description: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
}>, import("@sinclair/typebox").TObject<{
    username: import("@sinclair/typebox").TObject<{
        displayName: import("@sinclair/typebox").TString<string>;
        description: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
    }>;
    password: import("@sinclair/typebox").TObject<{
        displayName: import("@sinclair/typebox").TString<string>;
        description: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
    }>;
}>, import("@sinclair/typebox").TObject<import("@sinclair/typebox").TProperties>]>;
export type BasicAuthProperty = BasePieceAuthSchema<BasicAuthPropertyValue> & {
    username: {
        displayName: string;
        description?: string;
    };
    password: {
        displayName: string;
        description?: string;
    };
} & TPropertyValue<BasicAuthPropertyValue, PropertyType.BASIC_AUTH, ValidationInputType.ANY, true>;
