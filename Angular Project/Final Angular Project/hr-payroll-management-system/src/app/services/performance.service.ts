import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PerformanceService {
  private apiUrl = 'http://localhost:3000/performances';

  constructor(private http: HttpClient) { }

  getAllPerformance(): Observable<Performance[]> {
    return this.http.get<Performance[]>(this.apiUrl).pipe(
      catchError(this.handleError)
    );
  }

  getPerformance(id: number): Observable<Performance> {
    return this.http.get<Performance>(`${this.apiUrl}/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  createPerformance(performance: Performance): Observable<Performance> {
    return this.http.post<Performance>(this.apiUrl, performance).pipe(
      catchError(this.handleError)
    );
  }

  updatePerformance(id: number, performance: Performance): Observable<Performance> {
    return this.http.put<Performance>(`${this.apiUrl}/${id}`, performance).pipe(
      catchError(this.handleError)
    );
  }

  deletePerformance(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: any) {
    console.error('An error occurred:', error);
    return throwError(() => new Error('Something went wrong; please try again later.'));
  }
}