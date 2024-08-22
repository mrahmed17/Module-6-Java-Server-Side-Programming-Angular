import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from '../authentication/guard/auth.service';
import { UserModel } from './user.model';
import { catchError, Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserprofileService {

  private apiUrl: string = 'http://localhost:3000/users';

  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) { }

  // Create a new user
  createUser(user: UserModel): Observable<UserModel> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<UserModel>(this.apiUrl, user, { headers })
      .pipe(catchError(this.handleError));
  }

  // Get a single user by ID
  getUser(id: string): Observable<UserModel> {
    return this.http.get<UserModel>(`${this.apiUrl}/${id}`)
      .pipe(catchError(this.handleError));
  }

  // Get all users
  getAllUsers(): Observable<UserModel[]> {
    return this.http.get<UserModel[]>(this.apiUrl)
      .pipe(catchError(this.handleError));
  }

  // Delete a user
  deleteUser(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`)
      .pipe(catchError(this.handleError));
  }

  // Get the logged-in user's profile
  getUserProfile(): Observable<UserModel | null> {
    const userId = this.authService.getUserId();
    if (userId) {
      return this.http.get<UserModel>(`${this.apiUrl}/${userId}`).pipe(
        catchError(err => {
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
      // Update local storage with the new user profile
      localStorage.setItem('userProfile', JSON.stringify(user));
      // Make the API call to update the profile
      return this.http.put<UserModel>(`${this.apiUrl}/${user.id}`, user)
        .pipe(catchError(this.handleError));
    } else {
      return throwError(() => new Error('Invalid user data'));
    }
  }

  // Error handling method
  private handleError(error: any): Observable<never> {
    let errorMessage = 'An unknown error occurred!';
    if (error.error instanceof ErrorEvent) {
      // Client-side or network error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.error(errorMessage);
    return throwError(() => new Error(errorMessage));
  }
}
