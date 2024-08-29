import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DepartmentService } from '../../../services/department.service';
import { DepartmentModel } from '../../../models/department.model';

@Component({
  selector: 'app-createdepartment',
  templateUrl: './createdepartment.component.html',
  styleUrls: ['./createdepartment.component.css'],
})
export class CreatedepartmentComponent {
  departmentForm: FormGroup;
  loading = false;
  errorMessage: string | null = null;

  constructor(
    private fb: FormBuilder,
    private departmentService: DepartmentService,
    private router: Router
  ) {
    this.departmentForm = this.fb.group({
      departmentId: ['', Validators.required],
      name: ['', Validators.required],
      phoneNumber: [
        '',
        [Validators.required, Validators.pattern(/^\+?[0-9]{7,14}$/)],
      ], // Ensure a valid phone number format
      email: ['', [Validators.required, Validators.email]],
      locationId: ['', Validators.required],
      managerId: ['', Validators.required],
      numberOfEmployees: [0, Validators.required], // Initialized to 0
    });
  }

  onSubmit(): void {
    if (this.departmentForm.valid) {
      this.loading = true;
      const newDepartment: DepartmentModel = {
        ...this.departmentForm.value,
      };

      this.departmentService.createDepartment(newDepartment).subscribe(
        () => {
          this.loading = false;
          this.router.navigate(['/departments/list']);
        },
        (error) => {
          this.errorMessage = 'Failed to create department.';
          this.loading = false;
          console.error('Failed to create department', error);
        }
      );
    }
  }

  cancel(): void {
    this.router.navigate(['/departments/list']);
  }
}
