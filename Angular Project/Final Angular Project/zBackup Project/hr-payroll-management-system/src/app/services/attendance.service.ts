import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AttendanceModel } from '../models/attendance.model';

@Injectable({
  providedIn: 'root',
})
export class AttendanceService {
  private apiUrl: string = 'http://localhost:3000/attendances';

  constructor(private http: HttpClient) {}

  getAllAttendances(): Observable<AttendanceModel[]> {
    return this.http
      .get<AttendanceModel[]>(this.apiUrl)
      .pipe(catchError(this.handleError));
  }

  getAttendance(id: string): Observable<AttendanceModel> {
    return this.http
      .get<AttendanceModel>(`${this.apiUrl}/${id}`)
      .pipe(catchError(this.handleError));
  }

  createAttendance(attendance: AttendanceModel): Observable<AttendanceModel> {
    return this.http
      .post<AttendanceModel>(this.apiUrl, attendance)
      .pipe(catchError(this.handleError));
  }

  updateAttendance(
    id: string,
    attendance: AttendanceModel
  ): Observable<AttendanceModel> {
    return this.http
      .put<AttendanceModel>(`${this.apiUrl}/${id}`, attendance)
      .pipe(catchError(this.handleError));
  }

  deleteAttendance(id: string): Observable<void> {
    return this.http
      .delete<void>(`${this.apiUrl}/${id}`)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: any): Observable<never> {
    // Handle the error and return an observable
    console.error('An error occurred:', error);
    return throwError('Something went wrong; please try again later.');
  }
}
