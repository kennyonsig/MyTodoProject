import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ITask } from '../../model/ITask';
import { faArrowsV } from '@fortawesome/free-solid-svg-icons/faArrowsV';
import { faEdit } from '@fortawesome/free-solid-svg-icons/faEdit';
import { faCheck } from '@fortawesome/free-solid-svg-icons/faCheck';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent {
  dragArrowsV = faArrowsV;
  editIcon = faEdit;
  saveIcon = faCheck;

  isTaskEditing = false;

  @Input() task: ITask;
  @Input() taskIndex: number;

  @Output() taskRemove: EventEmitter<ITask> = new EventEmitter<ITask>();

  completeTask(task: ITask) {
    task.completed = !task.completed;
  }

  removeTask(task: ITask) {
    this.taskRemove.emit(task);
  }

  editTaskInfo() {
    this.isTaskEditing = !this.isTaskEditing;
  }

}
