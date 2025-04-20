import { Component } from '@angular/core';
import { Composite, Employee, HierarchicalStructure } from '../model/model';


@Component({
  selector: 'app-composite',
  templateUrl: './composite.component.html',
  styleUrls: ['./composite.component.scss']
})
export class CompositeComponent {
  tree: Composite= new Composite('CEO');
  managers: Composite[] = this.getAllManagers(this.tree);
 
  selectedManager!: Composite;
  managerName = '';
  employeeNeme = ''; 
 
  addManager(name: string): void {
    if (!this.selectedManager || !name) return;
    const newManager = new Composite(name);

    this.selectedManager.add(newManager);
    
    this.managers = this.getAllManagers(this.tree);
    this.managerName = '';
  }

  getAllManagers(node: HierarchicalStructure): Composite[] {
    let result: Composite[] = [];

    if (node.isComposite()) {
      result.push(node as Composite);

      const children = (node as Composite).getChildren();
      for (const child of children) {
        result = result.concat(this.getAllManagers(child));
      }
    }
    return result;
  }

  setSelectedManager(manager: Composite) {
    this.selectedManager = manager;
  }

  addEmployeeForManager(employeeName: string) {
    if (!this.selectedManager || !employeeName) return;

    const newEmployee = new Employee(employeeName);
    this.selectedManager.add(newEmployee);
    this.employeeNeme = '';
  }
}
