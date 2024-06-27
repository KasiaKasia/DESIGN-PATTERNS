export interface EmployeeHierarchyStructure {
    add?(employee: EmployeeHierarchyStructure): void;
    remove?(employee: EmployeeHierarchyStructure): void;
    getChild?(index: number): EmployeeHierarchyStructure | null;
    getName(): string;
    printDetails(indent?: string): void;
    getEmployees?(): EmployeeHierarchyStructure[];
}

export class Manager implements EmployeeHierarchyStructure {
    private name: string; 
    private employees: Set<EmployeeHierarchyStructure>;

    constructor(name: string) {
        this.name = name; 
        this.employees = new Set<EmployeeHierarchyStructure>();
    }

    add(employee: EmployeeHierarchyStructure): void {
        this.employees.add(employee);
    }

    remove(employee: EmployeeHierarchyStructure): void {
        this.employees.delete(employee);
    }

    getChild(index: number): EmployeeHierarchyStructure | null {
        return Array.from(this.employees)[index] || null;
    }

    getName(): string {
        return this.name;
    }

    printDetails(indent: string = ''): void {
        console.info(`${indent} Manager: ${this.getName()}`);
        for (const employee of this.employees) {
            employee.printDetails(indent + '  ');
        }
    }

    getEmployees(): EmployeeHierarchyStructure[] {
        return Array.from(this.employees);
    }
}

export class Employee implements EmployeeHierarchyStructure {
    private name: string; 

    constructor(name: string ) {
        this.name = name; 
    }

    add(employee: EmployeeHierarchyStructure): void {
        throw new Error("Cannot add to a employee.");
    }

    remove(employee: EmployeeHierarchyStructure): void {
        throw new Error("Cannot remove from a employee.");
    }

    getChild(index: number): EmployeeHierarchyStructure | null {
        return null;
    }

    getName(): string {
        return this.name;
    }

    printDetails(indent: string = ''): void {
        console.info(`${indent}Employee: ${this.getName()}`);
    }

    getEmployees(): EmployeeHierarchyStructure[] {
        return [];
    }
}


