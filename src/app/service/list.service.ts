import { Injectable } from '@angular/core';
import { todoList } from '../data/todoList';
import { BehaviorSubject, Observable, take } from 'rxjs';
import { IList } from '../model/IList';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  listName: string = 'Enter a list name';
  private lists$ = new BehaviorSubject<IList[]>([]);

  constructor() {
    this.lists$.next(todoList);
  }

  getLists(): Observable<IList[]> {
    return this.lists$;
  }

  addNewList() {
    this.lists$.pipe(take(1)).subscribe((currentList: IList[]) => {
      const currentListLength = currentList.length;

      const newList: IList = {
        listName: this.listName,
        listNumber: currentListLength + 1,
        tasks: [],
      };

      const updateList: IList[] = [...currentList, newList];
      this.lists$.next(updateList);
    });
  }

  deleteAllList() {
    this.lists$.next([]);
  }

  updateList(lists: IList[]) {
    this.lists$.next(lists);
  }

  duplicateList(selectedDupListNumber: number) {
    this.lists$.pipe(take(1)).subscribe((currentList: IList[]) => {
      const currentListLength = currentList.length;

      const fillTasks = [...currentList[selectedDupListNumber - 1].tasks];

      const duplicateList: IList = {
        listName: this.listName,
        listNumber: currentListLength + 1,
        tasks: fillTasks,

      };

      const updateList: IList[] = [...currentList, duplicateList];
      this.lists$.next(updateList);
    });
  }

  deleteList(selectedDelListNumber: number) {
    this.lists$.pipe(take(1)).subscribe((currentList: IList[]) => {
      const updateList: IList[] = currentList
        .filter((list: IList) => list.listNumber !== selectedDelListNumber);
      updateList.forEach((list: IList, index: number) => list.listNumber = index + 1);
      this.lists$.next(updateList);
    });
  }
}
