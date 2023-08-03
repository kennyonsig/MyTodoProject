import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isUserLoggedIn = false;

  constructor(private router: Router) {

    
  }

  login(email: string, password: string) {
    if (email === '1' && password === '1') {
      this.isUserLoggedIn = true;
      this.router.navigate(['/profilePage']);
    } else {
      alert('false auth');
    }
  };

}
