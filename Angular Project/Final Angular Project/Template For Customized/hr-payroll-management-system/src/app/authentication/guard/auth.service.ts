import { HttpClient, HttpParams } from '@angular/common/http';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { AuthResponse } from '../guard/auth-response';
import { BehaviorSubject, catchError, map, Observable, throwError } from 'rxjs';
import { UserModel } from '../../admin/user.model';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  private apiUrl: string = "http://localhost:3000/user";
  private currentUserSubject: BehaviorSubject<UserModel | null>;
  public currentUser$: Observable<UserModel | null>;

  constructor(
    private http: HttpClient,
    @Inject(PLATFORM_ID) private platformId: Object  // Injecting PLATFORM_ID to check if it's browser
  ) {
    const storedUser = this.isBrowser() ? JSON.parse(localStorage.getItem('currentUser') || 'null') : null;
    this.currentUserSubject = new BehaviorSubject<UserModel | null>(storedUser);
    this.currentUser$ = this.currentUserSubject.asObservable();
  }

  // AuthService
  getUserId(): string | null {
    return this.currentUserValue?.id || null;
  }

  private isBrowser(): boolean {
    return isPlatformBrowser(this.platformId);
  }

  registration(user: UserModel): Observable<AuthResponse> {
    return this.http.post<UserModel>(this.apiUrl, user).pipe(
      map(
        (newUser: UserModel) => {
          const token = btoa(`${newUser.email}${newUser.password}`);
          return { token, user: newUser } as AuthResponse;
        }),
      catchError(error => {
        console.error('Registration error:', error);
        throw error;
      })
    );
  }

  login(credentials: { email: string; password: string }): Observable<AuthResponse> {
    let params = new HttpParams().set('email', credentials.email);

    return this.http.get<UserModel[]>(this.apiUrl, { params }).pipe(
      map(users => {
        const user = users[0];
        if (user && user.password === credentials.password) {
          const token = this.generateToken(user);
          this.storeToken(token);
          this.setCurrentUser(user);
          return { token, user } as AuthResponse;
        }
        throw new Error('Invalid credentials');
      }),
      catchError(error => {
        console.error('Login error:', error);
        return throwError(() => new Error('Failed to login. Please check your credentials.'));
      })
    );
  }

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

  public get currentUserValue(): UserModel | null {
    return this.currentUserSubject.value;
  }

  logout(): void {
    this.clearCurrentUser();
    if (this.isBrowser()) {
      localStorage.removeItem('token');
    }
    // localStorage.removeItem('token');
  }

  private setCurrentUser(user: UserModel): void {
    if (this.isBrowser()) {
      localStorage.setItem('currentUser', JSON.stringify(user));
    }
    this.currentUserSubject.next(user);
  }

  private clearCurrentUser(): void {
    if (this.isBrowser()) {
      localStorage.removeItem('currentUser');
    }
    this.currentUserSubject.next(null);
  }

  isAuthenticated(): boolean {
    return !!this.getToken();
  }

  getToken(): string | null {
    return this.isBrowser() ? localStorage.getItem('token') : null;
  }

  getUserRole(): any {
    return this.currentUserValue?.role;
  }

  storeToken(token: string): void {
    if (this.isBrowser()) {
      localStorage.setItem('token', token);
    }
  }

  // storeToken(token: string): void {
  //   localStorage.setItem('token', token);
  // }

  storeUserProfile(user: UserModel): void {
    if (this.isBrowser()) {
      localStorage.setItem('userProfile', JSON.stringify(user));

    }
  }

  getUserProfileFromStorage(): UserModel | null {
    if (this.isBrowser()) {
      const userProfile = localStorage.getItem('userProfile');
      console.log('User Profile is: ', userProfile);
      return userProfile ? JSON.parse(userProfile) : null;
    }
    return null;
  }

  removeUserDetails() {
    if (this.isBrowser()) {
      localStorage.clear();
    }
  }

}