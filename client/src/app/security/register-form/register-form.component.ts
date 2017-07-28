import { Component, OnInit } from '@angular/core';
import {UsersService} from "../../users/users.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {



  private registerResult: boolean;

  private userProfile = {
    userProfileDto: {
      firstName: '',
      lastName: ''

    },
    login: '',
    password: ''
  };

  constructor(private userService: UsersService, private router:Router) { }

  registerFormMethod(){
    this.userService.addNewUser(this.userProfile)
      .subscribe(() => {

      }, () => {console.log(' ;/ Rejestracja udana inaczej')
      this.registerResult = false;
  })
  }

  ngOnInit() {
  }

}
