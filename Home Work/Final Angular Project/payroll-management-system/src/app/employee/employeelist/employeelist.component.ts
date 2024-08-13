import { Component, OnInit } from '@angular/core';
import { Employee } from '../../models/employee.model';
import { EmployeeService } from '../../services/employee.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NotificationService } from '../../services/notification.service';

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrl: './employeelist.component.css'
})
export class EmployeelistComponent implements OnInit {
  employees: Employee[] = [];
  employeeForm: FormGroup;

  constructor(
    private employeeService: EmployeeService,
    private fb: FormBuilder,
    private router: Router,
    private notificationService: NotificationService,
  ) {
    this.employeeForm = this.fb.group({

    });
  }

  ngOnInit(): void {
    this.loadEmployees();
  }

  loadEmployees(): void {
    this.employeeService.getAllEmployees().subscribe({
      next: data => { this.employees = data },
      error: error => { console.error('Error fetching employees:', error) }
    });
  }

  deleteEmployee(employeeId: number): void {
    this.employeeService.deleteEmployee(employeeId).subscribe({
      next: () => {
        console.log('Employee deleted');
        this.notificationService.showNotification('Employee deleted successfully!');
        this.loadEmployees();
      },
      error: error => {
        console.error('Error deleting employee:', error);
        this.notificationService.showNotification('Failed to delete employee. Please try again.');
      }
    });
  }

  viewEmployee(employee: Employee) {
    this.employees;
  }

  // editEmployee(id: number) {
  //   this.router.navigate(['editEmployee', id]);
  //   // Navigate to edit component or open a modal with employee data
  // }


  onSubmit(): void {
    if (this.employeeForm.valid) {
      const newEmployee: Employee = this.employeeForm.value;
      this.employeeService.getAllEmployees().subscribe({
        next: (response: any) => {
          console.log('Payroll created:', response);
          this.notificationService.showNotification('Payroll added successfully!');
          this.router.navigate(['/payrolls']);
        },
        error: (error: any) => {
          console.error('Error creating payroll:', error);
          this.notificationService.showNotification('Failed to add payroll. Please try again.');
        }
      });
    } else {
      this.notificationService.showNotification('Please fill in all required fields.');
    }
  }


  // deleteEmployee(employeeId: number) {
  //   if (confirm('Are you sure you want to delete this employee?')) {
  //     this.employeeService.deleteEmployee(employeeId).subscribe({
  //       next: res => {
  //         this.employees = this.employeeService.getAllEmployees();
  //         this.router.navigate(['employee']);
  //         console.log('Employee deleted');
  //       },
  //       error: error => {
  //         console.log('Error deleting employee:', error);
  //       }
  //     });

  //   }
  // }
}