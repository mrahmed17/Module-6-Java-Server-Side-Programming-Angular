import { Component, OnInit } from '@angular/core';
import { EmployeeModel } from '../../../models/employee.model';
import { EmployeeService } from '../../../services/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listemployee',
  templateUrl: './listemployee.component.html',
  styleUrl: './listemployee.component.css',
})
export class ListemployeeComponent implements OnInit {
  employees: EmployeeModel[] = [];
  errorMessage: string = '';

  constructor(
    private employeeService: EmployeeService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadEmployees();
  }

  // Load all employees
  loadEmployees(): void {
    this.employeeService.getAllEmployees().subscribe(
      (data: EmployeeModel[]) => {
        this.employees = data;
        console.log('Employees loaded:', this.employees); // Debugging
      },
      (error) => {
        console.error('Failed to load employees', error);
        this.errorMessage = 'Failed to load employees. Please try again.';
      }
    );
  }

  // Navigate to employee details
  viewEmployee(id: string): void {
    this.router.navigate(['/employee/view', id]);
  }

  // Navigate to employee edit form
  editEmployee(id: string): void {
    this.router.navigate(['/employee/edit', id]);
  }

  // Delete an employee
  deleteEmployee(id: string): void {
    if (confirm('Are you sure you want to delete this employee?')) {
      this.employeeService.deleteEmployee(id).subscribe(
        () => {
          this.loadEmployees();
        },
        (error) => {
          console.error('Failed to delete employee', error);
          this.errorMessage = 'Failed to delete employee. Please try again.';
        }
      );
    }
  }
}
