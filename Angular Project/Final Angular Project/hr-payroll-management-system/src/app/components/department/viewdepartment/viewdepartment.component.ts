import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DepartmentService } from '../../../services/department.service';
import { DepartmentModel } from '../../../models/department.model';

@Component({
  selector: 'app-viewdepartment',
  templateUrl: './viewdepartment.component.html',
  styleUrls: ['./viewdepartment.component.css'],
})
export class ViewdepartmentComponent implements OnInit {
  department: DepartmentModel | null = null;
  loading = false;
  errorMessage: string | null = null;
  id: string = '';

  constructor(
    private departmentService: DepartmentService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')!;
    this.loadDepartment();
  }

  loadDepartment(): void {
    this.loading = true;
    this.departmentService.getDepartmentById(this.id).subscribe(
      (department: DepartmentModel) => {
        this.department = department;
        this.loading = false;
      },
      (error) => {
        this.errorMessage = 'Failed to load department details.';
        this.loading = false;
        console.error('Failed to load department', error);
      }
    );
  }
}
