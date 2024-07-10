"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.smtpCommon = void 0;
const tslib_1 = require("tslib");
const nodemailer_1 = tslib_1.__importDefault(require("nodemailer"));
exports.smtpCommon = {
    constructConfig(auth) {
        return {
            host: auth.host,
            port: auth.port,
            requireTLS: auth.TLS,
            auth: {
                user: auth.email,
                pass: auth.password,
            },
            connectionTimeout: 10000,
            secure: auth.port === 465,
        };
    },
    createSMTPTransport(auth) {
        const smtpOptions = exports.smtpCommon.constructConfig(auth);
        const transporter = nodemailer_1.default.createTransport(smtpOptions);
        return transporter;
    },
};
//# sourceMappingURL=index.js.map