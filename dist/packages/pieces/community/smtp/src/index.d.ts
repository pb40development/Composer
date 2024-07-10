export declare const smtpAuth: import("@activepieces/pieces-framework").CustomAuthProperty<{
    host: import("@activepieces/pieces-framework").ShortTextProperty<true>;
    email: import("@activepieces/pieces-framework").ShortTextProperty<true>;
    password: import("@activepieces/pieces-framework").SecretTextProperty<true>;
    port: import("@activepieces/pieces-framework").StaticDropdownProperty<number, true>;
    TLS: import("@activepieces/pieces-framework").CheckboxProperty<true>;
}>;
export declare const smtp: import("@activepieces/pieces-framework").Piece<import("@activepieces/pieces-framework").CustomAuthProperty<{
    host: import("@activepieces/pieces-framework").ShortTextProperty<true>;
    email: import("@activepieces/pieces-framework").ShortTextProperty<true>;
    password: import("@activepieces/pieces-framework").SecretTextProperty<true>;
    port: import("@activepieces/pieces-framework").StaticDropdownProperty<number, true>;
    TLS: import("@activepieces/pieces-framework").CheckboxProperty<true>;
}>>;
