Object.defineProperty(exports, "__esModule", { value: true });
var actions_1 = require("./actions");
exports.createHistoryGetUserConfirmationMiddleware = function (connector, options) {
    if (options === void 0) { options = {}; }
    return function (store) {
        var modalActive;
        connector.onConfirmation = function (confirmation) {
            store.dispatch({
                type: actions_1.HISTORY_GET_USER_CONFIRMATION_REQUEST,
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
        return function (next) {
            return function (action) {
                var result = next(action);
                if (options.modalName
                    && action.type === '@@reduxModals/CLOSE'
                    && action.payload.name === options.modalName
                    && modalActive) {
                    store.dispatch({
                        type: action.payload.response ? actions_1.HISTORY_GET_USER_CONFIRMATION_ACCEPT : actions_1.HISTORY_GET_USER_CONFIRMATION_REJECT,
                    });
                    modalActive = false;
                }
                else {
                    if (action.type === actions_1.HISTORY_GET_USER_CONFIRMATION_ACCEPT) {
                        connector.triggerCallbacks(true);
                    }
                    else if (action.type === actions_1.HISTORY_GET_USER_CONFIRMATION_REJECT) {
                        connector.triggerCallbacks(false);
                    }
                }
                return result;
            };
        };
    };
};
