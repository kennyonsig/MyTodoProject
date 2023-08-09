import { Component, EventEmitter, Output } from '@angular/core';


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
  taskTime: string;
  selectedListNumber: number;

  onInputChange(value: string) {
    this.isDisabled = value.trim().length === 0;
  }

  enterTask(taskInput: HTMLInputElement, timeInput: HTMLInputElement) {
    this.outEnterTask.emit({
      taskDescription: taskInput.value,
      taskTime: this.taskTime,
      listNumber: this.selectedListNumber,
    });

    taskInput.value = '';
    timeInput.value = '';
    this.isDisabled = true;
    this.taskTime = '';
  }
}
