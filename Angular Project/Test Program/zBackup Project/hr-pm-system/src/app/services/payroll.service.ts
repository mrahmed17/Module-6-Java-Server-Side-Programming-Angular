import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { PayrollModel } from '../models/payroll.model'; // Adjust the import path as needed

@Injectable({
  providedIn: 'root',
})
export class PayrollService {
  private baseUrl: string = 'http://localhost:3000/payrolls'; // Base URL for payrolls API

  constructor(private http: HttpClient) {}

  // Method to generate a unique payrollId
  private generatePayrollId(employeeId: string): string {
    const randomNumber = Math.floor(Math.random() * 10000); // Random number for uniqueness
    return `${employeeId}-${randomNumber}`;
  }

  // Method to create a new payroll record
  createPayroll(
    employeeId: string,
    managerId: string,
    hourlyRate: number,
    performanceBonuses: number,
    medicare: number,
    deductions: number,
    overtimeHours: number,
    overtimeRate: number,
    yearlySickDay: number,
    payDate: Date
  ): Observable<PayrollModel> {
    const payrollId = this.generatePayrollId(employeeId);
    const newPayroll = new PayrollModel(
      payrollId,
      employeeId,
      managerId,
      hourlyRate,
      performanceBonuses,
      medicare,
      deductions,
      overtimeHours,
      overtimeRate,
      yearlySickDay,
      payDate
    );

    return this.http
      .post<PayrollModel>(this.baseUrl, newPayroll)
      .pipe(catchError(this.handleError));
  }

  // Method to get a payroll record by ID
  getPayrollById(payrollId: string): Observable<PayrollModel> {
    return this.http
      .get<PayrollModel>(`${this.baseUrl}/${payrollId}`)
      .pipe(catchError(this.handleError));
  }

  // Method to update a payroll record
  updatePayroll(
    payrollId: string,
    updatedDetails: Partial<PayrollModel>
  ): Observable<PayrollModel> {
    return this.http
      .patch<PayrollModel>(`${this.baseUrl}/${payrollId}`, updatedDetails)
      .pipe(catchError(this.handleError));
  }

  // Method to delete a payroll record
  deletePayroll(payrollId: string): Observable<void> {
    return this.http
      .delete<void>(`${this.baseUrl}/${payrollId}`)
      .pipe(catchError(this.handleError));
  }

  // Method to get all payroll records
  getAllPayrolls(): Observable<PayrollModel[]> {
    return this.http
      .get<PayrollModel[]>(this.baseUrl)
      .pipe(catchError(this.handleError));
  }

  // Error handling
  private handleError(error: HttpErrorResponse): Observable<never> {
    console.error('An error occurred', error);
    return throwError(
      () => new Error('Something went wrong; please try again later.')
    );
  }
}
