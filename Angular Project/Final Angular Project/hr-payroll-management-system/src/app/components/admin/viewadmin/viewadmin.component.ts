import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminModel } from '../../../models/admin.model';
import { AdminService } from '../../../services/admin.service';

@Component({
  selector: 'app-viewadmin',
  templateUrl: './viewadmin.component.html',
  styleUrls: ['./viewadmin.component.css'],
})
export class ViewadminComponent implements OnInit {
  admin: AdminModel | null = null;
  loading = true;
  errorMessage: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private adminService: AdminService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const id = params['id'];
      if (id) {
        this.adminService.getAdminById(id).subscribe(
          (data: AdminModel) => {
            this.admin = data;
            this.loading = false;
          },
          (error) => {
            this.errorMessage = 'Failed to load admin details';
            this.loading = false;
            console.error('Failed to load admin details', error);
          }
        );
      }
    });
  }

  goBack(): void {
    this.router.navigate(['/admins/list']);
  }
}
