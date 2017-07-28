import { Component, OnInit } from '@angular/core';
import {MeetingService} from "../meeting.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-addmeeting-form',
  templateUrl: './addmeeting-form.component.html',
  styleUrls: ['./addmeeting-form.component.css']
})
export class AddmeetingFormComponent implements OnInit {

  private addMeetingResult: boolean

  private meeting = {
    name: '',
    address: '',
    description: ''
  }

 /* private meetingForm = {
    meetingDto: {
      name: '',
      address: '',
      description: ''
    }
  }*/

  constructor(private meetingService: MeetingService, private router: Router) { }

  addMeeting(){
    this.meetingService.addNewMeeting(this.meeting).
    subscribe(() => {
        console.log(this.meeting)
        this.router.navigateByUrl('/meetings')
      },
      () => console.log('FAILEEED!!')
    )
  }

  ngOnInit() {
  }

}
