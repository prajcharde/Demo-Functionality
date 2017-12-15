import { Component } from "@angular/core";
import { AuthService1 } from "app/core/services/auth.service";
import { Router } from "@angular/router";
import { debug } from "util";
import { User } from "app/login/models/user";
import { AuthService } from "angular2-social-login";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent {

    user = new User('bob', 'password');//these are the credentials
    public user1;
    sub: any;
    loginname:string;
    constructor(public authService: AuthService1, public router: Router,public auth:AuthService) {//dependency injection

    }
    
    signIn(provider){
    this.sub = this.auth.login(provider).subscribe(
      (data) => {
        console.log(data);
        this.user1=data;
        this.loginname=this.user1.name;
        console.log(this.loginname);
            }
    )
  }

    login1() {//login method
        this.authService.login1(this.user.userName, this.user.password).subscribe(() => {
            if (this.authService) {
                let redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/';

                // Redirect the user
                this.router.navigate([redirect]);
            }
        });
    }
}