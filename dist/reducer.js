var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var actions_1 = require("./actions");
var initialState = {
    active: false,
    message: '',
};
exports.historyGetUserConfirmationReducer = function (state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case actions_1.HISTORY_GET_USER_CONFIRMATION_REQUEST:
            return __assign({}, state, { active: true, message: action.payload });
        case actions_1.HISTORY_GET_USER_CONFIRMATION_ACCEPT:
        case actions_1.HISTORY_GET_USER_CONFIRMATION_REJECT:
            return __assign({}, state, { active: false, message: '' });
        default:
            return state;
    }
};
