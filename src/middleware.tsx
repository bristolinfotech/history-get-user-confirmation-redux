import { AnyAction, Middleware, MiddlewareAPI, Dispatch } from 'redux';
import {
  HistoryGetUserConfirmation,
  HistoryGetUserConfirmationConnector,
  HistoryGetUserConfirmationMiddlewareOptions,
} from './types';
import {
  HISTORY_GET_USER_CONFIRMATION_REQUEST,
  HISTORY_GET_USER_CONFIRMATION_ACCEPT,
  HISTORY_GET_USER_CONFIRMATION_REJECT,
} from './actions';

export const createHistoryGetUserConfirmationMiddleware = (
  connector: HistoryGetUserConfirmationConnector,
  options: HistoryGetUserConfirmationMiddlewareOptions = {},
) => {
  return (store: MiddlewareAPI<void>) => {
    let modalActive: any;
    connector.onConfirmation = (confirmation: HistoryGetUserConfirmation) => {
      store.dispatch({
        type: HISTORY_GET_USER_CONFIRMATION_REQUEST,
        payload: confirmation.message,
      });
      if (options.modalName) {
        modalActive = true;
        store.dispatch({
          type: '@@reduxModals/OPEN',
          payload: {
            name: options.modalName,
            data: {
              message: confirmation.message,
            },
          },
        });
      }
    };
    return (next: Dispatch<void>) => {
      return <A extends AnyAction>(action: A) => {
        const result = next(action);
        if (
          options.modalName
          && action.type === '@@reduxModals/CLOSE'
          && action.payload.name === options.modalName
          && modalActive
        ) {
          store.dispatch({
            type: action.payload.response ? HISTORY_GET_USER_CONFIRMATION_ACCEPT : HISTORY_GET_USER_CONFIRMATION_REJECT,
          });
          modalActive = false;
        } else {
          if (action.type === HISTORY_GET_USER_CONFIRMATION_ACCEPT) {
            connector.triggerCallbacks(true);
          } else if (action.type === HISTORY_GET_USER_CONFIRMATION_REJECT) {
            connector.triggerCallbacks(false);
          }
        }
        return result;
      };
    };
  };
};
