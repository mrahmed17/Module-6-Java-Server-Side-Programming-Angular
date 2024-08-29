import { Component, OnInit } from '@angular/core';
import { DepartmentModel } from '../../../models/department.model';
import { ActivatedRoute, Router } from '@angular/router';
import { DepartmentService } from '../../../services/department.service';

@Component({
  selector: 'app-viewdepartment',
  templateUrl: './viewdepartment.component.html',
  styleUrl: './viewdepartment.component.css',
})
export class ViewdepartmentComponent implements OnInit {
  department: DepartmentModel | null = null;
  errorMessage: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private departmentService: DepartmentService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.loadDepartment(id);
    }
  }

  // Load a single department record
  loadDepartment(id: string): void {
    this.departmentService.getDepartmentById(id).subscribe(
      (data) => {
        this.department = data;
      },
      (error) => {
        console.error('Failed to load department details', error);
        this.errorMessage =
          'Failed to load department details. Please try again.';
      }
    );
  }

  // Navigate back to the department list
  goBack(): void {
    this.router.navigate(['/department-list']);
  }
}
