import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { PerformanceModel } from '../models/performance.model'; // Ensure this import points to the correct location

@Injectable({
  providedIn: 'root',
})
export class PerformanceService {
  private apiUrl: string = 'http://localhost:3000/performances';

  constructor(private http: HttpClient) {}

  // Get all performance records
  getAllPerformance(): Observable<PerformanceModel[]> {
    return this.http
      .get<PerformanceModel[]>(this.apiUrl)
      .pipe(catchError(this.handleError));
  }

  // Get a specific performance record by ID
  getPerformance(id: number): Observable<PerformanceModel> {
    return this.http
      .get<PerformanceModel>(`${this.apiUrl}/${id}`)
      .pipe(catchError(this.handleError));
  }

  // Create a new performance record
  createPerformance(
    performance: PerformanceModel
  ): Observable<PerformanceModel> {
    return this.http
      .post<PerformanceModel>(this.apiUrl, performance)
      .pipe(catchError(this.handleError));
  }

  // Update an existing performance record
  updatePerformance(
    id: number,
    performance: PerformanceModel
  ): Observable<PerformanceModel> {
    return this.http
      .put<PerformanceModel>(`${this.apiUrl}/${id}`, performance)
      .pipe(catchError(this.handleError));
  }

  // Delete a performance record
  deletePerformance(id: number): Observable<void> {
    return this.http
      .delete<void>(`${this.apiUrl}/${id}`)
      .pipe(catchError(this.handleError));
  }

  // Handle errors from HTTP requests
  private handleError(error: HttpErrorResponse): Observable<never> {
    // Log error to the console (or send to a remote logging infrastructure)
    console.error('An error occurred:', error.message);
    // Return an observable with a user-facing error message
    return throwError(
      () => new Error('Something went wrong; please try again later.')
    );
  }
}
