import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent {
  @Input() items: any[] = [];
  columns: string[] = [];

  ngOnInit() {
    if (this.items.length > 0) {
      this.columns = Object.keys(this.items[0]);
    }
  }
}
