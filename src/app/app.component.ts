import { Component } from '@angular/core';
import { TaskService } from './service/task.service';
import { ListService } from './service/list.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'PetProject';


  constructor(private taskService: TaskService, private listService: ListService) {
  }

  addTask(taskName: string, taskTime: string, listNumber: number) {
    this.taskService.addNewTask(taskName, taskTime, listNumber);
  }


}
