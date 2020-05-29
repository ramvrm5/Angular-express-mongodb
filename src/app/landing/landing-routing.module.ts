import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LandingComponent} from './landing.component';
import {HomeComponent} from './home/home.component';
import {ServicesComponent} from './services/services.component';
import {AboutUsComponent} from './about-us/about-us.component';
import {BookingComponent} from './booking/booking.component';

const routes: Routes = [
  {
    path: '',
    component: LandingComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      }, {
        path: 'home',
        component: HomeComponent
      }, {
        path: 'services',
        component: ServicesComponent
      }, {
        path: 'about-us',
        component: AboutUsComponent
      }, {
        path: 'booking',
        component: BookingComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingRoutingModule { }
