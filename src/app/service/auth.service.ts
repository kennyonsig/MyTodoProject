import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'https://fakestoreapi.com/auth/login';

  constructor(private router: Router,
              private http: HttpClient) {
  }

  checkLogin(username: string, password: string) {
    return this.http.post<string>(`${this.apiUrl}`, {username, password});
  };

}
