import {Route, RouterModule} from '@angular/router';
import {LoginFormComponent} from './security/login-form/login-form.component'
import {SecurityGuard} from './security/security.guard';
import {UsersListComponent} from './users/users-list/users-list.component';
import {MeetingListComponent} from "./meeting/meeting-list/meeting-list.component";

const routesConfig: [Route] = [
  {
    path: 'login', component: LoginFormComponent
  },
  {
    path: '**', redirectTo: 'meeting-list'
  },
  {
    path: '', canActivate: [SecurityGuard], children: [
    {
      path: 'meeting-list', component: MeetingListComponent
    }
  ]
  }
]

export const routerModule = RouterModule.forRoot(routesConfig)
