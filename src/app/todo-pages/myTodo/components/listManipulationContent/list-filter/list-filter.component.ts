import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-list-filter',
  templateUrl: './list-filter.component.html',
  styleUrls: ['./list-filter.component.scss']
})
export class ListFilterComponent {
  @Output() listFilterChange = new EventEmitter<boolean>();

  onListFilterChange(event: Event) {
    const checked = (event.target as HTMLInputElement).checked;
    this.listFilterChange.emit(checked);
  }
}
