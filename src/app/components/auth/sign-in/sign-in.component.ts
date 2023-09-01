import { Component, OnDestroy } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { faLock, faUnlock } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnDestroy {
  email = '';
  password = '';
  errorAuth: string;
  showHidePassword = 'password';
  lockIcon = faLock;

  private loginSubscription: Subscription;

  constructor(private authService: AuthService, private router: Router) {
  }

  login() {
    this.loginSubscription = this.authService.checkLogin(this.email, this.password)
      .subscribe((result: boolean) => {
        if (result) {

          this.router.navigate(['/profile-page']);
        } else {
          this.errorAuth = 'Invalid email or password';
          console.log('Invalid email or password');
        }
      });
  }

  ngOnDestroy() {
    if (this.loginSubscription) {
      this.loginSubscription.unsubscribe();
    }
  }

  toggleShowHidePassword() {
    this.showHidePassword = this.showHidePassword === 'password' ? 'text' : 'password';
    this.lockIcon = this.lockIcon === faLock ? faUnlock : faLock;
  }
}

/*
email = 'mor_2314';
password = '83r5^_';

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
*/

