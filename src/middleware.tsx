import { AnyAction, Middleware, MiddlewareAPI, Dispatch } from 'redux';
import { HistoryGetUserConfirmation, HistoryGetUserConfirmationConnector } from './types';
import {
  HISTORY_GET_USER_CONFIRMATION_REQUEST,
  HISTORY_GET_USER_CONFIRMATION_ACCEPT,
  HISTORY_GET_USER_CONFIRMATION_REJECT,
} from './actions';

export const createHistoryGetUserConfirmationMiddleware = (connector: HistoryGetUserConfirmationConnector) => {
  return (store: MiddlewareAPI<void>) => {
    connector.onConfirmation = (confirmation: HistoryGetUserConfirmation) => {
      store.dispatch({
        type: HISTORY_GET_USER_CONFIRMATION_REQUEST,
        payload: confirmation.message,
      });
    };
    return (next: Dispatch<void>) => {
      return <A extends AnyAction>(action: A) => {
        const result = next(action);
        if (action.type === HISTORY_GET_USER_CONFIRMATION_ACCEPT) {
          connector.triggerCallbacks(true);
        } else if (action.type === HISTORY_GET_USER_CONFIRMATION_REJECT) {
          connector.triggerCallbacks(false);
        }
        return result;
      };
    };
  };
};
