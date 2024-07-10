import {
    ApplicationEventName,
    ResetPasswordRequestBody,
    VerifyEmailRequestBody } from '@activepieces/ee-shared'
import { ALL_PRINCIPAL_TYPES } from '@activepieces/shared'
import { FastifyPluginAsyncTypebox } from '@fastify/type-provider-typebox'
import { eventsHooks } from '../../../helper/application-events'
import { enterpriseLocalAuthnService } from './enterprise-local-authn-service'

export const enterpriseLocalAuthnController: FastifyPluginAsyncTypebox = async (
    app,
) => {
    app.post('/verify-email', VerifyEmailRequest, async (req) => {
        eventsHooks.get().sendUserEvent(req, {
            action: ApplicationEventName.USER_EMAIL_VERIFIED,
            data: {},
        })
        await enterpriseLocalAuthnService.verifyEmail(req.body)
    })

    app.post('/reset-password', ResetPasswordRequest, async (req) => {
        eventsHooks.get().sendUserEvent(req, {
            action: ApplicationEventName.USER_PASSWORD_RESET,
            data: {},
        })
        await enterpriseLocalAuthnService.resetPassword(req.body)
    })
}

const VerifyEmailRequest = {
    config: {
        allowedPrincipals: ALL_PRINCIPAL_TYPES,
    },
    schema: {
        body: VerifyEmailRequestBody,
    },
}

const ResetPasswordRequest = {
    config: {
        allowedPrincipals: ALL_PRINCIPAL_TYPES,
    },
    schema: {
        body: ResetPasswordRequestBody,
    },
}
