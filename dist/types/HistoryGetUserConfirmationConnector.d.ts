import { HistoryGetUserConfirmation } from './';
export declare class HistoryGetUserConfirmationConnector {
    onConfirmation: (confirmation: HistoryGetUserConfirmation) => void;
    protected confirmations: HistoryGetUserConfirmation[];
    addConfirmation: (message: string, callback: (result: boolean) => void) => void;
    triggerCallbacks: (result: boolean) => void;
}
