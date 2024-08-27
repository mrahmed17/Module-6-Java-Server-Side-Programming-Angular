import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EmployeeModel } from '../models/employee.model';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private baseUrl = 'http://localhost:3000/employees';

  constructor(private http: HttpClient) {}

  createEmployee(employee: EmployeeModel): Observable<EmployeeModel> {
    return this.http.post<EmployeeModel>(`${this.baseUrl}`, employee);
  }

  getEmployees(): Observable<EmployeeModel[]> {
    return this.http.get<EmployeeModel[]>(`${this.baseUrl}`);
  }

  getEmployeeById(id: number): Observable<EmployeeModel> {
    return this.http.get<EmployeeModel>(`${this.baseUrl}/${id}`);
  }

  updateEmployee(
    id: number,
    employee: EmployeeModel
  ): Observable<EmployeeModel> {
    return this.http.put<EmployeeModel>(`${this.baseUrl}/${id}`, employee);
  }

  deleteEmployee(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }

  // Additional method to get employees by department
  getEmployeesByDepartment(departmentId: number): Observable<EmployeeModel[]> {
    return this.http.get<EmployeeModel[]>(
      `${this.baseUrl}?departmentId=${departmentId}`
    );
  }
}
