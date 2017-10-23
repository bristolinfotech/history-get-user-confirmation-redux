export const HISTORY_GET_USER_CONFIRMATION_REQUEST = '@@historyGetUserConfirmation/REQUEST';
export const HISTORY_GET_USER_CONFIRMATION_ACCEPT = '@@historyGetUserConfirmation/ACCEPT';
export const HISTORY_GET_USER_CONFIRMATION_REJECT = '@@historyGetUserConfirmation/REJECT';

export const historyGetUserConfirmationResult = (result: boolean) => {
  return {
    type: result ? HISTORY_GET_USER_CONFIRMATION_ACCEPT : HISTORY_GET_USER_CONFIRMATION_REJECT,
    payload: result,
  };
};

export const historyGetUserConfirmationAccept = () => {
  return historyGetUserConfirmationResult(true);
};

export const historyGetUserConfirmationReject = () => {
  return historyGetUserConfirmationResult(false);
};
