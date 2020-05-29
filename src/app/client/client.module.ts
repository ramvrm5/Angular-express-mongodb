import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { ClientComponent } from './client.component';
import { ChatComponent } from './chat/chat.component';
import {FlexModule} from '@angular/flex-layout';
import {SharedModule} from '../shared/shared.module';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule} from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import { MyBookingsComponent } from './my-bookings/my-bookings.component';
import {MatTableModule} from '@angular/material/table';
import {MatDividerModule} from '@angular/material/divider';


@NgModule({
  declarations: [ClientComponent, ChatComponent, MyBookingsComponent],
  imports: [
    CommonModule,
    ClientRoutingModule,
    FlexModule,
    SharedModule,
    MatFormFieldModule,
    MatDialogModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    MatIconModule,
    MatTableModule,
    MatDividerModule,
  ]
})
export class ClientModule { }
