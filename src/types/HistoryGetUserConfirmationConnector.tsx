import { HistoryGetUserConfirmation } from './';

export class HistoryGetUserConfirmationConnector {
  public onConfirmation: (confirmation: HistoryGetUserConfirmation) => void;
  protected confirmations: HistoryGetUserConfirmation[] = [];

  public addConfirmation = (message: string, callback: (result: boolean) => void) => {
    const confirmation = {
      message,
      callback,
    };
    this.confirmations.push(confirmation);
    this.onConfirmation(confirmation);
  }

  public triggerCallbacks = (result: boolean) => {
    this.confirmations.forEach((confirmation) => {
      confirmation.callback(result);
    });
    this.confirmations = [];
  }
}
