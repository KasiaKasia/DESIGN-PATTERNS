import { Injectable } from '@angular/core';
import { AbstractStepHandler } from '../../../models/step-handler';

@Injectable({
  providedIn: 'root'
})
export class AddressStepHandlerService extends AbstractStepHandler {
  public override handle(request: any): void {
    if (this.isValidAddress(request)) {
      console.log('Step 2: Address details are correct.');
      super.handle(request);

    } else {
      console.log('Step 2: Incorrect address details.');
    }
  }

  private isValidAddress(request: any): boolean {
    return request.address && request.city;
  }
}
