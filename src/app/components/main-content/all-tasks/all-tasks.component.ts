import { Component, OnDestroy, OnInit } from '@angular/core';
import { ITask } from '../../../interface/ITask';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Subscription } from 'rxjs';
import { TaskService } from '../../../services/task.service';
import { faArrowsV } from '@fortawesome/free-solid-svg-icons/faArrowsV';


@Component({
  selector: 'app-all-tasks',
  templateUrl: './all-tasks.component.html',
  styleUrls: ['./all-tasks.component.scss'],
})
export class AllTasksComponent implements OnInit, OnDestroy {
  allTasks: ITask[];
  readonly dragArrowsV = faArrowsV;
  private tasksSubscription: Subscription;

  constructor(private taskService: TaskService) {
  }

  ngOnInit() {
    this.tasksSubscription = this.taskService.getAllTasks().subscribe(
      (tasks: ITask[]) => {
        this.allTasks = tasks;
      }
    );
    console.table(this.allTasks);
  }

  dropTask(event: CdkDragDrop<ITask[]>) {
    moveItemInArray(this.allTasks, event.previousIndex, event.currentIndex);
  }

  getCompletedTasksPercent(): number {
    const totalTasksCount = this.allTasks.length;
    if (totalTasksCount === 0) {
      return 100;
    }
    const completedTasksCount = this.allTasks.filter((task: ITask) => task.isTaskCompleted).length;
    return (completedTasksCount / totalTasksCount) * 100;
  }

  removeTask(task: ITask) {
    this.taskService.onTaskRemove(task.taskNumber, task.isTaskInListNumber);
  }

  completeTask(task: ITask) {
    this.taskService.onTaskCompleted(task.taskNumber, task.isTaskInListNumber);
  }

  editTaskInfo(task: ITask) {
    this.taskService.onTaskEdit(task.taskNumber, task.isTaskInListNumber);
  }

  saveTaskInfo(task: ITask) {
    this.taskService.onTaskSave(task.taskNumber, task.isTaskInListNumber);
  }

  ngOnDestroy() {
    this.tasksSubscription?.unsubscribe();
  }
}
