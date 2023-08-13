import { Component, EventEmitter, Output } from '@angular/core';
import { ListService } from '../../service/list.service';


@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent {
  @Output() readonly outEnterTask = new EventEmitter<{
    taskDescription: string;
    taskTime: string;
    listNumber: number;
  }>();
  isDisabled = true;
  isListNotFound = false;
  taskTime: string;
  selectedListNumber: number;

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
