import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-enable-button',
  templateUrl: './enable-button.component.html',
  styleUrls: ['./enable-button.component.css']
})
export class EnableButtonComponent implements OnInit {

  buttonState = false;

  constructor() {
    setTimeout(() => {
      this.buttonState = true;
    }, 3000);
  }

  ngOnInit() {
  }

}
