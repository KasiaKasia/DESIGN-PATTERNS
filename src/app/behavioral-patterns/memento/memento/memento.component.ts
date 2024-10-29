import { Component } from '@angular/core';
import { FormService } from '../services/form.service';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-memento',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './memento.component.html',
  styleUrl: './memento.component.scss'
})
export class MementoComponent {

  form: FormGroup = this.formService.getForm()

  constructor(private formService: FormService) { }

  save(): void {
    this.formService.saveState(this.form.controls['text'].value);
  }
  undo(): void {
    this.formService.undo();
  }
  showHistory() {
    this.formService.showHistory();
  }
}
