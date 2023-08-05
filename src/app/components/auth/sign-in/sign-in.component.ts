import { Component } from '@angular/core';
import { AuthService } from '../../../service/auth.service';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
  standalone: true,
  imports: [FormsModule, RouterModule, ReactiveFormsModule]
})
export class SignInComponent {
  email = '';
  password = '';


  constructor(private authService: AuthService) {


  }

  onLoginClick(email: string, password: string) {
    this.authService.login(email, password);
  }


}
