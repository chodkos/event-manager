import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {Api} from "../api";
import {Observable} from "rxjs/Observable";

@Injectable()
export class MeetingService {

  constructor(private http: Http, private api: Api) { }

  getAllMeetings(): Observable<any>{
    return this.http.get(this.api.meetings)
      .map(response=> response.json())
    // .flatMap(hotels => hotels)
    // .map(hotel => new Hotel(hotel))
    //
  }

  addNewMeeting(meeting: any): Observable<any>{
    return this.http.post(this.api.addMeeting, meeting)
  }

}
