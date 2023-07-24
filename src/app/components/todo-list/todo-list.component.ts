import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { IList } from '../../model/IList';
import { TaskService } from '../../service/task.service';
import { ListService } from '../../service/list.service';
import { ITask } from '../../model/ITask';
import { CdkDrag, CdkDragDrop, CdkDragPlaceholder, CdkDropList } from '@angular/cdk/drag-drop';
import { TaskComponent } from '../task/task.component';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrows } from '@fortawesome/free-solid-svg-icons/faArrows';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [CommonModule, CdkDropList, TaskComponent, FormsModule, CdkDrag, CdkDragPlaceholder, FontAwesomeModule],
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoListComponent implements OnInit {

  dragIcon = faArrows;

  listName = 'Enter a name';
  lists$: Observable<IList[]>;

  constructor(
    private taskService: TaskService,
    private listService: ListService
  ) {
  }

  ngOnInit() {
    this.lists$ = this.listService.getLists();
  }

  removeTask(task: ITask, listNumber: number) {
    this.taskService.onTaskRemove(task.id, listNumber);
  }

  moveTask(event: CdkDragDrop<ITask[]>) {
    this.taskService.moveTask(event);
  }

}
