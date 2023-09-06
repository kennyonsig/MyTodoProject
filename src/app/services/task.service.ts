import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ITask } from '../model/ITask';
import { ListService } from './list.service';
import { IList } from '../model/IList';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasks$ = new BehaviorSubject<ITask[]>([]);

  constructor(private listService: ListService) {
  }

  getAllTasks() {
    const allTasks: ITask[] = this.listService.getLists()
      .flatMap((list: IList) => list.tasksArr);
    this.tasks$.next(allTasks);
    return this.tasks$.asObservable();
  }

  addTaskToList(taskDescription: string, taskTime: string, listNumber: number) {
    const lists: IList[] = this.listService.getLists();
    const newTask: ITask = {
      taskDescription: taskDescription,
      taskTime: taskTime,
      taskNumber: this.tasks$.getValue().length + 1,
      isTaskCompleted: false,
      isTaskEdit: false
    };
    const updatedTaskArr: ITask[] = [...this.tasks$.getValue(), newTask];
    const list: IList | undefined = lists.find((list) => list.listNumber === listNumber);

    if (list) {
      list.tasksArr.push(newTask);
      this.listService.updateLists(lists);
    }
    this.tasks$.next(updatedTaskArr);
  }

  onTaskRemove(taskNumber: number) {
    const lists = this.listService.getLists();

    lists.forEach((list: IList) => {
      const taskIndex = list.tasksArr.findIndex((task: ITask) => task.taskNumber === taskNumber);
      if (taskIndex !== -1) {
        list.tasksArr.splice(taskIndex, 1);
      }
    });

    this.listService.updateLists(lists);

    const allTasks: ITask[] = lists.flatMap((list: IList) => list.tasksArr);
    this.tasks$.next(allTasks);
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
