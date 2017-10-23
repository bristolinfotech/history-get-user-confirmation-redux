import { AnyAction, MiddlewareAPI, Dispatch } from 'redux';
import { HistoryGetUserConfirmationConnector } from './types';
export declare const createHistoryGetUserConfirmationMiddleware: (connector: HistoryGetUserConfirmationConnector) => (store: MiddlewareAPI<void>) => (next: Dispatch<void>) => <A extends AnyAction>(action: A) => A;
