import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { DepartmentModel } from '../models/department.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DepartmentService {
  private apiUrl: string = 'http://localhost:3000/departments';

  constructor(private httpClient: HttpClient) {}

  // Fetch all departments
  getAllDepartments(): Observable<DepartmentModel[]> {
    return this.httpClient
      .get<DepartmentModel[]>(this.apiUrl)
      .pipe(catchError(this.handleError));
  }
  // Fetch departments for employee use-case (if differs from getAllDepartments)
  getDepartmentsForEmployee(): Observable<DepartmentModel[]> {
    return this.httpClient
      .get<DepartmentModel[]>(this.apiUrl)
      .pipe(catchError(this.handleError));
  }

  // Create a new department
  createDepartment(
    DepartmentModel: DepartmentModel
  ): Observable<DepartmentModel> {
    return this.httpClient
      .post<DepartmentModel>(this.apiUrl, DepartmentModel)
      .pipe(catchError(this.handleError));
  }

  // Delete a department by ID
  deleteDepartment(id: string): Observable<void> {
    return this.httpClient
      .delete<void>(`${this.apiUrl}/${id}`)
      .pipe(catchError(this.handleError));
    //  http://localhost:3000/DepartmentModels/id
  }

  // Update an existing department
  updateDepartment(
    id: string,
    department: Partial<DepartmentModel>
  ): Observable<DepartmentModel> {
    return this.httpClient
      .put<DepartmentModel>(`${this.apiUrl}/${id}`, department)
      .pipe(catchError(this.handleError));
  }

  // Get a department by ID
  getDepartmentById(id: string): Observable<DepartmentModel> {
    return this.httpClient
      .get<DepartmentModel>(`${this.apiUrl}/${id}`)
      .pipe(catchError(this.handleError));
  }

  // Error handling
  private handleError(error: any): Observable<never> {
    let errorMessage = 'An unknown error occurred!';
    if (error.error instanceof ErrorEvent) {
      // Client-side or network error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.error('An error occurred:', errorMessage);
    return throwError(() => new Error(errorMessage));
  }
}
