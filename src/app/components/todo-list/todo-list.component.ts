import { Component, OnInit } from '@angular/core';
import { IList } from '../../model/IList';
import { TaskService } from '../../service/task.service';
import { ITask } from '../../model/ITask';

import { faArrows } from '@fortawesome/free-solid-svg-icons/faArrows';
import { faEdit } from '@fortawesome/free-solid-svg-icons/faEdit';
import { faCheck } from '@fortawesome/free-solid-svg-icons/faCheck';
import { Observable } from 'rxjs';
import { ListService } from '../../service/list.service';

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

  isListEditing = true;

  constructor(
    private taskService: TaskService,
    private listService: ListService,
  ) {
  }

  ngOnInit() {
    this.lists$ = this.listService.getLists();
  }

  removeTask(task: ITask, listNumber: number) {
    this.taskService.onTaskRemove(task.taskNumber, listNumber);
  }

  editListInfo() {
    this.isListEditing = !this.isListEditing;
  }

}
