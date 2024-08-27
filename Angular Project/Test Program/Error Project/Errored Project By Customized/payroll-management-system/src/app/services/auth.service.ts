import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate {

  private apiUrl: string = "http://localhost:3000/auth";

  private userRole: string = '';  // Assuming you have a way to set this based on login

  private testUsers = [
    { username: 'admin', password: 'admin123', role: 'Admin' },
    { username: 'user', password: 'user123', role: 'User' },
    { username: 'guest', password: 'guest123', role: 'Guest' },
  ];

  private currentUser: any;

  constructor(
    private router: Router,
    private http: HttpClient,
  ) { }

  register(user: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, user);
  }

  login(credentials: { username: string; password: string }) {
    const user = this.testUsers.find(
      u =>
        u.username === credentials.username &&
        u.password === credentials.password
    );

    if (user) {
      this.currentUser = user;
      localStorage.setItem('userRole', user.role);
      return true;
    }
    return false;
  }

  getUserProfile(): Observable<any> {
    return this.http.get(`${this.apiUrl}/profile`);
  }

  updateUserProfile(user: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/profile`, user);
  }


  setUserRole(role: string) {
    this.userRole = role;
  }

  getRole() {
    return this.currentUser?.role || localStorage.getItem('userRole');
  }

  // getUserRole(): string {
  //   return this.userRole;
  // }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const expectedRole = route.data['expectedRole'];
    if (this.testUsers !== expectedRole) {
      this.router.navigate(['/unauthorized']);  // Redirect to unauthorized page
      return false;
    }
    return true;
  }

  logout() {
    this.currentUser = null;
    localStorage.removeItem('userRole');
    this.router.navigate(['/login']);
  }

  forgotPassword(email: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/forgot-password`, { email });
  }

  // canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
  //   const expectedRole = route.data['expectedRole'];
  //   if (this.userRole !== expectedRole) {
  //     this.router.navigate(['/unauthorized']);  // Redirect to unauthorized page
  //     return false;
  //   }
  //   return true;
  // }
}