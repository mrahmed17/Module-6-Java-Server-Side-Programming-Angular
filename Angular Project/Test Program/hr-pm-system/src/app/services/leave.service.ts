import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { LeaveModel } from '../models/leave.model'; // Adjust the import path as necessary

@Injectable({
  providedIn: 'root',
})
export class LeaveService {
  private baseUrl: string = 'http://localhost:3000/leaves'; // Base URL for leave API
  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) {}

  // Method to get all leave records
  getLeaves(): Observable<LeaveModel[]> {
    return this.http
      .get<LeaveModel[]>(this.baseUrl)
      .pipe(catchError(this.handleError<LeaveModel[]>('getLeaves', [])));
  }

  // Method to get leave by ID
  getLeaveById(leaveId: string): Observable<LeaveModel> {
    const url = `${this.baseUrl}/${leaveId}`;
    return this.http
      .get<LeaveModel>(url)
      .pipe(catchError(this.handleError<LeaveModel>('getLeaveById')));
  }

  // Method to create new leave
  createLeave(leave: LeaveModel): Observable<LeaveModel> {
    return this.http
      .post<LeaveModel>(this.baseUrl, leave, { headers: this.headers })
      .pipe(catchError(this.handleError<LeaveModel>('createLeave')));
  }

  // Method to update existing leave
  updateLeave(
    leaveId: string,
    updatedDetails: Partial<LeaveModel>
  ): Observable<LeaveModel> {
    const url = `${this.baseUrl}/${leaveId}`;
    return this.http
      .put<LeaveModel>(url, updatedDetails, { headers: this.headers })
      .pipe(catchError(this.handleError<LeaveModel>('updateLeave')));
  }

  // Method to delete leave
  deleteLeave(leaveId: string): Observable<boolean> {
    const url = `${this.baseUrl}/${leaveId}`;
    return this.http.delete(url, { headers: this.headers }).pipe(
      map(() => true),
      catchError(this.handleError<boolean>('deleteLeave', false))
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
