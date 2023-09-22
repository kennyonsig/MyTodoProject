import { Component } from '@angular/core';
import { AuthService } from './shared/components/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private authService: AuthService) {
  }

  isLogin() {
    return this.authService.isLoggedIn();
  }

  doLogOut() {
    this.authService.logOut();
  }
}
