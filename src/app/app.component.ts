import { Component } from '@angular/core';
import { TaskService } from './service/task.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'PetProject';

  constructor(private taskService: TaskService) {
  }

  addTask(taskName: string, time: string, listNumber: number) {
    this.taskService.addNewTask(taskName, time, listNumber);
  }

}
