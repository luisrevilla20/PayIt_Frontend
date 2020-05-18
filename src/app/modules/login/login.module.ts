import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogInRoutingModule } from './login-routing.module';
import { LogInComponent } from './components/log-in/log-in.component';
import { SignInComponent } from './components/sign-in/sign-in.component';



@NgModule({
  declarations: [LogInComponent, SignInComponent],
  imports: [
    CommonModule,
    LogInRoutingModule
  ]
})
export class LoginModule { }
