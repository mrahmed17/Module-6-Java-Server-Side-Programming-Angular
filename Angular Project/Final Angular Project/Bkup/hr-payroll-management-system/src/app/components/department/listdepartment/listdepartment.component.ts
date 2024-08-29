import { Component, OnInit } from '@angular/core';
import { DepartmentModel } from '../../../models/department.model';
import { DepartmentService } from '../../../services/department.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listdepartment',
  templateUrl: './listdepartment.component.html',
  styleUrl: './listdepartment.component.css',
})
export class ListdepartmentComponent implements OnInit {
  departments: DepartmentModel[] = [];
  errorMessage: string = '';

  constructor(
    private departmentService: DepartmentService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadDepartments();
  }

  // Load all departments
  loadDepartments(): void {
    this.departmentService.getAllDepartments().subscribe(
      (data) => {
        this.departments = data;
      },
      (error) => {
        console.error('Failed to load departments', error);
        this.errorMessage = 'Failed to load departments. Please try again.';
      }
    );
  }

  // Navigate to the department details view
  viewDepartment(id: string): void {
    this.router.navigate([`/view-department/${id}`]);
  }

  // Navigate to the edit department page
  editDepartment(id: string): void {
    this.router.navigate([`/edit-department/${id}`]);
  }

  // Delete a department
  deleteDepartment(id: string): void {
    if (confirm('Are you sure you want to delete this department?')) {
      this.departmentService.deleteDepartment(id).subscribe(
        () => {
          this.loadDepartments();
        },
        (error) => {
          console.error('Failed to delete department', error);
          this.errorMessage = 'Failed to delete department. Please try again.';
        }
      );
    }
  }
}
