import { Reducer, AnyAction } from 'redux';
import {
  HISTORY_GET_USER_CONFIRMATION_REQUEST,
  HISTORY_GET_USER_CONFIRMATION_ACCEPT,
  HISTORY_GET_USER_CONFIRMATION_REJECT,
} from './actions';

export interface HistoryGetUserConfirmationState {
  active: boolean;
  message: string;
}

const initialState = {
  active: false,
  message: '',
};

export const historyGetUserConfirmationReducer: Reducer<HistoryGetUserConfirmationState> = (
  state: HistoryGetUserConfirmationState = initialState,
  action: AnyAction,
) => {
  switch (action.type) {
    case HISTORY_GET_USER_CONFIRMATION_REQUEST:
      return {
        ...state,
        active: true,
        message: action.payload,
      };
    case HISTORY_GET_USER_CONFIRMATION_ACCEPT:
    case HISTORY_GET_USER_CONFIRMATION_REJECT:
      return {
        ...state,
        active: false,
        message: '',
      };
    default:
      return state;
  }
};
