import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ListService } from '../../../services/list.service';


@Component({
  selector: 'app-input-task',
  templateUrl: './input-task.component.html',
  styleUrls: ['./input-task.component.scss'],
})
export class InputTaskComponent {
  isDisabled = true;
  isListNotFound = false;
  taskTime: string;

  @Input() selectedListNumber: number;
  @Output() readonly outEnterTask = new EventEmitter<{
    taskDescription: string;
    taskTime: string;
    listNumber: number;
  }>();

  constructor(private listService: ListService) {
  }

  onInputChange(value: string) {
    this.isDisabled = !value.trim();
    this.isListNotFound = false;
  }

  enterTask(taskInput: HTMLInputElement, timeInput: HTMLInputElement) {

    if (!this.listService.isListSelected(this.selectedListNumber)) {
      this.isListNotFound = true;
    } else {

      this.outEnterTask.emit({
        taskDescription: taskInput.value,
        taskTime: this.taskTime,
        listNumber: this.selectedListNumber,
      });

      taskInput.value = '';
      timeInput.value = '';
      this.isDisabled = true;
      this.isListNotFound = false;
      this.taskTime = '';
    }
  }
}
