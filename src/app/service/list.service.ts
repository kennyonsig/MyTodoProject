import { Injectable } from '@angular/core';
import { todoList } from '../data/todoList';
import { BehaviorSubject, Observable, take } from 'rxjs';
import { IList } from '../model/IList';

@Injectable({
  providedIn: 'root'
})
export class ListService {

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
}
