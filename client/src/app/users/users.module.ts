import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { UsersListComponent } from './users-list/users-list.component';
import {RouterModule} from "@angular/router";
import {WelcomePageComponent} from "../security/welcome-page/welcome-page.component";

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    RouterModule
  ],
  declarations: [
    UsersListComponent,
    WelcomePageComponent
  ],
  exports: [
    UsersListComponent
  ]
})
export class UsersModule { }
