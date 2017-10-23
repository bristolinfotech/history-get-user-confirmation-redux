Object.defineProperty(exports, "__esModule", { value: true });
exports.historyGetUserConfirmationHandler = function (connector) {
    return function (message, callback) {
        connector.addConfirmation(message, callback);
    };
};
