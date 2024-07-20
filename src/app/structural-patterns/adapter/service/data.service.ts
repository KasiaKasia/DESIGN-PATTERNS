import { Injectable, Signal, signal } from '@angular/core';
import { Tasks } from '../model/model';
import { tasks } from './data';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private tasks = signal<Tasks[]>([...tasks]);

  getTasks() {
    this.tasks.update(req => req = [...tasks]);
  }
  updateTasks(tasks: Tasks[]) {
    this.tasks.update(req => req = [...tasks]);
  }
  getCurrentTasks(): Signal<Tasks[]> {
    return this.tasks.asReadonly();
  }
}
