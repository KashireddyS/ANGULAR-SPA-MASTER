import { Component, OnInit } from '@angular/core';
import { Employee } from '../_models/employee.model';
import { EmployeeService } from '../_services/employee.service';

@Component({
  selector: 'app-employees-report-type2',
  templateUrl: './employees-report-type2.component.html',
  styleUrls: ['./employees-report-type2.component.css']
})
export class EmployeesReportType2Component implements OnInit {
  employees: Employee[];
  constructor(public empService: EmployeeService) { }

  ngOnInit() {
    this.getEmployees();
  }

  getEmployees() {
    this.employees = this.empService.getAllEmployees();
  }
}
