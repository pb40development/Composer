import { PiecePropertyMap } from "./property";
import { WebhookRenewConfiguration, TriggerStrategy, WebhookHandshakeConfiguration } from "./trigger/trigger";
import { ErrorHandlingOptionsParam } from "./action/action";
import { PieceAuthProperty } from "./property/authentication";
import { Static } from "@sinclair/typebox";
import { PackageType, PieceCategory, PieceType, ProjectId, TriggerTestStrategy } from "@activepieces/shared";
export declare const PieceBase: import("@sinclair/typebox").TObject<{
    id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
    name: import("@sinclair/typebox").TString<string>;
    displayName: import("@sinclair/typebox").TString<string>;
    logoUrl: import("@sinclair/typebox").TString<string>;
    description: import("@sinclair/typebox").TString<string>;
    projectId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
    authors: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>;
    platformId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
    directoryPath: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
    auth: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TComposite<[import("@sinclair/typebox").TObject<{
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
    }>, import("@sinclair/typebox").TObject<import("@sinclair/typebox").TProperties>]>, import("@sinclair/typebox").TComposite<[import("@sinclair/typebox").TObject<{
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
    }>, import("@sinclair/typebox").TObject<import("@sinclair/typebox").TProperties>]>, import("@sinclair/typebox").TComposite<[import("@sinclair/typebox").TObject<{
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
        authorizationMethod: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TEnum<typeof import("./property").OAuth2AuthorizationMethod>>;
        grantType: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TEnum<typeof import("@activepieces/shared").OAuth2GrantType>>;
        extra: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TRecord<import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TUnknown>>;
    }>, import("@sinclair/typebox").TObject<import("@sinclair/typebox").TProperties>]>, import("@sinclair/typebox").TComposite<[import("@sinclair/typebox").TObject<{
        displayName: import("@sinclair/typebox").TString<string>;
        description: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
    }>, import("@sinclair/typebox").TObject<import("@sinclair/typebox").TProperties>]>]>>;
    version: import("@sinclair/typebox").TString<string>;
    categories: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TEnum<typeof PieceCategory>>>;
    minimumSupportedRelease: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
    maximumSupportedRelease: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
}>;
export type PieceBase = {
    id?: string;
    name: string;
    displayName: string;
    logoUrl: string;
    description: string;
    projectId?: ProjectId;
    platformId?: string;
    authors: string[];
    directoryPath?: string;
    auth?: PieceAuthProperty;
    version: string;
    categories?: PieceCategory[];
    minimumSupportedRelease?: string;
    maximumSupportedRelease?: string;
};
export declare const ActionBase: import("@sinclair/typebox").TObject<{
    name: import("@sinclair/typebox").TString<string>;
    displayName: import("@sinclair/typebox").TString<string>;
    description: import("@sinclair/typebox").TString<string>;
    props: import("@sinclair/typebox").TRecord<import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TComposite<[import("@sinclair/typebox").TObject<{
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
    }>, import("@sinclair/typebox").TObject<import("@sinclair/typebox").TProperties>]>]>, import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TComposite<[import("@sinclair/typebox").TObject<{
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
    }>, import("@sinclair/typebox").TObject<import("@sinclair/typebox").TProperties>]>, import("@sinclair/typebox").TComposite<[import("@sinclair/typebox").TObject<{
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
    }>, import("@sinclair/typebox").TObject<import("@sinclair/typebox").TProperties>]>, import("@sinclair/typebox").TComposite<[import("@sinclair/typebox").TObject<{
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
        authorizationMethod: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TEnum<typeof import("./property").OAuth2AuthorizationMethod>>;
        grantType: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TEnum<typeof import("@activepieces/shared").OAuth2GrantType>>;
        extra: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TRecord<import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TUnknown>>;
    }>, import("@sinclair/typebox").TObject<import("@sinclair/typebox").TProperties>]>, import("@sinclair/typebox").TComposite<[import("@sinclair/typebox").TObject<{
        displayName: import("@sinclair/typebox").TString<string>;
        description: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
    }>, import("@sinclair/typebox").TObject<import("@sinclair/typebox").TProperties>]>]>]>>;
    requireAuth: import("@sinclair/typebox").TBoolean;
    errorHandlingOptions: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
        retryOnFailure: import("@sinclair/typebox").TObject<{
            defaultValue: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TBoolean>;
            hide: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TBoolean>;
        }>;
        continueOnFailure: import("@sinclair/typebox").TObject<{
            defaultValue: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TBoolean>;
            hide: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TBoolean>;
        }>;
    }>>;
}>;
export type ActionBase = {
    name: string;
    displayName: string;
    description: string;
    props: PiecePropertyMap;
    requireAuth: boolean;
    errorHandlingOptions?: ErrorHandlingOptionsParam;
};
export declare const TriggerBase: import("@sinclair/typebox").TComposite<[import("@sinclair/typebox").TObject<{
    displayName: import("@sinclair/typebox").TString<string>;
    description: import("@sinclair/typebox").TString<string>;
    props: import("@sinclair/typebox").TRecord<import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TComposite<[import("@sinclair/typebox").TObject<{
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
    }>, import("@sinclair/typebox").TObject<import("@sinclair/typebox").TProperties>]>]>, import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TComposite<[import("@sinclair/typebox").TObject<{
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
    }>, import("@sinclair/typebox").TObject<import("@sinclair/typebox").TProperties>]>, import("@sinclair/typebox").TComposite<[import("@sinclair/typebox").TObject<{
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
    }>, import("@sinclair/typebox").TObject<import("@sinclair/typebox").TProperties>]>, import("@sinclair/typebox").TComposite<[import("@sinclair/typebox").TObject<{
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
        authorizationMethod: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TEnum<typeof import("./property").OAuth2AuthorizationMethod>>;
        grantType: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TEnum<typeof import("@activepieces/shared").OAuth2GrantType>>;
        extra: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TRecord<import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TUnknown>>;
    }>, import("@sinclair/typebox").TObject<import("@sinclair/typebox").TProperties>]>, import("@sinclair/typebox").TComposite<[import("@sinclair/typebox").TObject<{
        displayName: import("@sinclair/typebox").TString<string>;
        description: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
    }>, import("@sinclair/typebox").TObject<import("@sinclair/typebox").TProperties>]>]>]>>;
    name: import("@sinclair/typebox").TString<string>;
    errorHandlingOptions: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
        retryOnFailure: import("@sinclair/typebox").TObject<{
            defaultValue: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TBoolean>;
            hide: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TBoolean>;
        }>;
        continueOnFailure: import("@sinclair/typebox").TObject<{
            defaultValue: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TBoolean>;
            hide: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TBoolean>;
        }>;
    }>>;
}>, import("@sinclair/typebox").TObject<{
    type: import("@sinclair/typebox").TEnum<typeof TriggerStrategy>;
    sampleData: import("@sinclair/typebox").TUnknown;
    handshakeConfiguration: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
        strategy: import("@sinclair/typebox").TEnum<typeof import("./trigger/trigger").WebhookHandshakeStrategy>;
        paramName: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
    }>>;
    renewConfiguration: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
        strategy: import("@sinclair/typebox").TLiteral<import("./trigger/trigger").WebhookRenewStrategy.CRON>;
        cronExpression: import("@sinclair/typebox").TString<string>;
    }>, import("@sinclair/typebox").TObject<{
        strategy: import("@sinclair/typebox").TLiteral<import("./trigger/trigger").WebhookRenewStrategy.NONE>;
    }>]>>;
    testStrategy: import("@sinclair/typebox").TEnum<typeof TriggerTestStrategy>;
}>]>;
export type TriggerBase = Omit<ActionBase, "requireAuth"> & {
    type: TriggerStrategy;
    sampleData: unknown;
    handshakeConfiguration?: WebhookHandshakeConfiguration;
    renewConfiguration?: WebhookRenewConfiguration;
    testStrategy: TriggerTestStrategy;
};
export declare const PieceMetadata: import("@sinclair/typebox").TComposite<[import("@sinclair/typebox").TObject<{
    id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
    name: import("@sinclair/typebox").TString<string>;
    displayName: import("@sinclair/typebox").TString<string>;
    logoUrl: import("@sinclair/typebox").TString<string>;
    description: import("@sinclair/typebox").TString<string>;
    projectId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
    authors: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>;
    platformId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
    directoryPath: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
    auth: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TComposite<[import("@sinclair/typebox").TObject<{
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
    }>, import("@sinclair/typebox").TObject<import("@sinclair/typebox").TProperties>]>, import("@sinclair/typebox").TComposite<[import("@sinclair/typebox").TObject<{
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
    }>, import("@sinclair/typebox").TObject<import("@sinclair/typebox").TProperties>]>, import("@sinclair/typebox").TComposite<[import("@sinclair/typebox").TObject<{
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
        authorizationMethod: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TEnum<typeof import("./property").OAuth2AuthorizationMethod>>;
        grantType: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TEnum<typeof import("@activepieces/shared").OAuth2GrantType>>;
        extra: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TRecord<import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TUnknown>>;
    }>, import("@sinclair/typebox").TObject<import("@sinclair/typebox").TProperties>]>, import("@sinclair/typebox").TComposite<[import("@sinclair/typebox").TObject<{
        displayName: import("@sinclair/typebox").TString<string>;
        description: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
    }>, import("@sinclair/typebox").TObject<import("@sinclair/typebox").TProperties>]>]>>;
    version: import("@sinclair/typebox").TString<string>;
    categories: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TEnum<typeof PieceCategory>>>;
    minimumSupportedRelease: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
    maximumSupportedRelease: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
}>, import("@sinclair/typebox").TObject<{
    actions: import("@sinclair/typebox").TRecord<import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TObject<{
        name: import("@sinclair/typebox").TString<string>;
        displayName: import("@sinclair/typebox").TString<string>;
        description: import("@sinclair/typebox").TString<string>;
        props: import("@sinclair/typebox").TRecord<import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TComposite<[import("@sinclair/typebox").TObject<{
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
        }>, import("@sinclair/typebox").TObject<import("@sinclair/typebox").TProperties>]>]>, import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TComposite<[import("@sinclair/typebox").TObject<{
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
        }>, import("@sinclair/typebox").TObject<import("@sinclair/typebox").TProperties>]>, import("@sinclair/typebox").TComposite<[import("@sinclair/typebox").TObject<{
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
        }>, import("@sinclair/typebox").TObject<import("@sinclair/typebox").TProperties>]>, import("@sinclair/typebox").TComposite<[import("@sinclair/typebox").TObject<{
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
            authorizationMethod: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TEnum<typeof import("./property").OAuth2AuthorizationMethod>>;
            grantType: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TEnum<typeof import("@activepieces/shared").OAuth2GrantType>>;
            extra: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TRecord<import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TUnknown>>;
        }>, import("@sinclair/typebox").TObject<import("@sinclair/typebox").TProperties>]>, import("@sinclair/typebox").TComposite<[import("@sinclair/typebox").TObject<{
            displayName: import("@sinclair/typebox").TString<string>;
            description: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
        }>, import("@sinclair/typebox").TObject<import("@sinclair/typebox").TProperties>]>]>]>>;
        requireAuth: import("@sinclair/typebox").TBoolean;
        errorHandlingOptions: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
            retryOnFailure: import("@sinclair/typebox").TObject<{
                defaultValue: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TBoolean>;
                hide: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TBoolean>;
            }>;
            continueOnFailure: import("@sinclair/typebox").TObject<{
                defaultValue: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TBoolean>;
                hide: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TBoolean>;
            }>;
        }>>;
    }>>;
    triggers: import("@sinclair/typebox").TRecord<import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TComposite<[import("@sinclair/typebox").TObject<{
        displayName: import("@sinclair/typebox").TString<string>;
        description: import("@sinclair/typebox").TString<string>;
        props: import("@sinclair/typebox").TRecord<import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TComposite<[import("@sinclair/typebox").TObject<{
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
        }>, import("@sinclair/typebox").TObject<import("@sinclair/typebox").TProperties>]>]>, import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TComposite<[import("@sinclair/typebox").TObject<{
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
        }>, import("@sinclair/typebox").TObject<import("@sinclair/typebox").TProperties>]>, import("@sinclair/typebox").TComposite<[import("@sinclair/typebox").TObject<{
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
        }>, import("@sinclair/typebox").TObject<import("@sinclair/typebox").TProperties>]>, import("@sinclair/typebox").TComposite<[import("@sinclair/typebox").TObject<{
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
            authorizationMethod: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TEnum<typeof import("./property").OAuth2AuthorizationMethod>>;
            grantType: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TEnum<typeof import("@activepieces/shared").OAuth2GrantType>>;
            extra: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TRecord<import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TUnknown>>;
        }>, import("@sinclair/typebox").TObject<import("@sinclair/typebox").TProperties>]>, import("@sinclair/typebox").TComposite<[import("@sinclair/typebox").TObject<{
            displayName: import("@sinclair/typebox").TString<string>;
            description: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
        }>, import("@sinclair/typebox").TObject<import("@sinclair/typebox").TProperties>]>]>]>>;
        name: import("@sinclair/typebox").TString<string>;
        errorHandlingOptions: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
            retryOnFailure: import("@sinclair/typebox").TObject<{
                defaultValue: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TBoolean>;
                hide: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TBoolean>;
            }>;
            continueOnFailure: import("@sinclair/typebox").TObject<{
                defaultValue: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TBoolean>;
                hide: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TBoolean>;
            }>;
        }>>;
    }>, import("@sinclair/typebox").TObject<{
        type: import("@sinclair/typebox").TEnum<typeof TriggerStrategy>;
        sampleData: import("@sinclair/typebox").TUnknown;
        handshakeConfiguration: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
            strategy: import("@sinclair/typebox").TEnum<typeof import("./trigger/trigger").WebhookHandshakeStrategy>;
            paramName: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
        }>>;
        renewConfiguration: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
            strategy: import("@sinclair/typebox").TLiteral<import("./trigger/trigger").WebhookRenewStrategy.CRON>;
            cronExpression: import("@sinclair/typebox").TString<string>;
        }>, import("@sinclair/typebox").TObject<{
            strategy: import("@sinclair/typebox").TLiteral<import("./trigger/trigger").WebhookRenewStrategy.NONE>;
        }>]>>;
        testStrategy: import("@sinclair/typebox").TEnum<typeof TriggerTestStrategy>;
    }>]>>;
}>]>;
export type PieceMetadata = PieceBase & {
    actions: Record<string, ActionBase>;
    triggers: Record<string, TriggerBase>;
};
export declare const PieceMetadataSummary: import("@sinclair/typebox").TComposite<[import("@sinclair/typebox").TComposite<[import("@sinclair/typebox").TObject<{
    displayName: import("@sinclair/typebox").TString<string>;
    description: import("@sinclair/typebox").TString<string>;
    auth: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TComposite<[import("@sinclair/typebox").TObject<{
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
    }>, import("@sinclair/typebox").TObject<import("@sinclair/typebox").TProperties>]>, import("@sinclair/typebox").TComposite<[import("@sinclair/typebox").TObject<{
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
    }>, import("@sinclair/typebox").TObject<import("@sinclair/typebox").TProperties>]>, import("@sinclair/typebox").TComposite<[import("@sinclair/typebox").TObject<{
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
        authorizationMethod: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TEnum<typeof import("./property").OAuth2AuthorizationMethod>>;
        grantType: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TEnum<typeof import("@activepieces/shared").OAuth2GrantType>>;
        extra: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TRecord<import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TUnknown>>;
    }>, import("@sinclair/typebox").TObject<import("@sinclair/typebox").TProperties>]>, import("@sinclair/typebox").TComposite<[import("@sinclair/typebox").TObject<{
        displayName: import("@sinclair/typebox").TString<string>;
        description: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
    }>, import("@sinclair/typebox").TObject<import("@sinclair/typebox").TProperties>]>]>>;
    id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
    name: import("@sinclair/typebox").TString<string>;
    logoUrl: import("@sinclair/typebox").TString<string>;
    projectId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
    authors: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>;
    platformId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
    directoryPath: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
    version: import("@sinclair/typebox").TString<string>;
    categories: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TEnum<typeof PieceCategory>>>;
    minimumSupportedRelease: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
    maximumSupportedRelease: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
}>, import("@sinclair/typebox").TObject<{}>]>, import("@sinclair/typebox").TObject<{
    actions: import("@sinclair/typebox").TNumber;
    triggers: import("@sinclair/typebox").TNumber;
    suggestedActions: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
        name: import("@sinclair/typebox").TString<string>;
        displayName: import("@sinclair/typebox").TString<string>;
    }>>>;
    suggestedTriggers: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
        name: import("@sinclair/typebox").TString<string>;
        displayName: import("@sinclair/typebox").TString<string>;
    }>>>;
}>]>;
export type PieceMetadataSummary = Omit<PieceMetadata, "actions" | "triggers"> & {
    actions: number;
    triggers: number;
    suggestedActions?: ActionBase[];
    suggestedTriggers?: TriggerBase[];
};
declare const PiecePackageMetadata: import("@sinclair/typebox").TObject<{
    projectUsage: import("@sinclair/typebox").TNumber;
    tags: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>>;
    pieceType: import("@sinclair/typebox").TEnum<typeof PieceType>;
    packageType: import("@sinclair/typebox").TEnum<typeof PackageType>;
    archiveId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
}>;
type PiecePackageMetadata = Static<typeof PiecePackageMetadata>;
export declare const PieceMetadataModel: import("@sinclair/typebox").TComposite<[import("@sinclair/typebox").TComposite<[import("@sinclair/typebox").TObject<{
    id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
    name: import("@sinclair/typebox").TString<string>;
    displayName: import("@sinclair/typebox").TString<string>;
    logoUrl: import("@sinclair/typebox").TString<string>;
    description: import("@sinclair/typebox").TString<string>;
    projectId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
    authors: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>;
    platformId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
    directoryPath: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
    auth: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TComposite<[import("@sinclair/typebox").TObject<{
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
    }>, import("@sinclair/typebox").TObject<import("@sinclair/typebox").TProperties>]>, import("@sinclair/typebox").TComposite<[import("@sinclair/typebox").TObject<{
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
    }>, import("@sinclair/typebox").TObject<import("@sinclair/typebox").TProperties>]>, import("@sinclair/typebox").TComposite<[import("@sinclair/typebox").TObject<{
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
        authorizationMethod: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TEnum<typeof import("./property").OAuth2AuthorizationMethod>>;
        grantType: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TEnum<typeof import("@activepieces/shared").OAuth2GrantType>>;
        extra: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TRecord<import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TUnknown>>;
    }>, import("@sinclair/typebox").TObject<import("@sinclair/typebox").TProperties>]>, import("@sinclair/typebox").TComposite<[import("@sinclair/typebox").TObject<{
        displayName: import("@sinclair/typebox").TString<string>;
        description: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
    }>, import("@sinclair/typebox").TObject<import("@sinclair/typebox").TProperties>]>]>>;
    version: import("@sinclair/typebox").TString<string>;
    categories: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TEnum<typeof PieceCategory>>>;
    minimumSupportedRelease: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
    maximumSupportedRelease: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
}>, import("@sinclair/typebox").TObject<{
    actions: import("@sinclair/typebox").TRecord<import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TObject<{
        name: import("@sinclair/typebox").TString<string>;
        displayName: import("@sinclair/typebox").TString<string>;
        description: import("@sinclair/typebox").TString<string>;
        props: import("@sinclair/typebox").TRecord<import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TComposite<[import("@sinclair/typebox").TObject<{
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
        }>, import("@sinclair/typebox").TObject<import("@sinclair/typebox").TProperties>]>]>, import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TComposite<[import("@sinclair/typebox").TObject<{
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
        }>, import("@sinclair/typebox").TObject<import("@sinclair/typebox").TProperties>]>, import("@sinclair/typebox").TComposite<[import("@sinclair/typebox").TObject<{
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
        }>, import("@sinclair/typebox").TObject<import("@sinclair/typebox").TProperties>]>, import("@sinclair/typebox").TComposite<[import("@sinclair/typebox").TObject<{
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
            authorizationMethod: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TEnum<typeof import("./property").OAuth2AuthorizationMethod>>;
            grantType: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TEnum<typeof import("@activepieces/shared").OAuth2GrantType>>;
            extra: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TRecord<import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TUnknown>>;
        }>, import("@sinclair/typebox").TObject<import("@sinclair/typebox").TProperties>]>, import("@sinclair/typebox").TComposite<[import("@sinclair/typebox").TObject<{
            displayName: import("@sinclair/typebox").TString<string>;
            description: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
        }>, import("@sinclair/typebox").TObject<import("@sinclair/typebox").TProperties>]>]>]>>;
        requireAuth: import("@sinclair/typebox").TBoolean;
        errorHandlingOptions: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
            retryOnFailure: import("@sinclair/typebox").TObject<{
                defaultValue: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TBoolean>;
                hide: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TBoolean>;
            }>;
            continueOnFailure: import("@sinclair/typebox").TObject<{
                defaultValue: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TBoolean>;
                hide: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TBoolean>;
            }>;
        }>>;
    }>>;
    triggers: import("@sinclair/typebox").TRecord<import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TComposite<[import("@sinclair/typebox").TObject<{
        displayName: import("@sinclair/typebox").TString<string>;
        description: import("@sinclair/typebox").TString<string>;
        props: import("@sinclair/typebox").TRecord<import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TComposite<[import("@sinclair/typebox").TObject<{
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
        }>, import("@sinclair/typebox").TObject<import("@sinclair/typebox").TProperties>]>]>, import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TComposite<[import("@sinclair/typebox").TObject<{
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
        }>, import("@sinclair/typebox").TObject<import("@sinclair/typebox").TProperties>]>, import("@sinclair/typebox").TComposite<[import("@sinclair/typebox").TObject<{
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
        }>, import("@sinclair/typebox").TObject<import("@sinclair/typebox").TProperties>]>, import("@sinclair/typebox").TComposite<[import("@sinclair/typebox").TObject<{
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
            authorizationMethod: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TEnum<typeof import("./property").OAuth2AuthorizationMethod>>;
            grantType: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TEnum<typeof import("@activepieces/shared").OAuth2GrantType>>;
            extra: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TRecord<import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TUnknown>>;
        }>, import("@sinclair/typebox").TObject<import("@sinclair/typebox").TProperties>]>, import("@sinclair/typebox").TComposite<[import("@sinclair/typebox").TObject<{
            displayName: import("@sinclair/typebox").TString<string>;
            description: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
        }>, import("@sinclair/typebox").TObject<import("@sinclair/typebox").TProperties>]>]>]>>;
        name: import("@sinclair/typebox").TString<string>;
        errorHandlingOptions: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
            retryOnFailure: import("@sinclair/typebox").TObject<{
                defaultValue: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TBoolean>;
                hide: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TBoolean>;
            }>;
            continueOnFailure: import("@sinclair/typebox").TObject<{
                defaultValue: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TBoolean>;
                hide: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TBoolean>;
            }>;
        }>>;
    }>, import("@sinclair/typebox").TObject<{
        type: import("@sinclair/typebox").TEnum<typeof TriggerStrategy>;
        sampleData: import("@sinclair/typebox").TUnknown;
        handshakeConfiguration: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
            strategy: import("@sinclair/typebox").TEnum<typeof import("./trigger/trigger").WebhookHandshakeStrategy>;
            paramName: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
        }>>;
        renewConfiguration: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
            strategy: import("@sinclair/typebox").TLiteral<import("./trigger/trigger").WebhookRenewStrategy.CRON>;
            cronExpression: import("@sinclair/typebox").TString<string>;
        }>, import("@sinclair/typebox").TObject<{
            strategy: import("@sinclair/typebox").TLiteral<import("./trigger/trigger").WebhookRenewStrategy.NONE>;
        }>]>>;
        testStrategy: import("@sinclair/typebox").TEnum<typeof TriggerTestStrategy>;
    }>]>>;
}>]>, import("@sinclair/typebox").TObject<{
    projectUsage: import("@sinclair/typebox").TNumber;
    tags: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>>;
    pieceType: import("@sinclair/typebox").TEnum<typeof PieceType>;
    packageType: import("@sinclair/typebox").TEnum<typeof PackageType>;
    archiveId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
}>]>;
export type PieceMetadataModel = PieceMetadata & PiecePackageMetadata;
export declare const PieceMetadataModelSummary: import("@sinclair/typebox").TComposite<[import("@sinclair/typebox").TComposite<[import("@sinclair/typebox").TComposite<[import("@sinclair/typebox").TObject<{
    displayName: import("@sinclair/typebox").TString<string>;
    description: import("@sinclair/typebox").TString<string>;
    auth: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TComposite<[import("@sinclair/typebox").TObject<{
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
    }>, import("@sinclair/typebox").TObject<import("@sinclair/typebox").TProperties>]>, import("@sinclair/typebox").TComposite<[import("@sinclair/typebox").TObject<{
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
    }>, import("@sinclair/typebox").TObject<import("@sinclair/typebox").TProperties>]>, import("@sinclair/typebox").TComposite<[import("@sinclair/typebox").TObject<{
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
        authorizationMethod: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TEnum<typeof import("./property").OAuth2AuthorizationMethod>>;
        grantType: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TEnum<typeof import("@activepieces/shared").OAuth2GrantType>>;
        extra: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TRecord<import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TUnknown>>;
    }>, import("@sinclair/typebox").TObject<import("@sinclair/typebox").TProperties>]>, import("@sinclair/typebox").TComposite<[import("@sinclair/typebox").TObject<{
        displayName: import("@sinclair/typebox").TString<string>;
        description: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
    }>, import("@sinclair/typebox").TObject<import("@sinclair/typebox").TProperties>]>]>>;
    id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
    name: import("@sinclair/typebox").TString<string>;
    logoUrl: import("@sinclair/typebox").TString<string>;
    projectId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
    authors: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>;
    platformId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
    directoryPath: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
    version: import("@sinclair/typebox").TString<string>;
    categories: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TEnum<typeof PieceCategory>>>;
    minimumSupportedRelease: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
    maximumSupportedRelease: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
}>, import("@sinclair/typebox").TObject<{}>]>, import("@sinclair/typebox").TObject<{
    actions: import("@sinclair/typebox").TNumber;
    triggers: import("@sinclair/typebox").TNumber;
    suggestedActions: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
        name: import("@sinclair/typebox").TString<string>;
        displayName: import("@sinclair/typebox").TString<string>;
    }>>>;
    suggestedTriggers: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
        name: import("@sinclair/typebox").TString<string>;
        displayName: import("@sinclair/typebox").TString<string>;
    }>>>;
}>]>, import("@sinclair/typebox").TObject<{
    projectUsage: import("@sinclair/typebox").TNumber;
    tags: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString<string>>>;
    pieceType: import("@sinclair/typebox").TEnum<typeof PieceType>;
    packageType: import("@sinclair/typebox").TEnum<typeof PackageType>;
    archiveId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
}>]>;
export type PieceMetadataModelSummary = PieceMetadataSummary & PiecePackageMetadata;
export {};
