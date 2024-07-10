import nodemailer from 'nodemailer';
export declare const smtpCommon: {
    constructConfig(auth: smtpAuthParams): {
        host: string;
        port: number;
        requireTLS: boolean;
        auth: {
            user: string;
            pass: string;
        };
        connectionTimeout: number;
        secure: boolean;
    };
    createSMTPTransport(auth: smtpAuthParams): nodemailer.Transporter<import("nodemailer/lib/smtp-transport").SentMessageInfo>;
};
export type smtpAuthParams = {
    host: string;
    email: string;
    password: string;
    port: number;
    TLS: boolean;
};
