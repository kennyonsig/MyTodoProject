import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ITask } from '../../../../model/ITask';
import { faArrowsV } from '@fortawesome/free-solid-svg-icons/faArrowsV';
import { faEdit } from '@fortawesome/free-solid-svg-icons/faEdit';
import { faCheck } from '@fortawesome/free-solid-svg-icons/faCheck';
import { TaskService } from '../../../../services/task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent {
  readonly dragArrowsV = faArrowsV;
  readonly editIcon = faEdit;
  readonly saveIcon = faCheck;

  @Input() task: ITask;
  @Input() taskIndex: number;
  @Input() isTaskEdit: boolean;
  @Output() readonly taskRemove: EventEmitter<ITask> = new EventEmitter<ITask>();

  constructor(private taskService: TaskService) {
  }

  completeTask(task: ITask) {
    task.isTaskCompleted = !task.isTaskCompleted;
    this.taskService.updTaskInfo(task);
  }

  removeTask(task: ITask) {
    this.taskRemove.emit(task);
  }

  editTaskInfo(task: ITask) {
    task.isTaskEdit = true;
  }

  saveTaskInfo(task: ITask) {
    task.isTaskEdit = false;
    this.taskService.updTaskInfo(task);
  }
}
