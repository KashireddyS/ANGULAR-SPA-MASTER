import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../_models/user';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {
  // Change the api controller name to some invalid string in
  // the below URL to see the error message 
  url = 'http://localhost:55495/api/angularusers';
  constructor(private http: HttpClient) { }

  enroll(user: User) {
    // In the below code, catchError won't be imported by default.
    return this.http.post<any>(this.url, user)
              .pipe(catchError(this.errorHandler)); 
  }

  errorHandler(error: HttpErrorResponse) {
    return throwError(error);
  }
}
