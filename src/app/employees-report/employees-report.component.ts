import { Component, OnInit } from '@angular/core';
import { Employee } from '../_models/employee.model';

@Component({
  selector: 'app-employees-report',
  templateUrl: './employees-report.component.html',
  styleUrls: ['./employees-report.component.css']
})
export class EmployeesReportComponent implements OnInit {
  employees: Employee[];
  constructor() { }

  ngOnInit() {
    this.getAllEmployees();
  }

  getAllEmployees() {
    this.employees = [
      { 'id': 1001, 'name': 'Chalapathi', 'age': 21 },
      { 'id': 1002, 'name': 'Ramesh', 'age': 76 },
      { 'id': 1003, 'name': 'Ganesh', 'age': 82 }
    ];
  }
}
