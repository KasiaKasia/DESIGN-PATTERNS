import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FilterColumn } from '../../../structural-patterns/adapter/model/model';


@Component({
  selector: 'app-radio',
  templateUrl: './radio.component.html',
})
export class RadioComponent {

  @Input() name: string = '';
  @Input() value!: FilterColumn;
  @Input() label: string = '';
  @Input() isChecked: boolean = false;
  @Output() selectedValue = new EventEmitter<FilterColumn>();

  onSelectionChange() {
    this.selectedValue.emit(this.value);
  }
}
