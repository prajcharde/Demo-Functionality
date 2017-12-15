import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from 'app/core/interceptors/auth-token.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';


import { AppComponent } from './app.component';
import { AppRoutingModule } from "app/app-routing.module";
import { PageNotFountComponent } from "app/pagenotfound.component";
import { AuthGuard } from "app/core/guards/auth.guard";
import { AuthService1 } from "app/core/services/auth.service";
import { RouterModule } from "@angular/router";
import { ModalModule } from "ngx-bootstrap/modal";
import { Angular2SocialLoginModule } from "angular2-social-login/dist";



@NgModule({
  declarations: [
    AppComponent,
    PageNotFountComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),//for validation purpose
    AppRoutingModule,
    ModalModule.forRoot()//for ngx-bootstrap modal
  ],
  providers: [
    AuthGuard,
    AuthService1,
    //using http client
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,//imp
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

