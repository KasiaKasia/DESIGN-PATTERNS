import { Component, Input } from '@angular/core';
import { EmployeeHierarchyStructure, Manager } from '../../model/model';

@Component({
  selector: 'app-employee', 
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.scss'
})
export class EmployeeComponent {

  @Input() manager!: EmployeeHierarchyStructure;

  isManager(employee: EmployeeHierarchyStructure): boolean {
    return employee instanceof Manager;
  }
}
