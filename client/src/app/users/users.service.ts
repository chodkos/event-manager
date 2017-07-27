import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {Api} from "../api";
import {Observable} from "rxjs/Observable";


@Injectable()
export class UsersService {

  constructor(private http: Http, private api: Api) { }

  getActiveUser(): Observable<any> {
    return this.http.get(this.api.activeUser)
      .map(response => response.json())
  }

  addNewUser(user: any): Observable<any>{
    console.log(user)
    return this.http.post(this.api.userProfile, user);
  }

}
