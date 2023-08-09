import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ITask } from '../model/ITask';
import { IList } from '../model/IList';
import { ListService } from './list.service';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  lists$: BehaviorSubject<IList[]>;
  private tasks$ = new BehaviorSubject<ITask[]>([]);

  constructor(private listService: ListService) {
  }

  addTaskToList(taskDescription: string, taskTime: string, listNumber: number) {
    this.lists$ = this.listService.getLists();
    // Получение текущего количества задач в списке
    const currentTaskInList = this.tasks$.getValue().length;
    const newTask: ITask = {
      taskDescription: taskDescription,
      taskTime: taskTime,
      taskNumber: currentTaskInList + 1,
      completed: false
    };
    // Создание поверхностной копии текущего массива задач
    const currentTaskArr = this.tasks$.getValue();
    const updatedTaskArr = [...currentTaskArr, newTask];
    //поиск списка по номеру
    const list = this.lists$.getValue().find((list) => list.listNumber === listNumber);
    // Если список существует, добавляем новую задачу и обновляем значение списка
    if (list) {
      list.tasksArr.push(newTask);
      this.lists$.next(this.lists$.getValue());
    }
    this.tasks$.next(updatedTaskArr);
  }

  onTaskRemove(taskNumber: number, listNumber: number) {
    const list = this.lists$.getValue().find((list) => list.listNumber === listNumber);

    if (list) {
      const taskIndex = list.tasksArr.findIndex(task => task.taskNumber === taskNumber);
      if (taskIndex !== -1) {
        list.tasksArr.splice(taskIndex, 1);
        this.lists$.next(this.lists$.getValue());
      }
    }
  }
}
