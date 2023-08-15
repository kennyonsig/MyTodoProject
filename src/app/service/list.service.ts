import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IList } from '../model/IList';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  listDate = new Date();

  public lists$ = new BehaviorSubject<IList[]>([]);

  constructor() {
    const savedLists = localStorage.getItem('lists');
    if (savedLists) {
      const parsedLists = JSON.parse(savedLists);
      this.lists$.next(parsedLists);
    } //что-то типо временной БД
  }

  getLists(): IList[] {
    return this.lists$.getValue();
  }

  updateLists(updatedLists: IList[]) {
    this.lists$.next(updatedLists);
    localStorage.setItem('lists', JSON.stringify(updatedLists));
  }

  updListInfo(updListInfo: IList) {
    const updatedListsArr: IList[] = this.getLists().map((currentListInfo: IList) =>
      currentListInfo.listNumber === updListInfo.listNumber
        ? updListInfo
        : currentListInfo
    );

    this.updateLists(updatedListsArr);
  }

  addNewList() {
    const currentListLength = this.getLists().length;
    const newList: IList = {
      listDate: this.listDate,
      listName: 'ToDo' + `#${currentListLength + 1}`,
      listNumber: currentListLength + 1,
      tasksArr: [],
      listEdit: true,
      listExpand: false
    };
    const updatedListsArr: IList[] = [...this.getLists(), newList];

    this.updateLists(updatedListsArr);
  }

  duplicateList(selectedDupListNumber: number) {
    const selectedList = this.getLists().find(list => list.listNumber === selectedDupListNumber);

    if (selectedList) {
      const dupList: IList = {
        ...selectedList,
        tasksArr: selectedList.tasksArr.map(task => ({ ...task })),
        listNumber: this.getLists().length + 1,
      };
      const updatedListsArr = [...this.getLists(), dupList];

      this.updateLists(updatedListsArr);
    }
  }

  deleteList(selectedDelListNumber: number) {
    const updatedListsArr: IList[] = this.getLists()
      .filter((list: IList): boolean => list.listNumber !== selectedDelListNumber)
      .map((list: IList, index: number) => ({ ...list, listNumber: index + 1 }));

    this.updateLists(updatedListsArr);
  }

  deleteAllList() {
    this.lists$.next([]);
    localStorage.removeItem('lists');
  }

  isListSelected(selectedListNumber: number): boolean {
    return this.getLists()
      .some((list: IList): boolean => list.listNumber === selectedListNumber);
  }

  clearList(selectedClearListNumber: number) {
    const selectedList = this.getLists()
      .find(list => list.listNumber === selectedClearListNumber);
    if (selectedList) {
      selectedList.tasksArr = [];

      const updatedListsArr = [...this.getLists()];
      this.updateLists(updatedListsArr);
    }
  }
}
