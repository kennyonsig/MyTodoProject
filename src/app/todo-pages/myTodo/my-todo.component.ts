import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-todo',
  templateUrl: './my-todo.component.html',
  styleUrls: ['./my-todo.component.scss']
})
export class MyTodoComponent {
  constructor(private router: Router) {
  }

  isDefaultPath(): boolean {
    return this.router.url === '/my-todo';
  }
}
