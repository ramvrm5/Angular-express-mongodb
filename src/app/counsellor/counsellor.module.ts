import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CounsellorRoutingModule } from './counsellor-routing.module';
import { CounsellorComponent } from './counsellor.component';
import { ChatComponent } from './chat/chat.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {FlexModule} from '@angular/flex-layout';
import {SharedModule} from '../shared/shared.module';
import {FormsModule} from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [CounsellorComponent, ChatComponent],
  imports: [
    CommonModule,
    CounsellorRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FlexModule,
    SharedModule,
    FormsModule,
    MatDialogModule,
    MatIconModule
  ]
})
export class CounsellorModule { }
