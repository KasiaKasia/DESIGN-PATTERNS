import { Component } from '@angular/core';
import { Employee, Manager, } from '../model/model';

export interface ConfigurationOfAddingAnEmployee {
  managerName: string;
  employeeNeme: string;
  selectedManagerName: string;
}

@Component({
  selector: 'app-composite',
  templateUrl: './composite.component.html',
  styleUrls: ['./composite.component.scss']
})
export class CompositeComponent {
  title = 'Company Structure';
  boss: Manager = new Manager('Owner');
  selectedManager: Manager | null = null;

  company: ConfigurationOfAddingAnEmployee = {
    managerName: '',
    employeeNeme: '',
    selectedManagerName: ''
  };

  addManager(managerName: string, name: string) {
    const parent = this.findManager(managerName);
    const newManager = new Manager(name);
    if (parent) {
      parent.add(newManager);
    } else if (managerName === 'Owner') {
      this.boss.add(newManager);
    }
    this.company.managerName = '';
  }

  addEmployeeForManager(managerName: string, employeeNeme: string) {
    const manager = this.findManager(managerName);
    if (manager) {
      const employee = new Employee(employeeNeme);
      manager.add(employee);
      this.company.employeeNeme = '';
    }
  }

  findManager(name: string): Manager | null {
    const managers = this.getAllManagers(this.boss);
    return managers.find(manager => manager.getName() === name) || null;
  }

  getAllManagers(manager: Manager): Manager[] {
    let managers: Manager[] = [manager];
    for (const employee of manager.getEmployees()) {
      if (employee instanceof Manager) {
        managers = managers.concat(this.getAllManagers(employee));
      }
    }
    return managers;
  }

  setSelectedManager(managerName: string) {
    this.selectedManager = this.findManager(managerName);
  }

}
