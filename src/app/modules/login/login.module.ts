import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogInRoutingModule } from './login-routing.module';
import { LogInComponent } from './components/log-in/log-in.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { HttpClientModule} from '@angular/common/http'
import { SignService } from './services/sign/sign.service';
import { LogService } from './services/log/log.services';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [LogInComponent, SignInComponent],
  imports: [
    CommonModule,
    LogInRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    SignService,
    LogService
  ]
})
export class LoginModule { }
