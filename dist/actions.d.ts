export declare const HISTORY_GET_USER_CONFIRMATION_REQUEST = "@@historyGetUserConfirmation/REQUEST";
export declare const HISTORY_GET_USER_CONFIRMATION_ACCEPT = "@@historyGetUserConfirmation/ACCEPT";
export declare const HISTORY_GET_USER_CONFIRMATION_REJECT = "@@historyGetUserConfirmation/REJECT";
export declare const historyGetUserConfirmationResult: (result: boolean) => {
    type: string;
    payload: boolean;
};
export declare const historyGetUserConfirmationAccept: () => {
    type: string;
    payload: boolean;
};
export declare const historyGetUserConfirmationReject: () => {
    type: string;
    payload: boolean;
};
