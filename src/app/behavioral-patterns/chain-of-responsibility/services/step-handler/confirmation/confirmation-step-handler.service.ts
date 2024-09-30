import { Injectable } from '@angular/core';
import { AbstractStepHandler } from '../../../models/step-handler';

@Injectable({
  providedIn: 'root'
})
export class ConfirmationStepHandlerService extends AbstractStepHandler {
  public override handle(request: any): void {
    console.log('Step 3: Confirmation of registration.');
 
    console.log('Registration completed successfully.');
  }
}
