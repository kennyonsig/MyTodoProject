import { Component } from '@angular/core';
import { ListService } from '../../services/list.service';

@Component({
  selector: 'app-task-button',
  templateUrl: './task-button.component.html',
  styleUrls: ['./task-button.component.scss'],

})

export class TaskButtonComponent {
  selectedDupListNumber: number;
  selectedDelListNumber: number;
  selectedClearListNumber: number;
  findValue: string;
  dupListNotFound: boolean;
  delListNotFound: boolean;
  clearListNotFound: boolean;

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

  clearListNumber(selectedClearListNumber: number) {
    if (!this.listService.isListSelected(selectedClearListNumber)) {
      this.clearListNotFound = true;
    } else {
      this.listService.clearList(selectedClearListNumber);
      this.clearListNotFound = false;
    }
  }

  deleteAllList() {
    this.listService.deleteAllList();
  }

  findListInput() {
    console.log(this.findValue);
  }

}
