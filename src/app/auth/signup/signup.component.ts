import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthLoginService } from '../../core/auth/authLogin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  error: String = '';
  constructor(private authService: AuthLoginService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(form : NgForm) {
    if(!form.valid) {
      return
    }


    this.authService.signup(form.value).subscribe(res => {
      if(res.status === false) {
        return this.error = (res.message);
      }
      this.router.navigate(['/auth/login']);
    })
  
  }
}
