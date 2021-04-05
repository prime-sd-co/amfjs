// Type definitions for amfjs
// Project: https://github.com/kenshiYM/amfjs
// Definitions by: kenshi yamamura
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module amf {
    var classes: any[];
    var clients: Client[];

    export function registerClass(name: string, clazz: any);
    export function getClient(destination: string): Client;

    export class Client {
        constructor(destination: string, endpoint: string, timeout?: number);
        setSessionId(value: string);
        releaseQueue();
        invoke<Response>(source: string, operation: string, params: any, block: boolean, nobatch: boolean): Promise<Response>;
    }

    export interface ResponseFactory {
        new (code, message, detail, data, $scope): Response;
    }
    export var Response: ResponseFactory;
    export interface Response {
        $scope: any;
        code: number;
        message: string;
        detail: any;
        data: any;
    }
}
