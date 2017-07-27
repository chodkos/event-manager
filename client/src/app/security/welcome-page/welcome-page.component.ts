import { Component, OnInit } from '@angular/core';
import {SecurityService} from "../security.service";
import {UsersService} from "../../users/users.service";

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.css']
})
export class WelcomePageComponent implements OnInit {

  private currentUser;

  constructor(private securityService: SecurityService, private usersService: UsersService) { }

  ngOnInit() {
    this.usersService.getActiveUser().subscribe(response => {
      this.currentUser = response, console.log(response)
    });
  }

  logout(){
    this.securityService.logout();
  }

}
