import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Originator , Caretaker} from '../model/memento';


@Injectable({
  providedIn: 'root'
})
export class FormService {

  originator = new Originator('');
  caretaker = new Caretaker(this.originator);
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
    const caretaker = this.caretaker.undo()
    this.form.controls['text'].setValue(caretaker?.getState())
  }
  showHistory() {
    this.caretaker.showHistory();
  }
}
