import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { LeaveModel } from '../models/leave.model';

@Injectable({
  providedIn: 'root',
})
export class LeaveService {
  private apiUrl: string = 'http://localhost:3000/leaves';

  constructor(private httpClient: HttpClient) {}

  // Method to create a new leave
  createLeave(leave: LeaveModel): Observable<LeaveModel> {
    return this.httpClient
      .post<LeaveModel>(this.apiUrl, leave)
      .pipe(catchError(this.handleError));
  }

  // Method to get a leave by ID
  getLeave(id: string): Observable<LeaveModel> {
    return this.httpClient
      .get<LeaveModel>(`${this.apiUrl}/${id}`)
      .pipe(catchError(this.handleError));
  }

  // Method to get all leaves
  getAllLeaves(): Observable<LeaveModel[]> {
    return this.httpClient
      .get<LeaveModel[]>(this.apiUrl)
      .pipe(catchError(this.handleError));
  }

  // Method to update an existing leave
  updateLeave(id: string, leave: LeaveModel): Observable<LeaveModel> {
    return this.httpClient
      .put<LeaveModel>(`${this.apiUrl}/${id}`, leave)
      .pipe(catchError(this.handleError));
  }

  // Method to delete a leave by ID
  deleteLeave(id: string): Observable<void> {
    return this.httpClient
      .delete<void>(`${this.apiUrl}/${id}`)
      .pipe(catchError(this.handleError));
  }

  // Error handling method
  private handleError(error: any): Observable<never> {
    console.error('An error occurred:', error);
    return throwError(
      () => new Error('Something went wrong; please try again later.')
    );
  }
}
