import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CanComponentLeave } from '../_guards/unsaved-changes.guard';
@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit, CanComponentLeave {
  feedback: FormControl = new FormControl();
  constructor() { }
  canLeave(): boolean {
    if(this.feedback.dirty) {
      return window.confirm("You need to submit the feedback before you leave this page. Do you want to leave this page?");
    }
    return true;
  }

  ngOnInit() {
  }
}
