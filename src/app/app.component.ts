import {Component, OnInit} from '@angular/core';
import {NgxSpinnerService} from 'ngx-spinner';
import {NavigationEnd, NavigationStart, Router} from '@angular/router';
import {Subscription} from 'rxjs';
import { AuthLoginService } from './core/auth/authLogin.service';


export let browserRefresh = false;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ventinghub-frontend';
  subscription : Subscription;
  constructor(
    private ngxSpinnerService: NgxSpinnerService,
    private router: Router,
    private authService: AuthLoginService
  ) {

    if (window.performance) {
      console.info("window.performance works fine on this browser");
    }
      if (performance.navigation.type == 1) {
        console.info( "This page is reloaded" );
      } else {
        console.info( "This page is not reloaded");
      }

      this.authService.autoLogin();
  }

  ngOnInit() {
    this.router.events.subscribe( async event => {
      if (event instanceof NavigationStart) {
        await this.ngxSpinnerService.show();
      } else if (event instanceof NavigationEnd) {
        await this.ngxSpinnerService.hide();
      }
    });

    
  }

  
}
