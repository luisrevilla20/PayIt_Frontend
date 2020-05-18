import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { BalanceComponent } from './components/balance/balance.component';
import { InfoTableComponent } from './components/info-table/info-table.component';
import { NavComponent } from './components/nav/nav.component';


const rutas: Routes= [
    {path: 'Nav', component: NavComponent},
    {path: 'Balance', component: BalanceComponent},
    {path: 'Info', component: InfoTableComponent},
]

@NgModule({
    imports: [RouterModule.forChild(rutas)],
    exports: [RouterModule],
})
export class AdminRoutingModule{
    
}