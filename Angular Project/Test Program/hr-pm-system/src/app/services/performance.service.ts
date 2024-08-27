import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PerformanceModel } from '../models/performance.model';

@Injectable({
  providedIn: 'root',
})
export class PerformanceService {
  private baseUrl = 'http://localhost:3000/performances';

  constructor(private http: HttpClient) {}

  createPerformance(
    performance: PerformanceModel
  ): Observable<PerformanceModel> {
    return this.http.post<PerformanceModel>(`${this.baseUrl}`, performance);
  }

  getPerformances(): Observable<PerformanceModel[]> {
    return this.http.get<PerformanceModel[]>(`${this.baseUrl}`);
  }

  getPerformanceById(id: number): Observable<PerformanceModel> {
    return this.http.get<PerformanceModel>(`${this.baseUrl}/${id}`);
  }

  updatePerformance(
    id: number,
    performance: PerformanceModel
  ): Observable<PerformanceModel> {
    return this.http.put<PerformanceModel>(
      `${this.baseUrl}/${id}`,
      performance
    );
  }

  deletePerformance(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }

  // Additional method to get performance by employee ID
  getPerformanceByEmployee(employeeId: number): Observable<PerformanceModel[]> {
    return this.http.get<PerformanceModel[]>(
      `${this.baseUrl}?employeeId=${employeeId}`
    );
  }
}
