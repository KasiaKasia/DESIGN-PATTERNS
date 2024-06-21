import { Component, Signal, inject } from '@angular/core';
import { Status, Tasks, StatusKey, TypesKey, Types, FilterColumn } from '../../../common/model/model';
import { DataService } from '../../../common/service/data.service';
import { SingleColumnFilter, DoubleColumnFilter } from '../../common/task-manager';
import { tasks } from '../../../common/service/data';


export interface FilterConfiguration {
  filterKey: FilterColumn;
  statusValue: keyof typeof Status | 0,
  typeValue: keyof typeof Types | 0;
}


@Component({
  selector: 'app-adapter',
  templateUrl: './adapter.component.html',
  styleUrl: './adapter.component.scss'
})
export class AdapterComponent extends SingleColumnFilter {
  private dataService = inject(DataService);
  startupConfiguration: FilterColumn = FilterColumn.status;
  FilterColumn = FilterColumn;
  configFilter: FilterConfiguration = {
    filterKey: this.startupConfiguration,
    statusValue: 0,
    typeValue: 0
  }

  statusKeys: StatusKey[] = Object.keys(Status).map(Number) as StatusKey[];
  statusValues = Status;

  typesKeys: TypesKey[] = Object.keys(Types).map(Number) as TypesKey[];
  typesValues = Types;

  protected currentTasks: Signal<Tasks[]> = this.dataService.getCurrentTasks();

  constructor() {
    super()
  }

  ngModelChangeFilter(typeSort: FilterColumn, val: number) {
    console.log('val ', typeof val)
    const data = new DoubleColumnFilter(tasks)
    const filteredTasks = data.filterByBothColumns(this.configFilter.statusValue, this.configFilter.typeValue)

    this.dataService.updateTasks(filteredTasks);
  }

  onRadioSelectionChange(selectedValue: FilterColumn) {

    selectedValue === FilterColumn.type ? this.configFilter.statusValue = 0 : this.configFilter.typeValue = 0
    if (this.configFilter.statusValue === 0 && this.configFilter.typeValue === 0) {
      this.dataService.updateTasks(tasks);
    }
    this.configFilter.filterKey = selectedValue
  }

  ngModelChangeFilterValue(typeFilter: keyof typeof FilterColumn, val: number) {

    const filteredTasks = this.filterBySingleColumn(tasks, typeFilter, Number(val));
    this.dataService.updateTasks(filteredTasks);
  }
}
