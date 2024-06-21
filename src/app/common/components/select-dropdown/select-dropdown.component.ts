import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-select-dropdown',
  templateUrl: './select-dropdown.component.html',
})
export class SelectDropdownComponent {
  @Input() keys: number[] = [];
  @Input() values: Record<number, string> = {};
  @Input() selectedValue: number | null = null;
  @Output() selectionChange: EventEmitter<number> = new EventEmitter<number>();

  onSelectionChange() {
    this.selectionChange.emit(Number(this.selectedValue!));
  }
}
