import { Routes, RouterModule } from '@angular/router';
import { NgModule } from "@angular/core";
import { PageNotFountComponent } from "app/pagenotfound.component";
import { AuthGuard } from "app/core/guards/auth.guard";

const routes: Routes = [
    {
        path: '',//by default layout will load
        loadChildren: './layout/layout.module#LayoutModule',
        canActivate: [AuthGuard]
    },
    {
        path: 'login',//This is for login page
        loadChildren: './login/login.module#LoginModule'
    },
    {
        path: '**',//this is for page not found when url is improper
        component: PageNotFountComponent
    }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],//for routing purpose
    exports: [RouterModule]
})
export class AppRoutingModule {

}