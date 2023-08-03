import { ChangeDetectionStrategy, Component } from '@angular/core';
import { InputComponent } from '../input/input.component';
import { TaskButtonComponent } from '../task-button/task-button.component';
import { TodoListComponent } from '../todo-list/todo-list.component';
import { TaskService } from '../../service/task.service';
import { TextTransformPipe } from '../../pipes/text-transform.pipe';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-profile-page',
  standalone: true,
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss'],
  imports: [
    InputComponent,
    TaskButtonComponent,
    TodoListComponent,
    TextTransformPipe,
    RouterLink,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfilePageComponent {
  constructor(private taskService: TaskService) {
  }

  addTask(taskName: string, taskTime: string, listNumber: number) {
    this.taskService.addNewTask(taskName, taskTime, listNumber);
  }

}
