import { BaseDecorator } from '../baseDecorator/base-decorator.service';
 
export class SlackDecoratorService extends BaseDecorator {
 
  override send(message: string) {
    console.info('sendSlack')
    super.send(message)
  }
}
