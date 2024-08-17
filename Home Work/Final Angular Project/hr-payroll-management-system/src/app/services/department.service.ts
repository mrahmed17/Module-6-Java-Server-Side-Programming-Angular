import { Injectable } from '@angular/core';
import { catchError, Observable, of, throwError } from 'rxjs';
import { DepartmentModel } from '../models/department.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  private apiUrl: string = 'http://localhost:3000/departments';

  constructor(private httpClient: HttpClient) { }

  getAllDepartment(): Observable<DepartmentModel[]> {
    return this.httpClient.get<DepartmentModel[]>(this.apiUrl)
      .pipe(
        catchError(this.handleError)
      );
  }

  getDepartmentModelForEmployee(): Observable<DepartmentModel[]> {
    return this.httpClient.get<DepartmentModel[]>(this.apiUrl)
      .pipe(
        catchError(this.handleError)
      )
  }

  createDepartmentModel(DepartmentModel: DepartmentModel): Observable<DepartmentModel> {
    return this.httpClient.post<DepartmentModel>(this.apiUrl, DepartmentModel);
  }

  // Method to delete a DepartmentModel
  deleteDepartmentModel(id: string): Observable<void> {
    return this.httpClient.delete<void>(`${this.apiUrl}/${id}`)
      .pipe(
        catchError(this.handleError)
      ); //  http://localhost:3000/DepartmentModels/id
  }

  updateDepartmentModel(id: string, DepartmentModel: DepartmentModel): Observable<any> {
    return this.httpClient.put(`${this.apiUrl}/${id}`, DepartmentModel);
  }

  // Method to get DepartmentModel by ID
  getById(id: string): Observable<DepartmentModel> {
    return this.httpClient.get<DepartmentModel>(`${this.apiUrl}/${id}`)
      .pipe(
        catchError(this.handleError)
      );
  }


  // Error handling
  private handleError(error: any) {
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
