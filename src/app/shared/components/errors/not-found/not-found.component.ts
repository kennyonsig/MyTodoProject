import { Component } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterLink],
})
export class NotFoundComponent {
  constructor(private _location: Location) {
  }

  goBack() {
    this._location.back();
  }
}
