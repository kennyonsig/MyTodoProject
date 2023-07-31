import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ITask } from '../../model/ITask';
import { faArrowsV } from '@fortawesome/free-solid-svg-icons/faArrowsV';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons/faEdit';
import { faCheck } from '@fortawesome/free-solid-svg-icons/faCheck';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule, FormsModule],
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
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
    this.isTaskEditing = true;
  }

  saveTaskInfo() {
    this.isTaskEditing = false;
  }

}
