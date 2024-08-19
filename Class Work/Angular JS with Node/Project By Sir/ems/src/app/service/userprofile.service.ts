import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { UserModel } from '../model/user.model';
import { catchError, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserprofileService {

  private baseUrl = 'http://localhost:3000/user';

  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) { }

  getUserProfile(): Observable<UserModel | null> {
    const userId = this.authService.getUserId();
    console.log('User ID:', userId); // Log user ID
    if (userId) {
      return this.http.get<UserModel>(`${this.baseUrl}/${userId}`).pipe(
        catchError(err => {
          console.error('Error fetching user profile:', err);
          return of(null); // Return an observable with null in case of error
        })
      );
    }
    return of(null); // Return an observable with null if userId is not available
  }



  // UserprofileService
  // getUserProfile(): Observable<UserModel | null> {
  //   const userId = this.authService.getUserId();
  //   if (userId) {
  //     return this.http.get<UserModel>(`${this.baseUrl}/${userId}`);
  //   }
  //   return of(null); // Return an observable with null if userId is not available
  // }

  // getUserProfile(): Observable<UserModel | null> {
  //   return of(this.authService.getUserProfileFromStorage());
  // }

  updateUserProfile(user: UserModel): Observable<UserModel> {
    localStorage.setItem('userProfile', JSON.stringify(user));
    return this.http.put<UserModel>(`${this.baseUrl}/${user.id}`, user);
  }

}