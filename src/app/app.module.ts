import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FootComponent } from './main_components/foot/foot.component';
import { PageNotFoundComponent } from './main_components/page-not-found/page-not-found.component';
import { LoginModule } from './modules/login/login.module';
import { AdminModule } from './modules/admin/admin.module';
import { UserModule } from './modules/user/user.module';

import {registerLocaleData} from '@angular/common';
import localesMX from '@angular/common/locales/es-MX';
import localeBR from '@angular/common/locales/pt';
import localeUS from '@angular/common/locales/en';

registerLocaleData(localesMX, 'es-MX');
registerLocaleData(localeBR, 'pt');
registerLocaleData(localeUS, 'en');


@NgModule({
  declarations: [
    AppComponent,
    //BalanceComponent,
    //NavComponent,
    FootComponent,
    //InfoTableComponent,
    //SendFormComponent,
    //WithFormComponent,
    //SettingsComponent,
    //ActionButtonsComponent,
    PageNotFoundComponent,
    //SignInComponent,
    //LogInComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    UserModule,
    LoginModule,
    AdminModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
