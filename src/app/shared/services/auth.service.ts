import { Injectable } from '@angular/core';
import { IUsersAuth } from '../interface/IUsersAuth';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedInValue: boolean;

  constructor(private router: Router) {
    this.isLoggedInValue = !!localStorage.getItem('token');
  }

  isLoggedIn() {
    return this.isLoggedInValue;
  }

  checkLogin(email: string, password: string): Observable<boolean> {
    const storedUsers = localStorage.getItem('users');
    const users: Array<IUsersAuth> = storedUsers ? JSON.parse(storedUsers) : [];
    const foundUser = users.find((user) => user.userEmail === email && user.userPassword === password);

    if (foundUser?.userToken) {
      this.isLoggedInValue = true;
      localStorage.setItem('token', foundUser.userToken);
    }

    return of(foundUser?.userToken !== undefined);
  }


  logOut() {
    this.isLoggedInValue = false;
    localStorage.removeItem('token');
    this.router.navigate(['/sign-in']);
  }

  getUsers(): IUsersAuth[] {
    const users = localStorage.getItem('users');
    return users ? JSON.parse(users) : [];
  }

  saveUser(user: IUsersAuth) {
    const users = this.getUsers();
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));
  }
}

/*
              sending data to the server
  private apiUrl = 'https://fakestoreapi.com/auth/login';
  constructor(private http: HttpClient) {}

  checkLogin(username: string, password: string): Observable<any> {
    return this.http.post<string>(`${this.apiUrl}`, { username, password });
  };

  */

/* sending data to the "server" */
