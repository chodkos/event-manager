import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {Api} from "../api";
import {Observable} from "rxjs/Observable";

@Injectable()
export class MeetingService {

  constructor(private http: Http, private api: Api) { }

  getAll(): Observable<any>{
    return this.http.get(this.api.meetings)
    // .map(response=> response.json())
    // .flatMap(hotels => hotels)
    // .map(hotel => new Hotel(hotel))
    //
  }

}
