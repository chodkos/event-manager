import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-meeting-card',
  templateUrl: './meeting-card.component.html',
  styleUrls: ['./meeting-card.component.css']
})
export class MeetingCardComponent implements OnInit {

  @Input()
  book = {}
  @Input()
  isSelected = false

  constructor() { }

  ngOnInit() {
  }

}
