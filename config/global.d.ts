// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="../node_modules/@anglr/common/structured-log/src/types/structured-log.typings.d.ts" />

declare let isProduction: boolean;

interface ImportMeta
{
    webpackHot: boolean;
}

declare module 'structured-log'
{
    export = StructuredLog;
}