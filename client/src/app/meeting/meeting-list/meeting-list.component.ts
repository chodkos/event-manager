import { Component } from '@angular/core';
import {Observable} from "rxjs/Observable";
import {Meeting} from "../meeting";
import {MeetingService} from "../meeting.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-meeting-list',
  templateUrl: './meeting-list.component.html',
  styleUrls: ['./meeting-list.component.css']
})
export class MeetingListComponent {

  /*meetings: Observable<[Meeting]>*/

  constructor(private meetingService: MeetingService, private router: Router) {
    this.meetingService.getAllMeetings().subscribe(response=>console.log(response))
    // console.log(activatedRoute.snapshot.data)
  }

  private meeting = {
    name: '',
    address: '',
    description: ''
  }

  meetings = []



}
