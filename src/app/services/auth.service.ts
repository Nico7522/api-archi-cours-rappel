import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject, catchError, tap, throwError } from 'rxjs';
import { RegisterForm, User } from '../models/user.model';
import * as jwt_decode from 'jwt-decode';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  get isTokenExist(): boolean {
    return localStorage.getItem('token') != undefined;
  }

  isTokenExistSub: Subject<boolean> = new Subject<boolean>();

  emitTokenExist() {
    this.isTokenExistSub.next(this.isTokenExist);
  }
  private _url = 'https://localhost:7200/api';
  constructor(private _client: HttpClient, private _router: Router) {}

  login(email: string, password: string) {
    this._client
      .post(
        `${this._url}/auth/login`,
        { email, password },
        { responseType: 'text' }
      )
      .subscribe({
        next: (token: string) => {
          console.log(token);
          localStorage.setItem('token', token);
          this.emitTokenExist();
          this._router.navigate(['/movie']);
        },
      });
  }

  register(user: RegisterForm): Observable<any> {
    return this._client.post<any>(`${this._url}/auth/register`, { ...user });
  }

  logout() {
    localStorage.removeItem('token');
    this.emitTokenExist();
  }

  getAll(): Observable<User[]> {
    // let myheader: HttpHeaders = new HttpHeaders({
    //   authorization: 'bearer ' + localStorage.getItem('token'),
    // });
    return this._client.get<User[]>(`${this._url}/auth`).pipe(
      tap((_) => console.log('ok')),
      catchError((err, user) => {
        console.log(err);
        return throwError(() => err);
      })
    );
  }

  readToken() {
    let token: string = localStorage.getItem('token') ?? '';

    let jwt: any = jwt_decode.jwtDecode(token);
    console.log(jwt);
    console.log(
      jwt['http://schemas.microsoft.com/ws/2008/06/identity/claims/role']
    );
  }

  checkIsAdmin(): boolean {
    let token: string = localStorage.getItem('token') ?? '';

    let jwt: any = jwt_decode.jwtDecode(token);
    return (
      jwt['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'] ===
      'Admin'
    );
  }
}
