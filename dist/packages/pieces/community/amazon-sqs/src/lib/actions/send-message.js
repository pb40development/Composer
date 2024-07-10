"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendMessage = void 0;
const tslib_1 = require("tslib");
const __1 = require("../..");
const pieces_framework_1 = require("@activepieces/pieces-framework");
const aws_sdk_1 = require("aws-sdk");
exports.sendMessage = (0, pieces_framework_1.createAction)({
    name: 'sendMessage',
    displayName: 'Send Message',
    auth: __1.amazonSqsAuth,
    description: '',
    props: {
        queueUrl: pieces_framework_1.Property.ShortText({
            displayName: 'Queue URL',
            description: 'The URL of the SQS queue',
            required: true,
        }),
        messageBody: pieces_framework_1.Property.ShortText({
            displayName: 'Message Body',
            description: 'The body of the message',
            required: true,
        }),
    },
    run(_a) {
        return tslib_1.__awaiter(this, arguments, void 0, function* ({ propsValue, auth }) {
            const sqs = new aws_sdk_1.SQS({
                accessKeyId: auth.accessKeyId,
                secretAccessKey: auth.secretAccessKey,
                region: auth.region,
            });
            const { queueUrl, messageBody } = propsValue;
            const params = {
                QueueUrl: queueUrl,
                MessageBody: messageBody,
            };
            return sqs.sendMessage(params).promise();
        });
    },
});
//# sourceMappingURL=send-message.js.map