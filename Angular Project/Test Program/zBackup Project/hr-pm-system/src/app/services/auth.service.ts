import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { AuthResponseModel } from '../models/authresponse.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl: string = 'http://localhost:3000/auth'; // Base URL for authentication API
  private tokenKey = 'authToken'; // Key to store token in localStorage

  constructor(private http: HttpClient) {}

  // Method to login and obtain an authentication token
  login(username: string, password: string): Observable<AuthResponseModel> {
    const url = `${this.baseUrl}/login`;
    return this.http.post<AuthResponseModel>(url, { username, password }).pipe(
      map((response) => {
        this.storeToken(response.token);
        return new AuthResponseModel(
          response.token,
          response.expiresIn,
          new Date(response.issuedAt),
          response.role
        );
      }),
      catchError(this.handleError<AuthResponseModel>('login'))
    );
  }

  // Method to logout and clear the token
  logout(): void {
    localStorage.removeItem(this.tokenKey);
  }

  // Method to check if a user is authenticated
  isAuthenticated(): boolean {
    const token = this.getToken();
    if (!token) return false;

    const authResponse = this.decodeToken(token);
    return !authResponse.isTokenExpired();
  }

  // Method to get the user's role from the token
  getUserRole(): 'Admin' | 'Manager' | 'Employee' | null {
    const token = this.getToken();
    if (!token) return null;

    const authResponse = this.decodeToken(token);
    return authResponse.role;
  }

  // Method to get the stored token
  private getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  // Method to store the token in localStorage
  private storeToken(token: string): void {
    localStorage.setItem(this.tokenKey, token);
  }

  // Method to decode the stored token
  private decodeToken(token: string): AuthResponseModel {
    const payload = JSON.parse(atob(token.split('.')[1]));
    return new AuthResponseModel(
      token,
      payload.exp,
      new Date(payload.iat * 1000),
      payload.role
    );
  }

  // Method to handle errors
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
