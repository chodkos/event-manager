import {Component, OnInit} from '@angular/core';
import {SecurityService} from "./security/security.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(private securityService: SecurityService){

  }

  private isLoggedIn = false;

  ngOnInit(): void {

  }

  logout(){
    this.securityService.logout();
  }

}
