import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LeaveModel } from '../models/leave.model';

@Injectable({
  providedIn: 'root',
})
export class LeaveService {
  private baseUrl = 'http://localhost:3000/leaves';

  constructor(private http: HttpClient) {}

  createLeave(leave: LeaveModel): Observable<LeaveModel> {
    return this.http.post<LeaveModel>(`${this.baseUrl}`, leave);
  }

  getLeaves(): Observable<LeaveModel[]> {
    return this.http.get<LeaveModel[]>(`${this.baseUrl}`);
  }

  getLeaveById(id: number): Observable<LeaveModel> {
    return this.http.get<LeaveModel>(`${this.baseUrl}/${id}`);
  }

  updateLeave(id: number, leave: LeaveModel): Observable<LeaveModel> {
    return this.http.put<LeaveModel>(`${this.baseUrl}/${id}`, leave);
  }

  deleteLeave(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }

  // Additional method to get leaves by employee ID
  getLeavesByEmployee(employeeId: number): Observable<LeaveModel[]> {
    return this.http.get<LeaveModel[]>(
      `${this.baseUrl}?employeeId=${employeeId}`
    );
  }
}
