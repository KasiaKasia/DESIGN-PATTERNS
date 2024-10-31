import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Originator, Caretaker, Memento } from '../../../model/memento-intermediate-interface';


@Injectable({
  providedIn: 'root'
})
export class FormService {
  private mementos: Memento[] = [];
  private originator = new Originator('');
  private caretaker = new Caretaker(this.originator);
  private form: FormGroup = this.fb.group({
    text: [''],
  });

  constructor(private fb: FormBuilder) { }

  getForm(): FormGroup {
    return this.form;
  }

  saveState(text: string): void {
    this.caretaker.backup(text);
  }

  undo(): void {
    const caretaker = this.caretaker.undo(); 
    caretaker.length ? this.form.controls['text'].setValue(caretaker![caretaker!.length! - 1]!.getState()!) : this.form.reset()
  }

  showHistory() {
    return this.mementos = this.caretaker.showHistory();
  }
}
