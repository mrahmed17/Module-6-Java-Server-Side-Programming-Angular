import { Component, Input, OnInit } from '@angular/core';
import { UserModel } from '../../models/user.model';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @Input() isAuthenticated: boolean = false;
  userRole: string | null = '';
  currentUser: UserModel | null = null;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.authService.currentUser$.subscribe((user) => {
      this.currentUser = user;
      this.userRole = user?.role || null;
    });
  }

  onLogout(): void {
    this.authService.logout(); // Log out the user
    this.router.navigate(['/home']); // Navigate to home page after logout
  }
}
