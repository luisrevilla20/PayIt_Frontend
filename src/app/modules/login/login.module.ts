import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogInRoutingModule } from './login-routing.module';
import { LogInComponent } from './components/log-in/log-in.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { HttpClientModule} from '@angular/common/http'



@NgModule({
  declarations: [LogInComponent, SignInComponent],
  imports: [
    CommonModule,
    LogInRoutingModule,
    HttpClientModule
  ]
})
export class LoginModule { }
