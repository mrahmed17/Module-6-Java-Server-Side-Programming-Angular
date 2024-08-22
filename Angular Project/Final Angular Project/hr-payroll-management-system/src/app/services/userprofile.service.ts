import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { UserModel } from '../models/user.model';
import { catchError, Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserprofileService {
  private apiUrl: string = 'http://localhost:3000/users'; // API URL directly here

  constructor(private http: HttpClient, private authService: AuthService) {}

  // Helper method to set headers including Authorization
  private getAuthHeaders(): HttpHeaders {
    const token = this.authService.getToken(); // Assuming AuthService has a method to get the token
    return new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    });
  }

  // Create a new user
  createUser(user: UserModel): Observable<UserModel> {
    const headers = this.getAuthHeaders();
    return this.http
      .post<UserModel>(this.apiUrl, user, { headers })
      .pipe(catchError(this.handleError));
  }

  // Get a single user by ID
  getUser(id: string): Observable<UserModel> {
    const headers = this.getAuthHeaders();
    return this.http
      .get<UserModel>(`${this.apiUrl}/${id}`, { headers })
      .pipe(catchError(this.handleError));
  }

  // Get all users
  getAllUsers(): Observable<UserModel[]> {
    const headers = this.getAuthHeaders();
    return this.http
      .get<UserModel[]>(this.apiUrl, { headers })
      .pipe(catchError(this.handleError));
  }

  // Delete a user
  deleteUser(id: string): Observable<void> {
    const headers = this.getAuthHeaders();
    return this.http
      .delete<void>(`${this.apiUrl}/${id}`, { headers })
      .pipe(catchError(this.handleError));
  }

  // Get the logged-in user's profile
  getUserProfile(): Observable<UserModel | null> {
    const userId = this.authService.getUserId();
    if (userId) {
      const headers = this.getAuthHeaders();
      return this.http
        .get<UserModel>(`${this.apiUrl}/${userId}`, { headers })
        .pipe(
          catchError((err) => {
            console.error('Error fetching user profile:', err);
            return of(null);
          })
        );
    }
    return of(null); // Return an observable with null if userId is not available
  }

  // Update the logged-in user's profile
  updateUserProfile(user: UserModel): Observable<UserModel> {
    if (user && user.id) {
      const headers = this.getAuthHeaders();
      localStorage.setItem('userProfile', JSON.stringify(user));
      return this.http
        .put<UserModel>(`${this.apiUrl}/${user.id}`, user, { headers })
        .pipe(catchError(this.handleError));
    } else {
      return throwError(() => new Error('Invalid user data'));
    }
  }

  // Error handling method
  private handleError(error: any): Observable<never> {
    let errorMessage: string;

    if (error.error instanceof ErrorEvent) {
      errorMessage = `Client-side error: ${error.error.message}`;
    } else {
      switch (error.status) {
        case 400:
          errorMessage = `Bad Request: ${error.message}`;
          break;
        case 401:
          errorMessage = `Unauthorized: ${error.message}`;
          break;
        case 403:
          errorMessage = `Forbidden: ${error.message}`;
          break;
        case 404:
          errorMessage = `Not Found: ${error.message}`;
          break;
        case 500:
          errorMessage = `Internal Server Error: ${error.message}`;
          break;
        default:
          errorMessage = `Unexpected Error: ${error.message}`;
          break;
      }
    }

    console.error(errorMessage);
    return throwError(() => new Error(errorMessage));
  }
}
