import { Component, Input } from "@angular/core";
import { AuthService1 } from "app/core/services/auth.service";
import { Router } from "@angular/router";

@Component({
    selector: 'header-component',
    templateUrl: './header.component.html'
})
export class HeaderComponent {
@Input() loginname1:any
    constructor(public auth: AuthService1, public router: Router) {

    }

    logout() {

        //make the user logout
        this.auth.logout();

         // Redirect the user
         this.router.navigate(['/login']);
    }
}