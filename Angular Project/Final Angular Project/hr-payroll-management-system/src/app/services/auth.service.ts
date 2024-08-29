import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { AdminModel } from '../models/admin.model';
import { ManagerModel } from '../models/manager.model';
import { EmployeeModel } from '../models/employee.model';
import { AuthResponseModel } from '../models/auth-response';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl: string = 'http://localhost:3000/auth';
  private tokenKey = 'authToken'; // Key to store token in localStorage

  constructor(private http: HttpClient) {}

  // Method to login and obtain an authentication token
  login(email: string, password: string): Observable<AuthResponseModel> {
    return this.http
      .get<(AdminModel | ManagerModel | EmployeeModel)[]>(this.apiUrl, {
        params: { email },
      })
      .pipe(
        map((users) => {
          const user = users.find((u) => u.email === email);

          if (user && user.password === password) {
            // Simple password check
            const token = this.generateToken(user);
            const authResponse: AuthResponseModel = {
              token,
              expiresIn: 3600, // Example expiration time in seconds
              issuedAt: new Date(),
              role: user.role as 'Admin' | 'Manager' | 'Employee',
            };
            this.storeToken(authResponse.token);
            this.setCurrentUser(user);
            return authResponse;
          } else {
            throw new Error('Invalid credentials');
          }
        }),
        catchError((error) => {
          console.error('Login error:', error);
          return throwError(
            () => new Error('Failed to login. Please check your credentials.')
          );
        })
      );
  }

  // Logs out the current user
  logout(): void {
    this.clearCurrentUser();
    localStorage.removeItem(this.tokenKey);
  }

  // Check if a user is authenticated
  isAuthenticated(): boolean {
    return !!this.getToken();
  }

  // Retrieves the token from localStorage
  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  // Stores the token in localStorage
  private storeToken(token: string): void {
    localStorage.setItem(this.tokenKey, token);
  }

  // Sets the current user and stores in localStorage
  private setCurrentUser(
    user: AdminModel | ManagerModel | EmployeeModel
  ): void {
    localStorage.setItem('currentUser', JSON.stringify(user));
  }

  // Clears the current user from localStorage
  private clearCurrentUser(): void {
    localStorage.removeItem('currentUser');
  }

  // Generates a token (for educational purposes)
  private generateToken(
    user: AdminModel | ManagerModel | EmployeeModel
  ): string {
    return btoa(JSON.stringify({ id: user.id, role: user.role }));
  }

  // Retrieves the current user from localStorage
  getCurrentUser(): AdminModel | ManagerModel | EmployeeModel | null {
    const user = localStorage.getItem('currentUser');
    return user ? JSON.parse(user) : null;
  }

  // Retrieves the user ID from the current user
  getUserId(): string | null {
    const user = this.getCurrentUser();
    return user ? user.id : null;
  }
}
