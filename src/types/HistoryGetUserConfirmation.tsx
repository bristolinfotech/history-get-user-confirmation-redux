export interface HistoryGetUserConfirmation {
  message: string;
  callback: (result: boolean) => void;
}
