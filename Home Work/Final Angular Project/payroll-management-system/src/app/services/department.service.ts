import { Injectable } from '@angular/core';
import { catchError, Observable, of, throwError } from 'rxjs';
import { Department } from '../models/department.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  private apiUrl: string = "http://localhost:3000/departments";

  constructor(private httpClient: HttpClient) { }

  // Method to create a new department
  createDepartment(department: Department): Observable<Department> {
    return this.httpClient.post<Department>(this.apiUrl, department)
      .pipe(
        catchError(this.handleError)
      );
  }

  // Method to get departments from local array
  // getDepartments(): Observable<Department[]> {
  //   return of(this.departments);
  // }

  // Method to get departments
  getDepartments(): Observable<Department[]> {
    return this.httpClient.get<Department[]>(this.apiUrl).pipe(
      catchError(this.handleError)
      // error => {
      //   console.error('HTTP error, using fallback data', error);
      //   return of(this.departments); // Use fallback data
      // })
    );
  }


  // private departments: Department[] = [
  //   { id: 1, deptName: 'HR' },
  //   { id: 2, deptName: 'IT' },
  //   { id: 3, deptName: 'Finance' }
  // ];

  // Method to get departments for employees
  getDeprtForEmp(): Observable<Department[]> {
    return this.getDepartments(); // Reuse the same method
  }
  // getDeprtForEmp(): Observable<Department[]> {
  //   return this.httpClient.get<Department[]>(this.apiUrl)
  //     .pipe(
  //       catchError(this.handleError)
  //     )
  // }


  // Method to delete a department
  deleteDepartment(id: string): Observable<any> {
    return this.httpClient.delete(`${this.apiUrl}/${id}`)
      .pipe(
        catchError(this.handleError)
      ); //  http://localhost:3000/department/id
  }

  // Method to get department by ID
  getById(id: string): Observable<any> {
    return this.httpClient.get(`${this.apiUrl}/${id}`)
      .pipe(
        catchError(this.handleError)
      );
  }

  // Error handling
  private handleError(error: any) {
    console.error('An error occurred:', error);
    return throwError(() => new Error('An error occurred while processing your request; please try again later.'));
  }
}
