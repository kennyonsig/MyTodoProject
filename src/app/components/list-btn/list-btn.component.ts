import { Component, Input } from '@angular/core';
import { ListService } from '../../service/list.service';
import { IList } from '../../model/IList';

@Component({
  selector: 'app-list-btn',
  templateUrl: './list-btn.component.html',
  styleUrls: ['./list-btn.component.scss']
})
export class ListBtnComponent {
  @Input() listNumber: number;

  list: IList;

  constructor(private listService: ListService) {
  }


  dupList(){
    this.listService.duplicateList(this.listNumber)
  }

  delList(){
    this.listService.deleteList(this.listNumber)
  }

  clearList(){
    this.listService.clearList(this.listNumber)
  }
}
