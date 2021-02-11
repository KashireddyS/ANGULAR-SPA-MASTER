import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bootstrap-practice',
  templateUrl: './bootstrap-practice.component.html',
  styleUrls: ['./bootstrap-practice.component.css']
})
export class BootstrapPracticeComponent implements OnInit {
  companyName: string;
  constructor() {
    this.companyName = "TollPlus Private Limited.";
  }

  ngOnInit() {
  }

}
