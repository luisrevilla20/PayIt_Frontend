import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { LogInComponent } from './components/log-in/log-in.component';
import { SignInComponent } from './components/sign-in/sign-in.component';



const rutas: Routes= [
    {path: 'Log', component: LogInComponent},
    {path: 'Sign', component: SignInComponent}
]

@NgModule({
    imports: [RouterModule.forChild(rutas)],
    exports: [RouterModule],
})
export class LogInRoutingModule{

}
