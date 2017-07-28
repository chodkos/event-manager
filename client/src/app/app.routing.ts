import {Route, RouterModule} from '@angular/router';
import {LoginFormComponent} from './security/login-form/login-form.component'
import {SecurityGuard} from './security/security.guard';
import {UsersListComponent} from './users/users-list/users-list.component';
import {MeetingListComponent} from "./meeting/meeting-list/meeting-list.component";
import {RegisterFormComponent} from "./security/register-form/register-form.component";
import {WelcomePageComponent} from "./security/welcome-page/welcome-page.component";
import {AddmeetingFormComponent} from "./meeting/addmeeting-form/addmeeting-form.component";

const routesConfig: [Route] = [
  {
    path: 'login', component: LoginFormComponent
  },
  {
    path: 'register', component: RegisterFormComponent
  },
  {
    path: 'welcomePage', component: WelcomePageComponent, canActivate: [SecurityGuard]
  },
  {
    path: 'addMeeting', component: AddmeetingFormComponent, canActivate: [SecurityGuard]
  },
  {
    path: 'meetings', component: MeetingListComponent, canActivate: [SecurityGuard]
  },
  {
    path: '**', redirectTo: 'welcomePage'
  },

]

export const routerModule = RouterModule.forRoot(routesConfig)
