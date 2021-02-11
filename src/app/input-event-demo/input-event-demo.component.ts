import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-event-demo',
  templateUrl: './input-event-demo.component.html',
  styleUrls: ['./input-event-demo.component.css']
})
export class InputEventDemoComponent implements OnInit {
  serverName: string = 'Testserver';
  buttonEnableStatus: boolean = true;
  constructor() { }

  ngOnInit() {
  }

  Button_click() {

  }

  onUpdateServerName(event: Event) {
    this.serverName = (event.target as HTMLInputElement).value;
    if(this.serverName == '') {
      this.buttonEnableStatus = false;
    }
    else {
      this.buttonEnableStatus = true;
    }
  }
}
