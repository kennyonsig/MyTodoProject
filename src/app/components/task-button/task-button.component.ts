import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListService } from '../../service/list.service';

@Component({
  selector: 'app-task-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task-button.component.html',
  styleUrls: ['./task-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TaskButtonComponent {

  constructor(private listService: ListService) {
  }

  addNewToDoList() {
    this.listService.addNewList();
  }

  duplicateListNumber() {
    console.log('duplicatedList');
  }

  deleteListNumber() {
    console.log('deleteListNumber');
  }

  deleteAllList() {
    this.listService.deleteAllList();
  }

}
