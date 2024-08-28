import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AttendanceModel } from '../models/attendance.model';

@Injectable({
  providedIn: 'root',
})
export class AttendanceService {
  private baseUrl: string = 'http://localhost:3000/attendances';

  constructor(private http: HttpClient) {}

  createAttendance(attendance: AttendanceModel): Observable<AttendanceModel> {
    return this.http.post<AttendanceModel>(`${this.baseUrl}`, attendance);
  }

  getAttendances(): Observable<AttendanceModel[]> {
    return this.http.get<AttendanceModel[]>(`${this.baseUrl}`);
  }

  getAttendanceById(id: number): Observable<AttendanceModel> {
    return this.http.get<AttendanceModel>(`${this.baseUrl}/${id}`);
  }

  updateAttendance(
    id: number,
    attendance: AttendanceModel
  ): Observable<AttendanceModel> {
    return this.http.put<AttendanceModel>(`${this.baseUrl}/${id}`, attendance);
  }

  deleteAttendance(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }

  // Additional method to get attendance by date range
  getAttendanceByDateRange(
    startDate: string,
    endDate: string
  ): Observable<AttendanceModel[]> {
    return this.http.get<AttendanceModel[]>(
      `${this.baseUrl}?startDate=${startDate}&endDate=${endDate}`
    );
  }
}
