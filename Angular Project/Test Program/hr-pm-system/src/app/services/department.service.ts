import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { DepartmentModel } from '../models/department.model';

@Injectable({
  providedIn: 'root',
})
export class DepartmentService {
  private baseUrl: string = 'http://localhost:3000/departments'; // Base URL for departments API
  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) {}

  // Method to get all departments
  getDepartments(): Observable<DepartmentModel[]> {
    return this.http
      .get<DepartmentModel[]>(this.baseUrl)
      .pipe(
        catchError(this.handleError<DepartmentModel[]>('getDepartments', []))
      );
  }

  // Method to get a department by ID
  getDepartmentById(departmentId: string): Observable<DepartmentModel> {
    const url = `${this.baseUrl}/${departmentId}`;
    return this.http
      .get<DepartmentModel>(url)
      .pipe(catchError(this.handleError<DepartmentModel>('getDepartmentById')));
  }

  // Method to create a new department
  createDepartment(department: DepartmentModel): Observable<DepartmentModel> {
    return this.http
      .post<DepartmentModel>(this.baseUrl, department, {
        headers: this.headers,
      })
      .pipe(catchError(this.handleError<DepartmentModel>('createDepartment')));
  }

  // Method to update an existing department
  updateDepartment(
    departmentId: string,
    updatedDetails: Partial<DepartmentModel>
  ): Observable<DepartmentModel> {
    const url = `${this.baseUrl}/${departmentId}`;
    return this.http
      .put<DepartmentModel>(url, updatedDetails, { headers: this.headers })
      .pipe(catchError(this.handleError<DepartmentModel>('updateDepartment')));
  }

  // Method to delete a department
  deleteDepartment(departmentId: string): Observable<boolean> {
    const url = `${this.baseUrl}/${departmentId}`;
    return this.http.delete(url, { headers: this.headers }).pipe(
      map(() => true),
      catchError(this.handleError<boolean>('deleteDepartment', false))
    );
  }

  // Error handling
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(`${operation} failed: ${error.message}`);
      return throwError(
        () => new Error('Something went wrong; please try again later.')
      );
    };
  }
}
