import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { NavComponent } from './components/nav/nav.component';
import { BalanceComponent } from './components/balance/balance.component';
import { InfoTableComponent } from './components/info-table/info-table.component';
import { HomeComponent } from './pages/home/home.component';
//Comment

@NgModule({
  declarations: [NavComponent, BalanceComponent, InfoTableComponent, HomeComponent],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
