import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ITask } from '../../../../interface/ITask';
import { faEdit } from '@fortawesome/free-solid-svg-icons/faEdit';
import { faCheck } from '@fortawesome/free-solid-svg-icons/faCheck';
import { TaskService } from '../../../../services/task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent {
  readonly editIcon = faEdit;
  readonly saveIcon = faCheck;

  @Input() task: ITask;
  @Input() taskIndex: number;
  @Input() listNumber: number;
  @Output() readonly taskRemove: EventEmitter<ITask> = new EventEmitter<ITask>();
  @Output() readonly isTaskComplete: EventEmitter<ITask> = new EventEmitter<ITask>();
  @Output() readonly isTaskEdit: EventEmitter<ITask> = new EventEmitter<ITask>();
  @Output() readonly isTaskSave: EventEmitter<ITask> = new EventEmitter<ITask>();

  constructor(private taskService: TaskService) {
  }

  completeTask(task: ITask) {
    this.isTaskComplete.emit(task);
  }

  removeTask(task: ITask) {
    this.taskRemove.emit(task);
  }

  editTaskInfo(task: ITask) {
    this.isTaskEdit.emit(task);
  }

  saveTaskInfo(task: ITask) {
    this.isTaskSave.emit(task);
  }
}
