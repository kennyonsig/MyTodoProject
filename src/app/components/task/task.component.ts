import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ITask } from '../../model/ITask';
import { faArrowsV } from '@fortawesome/free-solid-svg-icons/faArrowsV';
import { faEdit } from '@fortawesome/free-solid-svg-icons/faEdit';
import { faCheck } from '@fortawesome/free-solid-svg-icons/faCheck';
import { TaskService } from '../../service/task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent {
  dragArrowsV = faArrowsV;
  editIcon = faEdit;
  saveIcon = faCheck;

  @Input() task: ITask;
  @Input() taskIndex: number;

  @Output() readonly taskRemove: EventEmitter<ITask> = new EventEmitter<ITask>();

  constructor(private taskService: TaskService) {
  }

  completeTask(task: ITask) {
    task.taskCompleted = !task.taskCompleted;
  }

  removeTask(task: ITask) {
    this.taskRemove.emit(task);
  }

  editTaskInfo(task: ITask) {
    task.taskEdit = true;
  }

  saveTaskInfo(task: ITask) {
    task.taskEdit = false;
    this.taskService.updTaskInfo(task);
  }
}
