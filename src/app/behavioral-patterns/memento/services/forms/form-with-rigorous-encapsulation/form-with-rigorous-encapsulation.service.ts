import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ConcreteOriginator, Caretaker, Memento, ConcreteMemento } from '../../../model/memento-with-rigorous-encapsulation';

@Injectable({
  providedIn: 'root'
})
export class FormWithRigorousEncapsulationService {

  mementos: Memento[] = [];
  originator = new ConcreteOriginator('');
  caretaker = new Caretaker(this.originator);
  private form: FormGroup = this.fb.group({
    text: [''],
  });

  constructor(private fb: FormBuilder) { }

  getForm(): FormGroup {
    return this.form;
  }

  saveRigorousEncapsulation(text: string) {
    this.caretaker.backup(text);
  }

  undoRigorousEncapsulation() {
    const caretaker = this.caretaker.undo();
    const currentState = (caretaker![caretaker!.length! - 1] as ConcreteMemento).getValue();
    this.form.patchValue({ text: currentState });
  }

  showHistoryRigorousEncapsulation(): string[] {
    return this.caretaker.showHistory()
      .map((memento: Memento) => (memento as ConcreteMemento).getValue());
  }
}