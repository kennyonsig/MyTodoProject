import { Component } from '@angular/core';
import { TaskService } from '../../../services/task.service';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss'],

})
export class ProfilePageComponent {
  selectedListNum: number;

  constructor(private taskService: TaskService, private router: Router, private authService: AuthService) {
  }

  addTask(taskDescription: string, taskTime: string, listNumber: number) {
    this.taskService.addTaskToList(taskDescription, taskTime, listNumber);
  }

  doLogOut() {
    this.authService.logOut();
  }
}
