import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'https://fakestoreapi.com/auth/login';

  constructor(private http: HttpClient) {
  }

  checkLogin(username: string, password: string): Observable<any> {

    return this.http.post<string>(`${this.apiUrl}`, { username, password });
  };

}

