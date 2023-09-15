import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { matchPassword } from '../matchpassword.validator';
import { IUsersAuth } from '../../../interface/IUsersAuth';
import { AuthService } from '../auth.service';
import { faLock, faUnlock } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  showHidePassword = 'password';
  email = 'sds';
  loginForm: FormGroup;
  successReg = false;
  lockIcon = faLock;

  constructor(private authService: AuthService) {
  }

  ngOnInit() {
    this.loginForm = new FormGroup({
        email: new FormControl(null, [Validators.required]),
        password: new FormControl(null, [Validators.required]),
        repeatPassword: new FormControl(null, [Validators.required])
      },
      {validators: matchPassword});
  }

  signUp() {
    const { email, password } = this.loginForm.value;
    const user: IUsersAuth = {
      userEmail: email,
      userPassword: password,
      userToken: Math.random().toString()
    };
    this.authService.saveUser(user);
    this.successReg = true;
  }

  toggleShowHidePassword() {
    this.showHidePassword = this.showHidePassword === 'password' ? 'text' : 'password';
    this.lockIcon = this.lockIcon === faLock ? faUnlock : faLock;
  }
}
