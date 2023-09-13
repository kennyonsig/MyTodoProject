import { Component, OnInit } from '@angular/core';
import { TaskService } from './todo-pages/myTodo/services/task.service';
import { AuthService } from './shared/services/auth.service';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  checkPath = false;
  excludedPaths = ['/sign-in', '/sign-up', '/404'];

  constructor(private taskService: TaskService,
              private authService: AuthService,
              private router: Router) {
  }

  ngOnInit() {
    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        const currentUrl = this.router.routerState.snapshot.url;
        this.checkPath = this.excludedPaths.includes(currentUrl);
      });
  }

  doLogOut() {
    this.authService.logOut();
  }
}
