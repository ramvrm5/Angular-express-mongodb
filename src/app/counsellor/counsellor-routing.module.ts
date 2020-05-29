import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CounsellorComponent} from './counsellor.component';
import {ChatComponent} from './chat/chat.component';


const routes: Routes = [
  {
    path: '',
    component: CounsellorComponent,
    children: [
      {
        path: '',
        redirectTo: 'chat',
        pathMatch: 'full'
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
export class CounsellorRoutingModule { }
