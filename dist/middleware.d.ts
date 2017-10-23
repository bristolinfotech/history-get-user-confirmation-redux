import { AnyAction, MiddlewareAPI, Dispatch } from 'redux';
import { HistoryGetUserConfirmationConnector, HistoryGetUserConfirmationMiddlewareOptions } from './types';
export declare const createHistoryGetUserConfirmationMiddleware: (connector: HistoryGetUserConfirmationConnector, options?: HistoryGetUserConfirmationMiddlewareOptions) => (store: MiddlewareAPI<void>) => (next: Dispatch<void>) => <A extends AnyAction>(action: A) => A;
