Object.defineProperty(exports, "__esModule", { value: true });
var actions_1 = require("./actions");
exports.createHistoryGetUserConfirmationMiddleware = function (connector) {
    return function (store) {
        connector.onConfirmation = function (confirmation) {
            store.dispatch({
                type: actions_1.HISTORY_GET_USER_CONFIRMATION_REQUEST,
                payload: confirmation.message,
            });
        };
        return function (next) {
            return function (action) {
                var result = next(action);
                if (action.type === actions_1.HISTORY_GET_USER_CONFIRMATION_ACCEPT) {
                    connector.triggerCallbacks(true);
                }
                else if (action.type === actions_1.HISTORY_GET_USER_CONFIRMATION_REJECT) {
                    connector.triggerCallbacks(false);
                }
                return result;
            };
        };
    };
};
