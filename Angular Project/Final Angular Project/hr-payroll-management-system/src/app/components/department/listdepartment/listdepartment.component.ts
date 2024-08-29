import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DepartmentService } from '../../../services/department.service';
import { DepartmentModel } from '../../../models/department.model';

@Component({
  selector: 'app-listdepartment',
  templateUrl: './listdepartment.component.html',
  styleUrls: ['./listdepartment.component.css'],
})
export class ListdepartmentComponent implements OnInit {
  departments: DepartmentModel[] = [];
  loading = false;
  errorMessage: string | null = null;

  constructor(
    private departmentService: DepartmentService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadDepartments();
  }

  loadDepartments(): void {
    this.loading = true;
    this.departmentService.getAllDepartments().subscribe(
      (departments: DepartmentModel[]) => {
        this.departments = departments;
        this.loading = false;
      },
      (error) => {
        this.errorMessage = 'Failed to load departments.';
        this.loading = false;
        console.error('Failed to load departments', error);
      }
    );
  }

  // Navigate to the department details view
  viewDepartment(id: string): void {
    this.router.navigate([`/departments/view/${id}`]);
  }

  editDepartment(departmentId: string): void {
    this.router.navigate(['/departments/edit', departmentId]);
  }

  deleteDepartment(departmentId: string): void {
    if (confirm('Are you sure you want to delete this department?')) {
      this.loading = true;
      this.departmentService.deleteDepartment(departmentId).subscribe(
        () => {
          this.departments = this.departments.filter(
            (department) => department.departmentId !== departmentId
          );
          this.loading = false;
        },
        (error) => {
          this.errorMessage = 'Failed to delete department.';
          this.loading = false;
          console.error('Failed to delete department', error);
        }
      );
    }
  }
}
