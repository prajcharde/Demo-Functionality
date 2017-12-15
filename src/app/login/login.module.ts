import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { LoginRoutingModule } from "app/login/login-routing.module";
import { LoginComponent } from "app/login/component/login.component";
import { Angular2SocialLoginModule } from "angular2-social-login";

let providers = {
    "google": {
    "clientId": "369088351499-obg6e3rl8slu39m89fn7r456bnbq3smn.apps.googleusercontent.com"
  }
  };

@NgModule({
    imports: [CommonModule, FormsModule, LoginRoutingModule,Angular2SocialLoginModule],
    declarations: [LoginComponent],
    providers: []
})
export class LoginModule {

}

Angular2SocialLoginModule.loadProvidersScripts(providers);
