import { Injectable } from '@angular/core';
import { AbstractStepHandler } from '../../../models/step-handler';

@Injectable({
  providedIn: 'root'
})
export class PersonalInfoStepHandlerService extends AbstractStepHandler {
  public override handle(request: any): void {
    if (this.isValidPersonalInfo(request)) {
      console.log('Step 1: Personal data correct.');
      super.handle(request);
    } else {
      console.log('Step 1: Incorrect personal data.');
    }
  }

  private isValidPersonalInfo(request: any): boolean {
    return request.name && request.surname;
  }
}
