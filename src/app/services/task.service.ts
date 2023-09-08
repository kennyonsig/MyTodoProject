import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ITask } from '../interface/ITask';
import { ListService } from './list.service';
import { IList } from '../interface/IList';

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
      taskDescription,
      taskTime,
      taskNumber: this.tasks$.getValue().length + 1,
      isTaskCompleted: false,
      isTaskEdit: false,
      isTaskInListNumber: listNumber
    };
    const updatedTaskArr: ITask[] = [...this.tasks$.getValue(), newTask];

    const list: IList | undefined = lists.find((list: IList) => list.listNumber === listNumber);
    if (list) {
      list.tasksArr.push(newTask);
      this.listService.updateLists(lists);
    }
    this.tasks$.next(updatedTaskArr);
  }

  // Удаление задачи
  onTaskRemove(taskNumber: number, isTaskInListNumber: number) {
    const lists: IList[] = this.listService.getLists();

    lists.forEach((list: IList) => {
      if (list.listNumber === isTaskInListNumber) {
        const taskIndex = list.tasksArr.findIndex((task: ITask) => task.taskNumber === taskNumber);
        if (taskIndex !== -1) {
          list.tasksArr.splice(taskIndex, 1);
        }
      }
    });

    this.listService.updateLists(lists);

    this.updateTasks(lists);
  }

  // Выполнение отмена выполнения задачи
  onTaskCompleted(taskNumber: number, isTaskInListNumber: number) {
    const lists: IList[] = this.listService.getLists();

    lists.forEach((list: IList) => {
      if (list.listNumber === isTaskInListNumber) {
        const taskIndex = list.tasksArr.findIndex((task: ITask) => task.taskNumber === taskNumber);
        if (taskIndex !== -1) {
          list.tasksArr[taskIndex].isTaskCompleted = !list.tasksArr[taskIndex].isTaskCompleted;
          this.listService.updateLists(lists);
        }
      }
    });

    this.updateTasks(lists);
  }

  // Изменение флажка
  onTaskEdit(taskNumber: number, isTaskInListNumber: number) {
    const lists: IList[] = this.listService.getLists();

    lists.forEach((list: IList) => {
      if (list.listNumber === isTaskInListNumber) {
        const taskIndex = list.tasksArr.findIndex((task: ITask) => task.taskNumber === taskNumber);
        list.tasksArr[taskIndex].isTaskEdit = true;
      }
    });
  }

// Сохранение данных в задаче
  onTaskSave(taskNumber: number, isTaskInListNumber: number) {
    const lists: IList[] = this.listService.getLists();

    lists.forEach((list: IList) => {
      const taskIndex = list.tasksArr.findIndex((task: ITask) => task.taskNumber === taskNumber);
      if (list.listNumber === isTaskInListNumber) {
        const updatedTask = {...list.tasksArr[taskIndex], isTaskEdit: false};
        list.tasksArr[taskIndex] = updatedTask;
        this.updTaskInfo(updatedTask);
      }
    });
    this.updateTasks(lists);
  }

  // Обновление информации в задачах
  updTaskInfo(updTaskInfo: ITask) {
    const updatedTaskArr: ITask[] = this.tasks$.getValue().map((currentTask: ITask) =>
      currentTask.taskNumber === updTaskInfo.taskNumber
        ? updTaskInfo
        : currentTask
    );
    this.tasks$.next(updatedTaskArr);
    this.listService.updateLists(this.listService.getLists());
  }

  //Обнолвение задачи для  all-tasks.component
  private updateTasks(lists: IList[]) {
    // Объединение массивов задач из списков в один массив
    const allTasks: ITask[] = lists.flatMap((list: IList) => list.tasksArr);
    this.tasks$.next(allTasks);
  }
}
