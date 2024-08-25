import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AttendanceModel } from './attendance.model';



@Injectable({
  providedIn: 'root'
})
export class AttendanceService {

  private apiUrl: string = "http://localhost:3000/attendances";

  constructor(private http: HttpClient) { }

  getAttendances(): Observable<AttendanceModel[]> {
    return this.http.get<AttendanceModel[]>(this.apiUrl);
  }

  getAttendance(id: string): Observable<AttendanceModel> {
    return this.http.get<AttendanceModel>(`${this.apiUrl}/${id}`);
  }

  createAttendance(attendance: AttendanceModel): Observable<AttendanceModel> {
    return this.http.post<AttendanceModel>(this.apiUrl, attendance);
  }

  updateAttendance(attendance: AttendanceModel): Observable<AttendanceModel> {
    return this.http.put<AttendanceModel>(`${this.apiUrl}/${attendance.id}`, attendance);
  }

  deleteAttendance(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
