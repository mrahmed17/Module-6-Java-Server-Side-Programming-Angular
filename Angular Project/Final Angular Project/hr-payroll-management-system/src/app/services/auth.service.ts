import { HttpClient, HttpParams } from '@angular/common/http';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { AuthResponse } from '../models/auth-response';
import { BehaviorSubject, catchError, map, Observable, throwError } from 'rxjs';
import { UserModel } from '../models/user.model';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl: string = 'http://localhost:3000/user';
  private currentUserSubject: BehaviorSubject<UserModel | null>;
  public currentUser$: Observable<UserModel | null>;

  constructor(
    private http: HttpClient,
    @Inject(PLATFORM_ID) private platformId: Object // Injecting PLATFORM_ID to check if it's browser
  ) {
    const storedUser = this.isBrowser()
      ? JSON.parse(localStorage.getItem('currentUser') || 'null')
      : null;
    this.currentUserSubject = new BehaviorSubject<UserModel | null>(storedUser);
    this.currentUser$ = this.currentUserSubject.asObservable();
  }

  // Get the current user ID
  getUserId(): string | null {
    return this.currentUserValue?.id || null;
  }

  // Check if the platform is a browser
  private isBrowser(): boolean {
    return isPlatformBrowser(this.platformId);
  }

  // Registers a new user
  registration(user: UserModel): Observable<AuthResponse> {
    return this.http.post<UserModel>(this.apiUrl, user).pipe(
      map((newUser: UserModel) => {
        const token = this.generateToken(newUser);
        this.storeToken(token);
        this.setCurrentUser(newUser);
        return { token, user: newUser } as AuthResponse;
      }),
      catchError((error) => {
        console.error('Registration error:', error);
        return throwError(() => new Error('Registration failed'));
      })
    );
  }

  // Logs in a user
  login(credentials: {
    email: string;
    password: string;
  }): Observable<AuthResponse> {
    let params = new HttpParams().set('email', credentials.email);

    return this.http.get<UserModel[]>(this.apiUrl, { params }).pipe(
      map((users) => {
        const user = users[0];
        if (user && user.password === credentials.password) {
          const token = this.generateToken(user);
          this.storeToken(token);
          this.setCurrentUser(user);
          return { token, user } as AuthResponse;
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

  // Generates a token (use a more secure method in production)
  private generateToken(user: UserModel): string {
    // Example of a token generation using JSON.stringify,
    // you should replace this with a more secure JWT or other method
    return btoa(JSON.stringify({ email: user.email, password: user.password }));
  }

  // This method is based on Sir's created mehod

  // login(credentials: { email: string; password: string }): Observable<AuthResponse> {
  //   let params = new HttpParams();
  //   params = params.append('email', credentials.email);

  //   return this.http.get<UserModel[]>(`${this.apiUrl}`, { params }).pipe(
  //     map(users => {
  //       if (users.length > 0) {
  //         const user = users[0];
  //         if (user.password === credentials.password) {
  //           const token = btoa(`${user.email}:${user.password}`);
  //           this.storeToken(token);
  //           this.setCurrentUser(user);
  //           // this.storeUserProfile(user);
  //           return { token, user } as AuthResponse;
  //         } else {
  //           throw new Error('Invalid password');
  //         }
  //       } else {
  //         throw new Error('User not found');
  //       }
  //     }),

  //     catchError(error => {
  //       console.error('Login error:', error);
  //       throw error;
  //     })
  //   );
  // }

  // Gets the current user value
  public get currentUserValue(): UserModel | null {
    return this.currentUserSubject.value;
  }

  // Logs out the current user
  logout(): void {
    this.clearCurrentUser();
    if (this.isBrowser()) {
      localStorage.removeItem('token');
    }
  }

  // Sets the current user and stores in localStorage
  private setCurrentUser(user: UserModel): void {
    if (this.isBrowser()) {
      localStorage.setItem('currentUser', JSON.stringify(user));
    }
    this.currentUserSubject.next(user);
  }

  // Clears the current user from localStorage
  private clearCurrentUser(): void {
    if (this.isBrowser()) {
      localStorage.removeItem('currentUser');
    }
    this.currentUserSubject.next(null);
  }

  // Checks if the user is authenticated
  isAuthenticated(): boolean {
    return !!this.getToken();
  }
  // Retrieves the token from localStorage
  getToken(): string | null {
    return this.isBrowser() ? localStorage.getItem('token') : null;
  }

  // Retrieves the user role
  getUserRole(): string | undefined {
    return this.currentUserValue?.role;
  }

  // Stores the token in localStorage
  storeToken(token: string): void {
    if (this.isBrowser()) {
      localStorage.setItem('token', token);
    }
  }

  // storeToken(token: string): void {
  //   localStorage.setItem('token', token);
  // }

  // Stores the user profile in localStorage
  storeUserProfile(user: UserModel): void {
    if (this.isBrowser()) {
      localStorage.setItem('userProfile', JSON.stringify(user));
    }
  }

  // Retrieves the user profile from localStorage
  getUserProfileFromStorage(): UserModel | null {
    if (this.isBrowser()) {
      const userProfile = localStorage.getItem('userProfile');
      return userProfile ? JSON.parse(userProfile) : null;
    }
    return null;
  }

  // Clears all user details from localStorage
  removeUserDetails(): void {
    if (this.isBrowser()) {
      localStorage.clear();
    }
  }
}
