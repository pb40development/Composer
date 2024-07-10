"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRegistarantProps = void 0;
const pieces_framework_1 = require("@activepieces/pieces-framework");
const getRegistarantProps = () => ({
    meeting_id: pieces_framework_1.Property.ShortText({
        displayName: 'Meeting ID',
        description: 'The meeting ID.',
        required: true,
    }),
    first_name: pieces_framework_1.Property.ShortText({
        displayName: 'First name',
        description: "The registrant's first name.",
        required: true,
    }),
    last_name: pieces_framework_1.Property.ShortText({
        displayName: 'Last name',
        description: "The registrant's last name.",
        required: false,
    }),
    email: pieces_framework_1.Property.ShortText({
        displayName: 'Email',
        description: "The registrant's email address.",
        required: true,
    }),
    address: pieces_framework_1.Property.ShortText({
        displayName: 'Address',
        description: "The registrant's address",
        required: false,
    }),
    city: pieces_framework_1.Property.ShortText({
        displayName: 'City',
        description: "The registrant's city",
        required: false,
    }),
    state: pieces_framework_1.Property.ShortText({
        displayName: 'State',
        description: "The registrant's state or province.",
        required: false,
    }),
    zip: pieces_framework_1.Property.ShortText({
        displayName: 'Zip',
        description: "The registrant's zip or postal code.",
        required: false,
    }),
    country: pieces_framework_1.Property.ShortText({
        displayName: 'Country',
        description: "The registrant's two-letter country code.",
        required: false,
    }),
    phone: pieces_framework_1.Property.ShortText({
        displayName: 'Phone',
        description: "The registrant's phone number.",
        required: false,
    }),
    comments: pieces_framework_1.Property.LongText({
        displayName: 'Comments',
        description: "The registrant's questions and comments.",
        required: false,
    }),
    custom_questions: pieces_framework_1.Property.Object({
        displayName: 'Custom questions',
        description: '',
        required: false,
    }),
    industry: pieces_framework_1.Property.ShortText({
        displayName: 'Industry',
        description: "The registrant's industry.",
        required: false,
    }),
    job_title: pieces_framework_1.Property.ShortText({
        displayName: 'Job title',
        description: "The registrant's job title.",
        required: false,
    }),
    no_of_employees: pieces_framework_1.Property.ShortText({
        displayName: 'No of employees',
        description: "The registrant's number of employees.",
        required: false,
    }),
    org: pieces_framework_1.Property.ShortText({
        displayName: 'Organization',
        description: "The registrant's organization.",
        required: false,
    }),
    purchasing_time_frame: pieces_framework_1.Property.ShortText({
        displayName: 'Purchasing time frame',
        description: "The registrant's purchasing time frame.",
        required: false,
    }),
    role_in_purchase_process: pieces_framework_1.Property.ShortText({
        displayName: 'Role in purchase process',
        description: "The registrant's role in the purchase process.",
        required: false,
    }),
});
exports.getRegistarantProps = getRegistarantProps;
//# sourceMappingURL=props.js.map