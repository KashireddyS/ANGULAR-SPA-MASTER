import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angular-pipes',
  templateUrl: './angular-pipes.component.html',
  styleUrls: ['./angular-pipes.component.css']
})
export class AngularPipesComponent implements OnInit {
  name: string = 'TollPlus India Pvt.Ltd.';
  message: string = 'Welcome to TollPlus India Pvt.Ltd';
  date: Date = new Date(2021, 2, 4);
  person = {
    firstName: 'Chalapathi',
    lastName: 'Raju',
    age: 43
  };
  constructor() { }

  ngOnInit() {
  }

}
