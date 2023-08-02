import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isUserLoggedIn = false;

  login(email: string, password: string) {
    if (email === '1' && password === '1') {
      this.isUserLoggedIn = true;

    }
  };

}
