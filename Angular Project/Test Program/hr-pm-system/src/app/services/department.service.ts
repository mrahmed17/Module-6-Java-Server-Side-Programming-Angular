import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DepartmentModel } from '../models/department.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DepartmentService {
  private baseUrl = 'http://localhost:3000/departments'; // Replace 'API_URL' with your actual API endpoint

  constructor(private http: HttpClient) {}

  // Create a new department
  createDepartment(department: DepartmentModel): Observable<DepartmentModel> {
    return this.http.post<DepartmentModel>(`${this.baseUrl}`, department);
  }

  // Get all departments
  getDepartments(): Observable<DepartmentModel[]> {
    return this.http.get<DepartmentModel[]>(`${this.baseUrl}`);
  }

  // Get a department by ID
  getDepartmentById(id: number): Observable<DepartmentModel> {
    return this.http.get<DepartmentModel>(`${this.baseUrl}/${id}`);
  }

  // Update a department
  updateDepartment(
    id: number,
    department: DepartmentModel
  ): Observable<DepartmentModel> {
    return this.http.put<DepartmentModel>(`${this.baseUrl}/${id}`, department);
  }

  // Delete a department
  deleteDepartment(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
