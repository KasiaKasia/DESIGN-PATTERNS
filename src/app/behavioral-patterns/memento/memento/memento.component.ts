import { Component } from '@angular/core';
import { FormService } from '../services/form.service';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Memento } from '../model/memento';
import { NgFor, NgIf } from '@angular/common';


@Component({
  selector: 'app-memento',
  standalone: true,
  imports: [ReactiveFormsModule, NgFor, NgIf],
  templateUrl: './memento.component.html',
  styleUrl: './memento.component.scss'
})
export class MementoComponent {
  showHide = false
  mementos: Memento[] = [];
  form: FormGroup = this.formService.getForm()

  constructor(private formService: FormService) { }

  save(): void {
    this.formService.saveState(this.form.controls['text'].value);
  }
  undo(): void {
    this.formService.undo();
  }
  showHistory() {
    this.showHide = !this.showHide;
    return this.mementos = this.formService.showHistory();
  }
}
