import { Injectable } from '@angular/core';
import { EmployeeModel } from '../models/employee.model'; // Adjust the import path as needed
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private baseUrl: string = 'http://localhost:3000/employees'; // Base URL for employees API

  constructor(private http: HttpClient) {}

  // Method to generate a unique employeeId
  private generateEmployeeId(username: string): string {
    const randomNumber = Math.floor(Math.random() * 10000); // Random number for uniqueness
    return `${username}-${randomNumber}`;
  }

  // Method to create a new employee
  createEmployee(employee: EmployeeModel): Observable<EmployeeModel> {
    const employeeId = this.generateEmployeeId(employee.username);
    employee.employeeId = employeeId;
    employee.createdAt = new Date();
    employee.updatedAt = new Date();

    return this.http
      .post<EmployeeModel>(this.baseUrl, employee, {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      })
      .pipe(catchError(this.handleError));
  }

  // Method to get an employee by ID
  getEmployeeById(employeeId: string): Observable<EmployeeModel> {
    const url = `${this.baseUrl}/${employeeId}`;
    return this.http.get<EmployeeModel>(url).pipe(catchError(this.handleError));
  }

  // Method to update employee details
  updateEmployee(employee: EmployeeModel): Observable<EmployeeModel> {
    employee.updatedAt = new Date(); // Update the lastUpdatedAt field
    const url = `${this.baseUrl}/${employee.employeeId}`;
    return this.http
      .put<EmployeeModel>(url, employee, {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      })
      .pipe(catchError(this.handleError));
  }

  // Method to delete an employee
  deleteEmployee(employeeId: string): Observable<void> {
    const url = `${this.baseUrl}/${employeeId}`;
    return this.http.delete<void>(url).pipe(catchError(this.handleError));
  }

  // Error handling
  private handleError(error: any): Observable<never> {
    console.error('An error occurred', error);
    return throwError(
      () => new Error('Something went wrong; please try again later.')
    );
  }
}
