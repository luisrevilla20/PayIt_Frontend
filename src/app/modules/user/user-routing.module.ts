import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { BalanceComponent } from 'src/app/modules/user/components/balance/balance.component';
import { InfoTableComponent } from 'src/app/modules/user/components/info-table/info-table.component';
import { NavComponent } from './components/nav/nav.component';
import { SendFormComponent } from './components/send-form/send-form.component';
import { WithFormComponent } from './components/with-form/with-form.component';
import { SettingsComponent } from './components/settings/settings.component';
import { ActionButtonsComponent } from './components/action-buttons/action-buttons.component';

const rutas: Routes= [
    {path: 'Nav', component: NavComponent},
    {path: 'Balance', component: BalanceComponent},
    {path: 'InfoTable', component: InfoTableComponent},
    {path: 'Send', component: SendFormComponent },
    {path: 'Withdrawal', component: WithFormComponent},
    {path: 'Settings', component: SettingsComponent},
    {path: 'Action', component:ActionButtonsComponent},


]

@NgModule({
    imports: [RouterModule.forChild(rutas)],
    exports: [RouterModule],
})
export class UserRoutingModule{
    
}