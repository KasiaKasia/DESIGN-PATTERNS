import { BaseDecorator } from '../baseDecorator/base-decorator.service';

export class NotifierDecoratorService extends BaseDecorator {
 
  override send(message: string) {
    console.info('sendNotifier')
    super.send(message)
  }
}
