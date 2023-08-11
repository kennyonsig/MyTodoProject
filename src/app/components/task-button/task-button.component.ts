import { Component } from '@angular/core';
import { ListService } from '../../service/list.service';

@Component({
  selector: 'app-task-button',
  templateUrl: './task-button.component.html',
  styleUrls: ['./task-button.component.scss'],

})

export class TaskButtonComponent {
  selectedDupListNumber: number;
  selectedDelListNumber: number;
  findValue: string;

  constructor(private listService: ListService) {

  }

  addNewToDoList() {
    this.listService.addNewList();
  }

  duplicateListNumber(selectedDupListNumber: number) {
    this.listService.duplicateList(selectedDupListNumber);
  }

  deleteListNumber(selectedDelListNumber: number) {
    this.listService.deleteList(selectedDelListNumber);
  }

  deleteAllList() {
    this.listService.deleteAllList();
  }

  findInput() {

    
    console.log(this.findValue);
  }
}
