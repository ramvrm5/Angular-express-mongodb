import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ClientComponent} from './client.component';
import {ChatComponent} from './chat/chat.component';
import {MyBookingsComponent} from './my-bookings/my-bookings.component';


const routes: Routes = [
  {
    path: '',
    component: ClientComponent,
    children: [
      {
        path: '',
        redirectTo: 'my-bookings',
        pathMatch: 'full'
      }, {
        path: 'book',
        redirectTo: 'my-bookings',
        pathMatch: 'full'
      }, {
        path: 'my-bookings',
        component: MyBookingsComponent
      }, {
        path: 'chat',
        component: ChatComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
