import { Injectable } from '@angular/core';
import { BehaviorSubject, take } from 'rxjs';
import { ITask } from '../model/ITask';
import { ListService } from './list.service';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private tasks$ = new BehaviorSubject<ITask[]>([]);

  constructor(private listService: ListService) {
  }

  addTaskToList(task: ITask, listNumber: number) {

    this.listService
      .getLists()
      .pipe(take(1))
      .subscribe((lists) => {
        const selectedList = lists.find((list) => list.listNumber === listNumber);
        if (selectedList) {
          selectedList.tasks.push({...task});
          this.listService.updateList(lists);
        }
      });

  }

  addNewTask(taskDescription: string, taskTime: string, listNumber: number) {
    const currentTasks = this.tasks$.getValue();
    const newTask: ITask = {
      id: currentTasks.length + 1,
      taskTime: taskTime,
      taskDescription: taskDescription,
      completed: false,
    };

    this.addTaskToList(newTask, listNumber);
  }

  onTaskRemove(id: number, listNumber: number) {

    this.listService
      .getLists()
      .pipe(take(1))
      .subscribe((lists) => {
        const selectedList = lists.find((list) => list.listNumber === listNumber);
        if (selectedList) {
          const index = selectedList.tasks.findIndex(task => task.id === id);
          if (index !== -1) {
            selectedList.tasks.splice(index, 1);
          }
          this.listService.updateList(lists);
        }
      });

  }

  moveTask(event: CdkDragDrop<ITask[]>) {
    const tasks = this.tasks$.getValue();
    moveItemInArray(tasks, event.previousIndex, event.currentIndex);

  }


}
