Object.defineProperty(exports, "__esModule", { value: true });
var HistoryGetUserConfirmationConnector = (function () {
    function HistoryGetUserConfirmationConnector() {
        var _this = this;
        this.confirmations = [];
        this.addConfirmation = function (message, callback) {
            var confirmation = {
                message: message,
                callback: callback,
            };
            _this.confirmations.push(confirmation);
            _this.onConfirmation(confirmation);
        };
        this.triggerCallbacks = function (result) {
            _this.confirmations.forEach(function (confirmation) {
                confirmation.callback(result);
            });
            _this.confirmations = [];
        };
    }
    return HistoryGetUserConfirmationConnector;
}());
exports.HistoryGetUserConfirmationConnector = HistoryGetUserConfirmationConnector;
