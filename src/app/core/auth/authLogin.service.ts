import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { catchError, tap } from 'rxjs/operators';
import { throwError, BehaviorSubject } from 'rxjs';
import { User } from '../models/user.model';
import { Router } from '@angular/router';

export interface AuthLoginResponse {
  "user": {
    "id": string,
    "username": string,
    "email": string,
    "kind": string,
    "token": string,
    "expiresIn": string    
  },
  "message": String,
  "status": Boolean
}

export interface AuthSignupResponse {
  "message": String,
  "status": Boolean
}


@Injectable({
  providedIn: 'root'
})

export class AuthLoginService {

  user = new BehaviorSubject<User>(null);
  tokenExpirationTimer: any;

  constructor(private http: HttpClient, private router: Router) { }

  login(loginData) {
    return this.http.post<AuthLoginResponse>( environment.base_api_uri+ 'signin',loginData).pipe(catchError(this.handleError), tap(res => {
      this.handleAuthentication(res.user.id, res.user.email, res.user.token, +res.user.expiresIn, res.user.kind );
    }));
  } 

  signup(signupData) {
    return this.http.post<AuthSignupResponse>(environment.base_api_uri + 'signup', signupData);
  }

  private handleAuthentication(id:string, email: string, token: string, expiresIn: number, kind: string) {
    const expirationDate = new Date(new Date().getTime() + expiresIn);
    const user = new User(
      id, 
      email, 
      token,  
      expirationDate,
      kind
    );

    this.user.next(user); 
    this.autoLogout(expiresIn);
    localStorage.setItem('userData', JSON.stringify(user));
    

  }

  autoLogin() {
    const userData = JSON.parse(localStorage.getItem('userData'));
    if(!userData) {
      return 
    }

    const loadedUser = new User( userData.id, userData.email, userData._token, new Date(userData._tokenExpirationDate), userData.kind)

    if(loadedUser.token) {
      let tokenExpirationDate = new Date(userData._tokenExpirationDate).getTime() - new Date().getTime();
      this.autoLogout(tokenExpirationDate);
      this.user.next(loadedUser);
    }
  }

  private handleError(err: HttpErrorResponse) {
    let errorMessage = 'An Unknown Error Occured!';
    if (!err.error) {
      return throwError(errorMessage);
    }
    switch(err.error) {
      case 'EMAIL_EXISTS':
        errorMessage = 'This email is already exists';
        break;
      case 'EMAIL_NOT_FOUND':
        errorMessage = 'This email does not exists';
        break;
      case 'INVALID_PASSWORD':
        errorMessage = 'This password is incorrect';
        break;
      case 'INTERNAL_SERVER': 
        errorMessage = 'Internal Server Error'
    }
    return throwError(errorMessage);
  }

  logout() {
    this.user.next(null);
    localStorage.clear();
  
  }

  autoLogout(expiresIn) {
    setTimeout(()=> {
      this.logout();
    },expiresIn);
  }
}
