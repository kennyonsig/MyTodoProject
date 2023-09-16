import { Component } from '@angular/core';
import { ListService } from '../../../services/list.service';
import { Subscription } from 'rxjs';
import { IList } from '../../../../../shared/interface/IList';

@Component({
  selector: 'app-list-left-btn',
  templateUrl: './list-left-btn.component.html',
  styleUrls: ['./list-left-btn.component.scss'],

})

export class ListLeftBtnComponent {
  selectedDupListNumber: number;
  selectedDelListNumber: number;
  selectedClearListNumber: number;
  findValue: string;
  dupListNotFound: boolean;
  delListNotFound: boolean;
  clearListNotFound: boolean;
  private subFindList: Subscription;

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
    if (this.subFindList) {
      this.subFindList.unsubscribe();
    }
    this.subFindList = this.listService
      .findList(this.findValue)
      .subscribe((findListName: IList[]) => {
        console.log(findListName);
      });
  }

  deleteAllList() {
    this.listService.deleteAllList();
  }
}
