import { Component } from '@angular/core';
import { TaskService } from '../../../services/task.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss'],

})
export class ProfilePageComponent {
  selectedListNum: number;
  constructor(private taskService: TaskService) {
  }

  addTask(taskDescription: string, taskTime: string, listNumber: number) {
    this.taskService.addTaskToList(taskDescription, taskTime, listNumber);
  }
}
