import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PayrollModel } from '../models/payroll.model';

@Injectable({
  providedIn: 'root',
})
export class PayrollService {
  private baseUrl = 'http://localhost:3000/payrolls';

  constructor(private http: HttpClient) {}

  createPayroll(payroll: PayrollModel): Observable<PayrollModel> {
    return this.http.post<PayrollModel>(`${this.baseUrl}`, payroll);
  }

  getPayrolls(): Observable<PayrollModel[]> {
    return this.http.get<PayrollModel[]>(`${this.baseUrl}`);
  }

  getPayrollById(id: number): Observable<PayrollModel> {
    return this.http.get<PayrollModel>(`${this.baseUrl}/${id}`);
  }

  updatePayroll(id: number, payroll: PayrollModel): Observable<PayrollModel> {
    return this.http.put<PayrollModel>(`${this.baseUrl}/${id}`, payroll);
  }

  deletePayroll(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }

  // Additional method to get payrolls by user ID
  getPayrollsByUserId(userId: number): Observable<PayrollModel[]> {
    return this.http.get<PayrollModel[]>(`${this.baseUrl}?userId=${userId}`);
  }
}
