import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-click-example',
  templateUrl: './click-example.component.html',
  styleUrls: ['./click-example.component.css']
})
export class ClickExampleComponent implements OnInit {
  message: string;
  constructor() { }

  ngOnInit() {
  }

  onClick(): void {
    this.message = 'Showing this message upon clicking on the button.';
  }
}
