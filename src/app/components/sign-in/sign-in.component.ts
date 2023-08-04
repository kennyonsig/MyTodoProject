import { Component } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {
  email = '';
  password = '';

  constructor(private authService: AuthService, private router: Router) {
  }

  onLoginClick(email: string, password: string) {
    this.authService.login(email, password);

  }
}
