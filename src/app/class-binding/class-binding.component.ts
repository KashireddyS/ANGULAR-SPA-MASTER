import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-binding',
  templateUrl: './class-binding.component.html',
  styleUrls: ['./class-binding.component.css']
})
export class ClassBindingComponent implements OnInit {
  successClass = 'text-success';
  dangerClass = 'text-danger';
  public isSpecial = true;
  messageClass = {
    'text-success': true,
    'text-special': this.isSpecial
  };
  hasError = true;
  constructor() { }

  ngOnInit() {
  }

}
