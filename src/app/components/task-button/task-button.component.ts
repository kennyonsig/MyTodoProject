import { Component } from '@angular/core';
import { ListService } from '../../service/list.service';

@Component({
  selector: 'app-task-button',
  templateUrl: './task-button.component.html',
  styleUrls: ['./task-button.component.scss'],

})

export class TaskButtonComponent {
  selectedDupListNumber: number;
  selectedDelListNumber: number;
  findValue: string;
  dupListNotFound: boolean;
  delListNotFound: boolean;

  constructor(private listService: ListService) {
  }

  addNewToDoList() {
    this.listService.addNewList();
  }

  duplicateListNumber(selectedDupListNumber: number) {
    if (!this.listService.isListSelected(selectedDupListNumber)) {
      this.dupListNotFound = true;
    } else {
      this.listService.duplicateList(selectedDupListNumber);
      this.dupListNotFound = false;
    }
  }

  deleteListNumber(selectedDelListNumber: number) {
    if (!this.listService.isListSelected(selectedDelListNumber)) {
      this.delListNotFound = true;
    } else {
      this.listService.deleteList(selectedDelListNumber);
      this.delListNotFound = false;
    }
  }

  deleteAllList() {
    this.listService.deleteAllList();
  }

  findListInput() {
    console.log(this.findValue);
  }
}
