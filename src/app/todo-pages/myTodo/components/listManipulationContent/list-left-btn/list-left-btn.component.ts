import { Component } from '@angular/core';
import { ListService } from '../../../services/list.service';

@Component({
  selector: 'app-list-left-btn',
  templateUrl: './list-left-btn.component.html',
  styleUrls: ['./list-left-btn.component.scss'],

})

export class ListLeftBtnComponent {
  selectedDupListNumber: number;
  selectedDelListNumber: number;
  selectedClearListNumber: number;
  findList: string;
  dupListNotFound: boolean;
  delListNotFound: boolean;
  clearListNotFound: boolean;

  constructor(private listService: ListService) {
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

  findListInput() {
    this.listService.findList(this.findList.trim().toLowerCase());
  }

  deleteAllList() {
    this.listService.deleteAllList();
  }
}
