import {Component} from '@angular/core';
import {SecurityService} from '../security.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {

  private login: string;
  private password: string;
  private loginResult: boolean;
  pendingRequest = false

  constructor(private securityService: SecurityService, private router: Router) {
  }

  loginFormMethod(){
    this.pendingRequest = true;
    this.securityService.login(this.login,this.password)
      .subscribe(()=> {
        console.log(this.securityService.isAuthenticated());
        this.router.navigateByUrl("/")
      }, ()=> {
        this.loginResult = false;
        this.pendingRequest = false;
      })
  };

  navigateHome() {
    this.router.navigate(['/'])
  }

}
