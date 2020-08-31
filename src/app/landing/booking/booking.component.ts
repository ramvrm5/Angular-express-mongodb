import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {NavigationEnd, NavigationStart, Router} from '@angular/router';
import {NgxSpinnerService} from 'ngx-spinner';
import { NgForm } from '@angular/forms';

import { AuthLoginService } from 'src/app/core/auth/authLogin.service';
import { BackendService } from 'src/app/core/backend.service';

declare var $: any;

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  variant = 'default';
  user = false;
  userData;

  @ViewChild('datePicker', {static: false}) date: ElementRef;

  constructor(
    private router: Router,
    private ngxSpinnerService: NgxSpinnerService,
    private authService: AuthLoginService,
    private backendService: BackendService
  ) { }

  ngOnInit(): void {

    
      this.datePicker();
      this.authService.user.subscribe(user => {
        if(!user) {
          return 
        } 
        this.userData = user;
        this.user = true;

      })
  }

  confirmBooking() {
    let dateTime =  {date: this.date.nativeElement.value };
    if(dateTime.date === '') {
      return alert('Please Select a Date and Time');
    }

    

    this.backendService.bookAppointment(dateTime).subscribe( (res: any) => {
      debugger;
    })

  }



  onBookNowClick() {
    this.router.navigate(['/client/book']);
  }

  datePicker() {
    $(function () {
      let bootstrapMaterialDatePickerOption = {
        format: 'MM/DD/YYYY HH:mm',
        shortTime: false,
        minDate: new Date(),
        //maxDate: null,
        //currentDate: $now,
        //disabledDays: [],
        date: true,
        time: true,
        monthPicker: false,
        year: true,
        clearButton: false,
        nowButton: false,
        switchOnClick: true,
        cancelText: 'Cancel',
        //okText: 'VALIDER',
        //clearText: 'EFFACER',
        //nowText: 'MAINTENANT',
        //triggerEvent: 'focus',
        lang: 'en',
        //weekStart: 1,
      }; 
      $('.myDatePicker').bootstrapMaterialDatePicker(bootstrapMaterialDatePickerOption);
    });
  }

}
