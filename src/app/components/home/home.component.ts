import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  tasks: any;
  showEditForm: any;
  editedTask: any;

  ngOnInit() {
    this.tasks = this.taskService.getTasks();

  }

  constructor(private taskService: TaskService) { }

  deleteTask(taskId: any) {
    this.taskService.deleteTask(taskId);
    this.tasks = this.taskService.getTasks();
  }

  editTask(task: any) {
    this.showEditForm = true;
    this.editedTask = { ...task };
  }

  saveChanges() {
    this.taskService.updateTask(this.editedTask);
    this.showEditForm = false;
    this.tasks = this.taskService.getTasks();
  }

  cancelEdit() {
    this.showEditForm = false;
  }


}
