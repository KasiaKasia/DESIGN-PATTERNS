import { Injectable } from '@angular/core';
import { PersonalInfoStepHandlerService } from './step-handler/personal/personal-info-step-handler.service';
import { ConfirmationStepHandlerService } from './step-handler/confirmation/confirmation-step-handler.service';
import { AddressStepHandlerService } from './step-handler/address/address-step-handler.service';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(
    private personalInfoStepHandler: PersonalInfoStepHandlerService,
    private addressStepHandler: AddressStepHandlerService,
    private confirmationStepHandler: ConfirmationStepHandlerService
  ) { }

  public startRegistration(request: any): void {

    this.personalInfoStepHandler
      .setNext(this.addressStepHandler)
      .setNext(this.confirmationStepHandler);

    this.personalInfoStepHandler.handle(request);
    console.log(request);
    // you can also use the handleRequest method
    //  this.handleRequest(request); 
  }
  handleRequest(userData: any) {
    const handler1 = new PersonalInfoStepHandlerService();
    const handler2 = new AddressStepHandlerService();
    const handler3 = new ConfirmationStepHandlerService();

    const handler4 = handler1.setNext(handler2).setNext(handler3)

    handler1.handle(userData);

    return handler4
  }
}
