import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IList } from '../model/IList';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  listName: string = 'Enter a list name';
  listDate = new Date('2023-12-31');

  private lists$ = new BehaviorSubject<IList[]>([]);

  getLists() {

  }

  addNewList() {

  }

  deleteAllList() {

  }

  updateList(lists: IList[]) {
    ;
  }

  duplicateList(selectedDupListNumber: number) {

  }

  deleteList(selectedDelListNumber: number) {

  }


}
