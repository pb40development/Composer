import { AppSystemProp, system } from '@activepieces/server-shared'
import { apId, EngineHttpResponse } from '@activepieces/shared'
import { logger } from '@sentry/utils'
import { StatusCodes } from 'http-status-codes'
import { pubsub } from '../../helper/pubsub'

const listeners = new Map<string, (flowResponse: EngineResponseWithId) => void>()
const WEBHOOK_TIMEOUT_MS = (system.getNumber(AppSystemProp.WEBHOOK_TIMEOUT_SECONDS) ?? 30) * 1000
const SERVER_ID = apId()

export const webhookResponseWatcher = {
    getServerId(): string {
        return SERVER_ID
    },
    async init(): Promise<void> {
        logger.info('[engineWatcher#init] Initializing engine run watcher')
        await pubsub().subscribe(
            `engine-run:sync:${SERVER_ID}`,
            (_channel, message) => {
                const parsedMessasge: EngineResponseWithId = JSON.parse(message)
                const listener = listeners.get(parsedMessasge.requestId)
                if (listener) {
                    listener(parsedMessasge)
                }
                logger.info({ requestId: parsedMessasge.requestId }, '[engineWatcher#init]',
                )
            },
        )
    },
    async oneTimeListener(requestId: string, timeoutRequest: boolean): Promise<EngineHttpResponse> {
        logger.info({ requestId }, '[engineWatcher#listen]')
        return new Promise((resolve) => {
            let timeout: NodeJS.Timeout
            if (timeoutRequest) {
                const defaultResponse: EngineHttpResponse = {
                    status: StatusCodes.NO_CONTENT,
                    body: {},
                    headers: {},
                }
                timeout = setTimeout(() => {
                    listeners.delete(requestId)
                    resolve(defaultResponse)
                }, WEBHOOK_TIMEOUT_MS)

            }
            const responseHandler = (flowResponse: EngineResponseWithId) => {
                if (timeout) {
                    clearTimeout(timeout)
                }                    
                listeners.delete(requestId)
                resolve(flowResponse.httpResponse)
            }
            listeners.set(requestId, responseHandler)
        })
    },
    async publish(
        requestId: string,
        workerServerId: string,
        httpResponse: EngineHttpResponse,
    ): Promise<void> {
        logger.info({ requestId }, '[engineWatcher#publish]')
        const message: EngineResponseWithId = { requestId, httpResponse }
        await pubsub().publish(`engine-run:sync:${workerServerId}`, JSON.stringify(message))
    },
    async shutdown(): Promise<void> {
        await pubsub().unsubscribe(`engine-run:sync:${SERVER_ID}`)
    },
}


export type EngineResponseWithId = {
    requestId: string
    httpResponse: EngineHttpResponse
}
