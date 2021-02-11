import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IEmployee } from '../_contracts/iemployee';
import { Employee } from '../_models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private url: string = '/assets/data/employees.json';
  employees: Employee[];

  constructor(private http: HttpClient) { }

  getAllEmployees(): Employee[] {
    this.employees = [
      { 'id': 1001, 'name': 'Chalapathi', 'age': 21 },
      { 'id': 1002, 'name': 'Ramesh', 'age': 76 },
      { 'id': 1003, 'name': 'Ganesh', 'age': 82 }
    ];
    return this.employees;
  }

  getEmployeesFromJson(): Observable<IEmployee[]> {
    return this.http.get<IEmployee[]>(this.url);
  }
}
