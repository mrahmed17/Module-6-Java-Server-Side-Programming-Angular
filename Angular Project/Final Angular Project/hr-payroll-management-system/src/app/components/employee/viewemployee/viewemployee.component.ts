import { Component, OnInit } from '@angular/core';
import { EmployeeModel } from '../../../models/employee.model';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../../../services/employee.service';

@Component({
  selector: 'app-viewemployee',
  templateUrl: './viewemployee.component.html',
  styleUrl: './viewemployee.component.css',
})
export class ViewemployeeComponent implements OnInit {
  employee: EmployeeModel | null = null;
  errorMessage: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private employeeService: EmployeeService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.loadEmployee(id);
    }
  }

  // Load a single employee record
  loadEmployee(id: string): void {
    this.employeeService.getEmployeeById(id).subscribe(
      (data: EmployeeModel) => {
        this.employee = data;
      },
      (error) => {
        console.error('Failed to load employee details', error);
        this.errorMessage =
          'Failed to load employee details. Please try again.';
      }
    );
  }

  // Navigate back to the list
  goBack(): void {
    this.router.navigate(['/employee/list']);
  }
}
