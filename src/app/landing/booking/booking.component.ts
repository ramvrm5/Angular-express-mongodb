import { Component, OnInit } from '@angular/core';
import {NavigationEnd, NavigationStart, Router} from '@angular/router';
import {NgxSpinnerService} from 'ngx-spinner';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  variant = 'default';

  constructor(
    private router: Router,
    private ngxSpinnerService: NgxSpinnerService
  ) { }

  ngOnInit(): void {
    
  }

  onBookNowClick() {
    this.router.navigate(['/client/book']);
  }

}
