export declare const supportedMediaTypes: string[];
export declare const capitalizeFirstLetter: (word: string) => string;
export declare const mediaTypeSupportsCaption: (type: string) => boolean;
export declare const commonProps: {
    phone_number_id: import("@activepieces/pieces-framework").DropdownProperty<string, true>;
    message_template_id: import("@activepieces/pieces-framework").DropdownProperty<string, true>;
    message_template_fields: import("@activepieces/pieces-framework").DynamicProperties<true>;
};
