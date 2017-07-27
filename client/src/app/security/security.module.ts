import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginFormComponent} from './login-form/login-form.component';
import {FormsModule} from "@angular/forms";
import { RegisterFormComponent } from './register-form/register-form.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  declarations: [
    LoginFormComponent,
    RegisterFormComponent,
  ],
  exports: [
    LoginFormComponent,
    RegisterFormComponent
  ]
})
export class SecurityModule {
}
