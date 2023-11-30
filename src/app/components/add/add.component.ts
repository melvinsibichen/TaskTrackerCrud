import { Component } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent {
  newTask = { title: '', description: '' };

  constructor(private taskService: TaskService) { }

  addTask() {
    this.taskService.addTask(this.newTask);
    this.newTask = { title: '', description: '' };
  }
}
