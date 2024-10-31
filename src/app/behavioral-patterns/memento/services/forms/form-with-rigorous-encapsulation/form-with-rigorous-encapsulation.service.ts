import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ConcreteOriginator, Caretaker, Memento, ConcreteMemento } from '../../../model/memento-with-rigorous-encapsulation';

@Injectable({
  providedIn: 'root'
})
export class FormWithRigorousEncapsulationService {

  private mementos: Memento[] = [];
  private originator = new ConcreteOriginator('');
  private caretaker = new Caretaker(this.originator);
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
    const currentState = (caretaker![caretaker!.length! - 1] as ConcreteMemento)!.getValue()!;
    caretaker.length ? this.form.patchValue({ text: currentState }) : this.form.reset();
  }

  showHistoryRigorousEncapsulation(): string[] {
    return this.caretaker.showHistory()
      .map((memento: Memento) => (memento as ConcreteMemento).getValue());
  }
}