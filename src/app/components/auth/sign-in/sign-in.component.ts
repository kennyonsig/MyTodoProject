import { Component } from '@angular/core';
import { AuthService } from '../../../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],

})
export class SignInComponent {
  email = '';
  password = '';


  constructor(private authService: AuthService, private router: Router) {
  }


  login(username: string, password: string) {
    this.authService.checkLogin(username, password).subscribe({
      next: response => {
        this.router.navigate(['/profilePage']).then();
      },
      error: error => {
        alert('false auth');
        console.error(error);
      }
    });
  }


}
