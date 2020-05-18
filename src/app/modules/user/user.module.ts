import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { NavComponent } from './components/nav/nav.component';
import { BalanceComponent } from './components/balance/balance.component';
import { InfoTableComponent } from './components/info-table/info-table.component';
import { SendFormComponent } from './components/send-form/send-form.component';
import { WithFormComponent } from './components/with-form/with-form.component';
import { SettingsComponent } from './components/settings/settings.component';
import { ActionButtonsComponent } from './components/action-buttons/action-buttons.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './pages/home/home.component';
import { SendComponent } from './pages/send/send.component' 



@NgModule({
  declarations: [NavComponent, BalanceComponent, InfoTableComponent, SendFormComponent,
                 WithFormComponent, SettingsComponent, ActionButtonsComponent, HomeComponent,
                 SendComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    ReactiveFormsModule,
  ]
})
export class UserModule { }
