import { Component, Input } from '@angular/core';
import { ListService } from '../../../../services/list.service';
import { faList } from '@fortawesome/free-solid-svg-icons/faList';


@Component({
  selector: 'app-list-btn',
  templateUrl: './list-btn.component.html',
  styleUrls: ['./list-btn.component.scss']
})
export class ListBtnComponent {
  readonly listIcon = faList;

  @Input() listNumber: number;
  @Input() dateOfCreation: Date;
  isStarActive = false;
  screenWidth = window.innerWidth;
  isDropdownOpen = false;

  constructor(private listService: ListService) {
    window.addEventListener('resize', this.handleResize);
  }

  handleResize = () => {
    this.screenWidth = window.innerWidth;
  };

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  toggleStar() {
    this.isStarActive = !this.isStarActive;
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
