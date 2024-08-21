export interface Notifier {
  send(message: string): void;
}

export class Notifications implements Notifier {
  send(message: string): void {
    console.info(`Messages with the content have been sent: ${message}`);
  }
}
