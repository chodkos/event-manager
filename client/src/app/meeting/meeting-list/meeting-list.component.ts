import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {Meeting} from "../meeting";
import {MeetingService} from "../meeting.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-meeting-list',
  templateUrl: './meeting-list.component.html',
  styleUrls: ['./meeting-list.component.css']
})
export class MeetingListComponent implements OnInit{

  /*meetings: Observable<[Meeting]>*/


  meetings = []
  constructor(private meetingService: MeetingService, private router: Router) {
    this.meetingService.getAllMeetings().subscribe(response=>console.log(response))
    // console.log(activatedRoute.snapshot.data)
  }

  ngOnInit(){
    this.meetingService.getAllMeetings().subscribe(meetingList => this.meetings = meetingList.meetings)
}
}



