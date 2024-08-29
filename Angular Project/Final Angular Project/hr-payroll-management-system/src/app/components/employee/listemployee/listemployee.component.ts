import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from '../../../services/employee.service';
import { EmployeeModel } from '../../../models/employee.model';

@Component({
  selector: 'app-listemployee',
  templateUrl: './listemployee.component.html',
  styleUrls: ['./listemployee.component.css'],
})
export class ListemployeeComponent implements OnInit {
  employees: EmployeeModel[] = [];
  loading = false;
  errorMessage: string | null = null;

  constructor(
    private employeeService: EmployeeService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadEmployees();
  }

  loadEmployees(): void {
    this.loading = true;
    this.employeeService.getAllEmployees().subscribe(
      (employees: EmployeeModel[]) => {
        this.employees = employees;
        this.loading = false;
      },
      (error) => {
        this.errorMessage = 'Failed to load employees.';
        this.loading = false;
        console.error('Failed to load employees', error);
      }
    );
  }

  viewEmployee(id: string): void {
    this.router.navigate([`/employees/view/${id}`]);
  }

  editEmployee(id: string): void {
    this.router.navigate([`/employees/edit/${id}`]);
  }

  deleteEmployee(id: string): void {
    if (confirm('Are you sure you want to delete this employee?')) {
      this.employeeService.deleteEmployee(id).subscribe(
        () => {
          this.loadEmployees(); // Refresh the list after deletion
        },
        (error) => {
          this.errorMessage = 'Failed to delete employee.';
          console.error('Failed to delete employee', error);
        }
      );
    }
  }
}
