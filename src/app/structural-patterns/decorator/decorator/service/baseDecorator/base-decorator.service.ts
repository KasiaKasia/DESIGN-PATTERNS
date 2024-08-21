import { Notifier } from '../notifier';

export class BaseDecorator implements Notifier {
  protected wrappee: Notifier;

  constructor(wrappee: Notifier) {
    this.wrappee = wrappee;
  }

  send(message: string): void {
    console.info('BaseDecorator');
    this.wrappee.send(message);
  }
}