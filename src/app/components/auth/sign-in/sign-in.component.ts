import { Component } from '@angular/core';
import { AuthService } from '../../../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent {
  email = 'mor_2314';
  password = '83r5^_';

  errorAuth: string;

  constructor(private authService: AuthService, private router: Router) {
  }

  login() {
    this.authService.checkLogin(this.email, this.password).subscribe({
      next: () => {
        this.router.navigate(['/profilePage']).then();
      },
      error: error => {
        this.errorAuth = 'False auth';
        console.error(error);
      }
    });
  }
}
