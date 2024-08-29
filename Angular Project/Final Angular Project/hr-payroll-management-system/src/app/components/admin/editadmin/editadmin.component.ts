import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminService } from '../../../services/admin.service';
import { AdminModel } from '../../../models/admin.model';

@Component({
  selector: 'app-editadmin',
  templateUrl: './editadmin.component.html',
  styleUrls: ['./editadmin.component.css'],
})
export class EditadminComponent implements OnInit {
  adminForm: FormGroup;
  adminId: string | null = null;
  loading = true;
  submissionError: string | null = null;
  successMessage: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private adminService: AdminService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.adminForm = this.fb.group({
      username: ['', Validators.required],
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      contactNumber: ['', Validators.required],
      gender: ['', Validators.required],
      age: ['', Validators.required],
      nidNo: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      accessLevel: ['', Validators.required],
      payrollCalculationMethod: ['', Validators.required],
      status: ['', Validators.required],
      hourlyRate: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      profilePhoto: [''],
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.adminId = params['id'];
      if (this.adminId) {
        this.adminService.getAdminById(this.adminId).subscribe(
          (admin: AdminModel) => {
            this.adminForm.patchValue(admin);
            this.loading = false;
          },
          (error) => {
            this.submissionError = 'Failed to load admin details';
            this.loading = false;
            console.error('Failed to load admin details', error);
          }
        );
      }
    });
  }

  onSubmit(): void {
    if (this.adminForm.valid) {
      this.adminService
        .updateAdmin(this.adminId!, this.adminForm.value)
        .subscribe(
          () => {
            this.successMessage = 'Admin details updated successfully';
            setTimeout(() => this.router.navigate(['/admins/list']), 2000);
          },
          (error) => {
            this.submissionError = 'Failed to update admin details';
            console.error('Failed to update admin details', error);
          }
        );
    }
  }

  resetForm(): void {
    this.adminForm.reset();
  }

  cancel(): void {
    this.router.navigate(['/admins/list']);
  }
}
