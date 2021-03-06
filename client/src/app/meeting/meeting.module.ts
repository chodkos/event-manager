import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MeetingListComponent } from './meeting-list/meeting-list.component';
import {HttpModule} from "@angular/http";
import {MeetingService} from "./meeting.service";
import { AddmeetingFormComponent } from './addmeeting-form/addmeeting-form.component';
import {FormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import { MeetingCardComponent } from './meeting-card/meeting-card.component';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    HttpModule,
    RouterModule
  ],
  exports: [
    MeetingListComponent,
    AddmeetingFormComponent,
    MeetingCardComponent
  ],
  declarations: [MeetingListComponent, AddmeetingFormComponent, MeetingCardComponent],
  providers: [MeetingService]
})
export class MeetingModule { }
