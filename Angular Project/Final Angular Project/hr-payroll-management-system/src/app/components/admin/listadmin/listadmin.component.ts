import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../../../services/admin.service';
import { AdminModel } from '../../../models/admin.model';

@Component({
  selector: 'app-listadmin',
  templateUrl: './listadmin.component.html',
  styleUrls: ['./listadmin.component.css'],
})
export class ListadminComponent implements OnInit {
  admins: AdminModel[] = [];
  loading = true;
  errorMessage: string | null = null;

  constructor(private adminService: AdminService, private router: Router) {}

  ngOnInit(): void {
    this.adminService.getAllAdmins().subscribe(
      (data: AdminModel[]) => {
        this.admins = data;
        this.loading = false;
      },
      (error) => {
        this.errorMessage = 'Failed to load admins';
        this.loading = false;
        console.error('Failed to load admins', error);
      }
    );
  }

  viewAdmin(adminId: string): void {
    this.router.navigate(['/admins/view', adminId]);
  }

  editAdmin(adminId: string): void {
    this.router.navigate(['/admins/edit', adminId]);
  }

  deleteAdmin(adminId: string): void {
    if (confirm('Are you sure you want to delete this admin?')) {
      this.adminService.deleteAdmin(adminId).subscribe(
        () => {
          this.admins = this.admins.filter((admin) => admin.id !== adminId);
        },
        (error) => {
          this.errorMessage = 'Failed to delete admin';
          console.error('Failed to delete admin', error);
        }
      );
    }
  }
}
