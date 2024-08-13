import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from '../../services/employee.service';
import { Employee } from '../../models/employee.model';
import { DepartmentService } from '../../services/department.service';
import { Department } from '../../models/department.model';

import { NotificationService } from '../../services/notification.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employeecreate',
  templateUrl: './employeecreate.component.html',
  styleUrls: ['./employeecreate.component.css']
})
export class EmployeeCreateComponent implements OnInit {
  employeeForm!: FormGroup;
  employees: Employee[] = [];
  departments: Department[] = [];
  selectedEmployeeId: number | null = null;

  constructor(
    private fb: FormBuilder,
    private employeeService: EmployeeService,
    private departmentService: DepartmentService,
    private router: Router,
    private notificationService: NotificationService,
  ) { }

  ngOnInit(): void {
    this.loadEmployees();
    this.loadDepartments();
    this.initEmployeeForm();
  }

  loadEmployees(): void {
    this.employeeService.getAllEmployees().subscribe({
      next: data => this.employees = data,
      error: error => console.error('Error fetching employees:', error)
    });
  }

  loadDepartments(): void {
    this.departmentService.getAllDepartment().subscribe({
      next: (data: Department[]) => {
        console.log('Departments:', data);
        this.departments = data;
      },
      error: error => console.error('Error fetching departments:', error)
    });
  }

  initEmployeeForm(): void {
    this.employeeForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      joiningDate: ['', Validators.required],
      gender: ['', Validators.required],
      contact: ['', Validators.required],
      department: [null, Validators.required],
      salary: ['', [Validators.required, Validators.min(0)]]
    });
  }

  resetForm(): void {
    this.employeeForm.reset();
    this.selectedEmployeeId = null;
  }

  onSubmit(): void {
    if (this.employeeForm.valid) {
      const newEmployee: Employee = this.employeeForm.value;
      this.employeeService.createEmployee(newEmployee).subscribe({
        next: response => {
          console.log('Employee created:', response);
          // alert('Employee added successfully!');
          this.notificationService.showNotification('Employee added successfully!'); //Do the same for other components where notifications are needed.
          this.router.navigate(['/employees']);
          this.loadEmployees();
          this.resetForm();
        },
        error: error => {
          console.error('Error creating employee:', error);
          alert('Failed to add employee. Please try again.');
        }
      });
    } else {
      alert('Please fill in all required fields.');
    }
  }

  editEmployee(row: Employee): void {
    this.selectedEmployeeId = row.id;

    this.employeeForm.patchValue({
      name: row.name,
      email: row.email,
      joiningDate: row.joiningDate,
      gender: row.gender,
      contact: row.contact,
      department: row.department,
      salary: row.salary
    });
  }

  updateEmployee(): void {
    if (this.selectedEmployeeId && this.employeeForm.valid) {
      const updatedEmployee: Employee = this.employeeForm.value;
      this.employeeService.updateEmployee(this.selectedEmployeeId, updatedEmployee).subscribe({
        next: response => {
          console.log('Employee updated:', response);
          this.notificationService.showNotification('Employee updated successfully!');
          this.loadEmployees();
          this.resetForm();
        },
        error: error => {
          console.error('Error updating employee:', error);
          this.notificationService.showNotification('Failed to update employee. Please try again.');
        }
      });
    }
  }

  deleteEmployee(employeeId: number): void {
    this.employeeService.deleteEmployee(employeeId).subscribe({
      next: res => {
        console.log('Employee deleted', res);
        this.notificationService.showNotification('Employee deleted successfully!');
        this.loadEmployees();
      },
      error: error => {
        console.error('Error deleting employee:', error);
        this.notificationService.showNotification('Error deleting employee')
      }
    });
  }
}
