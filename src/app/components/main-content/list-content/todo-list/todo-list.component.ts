import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IList } from '../../../../interface/IList';
import { TaskService } from '../../../../services/task.service';
import { ITask } from '../../../../interface/ITask';
import { faEdit } from '@fortawesome/free-solid-svg-icons/faEdit';
import { faCheck } from '@fortawesome/free-solid-svg-icons/faCheck';
import { ListService } from '../../../../services/list.service';
import { Observable } from 'rxjs';
import { FormControl, FormGroup } from '@angular/forms';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { faArrowsV } from '@fortawesome/free-solid-svg-icons/faArrowsV';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  readonly editIcon = faEdit;
  readonly saveIcon = faCheck;
  readonly dragArrowsV = faArrowsV;

  lists$: Observable<IList[]>;
  dateListForm: FormGroup;

  @Output() readonly listSelected = new EventEmitter<number>();

  constructor(
    private taskService: TaskService,
    private listService: ListService,
  ) {
  }

  ngOnInit() {
    this.lists$ = this.listService.lists$;
    this.dateListForm = new FormGroup({
      'presentDate': new FormControl((new Date()).toISOString().substring(0, 10)),
    });
  }

  getCompletedTasksPercent(list: IList): number {
    const totalTasksCount = list.tasksArr.length;
    if (totalTasksCount === 0) {
      return 0;
    }
    const completedTasksCount = list.tasksArr.filter(task => task.isTaskCompleted).length;
    return (completedTasksCount / totalTasksCount) * 100;
  }

  removeTask(task: ITask) {
    this.taskService.onTaskRemove(task.taskNumber, task.isTaskInListNumber);
  }

  editListInfo(list: IList) {
    list.isListEdit = true;
  }

  saveListInfo(list: IList) {
    list.isListEdit = false;
    list.listDeadLine = this.dateListForm.get('presentDate')?.value;
    this.listService.updListInfo(list);
  }

  selectClickList(selectedListNumber: number, list: IList) {
    this.listService.getLists()
      .forEach((list: IList) => list.isListSelected = false);
    list.isListSelected = true;
    this.listSelected.emit(selectedListNumber);
  }

  collapseExpandList(list: IList) {
    list.isListExpand = !list.isListExpand;
    this.listService.updListInfo(list);
  }

  dropTask(event: CdkDragDrop<ITask[]>, list: IList) {
    moveItemInArray(list.tasksArr, event.previousIndex, event.currentIndex);
    this.listService.updListInfo(list);
  }
}
