import { Component, OnInit } from '@angular/core';
import { UserModel } from '../../registration/user.model';
import { AuthService } from '../../authentication/guard/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {

  userRole: string | null = '';
  currentUser: UserModel | null = null;

  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
    this.authService.currentUser$.subscribe(user => {
      this.currentUser = user;
      this.userRole = user?.role || null;
    });
  }

}
