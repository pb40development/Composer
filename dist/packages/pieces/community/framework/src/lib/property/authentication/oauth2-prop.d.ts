import { OAuth2GrantType } from '@activepieces/shared';
import { Static } from '@sinclair/typebox';
import { ShortTextProperty } from '../input/text-property';
import { SecretTextProperty } from './secret-text-property';
import { BasePieceAuthSchema } from './common';
import { TPropertyValue } from '../input/common';
import { PropertyType } from '../input/property-type';
import { StaticDropdownProperty } from '../input/dropdown/static-dropdown';
import { StaticPropsValue } from '..';
import { ValidationInputType } from '../../validators/types';
export declare enum OAuth2AuthorizationMethod {
    HEADER = "HEADER",
    BODY = "BODY"
}
declare const OAuthProp: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TComposite<[import("@sinclair/typebox").TObject<{
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
}>, import("@sinclair/typebox").TObject<import("@sinclair/typebox").TProperties>]>]>;
type OAuthProp = ShortTextProperty<true> | SecretTextProperty<boolean> | StaticDropdownProperty<any, true>;
export declare const OAuth2Props: import("@sinclair/typebox").TRecord<import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TComposite<[import("@sinclair/typebox").TObject<{
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
export type OAuth2Props = {
    [key: string]: OAuthProp;
};
type OAuthPropsValue<T extends OAuth2Props> = StaticPropsValue<T>;
declare const OAuth2ExtraProps: import("@sinclair/typebox").TObject<{
    props: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TRecord<import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TComposite<[import("@sinclair/typebox").TObject<{
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
    }>, import("@sinclair/typebox").TObject<import("@sinclair/typebox").TProperties>]>]>>>;
    authUrl: import("@sinclair/typebox").TString<string>;
    tokenUrl: import("@sinclair/typebox").TString<string>;
    scope: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>;
    pkce: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TBoolean>;
    authorizationMethod: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TEnum<typeof OAuth2AuthorizationMethod>>;
    grantType: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TEnum<typeof OAuth2GrantType>>;
    extra: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TRecord<import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TUnknown>>;
}>;
type OAuth2ExtraProps = Static<typeof OAuth2ExtraProps>;
export declare const OAuth2PropertyValue: import("@sinclair/typebox").TObject<{
    access_token: import("@sinclair/typebox").TString<string>;
    props: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TRecord<import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TComposite<[import("@sinclair/typebox").TObject<{
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
    }>, import("@sinclair/typebox").TObject<import("@sinclair/typebox").TProperties>]>]>>>;
    data: import("@sinclair/typebox").TRecord<import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TAny>;
}>;
export type OAuth2PropertyValue<T extends OAuth2Props = any> = {
    access_token: string;
    props?: OAuthPropsValue<T>;
    data: Record<string, any>;
};
export declare const OAuth2Property: import("@sinclair/typebox").TComposite<[import("@sinclair/typebox").TObject<{
    displayName: import("@sinclair/typebox").TString<string>;
    description: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
}>, import("@sinclair/typebox").TObject<{
    props: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TRecord<import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TComposite<[import("@sinclair/typebox").TObject<{
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
    }>, import("@sinclair/typebox").TObject<import("@sinclair/typebox").TProperties>]>]>>>;
    authUrl: import("@sinclair/typebox").TString<string>;
    tokenUrl: import("@sinclair/typebox").TString<string>;
    scope: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>;
    pkce: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TBoolean>;
    authorizationMethod: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TEnum<typeof OAuth2AuthorizationMethod>>;
    grantType: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TEnum<typeof OAuth2GrantType>>;
    extra: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TRecord<import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TUnknown>>;
}>, import("@sinclair/typebox").TObject<import("@sinclair/typebox").TProperties>]>;
export type OAuth2Property<T extends OAuth2Props> = BasePieceAuthSchema<OAuth2PropertyValue> & OAuth2ExtraProps & TPropertyValue<OAuth2PropertyValue<T>, PropertyType.OAUTH2, ValidationInputType.ANY, true>;
export {};
