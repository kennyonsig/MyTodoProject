import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-input',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputComponent {

  @Output() outEnterTask = new EventEmitter<{
    taskName: string;
    time: string;
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
      taskName: taskInput.value,
      time: this.taskTime,
      listNumber: this.selectedListNumber,
    });

    taskInput.value = '';
    timeInput.value = '';
    this.isDisabled = true;
    this.taskTime = '';
  }

}
