import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {SecurityModule} from './security/security.module';
import {UsersModule} from './users/users.module';
import {Api} from './api';
import {SecurityGuard} from './security/security.guard';
import {SecurityService} from './security/security.service';
import {routerModule} from './app.routing';
import {MeetingModule} from "./meeting/meeting.module";
import {UsersService} from "./users/users.service";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SecurityModule,
    UsersModule,
    routerModule,
    MeetingModule
  ],
  providers: [
    Api,
    SecurityService,
    SecurityGuard,
    UsersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
