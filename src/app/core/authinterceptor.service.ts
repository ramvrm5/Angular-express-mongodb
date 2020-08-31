import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpParams } from '@angular/common/http';
import { AuthLoginService } from './auth/authLogin.service';
import { exhaustMap, take } from 'rxjs/operators';



@Injectable()
export class AuthinterceptorService implements HttpInterceptor{

  constructor(private authService: AuthLoginService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    let user  = localStorage.getItem('userData'); 

     user =  JSON.parse(user);
    if(!user) {
      return next.handle(req);
    }

    const modifyReq = req.clone({ params: new HttpParams().set('auth', user["_token"])});
    return next.handle(modifyReq);

  }
}
