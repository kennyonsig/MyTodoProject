import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-list-page-btn',
  templateUrl: './list-page-btn.component.html',
  styleUrls: ['./list-page-btn.component.scss']
})
export class ListPageBtnComponent {
  @Output() readonly changeComponentEvent = new EventEmitter<string>();

  selectedComponent(component: string) {
    this.changeComponentEvent.emit(component);
  }
}
