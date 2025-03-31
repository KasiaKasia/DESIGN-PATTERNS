import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Address, User } from './prototype';


@Component({
  selector: 'app-prototype',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './prototype.component.html',
  styleUrl: './prototype.component.scss'
})
export class PrototypeComponent {
  private formBuilder = inject(FormBuilder);
  protected clonedUser!: User;
  protected userForm: FormGroup = this.formBuilder.group({
    name: [''],
    age: [null],
    city: [''],
    street: [''],
  });


  cloneUser() {
    const user = new User(
      this.userForm.controls['name'].value,
      this.userForm.controls['age'].value,
      new Address(
        this.userForm.controls['city'].value,
        this.userForm.controls['street'].value));

    this.clonedUser = user.clone();

    if (user.getName() === this.clonedUser.getName()) {
      console.info('Primitive field values have been carried over to a clone.');
    } else {
      console.info('Primitive field values have not been copied.');
    }
  }
}
