import { Component, OnInit } from '@angular/core';
import {NavigationEnd, NavigationStart, Router} from '@angular/router';
import {NgxSpinnerService} from 'ngx-spinner';
declare var $: any;

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
     
      this.datePicker()
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
