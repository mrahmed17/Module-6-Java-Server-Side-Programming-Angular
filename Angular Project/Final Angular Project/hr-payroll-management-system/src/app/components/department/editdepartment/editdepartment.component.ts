import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DepartmentService } from '../../../services/department.service';
import { DepartmentModel } from '../../../models/department.model';

@Component({
  selector: 'app-editdepartment',
  templateUrl: './editdepartment.component.html',
  styleUrls: ['./editdepartment.component.css'],
})
export class EditdepartmentComponent implements OnInit {
  departmentForm: FormGroup;
  loading = false;
  errorMessage: string | null = null;
  id: string = '';

  constructor(
    private fb: FormBuilder,
    private departmentService: DepartmentService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.departmentForm = this.fb.group({
      name: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      locationId: ['', Validators.required],
      managerId: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')!;
    this.loadDepartment();
  }

  loadDepartment(): void {
    this.loading = true;
    this.departmentService.getDepartmentById(this.id).subscribe(
      (department: DepartmentModel) => {
        this.departmentForm.patchValue(department);
        this.loading = false;
      },
      (error) => {
        this.errorMessage = 'Failed to load department details.';
        this.loading = false;
        console.error('Failed to load department', error);
      }
    );
  }

  onSubmit(): void {
    if (this.departmentForm.valid) {
      this.loading = true;
      const updatedDepartment: Partial<DepartmentModel> = {
        ...this.departmentForm.value,
      };

      // Check if `id` is correctly initialized
      if (this.id) {
        this.departmentService
          .updateDepartment(this.id, updatedDepartment)
          .subscribe(
            () => {
              this.loading = false;
              this.router.navigate(['/departments/list']);
            },
            (error) => {
              this.errorMessage = 'Failed to update department.';
              this.loading = false;
              console.error('Failed to update department', error);
            }
          );
      } else {
        this.errorMessage = 'Department ID is missing.';
      }
    }
  }
  resetForm(): void {
    this.departmentForm.reset();
  }

  cancel(): void {
    this.router.navigate(['/departments/list']);
  }
}
