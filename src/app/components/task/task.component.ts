import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ITask } from '../../model/ITask';
import { faArrowsV } from '@fortawesome/free-solid-svg-icons/faArrowsV';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TaskComponent {

  dragArrowsV = faArrowsV;


  @Input() task: ITask;
  @Input() taskIndex: number;

  @Output() taskRemove: EventEmitter<ITask> = new EventEmitter<ITask>();

  completeTask(task: ITask) {
    task.completed = !task.completed;
  }

  removeTask(task: ITask) {
    this.taskRemove.emit(task);
  }
}
