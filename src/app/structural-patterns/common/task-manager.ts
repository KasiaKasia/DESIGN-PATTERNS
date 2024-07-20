import { FilterColumn, StatusKey, Tasks, TypesKey } from '../adapter/model/model';

export interface SingleColumnFilterable<T> {
    filterBySingleColumn(tasks: T[], column: keyof T, value: number): T[];
}

export interface DoubleColumnFilterable<T> {
    filterByBothColumns(status: StatusKey | 0, type: TypesKey | 0): T[];
}

export class SingleColumnFilter implements SingleColumnFilterable<Tasks> {
    filterBySingleColumn(tasks: Tasks[], column: keyof typeof FilterColumn, value: number): Tasks[] {
        const filteredTasks = tasks.filter(task => task[column] == value);
        return filteredTasks;
    }
}

export class DoubleColumnFilter implements DoubleColumnFilterable<Tasks> {
    constructor(private tasks: Tasks[]) {}
    
    filterByBothColumns(status: StatusKey | 0, type: TypesKey | 0): Tasks[] {
    
        return this.tasks.filter(task => {
            const statusMatches = status !== 0 ? task.status === status : true;
            const typeMatches = type !== 0 ? task.type === type : true;
            return statusMatches && typeMatches;
        });
    }
}