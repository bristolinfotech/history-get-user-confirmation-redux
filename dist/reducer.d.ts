import { Reducer } from 'redux';
export interface HistoryGetUserConfirmationState {
    active: boolean;
    message: string;
}
export declare const historyGetUserConfirmationReducer: Reducer<HistoryGetUserConfirmationState>;
