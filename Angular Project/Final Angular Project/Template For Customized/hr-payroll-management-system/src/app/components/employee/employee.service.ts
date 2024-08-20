import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { EmployeeModel } from '../employee/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private apiUrl: string = 'http://localhost:300/employees';

  constructor(private http: HttpClient) { }

  createEmployee(employee: EmployeeModel): Observable<EmployeeModel> {
    return this.http.post<EmployeeModel>(this.apiUrl, employee).pipe(
      catchError(this.handleError)
    );
  }

  getEmployee(id: number): Observable<EmployeeModel> {
    return this.http.get<EmployeeModel>(`${this.apiUrl}/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  getAllEmployees(): Observable<EmployeeModel[]> {
    return this.http.get<EmployeeModel[]>(this.apiUrl).pipe(
      catchError(this.handleError)
    );
  }

  getEmployeeById(id: number): Observable<EmployeeModel> {
    return this.http.get<EmployeeModel>(`${this.apiUrl}/${id}`);
  }

  updateEmployee(id: number, employee: EmployeeModel): Observable<EmployeeModel> {
    return this.http.put<EmployeeModel>(`${this.apiUrl}/${id}`, employee).pipe(
      catchError(this.handleError)
    );
  }

  deleteEmployee(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: any) {
    console.error('An error occurred:', error);
    return throwError(() => new Error('An error occurred while processing the request.'));
  }
}
