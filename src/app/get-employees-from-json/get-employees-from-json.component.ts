import { Component, OnInit } from '@angular/core';
import { IEmployee } from '../_contracts/iemployee';
import { EmployeeService } from '../_services/employee.service';

@Component({
  selector: 'app-get-employees-from-json',
  templateUrl: './get-employees-from-json.component.html',
  styleUrls: ['./get-employees-from-json.component.css']
})
export class GetEmployeesFromJsonComponent implements OnInit {

  employees: IEmployee[];
  constructor(private empService: EmployeeService) { }

  ngOnInit() {
    this.getEmployeesFromJson();
  }

  getEmployeesFromJson() {
    return this.empService.getEmployeesFromJson()
            .subscribe(data => this.employees = data);
  }
}
