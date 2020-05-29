import { Component, OnInit } from '@angular/core';
import {NavigationEnd, NavigationStart, Router} from '@angular/router';
import {NgxSpinnerService} from 'ngx-spinner';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  variant = 'default';

  constructor(
    private router: Router,
    private ngxSpinnerService: NgxSpinnerService
  ) { }

  ngOnInit(): void {
    
  }

  onBookNowClick() {
    this.router.navigate(['/booking']);
  }

}
