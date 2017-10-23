Object.defineProperty(exports, "__esModule", { value: true });
exports.HISTORY_GET_USER_CONFIRMATION_REQUEST = '@@historyGetUserConfirmation/REQUEST';
exports.HISTORY_GET_USER_CONFIRMATION_ACCEPT = '@@historyGetUserConfirmation/ACCEPT';
exports.HISTORY_GET_USER_CONFIRMATION_REJECT = '@@historyGetUserConfirmation/REJECT';
exports.historyGetUserConfirmationResult = function (result) {
    return {
        type: result ? exports.HISTORY_GET_USER_CONFIRMATION_ACCEPT : exports.HISTORY_GET_USER_CONFIRMATION_REJECT,
        payload: result,
    };
};
exports.historyGetUserConfirmationAccept = function () {
    return exports.historyGetUserConfirmationResult(true);
};
exports.historyGetUserConfirmationReject = function () {
    return exports.historyGetUserConfirmationResult(false);
};
