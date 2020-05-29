import {APP_INITIALIZER, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component';
import {ExtendedModule, FlexModule} from '@angular/flex-layout';
import {RouterModule} from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {NotificationComponent} from './components/notification/notification.component';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MessageComponent} from './components/message/message.component';
import {NgxSpinnerModule} from 'ngx-spinner';
import {FormsModule} from '@angular/forms';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';


@NgModule({
    declarations: [HeaderComponent, FooterComponent,  NotificationComponent, MessageComponent],
  exports: [
    HeaderComponent,
    FooterComponent,
    MessageComponent
  ],
    imports: [
        CommonModule,
        FlexModule,
        RouterModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        ExtendedModule,
        MatIconModule,
        MatDividerModule,
        NgxSpinnerModule,
        FormsModule,
        MatProgressSpinnerModule
    ]
})
export class SharedModule { }
