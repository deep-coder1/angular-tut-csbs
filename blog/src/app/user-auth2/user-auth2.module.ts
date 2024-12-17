import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { Login2Component } from './login2/login2.component';



@NgModule({
  declarations: [
    LoginComponent,
    Login2Component
  ],
  imports: [
    CommonModule
  ],
  exports:[
    LoginComponent,
    Login2Component
  ]
})
export class UserAuth2Module { }
