import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { NavComponent } from './components/nav/nav.component';
import { BalanceComponent } from './components/balance/balance.component';
import { InfoTableComponent } from './components/info-table/info-table.component';
//Comment

@NgModule({
  declarations: [NavComponent, BalanceComponent, InfoTableComponent],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
