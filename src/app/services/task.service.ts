import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  tasks = [
    { id: 1, title: 'CRUD APP', description: 'Create a crud app in angular using service' },
    { id: 2, title: 'TODO APP', description: 'Todo List to manage the daily task' },
  ];

  getTasks() {
    return this.tasks;
  }

  addTask(task: any) {
    task.id = this.tasks.length + 1;
    this.tasks.push(task);
  }

  updateTask(updatedTask: any) {
    const index = this.tasks.findIndex(task => task.id === updatedTask.id);
    if (index !== -1) {
      this.tasks[index] = updatedTask;
    }
  }

  deleteTask(taskId: number) {
    this.tasks = this.tasks.filter(task => task.id !== taskId);
  }



  constructor() { }
}
