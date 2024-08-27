import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  template: `<h1>Admin Dashboard</h1>`,
  styleUrl: './admin.component.css'
})
export class AdminComponent implements OnInit {
  users: any[] = [];

  constructor(private adminService: AdminService) { }

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.adminService.getUsers().subscribe({
      next: data => { this.users = data; },
      error: error => { console.error('Error fetching users:', error); }
    });
  }

  updateRole(userId: number, role: string): void {
    this.adminService.updateUserRole(userId, role).subscribe({
      next: () => { this.loadUsers(); },
      error: error => { console.error('Error updating role:', error); }
    });
  }
}