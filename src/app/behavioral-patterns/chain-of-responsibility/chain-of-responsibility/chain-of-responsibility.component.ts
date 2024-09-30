import { Component } from '@angular/core';
import { RegistrationService } from '../services/registration.service';
import { FormsModule, NgModel, NgModelGroup } from '@angular/forms';

@Component({
  selector: 'app-chain-of-responsibility',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './chain-of-responsibility.component.html',
  styleUrl: './chain-of-responsibility.component.scss'
})
export class ChainOfResponsibilityComponent {
  userData = {
    name: '',
    surname: '',
    address: '',
    city: '',
  };
  result: any
  constructor(private registrationService: RegistrationService) { }

  onSubmit() {
    this.result = this.registrationService.startRegistration(this.userData);

  }
}
