import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IList } from '../model/IList';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  listName: string = 'Enter a list name';
  listDate = new Date();

  private lists$ = new BehaviorSubject<IList[]>([]);

  getLists() {
    return this.lists$;
  }

  addNewList() {
    const currentListLength = this.lists$.getValue().length;

    const newList: IList = {
      listDate: this.listDate,
      listName: this.listName,
      listNumber: currentListLength + 1,
      tasksArr: [],
    };

    const currentListsArr = this.lists$.getValue();
    const updatedListsArr = [...currentListsArr, newList];
    this.lists$.next(updatedListsArr);

  }

  duplicateList(selectedDupListNumber: number) {

    const currentListsArr = this.lists$.getValue();
    const selectedList = currentListsArr.find(list => list.listNumber === selectedDupListNumber);

    if (selectedList) {
      const dupList: IList = {
        ...selectedList,
        listNumber: currentListsArr.length + 1,
      };
      const updatedListsArr = [...currentListsArr, dupList];
      this.lists$.next(updatedListsArr);
    }
  }

  deleteList(selectedDelListNumber: number) {
    const currentListsArr = this.lists$.getValue();
    const updatedListsArr = currentListsArr
      .filter((list) => list.listNumber !== selectedDelListNumber)
      .map((list: IList, index: number) => ({...list, listNumber: index + 1}));

    this.lists$.next(updatedListsArr);
  }

  deleteAllList() {
    this.lists$.next([]);
  }
}
