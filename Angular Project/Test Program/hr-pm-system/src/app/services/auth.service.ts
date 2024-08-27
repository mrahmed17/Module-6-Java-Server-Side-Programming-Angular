import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { UserModel } from '../models/user.model';
import { AuthResponse } from '../models/authresponse.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private authToken = new BehaviorSubject<string | null>(null);
  private currentUser = new BehaviorSubject<UserModel | null>(null);

  // Handle login response and store token and user data
  handleAuthResponse(response: AuthResponse): void {
    const { token, user } = response;
    this.authToken.next(token);
    this.currentUser.next(user);

    // Optionally store token and user data in local storage or session storage
    localStorage.setItem('authToken', token);
    localStorage.setItem('currentUser', JSON.stringify(user));
  }

  // Method to retrieve the user's role
  getUserRole(): string | null {
    const user = this.currentUser.value;
    return user ? user.role : null;
  }
}
