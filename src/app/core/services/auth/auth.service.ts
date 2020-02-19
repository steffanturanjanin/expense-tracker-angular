import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

import { User } from '../../../shared/models/user/user';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private API_URL = environment.API_URL;

  constructor(private http: HttpClient) { }

  getToken(): string {
    return localStorage.getItem('token');
  }

  logIn(email: string, password: string): Observable<any> {
    return this.http.post<User>('http://localhost:8000/api/auth/login', {email, password});
  }

  signUp(email: string, password: string) {
    return this.http.post<{user: User, token: string}>('http://localhost:8000/api/auth/signup', {email, password}, { observe: 'response'});
  }

  getAuthenticatedUser() {
    return this.http.get<User>('http://localhost:8000/api/auth/user');
  }

  logout(): Observable<any> {
    return this.http.post<any>('http://localhost:8000/api/auth/logout', {});
  }
}
