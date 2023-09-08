import { Component, Input } from '@angular/core';
import { ListService } from '../../../../services/list.service';
import { IList } from '../../../../interface/IList';
import { faStar } from '@fortawesome/free-regular-svg-icons';


@Component({
  selector: 'app-list-btn',
  templateUrl: './list-btn.component.html',
  styleUrls: ['./list-btn.component.scss']
})
export class ListBtnComponent {
  @Input() listNumber: number;
  @Input() dateOfCreation: Date;
  starIcon = faStar;
  list: IList;
  isStarFilled: boolean = false;

  constructor(private listService: ListService) {
  }

  dupList() {
    this.listService.duplicateList(this.listNumber);
  }

  delList() {
    this.listService.deleteList(this.listNumber);
  }

  clearList() {
    this.listService.clearList(this.listNumber);
  }
}
