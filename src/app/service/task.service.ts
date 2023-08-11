import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ITask } from '../model/ITask';
import { ListService } from './list.service';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasks$ = new BehaviorSubject<ITask[]>([]);

  constructor(private listService: ListService) {
  }

  addTaskToList(taskDescription: string, taskTime: string, listNumber: number) {
    const lists = this.listService.getLists();
    const newTask: ITask = {
      taskDescription: taskDescription,
      taskTime: taskTime,
      taskNumber: this.tasks$.getValue().length + 1,
      taskCompleted: false,
      taskEdit: false
    };
    const updatedTaskArr = [...this.tasks$.getValue(), newTask];
    const list = lists.find((list) => list.listNumber === listNumber);

    if (list) {
      list.tasksArr.push(newTask);
      this.listService.updateLists(lists);
    }
    this.tasks$.next(updatedTaskArr);
  }

  onTaskRemove(taskNumber: number, listNumber: number) {
    const lists = this.listService.getLists();
    const list = lists.find((list) => list.listNumber === listNumber);

    if (list) {
      const taskIndex = list.tasksArr.findIndex(task => task.taskNumber === taskNumber);
      if (taskIndex !== -1) {
        list.tasksArr.splice(taskIndex, 1);
        this.listService.updateLists(lists);
      }
    }
  }

  updTaskInfo(updTaskInfo: ITask) {
    const updatedTaskArr: ITask[] = this.tasks$.getValue().map((currentTask: ITask) =>
      currentTask.taskNumber === updTaskInfo.taskNumber
        ? updTaskInfo
        : currentTask
    );
    this.tasks$.next(updatedTaskArr);
    this.listService.updateLists(this.listService.getLists());
  }
}
