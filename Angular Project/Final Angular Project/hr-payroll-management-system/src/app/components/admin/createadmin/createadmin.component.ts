import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from '../../../services/admin.service';

@Component({
  selector: 'app-createadmin',
  templateUrl: './createadmin.component.html',
  styleUrls: ['./createadmin.component.css'],
})
export class CreateadminComponent implements OnInit {
  adminForm: FormGroup;
  submissionError: string | null = null;

  constructor(
    private fb: FormBuilder,
    private adminService: AdminService,
    private router: Router
  ) {
    // Initialize the form with validators
    this.adminForm = this.fb.group({
      username: ['', Validators.required],
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      contactNumber: ['', Validators.required],
      gender: ['', Validators.required],
      age: ['', Validators.required],
      nidNo: ['', [Validators.required, Validators.pattern(/^\d+$/)]],
      accessLevel: ['', Validators.required],
      assignedLocations: [[]],
      assignedManagers: [[]],
      assignedDepartments: [[]],
      payrollCalculationMethod: ['', Validators.required],
      lastLogin: [new Date(), Validators.required],
      status: ['', Validators.required],
      hourlyRate: [
        '',
        [Validators.required, Validators.pattern(/^\d+(\.\d{1,2})?$/)],
      ],
      profilePhoto: [''],
    });
  }

  ngOnInit(): void {}

  // Handle form submission
  onSubmit(): void {
    if (this.adminForm.invalid) {
      this.submissionError = 'Please fill in all required fields correctly.';
      return;
    }

    const formValue = this.adminForm.value;
    this.adminService
      .createAdmin(
        formValue.username,
        formValue.fullName,
        formValue.email,
        formValue.contactNumber,
        formValue.gender,
        formValue.age,
        formValue.nidNo,
        formValue.accessLevel,
        formValue.assignedLocations,
        formValue.assignedManagers,
        formValue.assignedDepartments,
        formValue.payrollCalculationMethod,
        formValue.lastLogin,
        formValue.status,
        formValue.hourlyRate,
        formValue.profilePhoto
      )
      .subscribe(
        () => {
          this.router.navigate(['/admins/list']);
        },
        (error) => {
          this.submissionError = 'Failed to create admin. Please try again.';
          console.error('Create admin error:', error);
        }
      );
  }

  // Reset form fields
  resetForm(): void {
    this.adminForm.reset();
  }

  // Navigate back to admin list
  cancel(): void {
    this.router.navigate(['/admins/list']);
  }
}
