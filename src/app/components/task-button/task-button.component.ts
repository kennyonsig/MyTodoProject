import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListService } from '../../service/list.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-button',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './task-button.component.html',
  styleUrls: ['./task-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class TaskButtonComponent {
  selectedDupListNumber: number;
  selectedDelListNumber: number;


  constructor(private listService: ListService) {
  }

  addNewToDoList() {
    this.listService.addNewList();
  }

  duplicateListNumber(selectedDupListNumber: number) {
    this.listService.duplicateList(selectedDupListNumber);
  }

  deleteListNumber(selectedDelListNumber: number) {
    this.listService.deleteList(selectedDelListNumber);
  }

  deleteAllList() {
    this.listService.deleteAllList();

  }

}
