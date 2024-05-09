import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environments } from '../../../environments/environments';
import { User } from '../interfaces/user.interface';
import { Observable, catchError, map, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = environments.baseUrl;
  private user?: User;

  constructor(private http: HttpClient) { }

  get currentUser(): User | undefined {
    if (!this.user) return undefined;
    return structuredClone(this.user);
  }

  login(user: string, password: string): Observable<User | undefined> {
    return this.http.get<User>(`${this.baseUrl}/users/1`)
      .pipe(
        tap(user => this.user = user),
        tap(user => localStorage.setItem('token', JSON.stringify(user.id.toString()))),
      )
  }

  logout(): void {
    this.user = undefined;
    localStorage.removeItem('token');
  }

  checkAuthentication(): Observable<boolean> | boolean {
    if (!localStorage.getItem('token')) return false;

    return this.http.get<User>(`${this.baseUrl}/users/1`)
      .pipe(
        tap(user => this.user = user),
        map(user => !!user),
        catchError(() => of(false))
      )
  }
}
