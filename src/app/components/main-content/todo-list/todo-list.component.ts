import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IList } from '../../../model/IList';
import { TaskService } from '../../../services/task.service';
import { ITask } from '../../../model/ITask';

import { faArrows } from '@fortawesome/free-solid-svg-icons/faArrows';
import { faEdit } from '@fortawesome/free-solid-svg-icons/faEdit';
import { faCheck } from '@fortawesome/free-solid-svg-icons/faCheck';
import { ListService } from '../../../services/list.service';
import { Observable } from 'rxjs';
import { FormControl, FormGroup } from '@angular/forms';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  readonly dragIcon = faArrows;
  readonly editIcon = faEdit;
  readonly saveIcon = faCheck;

  lists$: Observable<IList[]>;
  dateListForm: FormGroup;
  @Output() readonly listSelected = new EventEmitter<number>();

  constructor(
    private taskService: TaskService,
    private listService: ListService,
  ) {
  }

  getCompletedTasksPercentage(list: IList): number {
    const totalTasksCount = list.tasksArr.length;
    if (totalTasksCount === 0) {
      return 100;
    }
    const completedTasksCount = list.tasksArr.filter(task => task.isTaskCompleted).length;
    return (completedTasksCount / totalTasksCount) * 100;
  }

  ngOnInit() {
    this.lists$ = this.listService.lists$;
    this.dateListForm = new FormGroup({
      'presentDate': new FormControl((new Date()).toISOString().substring(0, 10)),
    });

  }

  removeTask(task: ITask, listNumber: number) {
    this.taskService.onTaskRemove(task.taskNumber, listNumber);
  }

  editListInfo(list: IList) {
    list.isListEdit = true;
  }

  saveListInfo(list: IList) {
    list.isListEdit = false;
    list.listDeadLine = this.dateListForm.get('presentDate')?.value;
    this.listService.updListInfo(list);
  }

  collapseExpandList(list: IList) {
    list.isListExpand = !list.isListExpand;
    this.listService.updListInfo(list);
  }

  selectClickList(selectedListNumber: number, list: IList) {
    this.listService.getLists()
      .forEach((list: IList) => list.isListSelected = false);
    list.isListSelected = true;
    this.listSelected.emit(selectedListNumber);
  }

  drop(event: CdkDragDrop<ITask[]>, list: IList) {
    moveItemInArray(list.tasksArr, event.previousIndex, event.currentIndex);
    this.listService.updListInfo(list);
  }
}


