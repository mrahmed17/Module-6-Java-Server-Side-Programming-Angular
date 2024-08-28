import { Injectable } from '@angular/core';
import { AdminModel } from '../models/admin.model'; // Adjust the import path as needed
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  private baseUrl = 'http://localhost:3000/admins'; // Base URL for admins API

  constructor(private http: HttpClient) {}

  // Method to generate a unique adminId
  private generateAdminId(username: string): string {
    const randomNumber = Math.floor(Math.random() * 10000); // Random number for uniqueness
    return `${username}-${randomNumber}`;
  }

  // Method to create a new admin
  createAdmin(
    username: string,
    fullName: string,
    email: string,
    contactNumber: string,
    gender: 'Male' | 'Female' | 'Other',
    age: string,
    nidNo: number,
    accessLevel: string,
    assignedLocations: string[],
    assignedManagers: string[],
    assignedDepartments: string[],
    payrollCalculationMethod: 'Weekly' | 'Monthly',
    lastLogin: Date,
    status: 'active' | 'inactive',
    hourlyRate: number,
    profilePhoto?: string
  ): Observable<AdminModel> {
    const adminId = this.generateAdminId(username);
    const newAdmin = new AdminModel(
      adminId,
      username,
      fullName,
      email,
      contactNumber,
      'Admin',
      gender,
      age,
      nidNo,
      accessLevel,
      assignedLocations,
      assignedManagers,
      assignedDepartments,
      payrollCalculationMethod,
      lastLogin,
      status,
      hourlyRate,
      profilePhoto
    );

    // Save the new admin to db.json
    return this.http
      .post<AdminModel>(this.baseUrl, newAdmin)
      .pipe(catchError(this.handleError));
  }

  // Method to get admin by ID
  getAdminById(adminId: string): Observable<AdminModel> {
    return this.http
      .get<AdminModel>(`${this.baseUrl}/${adminId}`)
      .pipe(catchError(this.handleError));
  }

  // Method to update admin details
  updateAdmin(
    adminId: string,
    updatedDetails: Partial<AdminModel>
  ): Observable<AdminModel> {
    return this.http
      .patch<AdminModel>(`${this.baseUrl}/${adminId}`, updatedDetails)
      .pipe(catchError(this.handleError));
  }

  // Method to delete an admin
  deleteAdmin(adminId: string): Observable<void> {
    return this.http
      .delete<void>(`${this.baseUrl}/${adminId}`)
      .pipe(catchError(this.handleError));
  }

  // Method to get all admins
  getAllAdmins(): Observable<AdminModel[]> {
    return this.http
      .get<AdminModel[]>(this.baseUrl)
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
