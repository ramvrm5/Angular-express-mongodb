import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthLoginService } from '../../core/auth/authLogin.service';
import { Router } from '@angular/router';

import { AuthService } from 'angularx-social-login';
import { SocialUser } from 'angularx-social-login';
import { GoogleLoginProvider } from 'angularx-social-login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  error: String = '';
  constructor(
    private authLoginService: AuthLoginService,
    private router: Router,
    private authService: AuthService,
  ) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    if (!form.valid) {
      return
    }

    this.authLoginService.login(form.value).subscribe(res => {
      if (res.status === false) {
        return this.error = res.message;
      }
      this.router.navigate(['/booking']);
    });
  }
  


  /* GMAIL SIGN IN START */
  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then((data) => {
      var Userdata = {
        email: data.email,
        kind: "CLIENT",
        password: "___________",
        phone: "___________",
        username: data.firstName+""+data.lastName
      }
      var LoginData = {
        password: "___________",
        username:  data.email
      }
      this.authLoginService.signup(Userdata).subscribe(res => {
        if(res.status === false) {
          this.gmailLogin(LoginData);
        } else if (res.status) {
          this.gmailLogin(LoginData);
        }
      })
    });
  }

  gmailLogin(data) {
    this.authLoginService.login(data).subscribe(res => {
      if (res.status === false) {
        return this.error = res.message;
      }
      this.router.navigate(['/booking']);
    });
  }
  /* GMAIL SIGN IN END */


}
