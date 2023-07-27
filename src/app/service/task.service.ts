import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, Subscription, take } from 'rxjs';
import { ITask } from '../model/ITask';
import { ListService } from './list.service';
import { taskList } from '../data/taskList';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Injectable({
  providedIn: 'root'
})
export class TaskService implements OnDestroy {

  private subscription: Subscription;

  private tasks$ = new BehaviorSubject<ITask[]>([]);

  constructor(private listService: ListService) {
    this.tasks$.next(taskList);
  }

  addTaskToList(task: ITask, listNumber: number) {
    // Получение списка по выбранному номеру
    this.listService
      .getLists()
      .pipe(take(1))
      .subscribe((lists) => {
        const selectedList = lists.find(
          (list) => list.listNumber === listNumber
        );

        if (selectedList) {
          // Добавление задачи в выбранный список

          selectedList.tasks.push({...task});

          // обновление состояния списка задач
          this.listService.updateList(lists);
        }
      });
  }

  addNewTask(taskName: string, taskTime: string, listNumber: number) {
    const currentTasks = this.tasks$.getValue();
    const newTask: ITask = {
      id: currentTasks.length + 1,
      time: taskTime,
      description: taskName,
      completed: false,
    };

    this.addTaskToList(newTask, listNumber);
  }

  onTaskRemove(id: number, listNumber: number) {
    this.listService
      .getLists()
      .pipe(take(1))
      .subscribe((lists) => {
        const selectedList = lists.find(
          (list) => list.listNumber === listNumber
        );

        if (selectedList) {
          const taskToRemove = selectedList.tasks.find(task => task.id === id);
          if (taskToRemove) {
            selectedList.tasks.splice(selectedList.tasks.indexOf(taskToRemove), 1);
          }
          this.listService.updateList(lists);
        }
      });
  }

  moveTask(event: CdkDragDrop<ITask[]>) {
    const tasks = this.tasks$.getValue();
    moveItemInArray(tasks, event.previousIndex, event.currentIndex);
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
