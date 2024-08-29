import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { ManagerModel } from '../models/manager.model';

@Injectable({
  providedIn: 'root',
})
export class ManagerService {
  private apiUrl: string = 'http://localhost:3000/managers'; // Base URL for managers API

  constructor(private http: HttpClient) {}

  // Method to generate a unique managerId
  private generateManagerId(username: string): string {
    const randomNumber = Math.floor(Math.random() * 10000); // Random number for uniqueness
    return `${username}-${randomNumber}`;
  }

  // Method to create a new manager and save it to db.json
  createManager(
    username: string,
    fullName: string,
    email: string,
    contactNumber: string,
    gender: 'Male' | 'Female' | 'Other',
    age: string,
    nidNo: number,
    department: string,
    assignedEmployees: string[],
    hireDate: Date,
    payrollCalculationMethod: 'Weekly' | 'Monthly',
    lastLogin: Date,
    status: 'active' | 'inactive',
    hourlyRate: number,
    profilePhoto?: string
  ): Observable<ManagerModel> {
    const managerId = this.generateManagerId(username);
    const currentDate = new Date();
    const newManager = new ManagerModel(
      managerId,
      username,
      fullName,
      email,
      contactNumber,
      'Manager',
      gender,
      age,
      nidNo,
      department,
      assignedEmployees,
      hireDate,
      payrollCalculationMethod,
      lastLogin,
      status,
      hourlyRate,
      currentDate,
      currentDate,
      profilePhoto
    );

    // Save the new manager to db.json
    return this.http
      .post<ManagerModel>(this.apiUrl, newManager)
      .pipe(catchError(this.handleError));
  }

  // Method to get manager by ID
  getManagerById(managerId: string): Observable<ManagerModel> {
    return this.http
      .get<ManagerModel>(`${this.apiUrl}/${managerId}`)
      .pipe(catchError(this.handleError));
  }

  // Method to update manager details
  updateManager(
    managerId: string,
    updatedDetails: Partial<ManagerModel>
  ): Observable<ManagerModel> {
    // Update createdAt to the current date on update
    updatedDetails.updatedAt = new Date();
    return this.http
      .patch<ManagerModel>(`${this.apiUrl}/${managerId}`, updatedDetails)
      .pipe(catchError(this.handleError));
  }

  // Method to delete a manager
  deleteManager(managerId: string): Observable<void> {
    return this.http
      .delete<void>(`${this.apiUrl}/${managerId}`)
      .pipe(catchError(this.handleError));
  }

  // Method to get all managers
  getAllManagers(): Observable<ManagerModel[]> {
    return this.http
      .get<ManagerModel[]>(this.apiUrl)
      .pipe(catchError(this.handleError));
  }

  // Error handling
  private handleError(error: any): Observable<never> {
    console.error('An error occurred', error);
    return throwError(
      () => new Error('Something went wrong; please try again later.')
    );
  }
}
