import {Component, Inject, NgZone, OnInit} from '@angular/core';
import {MAT_SNACK_BAR_DATA, MatSnackBarRef} from '@angular/material/snack-bar';
import {Router} from '@angular/router';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {

  constructor(
    private notificationRef: MatSnackBarRef<NotificationComponent>,
    private ngZone: NgZone,
    private router: Router,
    @Inject(MAT_SNACK_BAR_DATA) public data: any
  ) { }

  ngOnInit(): void {
  }

  close() {
    this.notificationRef.dismiss();
  }

  takeAction() {
    this.ngZone.run(() => {
      if (this.data.action) {
        this.router.navigate([this.data.action]);
      }
    });
  }

  goToAction(redirect_uri: string) {
    this.ngZone.run(() => {
      this.router.navigate([redirect_uri]);
    });
  }
}
