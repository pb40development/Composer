import { Static } from '@sinclair/typebox';
import { TestOrRunHookContext, TriggerHookContext } from '../context';
import { TriggerBase } from '../piece-metadata';
import { InputPropertyMap } from '../property';
import { PieceAuthProperty } from '../property/authentication';
import { TriggerTestStrategy } from '@activepieces/shared';
export declare const DEDUPE_KEY_PROPERTY = "_dedupe_key";
export declare enum TriggerStrategy {
    POLLING = "POLLING",
    WEBHOOK = "WEBHOOK",
    APP_WEBHOOK = "APP_WEBHOOK"
}
export declare enum WebhookHandshakeStrategy {
    NONE = "NONE",
    HEADER_PRESENT = "HEADER_PRESENT",
    QUERY_PRESENT = "QUERY_PRESENT",
    BODY_PARAM_PRESENT = "BODY_PARAM_PRESENT"
}
export declare enum WebhookRenewStrategy {
    CRON = "CRON",
    NONE = "NONE"
}
export declare const WebhookHandshakeConfiguration: import("@sinclair/typebox").TObject<{
    strategy: import("@sinclair/typebox").TEnum<typeof WebhookHandshakeStrategy>;
    paramName: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString<string>>;
}>;
export type WebhookHandshakeConfiguration = Static<typeof WebhookHandshakeConfiguration>;
export declare const WebhookRenewConfiguration: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
    strategy: import("@sinclair/typebox").TLiteral<WebhookRenewStrategy.CRON>;
    cronExpression: import("@sinclair/typebox").TString<string>;
}>, import("@sinclair/typebox").TObject<{
    strategy: import("@sinclair/typebox").TLiteral<WebhookRenewStrategy.NONE>;
}>]>;
export type WebhookRenewConfiguration = Static<typeof WebhookRenewConfiguration>;
export interface WebhookResponse {
    status: number;
    body?: any;
    headers?: Record<string, string>;
}
type BaseTriggerParams<PieceAuth extends PieceAuthProperty, TriggerProps extends InputPropertyMap, TS extends TriggerStrategy> = {
    name: string;
    displayName: string;
    description: string;
    auth?: PieceAuth;
    props: TriggerProps;
    type: TS;
    onEnable: (context: TriggerHookContext<PieceAuth, TriggerProps, TS>) => Promise<void>;
    onDisable: (context: TriggerHookContext<PieceAuth, TriggerProps, TS>) => Promise<void>;
    run: (context: TestOrRunHookContext<PieceAuth, TriggerProps, TS>) => Promise<unknown[]>;
    test?: (context: TestOrRunHookContext<PieceAuth, TriggerProps, TS>) => Promise<unknown[]>;
    sampleData: unknown;
};
type WebhookTriggerParams<PieceAuth extends PieceAuthProperty, TriggerProps extends InputPropertyMap, TS extends TriggerStrategy> = BaseTriggerParams<PieceAuth, TriggerProps, TS> & {
    handshakeConfiguration?: WebhookHandshakeConfiguration;
    onHandshake?: (context: TriggerHookContext<PieceAuth, TriggerProps, TS>) => Promise<WebhookResponse>;
    renewConfiguration?: WebhookRenewConfiguration;
    onRenew?(context: TriggerHookContext<PieceAuth, TriggerProps, TS>): Promise<void>;
};
type CreateTriggerParams<PieceAuth extends PieceAuthProperty, TriggerProps extends InputPropertyMap, TS extends TriggerStrategy> = TS extends TriggerStrategy.WEBHOOK ? WebhookTriggerParams<PieceAuth, TriggerProps, TS> : BaseTriggerParams<PieceAuth, TriggerProps, TS>;
export declare class ITrigger<TS extends TriggerStrategy, PieceAuth extends PieceAuthProperty, TriggerProps extends InputPropertyMap> implements TriggerBase {
    readonly name: string;
    readonly displayName: string;
    readonly description: string;
    readonly props: TriggerProps;
    readonly type: TS;
    readonly handshakeConfiguration: WebhookHandshakeConfiguration;
    readonly onHandshake: (ctx: TriggerHookContext<PieceAuth, TriggerProps, TS>) => Promise<WebhookResponse>;
    readonly renewConfiguration: WebhookRenewConfiguration;
    readonly onRenew: (ctx: TriggerHookContext<PieceAuth, TriggerProps, TS>) => Promise<void>;
    readonly onEnable: (ctx: TriggerHookContext<PieceAuth, TriggerProps, TS>) => Promise<void>;
    readonly onDisable: (ctx: TriggerHookContext<PieceAuth, TriggerProps, TS>) => Promise<void>;
    readonly run: (ctx: TestOrRunHookContext<PieceAuth, TriggerProps, TS>) => Promise<unknown[]>;
    readonly test: (ctx: TestOrRunHookContext<PieceAuth, TriggerProps, TS>) => Promise<unknown[]>;
    readonly sampleData: unknown;
    readonly testStrategy: TriggerTestStrategy;
    constructor(name: string, displayName: string, description: string, props: TriggerProps, type: TS, handshakeConfiguration: WebhookHandshakeConfiguration, onHandshake: (ctx: TriggerHookContext<PieceAuth, TriggerProps, TS>) => Promise<WebhookResponse>, renewConfiguration: WebhookRenewConfiguration, onRenew: (ctx: TriggerHookContext<PieceAuth, TriggerProps, TS>) => Promise<void>, onEnable: (ctx: TriggerHookContext<PieceAuth, TriggerProps, TS>) => Promise<void>, onDisable: (ctx: TriggerHookContext<PieceAuth, TriggerProps, TS>) => Promise<void>, run: (ctx: TestOrRunHookContext<PieceAuth, TriggerProps, TS>) => Promise<unknown[]>, test: (ctx: TestOrRunHookContext<PieceAuth, TriggerProps, TS>) => Promise<unknown[]>, sampleData: unknown, testStrategy: TriggerTestStrategy);
}
export type Trigger<PieceAuth extends PieceAuthProperty = any, TriggerProps extends InputPropertyMap = any, S extends TriggerStrategy = TriggerStrategy> = ITrigger<S, PieceAuth, TriggerProps>;
export declare const createTrigger: <TS extends TriggerStrategy, PieceAuth extends PieceAuthProperty, TriggerProps extends InputPropertyMap>(params: CreateTriggerParams<PieceAuth, TriggerProps, TS>) => ITrigger<TriggerStrategy.WEBHOOK, PieceAuth, TriggerProps> | ITrigger<TriggerStrategy.POLLING, PieceAuth, TriggerProps> | ITrigger<TriggerStrategy.APP_WEBHOOK, PieceAuth, TriggerProps>;
export {};
