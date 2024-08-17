import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { LeaveModel } from '../models/leave.model';

@Injectable({
  providedIn: 'root'
})
export class LeaveService {
  private apiUrl = 'http://localhost:3000/leaves';

  constructor(private httpClient: HttpClient) { }

  createLeave(leave: LeaveModel): Observable<LeaveModel> {
    return this.httpClient.post<LeaveModel>(this.apiUrl, leave).pipe(
      catchError(this.handleError)
    );
  }

  getLeave(id: number): Observable<LeaveModel> {
    return this.httpClient.get<LeaveModel>(`${this.apiUrl}/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  getAllLeaves(): Observable<any[]> {
    return this.httpClient.get<any[]>(this.apiUrl).pipe(
      catchError(this.handleError)
    );
  }

  updateLeave(id: number, leave: LeaveModel): Observable<LeaveModel> {
    return this.httpClient.put<LeaveModel>(`${this.apiUrl}/${id}`, leave).pipe(
      catchError(this.handleError)
    );
  }

  deleteLeave(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.apiUrl}/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: any) {
    console.error('An error occurred:', error);
    return throwError(() => new Error('Something went wrong; please try again later.'));
  }
}
