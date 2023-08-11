import { Component, OnInit } from '@angular/core';
import { IList } from '../../model/IList';
import { TaskService } from '../../service/task.service';
import { ITask } from '../../model/ITask';

import { faArrows } from '@fortawesome/free-solid-svg-icons/faArrows';
import { faEdit } from '@fortawesome/free-solid-svg-icons/faEdit';
import { faCheck } from '@fortawesome/free-solid-svg-icons/faCheck';
import { ListService } from '../../service/list.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  dragIcon = faArrows;
  editIcon = faEdit;
  saveIcon = faCheck;

  lists$: Observable<IList[]>;

  constructor(
    private taskService: TaskService,
    private listService: ListService,
  ) {
  }

  ngOnInit() {
    this.lists$ = this.listService.lists$;
  }

  removeTask(task: ITask, listNumber: number) {
    this.taskService.onTaskRemove(task.taskNumber, listNumber);
  }

  editListInfo(list: IList) {
    list.listEdit = true;
  }

  saveListInfo(list: IList) {
    list.listEdit = false;
    this.listService.updListInfo(list);
  }
}
