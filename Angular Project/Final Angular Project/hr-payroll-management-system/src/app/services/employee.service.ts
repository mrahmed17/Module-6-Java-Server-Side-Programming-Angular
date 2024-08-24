import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { EmployeeModel } from '../models/employee.model';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private apiUrl: string = 'http://localhost:3000/employees';

  constructor(private http: HttpClient) {}

  // Create a new employee
  createEmployee(employee: EmployeeModel): Observable<EmployeeModel> {
    return this.http
      .post<EmployeeModel>(this.apiUrl, employee)
      .pipe(catchError(this.handleError));
  }

  // Fetch an employee by ID
  getEmployeeById(id: string): Observable<EmployeeModel> {
    return this.http
      .get<EmployeeModel>(`${this.apiUrl}/${id}`)
      .pipe(catchError(this.handleError));
  }

  // Fetch all employees
  getAllEmployees(): Observable<EmployeeModel[]> {
    return this.http
      .get<EmployeeModel[]>(this.apiUrl)
      .pipe(catchError(this.handleError));
  }

  // Update an existing employee by ID
  updateEmployee(
    id: string,
    employee: EmployeeModel
  ): Observable<EmployeeModel> {
    return this.http
      .put<EmployeeModel>(`${this.apiUrl}/${id}`, employee)
      .pipe(catchError(this.handleError));
  }

  // Delete an employee by ID
  deleteEmployee(id: string): Observable<void> {
    return this.http
      .delete<void>(`${this.apiUrl}/${id}`)
      .pipe(catchError(this.handleError));
  }

  // Error handling
  private handleError(error: any): Observable<never> {
    console.error('An error occurred:', error);
    return throwError(
      () => new Error('An error occurred while processing the request.')
    );
  }
}
