import { Component } from '@angular/core';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-all-lists',
  templateUrl: './all-lists.component.html',
  styleUrls: ['./all-lists.component.scss']
})
export class AllListsComponent {
  selectedListNum: number;

  constructor(private taskService: TaskService) {
  }

  addTask(taskDescription: string, taskTime: string, listNumber: number) {
    this.taskService.addTaskToList(taskDescription, taskTime, listNumber);
  }
}
