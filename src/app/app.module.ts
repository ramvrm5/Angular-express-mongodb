import { BrowserModule } from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {NgxSpinnerModule} from 'ngx-spinner';
import { SocketService } from './core/services/socket/socket.service';
import { AuthinterceptorService } from './core/authinterceptor.service';
import { SocialLoginModule } from 'angularx-social-login';
import { AuthServiceConfig, GoogleLoginProvider } from 'angularx-social-login';

const config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider('298434765938-ee8q1ntugfcmd6kqk3s07noecdogdme6.apps.googleusercontent.com') //for localhost
    //provider: new GoogleLoginProvider('232895248144-68dqr65svrbqhflp7ie8rabis0feh9k3.apps.googleusercontent.com') //for developermode/live
  }
]);

export function provideConfig() {
  return config;
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SocialLoginModule,
    NgxSpinnerModule
  ],
  providers: [
    SocketService,
    {provide: AuthServiceConfig,useFactory: provideConfig},
    {provide: HTTP_INTERCEPTORS, useClass: AuthinterceptorService, multi: true}
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
