import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { PayrollModel } from '../models/payroll.model';

@Injectable({
  providedIn: 'root',
})
export class PayrollService {
  private apiUrl: string = 'http://localhost:3000/payrolls';

  constructor(private httpClient: HttpClient) {}

  // Create a new payroll record
  createPayroll(payroll: PayrollModel): Observable<PayrollModel> {
    payroll.netPay = this.calculateNetPay(payroll); // Calculate net pay before creating
    return this.httpClient
      .post<PayrollModel>(this.apiUrl, payroll)
      .pipe(catchError(this.handleError));
  }

  // Get a payroll record by ID
  getPayrollById(id: string): Observable<PayrollModel> {
    return this.httpClient
      .get<PayrollModel>(`${this.apiUrl}/${id}`)
      .pipe(catchError(this.handleError));
  }

  // Get all payroll records
  getAllPayrolls(): Observable<PayrollModel[]> {
    return this.httpClient
      .get<PayrollModel[]>(this.apiUrl)
      .pipe(catchError(this.handleError));
  }

  // Update an existing payroll record
  updatePayroll(id: string, payroll: PayrollModel): Observable<PayrollModel> {
    payroll.netPay = this.calculateNetPay(payroll); // Recalculate net pay before updating
    return this.httpClient
      .put<PayrollModel>(`${this.apiUrl}/${id}`, payroll)
      .pipe(catchError(this.handleError));
  }

  // Delete a payroll record
  deletePayroll(id: string): Observable<void> {
    return this.httpClient
      .delete<void>(`${this.apiUrl}/${id}`)
      .pipe(catchError(this.handleError));
  }

  // Calculate the net pay for a payroll record
  private calculateNetPay(payroll: PayrollModel): number {
    const totalDeductions = (payroll.deductions || 0) + (payroll.tax || 0);
    const totalBonuses = payroll.bonuses || 0;
    return (payroll.UserModel.salary || 0) + totalBonuses - totalDeductions;
  }

  // Handle any errors in the HTTP request
  private handleError(error: HttpErrorResponse): Observable<never> {
    // Log error to the console (or send to a remote logging infrastructure)
    console.error('An error occurred:', error.message);
    // Return an observable with a user-facing error message
    return throwError(
      () => new Error('Something went wrong; please try again later.')
    );
  }
}
