import { Component } from '@angular/core';
import { FormService } from '../services/forms/form-for-intermediate-interface/form-for-intermediate-interface.service';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Memento as MementoForIntermediateInterface } from '../model/memento-intermediate-interface';
import { NgFor, NgIf } from '@angular/common';
import { FormWithRigorousEncapsulationService } from '../services/forms/form-with-rigorous-encapsulation/form-with-rigorous-encapsulation.service';


@Component({
  selector: 'app-memento',
  standalone: true,
  imports: [ReactiveFormsModule, NgFor, NgIf],
  templateUrl: './memento.component.html',
  styleUrl: './memento.component.scss'
})
export class MementoComponent {
  showHide = false
  hideShow: boolean = false;
  mementosForIntermediateInterface: MementoForIntermediateInterface[] = [];
  mementosWithRigorousEncapsulation: string[] = [];
  formForIntermediateInterface: FormGroup = this.serviceFormForIntermediateInterface.getForm()
  formWithRigorousEncapsulation: FormGroup = this.serviceFormWithRigorousEncapsulation.getForm()

  constructor(private serviceFormForIntermediateInterface: FormService,
    private serviceFormWithRigorousEncapsulation: FormWithRigorousEncapsulationService
  ) { }
  // Implementation based on an intermediate interface
  saveIntermediateInterface(): void {
    this.serviceFormForIntermediateInterface.saveState(this.formForIntermediateInterface.controls['text'].value);
  }
  undoIntermediateInterface(): void {
    this.serviceFormForIntermediateInterface.undo();
  }
  showHistoryIntermediateInterface(): MementoForIntermediateInterface[] {
    this.showHide = !this.showHide;
    return this.mementosForIntermediateInterface = this.serviceFormForIntermediateInterface.showHistory();
  }

  // Implementation with even stricter encapsulation
  saveRigorousEncapsulation(): void {
    this.serviceFormWithRigorousEncapsulation.saveRigorousEncapsulation(this.formWithRigorousEncapsulation.controls['text'].value);
  }
  undoRigorousEncapsulation(): void {
    this.serviceFormWithRigorousEncapsulation.undoRigorousEncapsulation();
  }
  showHistoryRigorousEncapsulation() {
    this.hideShow = !this.hideShow;
    return this.mementosWithRigorousEncapsulation = this.serviceFormWithRigorousEncapsulation.showHistoryRigorousEncapsulation();
  }
}
