import { BaseDecorator } from '../baseDecorator/base-decorator.service';

export class FacebookDecoratorService extends BaseDecorator {
 
  override send(message: string) {
    console.info('sendFacebook')
    super.send(message)
  }
}
