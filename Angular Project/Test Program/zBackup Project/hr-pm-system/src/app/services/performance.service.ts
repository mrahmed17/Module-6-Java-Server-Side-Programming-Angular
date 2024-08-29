import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PerformanceModel } from '../models/performance.model';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PerformanceService {
  private baseUrl: string = 'http://localhost:3000/performance'; // Base URL for performance API

  constructor(private http: HttpClient) {}

  // Method to generate a unique performanceId
  private generatePerformanceId(employeeId: string): string {
    const randomNumber = Math.floor(Math.random() * 10000);
    return `${employeeId}-${randomNumber}`;
  }

  // Method to create a new performance record
  createPerformance(
    employeeId: string,
    managerId: string,
    goals: boolean,
    achievements: string,
    reviewDate: Date,
    rating: number,
    comments: string
  ): Observable<PerformanceModel> {
    const performanceId = this.generatePerformanceId(employeeId);
    const newPerformance = new PerformanceModel(
      performanceId,
      employeeId,
      managerId,
      goals,
      achievements,
      reviewDate,
      rating,
      comments
    );

    return this.http
      .post<PerformanceModel>(this.baseUrl, newPerformance)
      .pipe(catchError(this.handleError));
  }

  // Method to get performance record by ID
  getPerformanceById(performanceId: string): Observable<PerformanceModel> {
    return this.http
      .get<PerformanceModel>(`${this.baseUrl}/${performanceId}`)
      .pipe(catchError(this.handleError));
  }

  // Method to update performance record
  updatePerformance(
    performanceId: string,
    updatedDetails: Partial<PerformanceModel>
  ): Observable<PerformanceModel> {
    return this.http
      .patch<PerformanceModel>(
        `${this.baseUrl}/${performanceId}`,
        updatedDetails
      )
      .pipe(catchError(this.handleError));
  }

  // Method to delete performance record
  deletePerformance(performanceId: string): Observable<void> {
    return this.http
      .delete<void>(`${this.baseUrl}/${performanceId}`)
      .pipe(catchError(this.handleError));
  }

  // Error handling
  private handleError(error: any): Observable<never> {
    console.error('An error occurred', error);
    return throwError(
      () => new Error('Something went wrong; please try again later.')
    );
  }
}
