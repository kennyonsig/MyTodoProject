import { Component, ElementRef, HostListener, Input, ViewChild } from '@angular/core';
import { ListService } from '../../../services/list.service';
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
  @Input() numberOfTasks: number;

  isDropdownOpen = false;
  isStarActive = false;
  @ViewChild('actionBlock') actionBlock: ElementRef;

  constructor(private listService: ListService) {
  }

  @HostListener('document:click', ['$event'])
  onClick(event: MouseEvent) {
    const isClickedInside = this.actionBlock.nativeElement.contains(event.target);
    if (!isClickedInside) {
      this.closeDropdown();
    }
  }

  closeDropdown() {
    this.isDropdownOpen = false;
  }

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
