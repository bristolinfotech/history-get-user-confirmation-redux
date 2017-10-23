import { HistoryGetUserConfirmationConnector } from './types';

export const historyGetUserConfirmationHandler = (connector: HistoryGetUserConfirmationConnector) => {
  return (message: string, callback: (result: boolean) => void) => {
    connector.addConfirmation(message, callback);
  };
};
