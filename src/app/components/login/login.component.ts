import { Component } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],

})
export class LoginComponent {

  email = '';
  password = '';

  constructor(private authService: AuthService, private router: Router) {
  }

  onLoginClick(email: string, password: string) {
    this.authService.login(email, password);

  }

}
