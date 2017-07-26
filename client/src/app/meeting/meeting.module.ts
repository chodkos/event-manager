import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MeetingListComponent } from './meeting-list/meeting-list.component';
import {HttpModule} from "@angular/http";
import {MeetingService} from "./meeting.service";

@NgModule({
  imports: [
    CommonModule,
    HttpModule
  ],
  exports: [
    MeetingListComponent
  ],
  declarations: [MeetingListComponent],
  providers: [MeetingService]
})
export class MeetingModule { }
