import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from '../../services/employee.service';
import { Employee } from '../../models/employee.model';
import { DepartmentService } from '../../services/department.service';
import { Department } from '../../models/department.model';
import { NotificationService } from '../../services/notification.service';

@Component({
  selector: 'app-employeeedit',
  templateUrl: './employeeedit.component.html',
  styleUrl: './employeeedit.component.css'
})
export class EmployeeeditComponent implements OnInit {
  employeeForm!: FormGroup;
  departments: Department[] = [];
  employeeId!: number;
  employee!: Employee;

  // employeeForm: FormGroup;
  // employeeId: number | null = null;

  constructor(
    private fb: FormBuilder,
    private employeeService: EmployeeService,
    private departmentService: DepartmentService,
    private route: ActivatedRoute,
    private router: Router,
    private notificationService: NotificationService
  ) {
    // this.employeeForm = this.fb.group({
    //   name: ['', Validators.required],
    //   email: ['', [Validators.required, Validators.email]],
    //   position: ['', Validators.required],
    //   salary: ['', [Validators.required, Validators.min(0)]]
    // });
  }

  ngOnInit(): void {
    this.employeeId = +this.route.snapshot.paramMap.get('id')!;
    this.initEmployeeForm();
    this.loadDepartments();
    this.loadEmployee();
  }

  // ngOnInit(): void {
  //   this.employeeId = Number(this.route.snapshot.paramMap.get('id'));
  //   if (this.employeeId) {
  //     this.employeeService.getAllEmployees().subscribe({
  //       next: data => {
  //         this.employeeForm.patchValue(data);
  //         console.log('Employee created:', response);
  //         alert('Employee added successfully!');
  //       }, error: error => console.error('Error fetching employee:', error)
  //     });
  //   }
  // }

  initEmployeeForm() {
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

  loadDepartments(): void {
    this.departmentService.getAllDepartment().subscribe({
      next: (data: Department[]) => {
        this.departments = data;
      },
      error: error => { console.error('Error fetching departments:', error) }
    });
  }

  loadEmployee(): void {
    this.employeeService.getEmployee(this.employeeId).subscribe({
      next: (data: Employee) => {
        this.employee = data;
        this.employeeForm.patchValue(this.employee);
      },
      error: error => { console.error('Error fetching employee:', error) }
    });
  }


  onSubmit(): void {
    if (this.employeeForm.valid) {
      const updatedEmployee: Employee = this.employeeForm.value;
      this.employeeService.updateEmployee(this.employeeId, updatedEmployee).subscribe({
        next: response => {
          console.log('Employee updated:', response);
          this.notificationService.showNotification('Employee updated successfully!');
          this.router.navigate(['/employees']);
        },
        error: error => {
          console.error('Error updating employee:', error);
          this.notificationService.showNotification('Failed to update employee. Please try again.');
        }
      });
    } else {
      this.notificationService.showNotification('Please fill in all required fields.');
    }
  }


  // onSubmit(): void {
  //   if (this.employeeForm.valid) {
  //     const updatedEmployee: Employee = this.employeeForm.value;
  //     updatedEmployee.id = this.employeeId;
  //     this.employeeService.updateEmployee(updatedEmployee).subscribe({
  //       next: response => {
  //         console.log('Employee updated:', response);
  //         alert('Employee updated successfully!');
  //         this.router.navigate(['/employees']);
  //       },
  //       error: error => {
  //         console.error('Error updating employee:', error);
  //         alert('Failed to update employee. Please try again.');
  //       }
  //     });
  //   } else {
  //     alert('Please fill in all required fields.');
  //   }
  // }

  // onSubmit(): void {
  //   if (this.employeeForm.valid) {
  //     const updatedEmployee: Employee = { id: this.employeeId, ...this.employeeForm.value };
  //     this.employeeService.updateEmployee(newFunction(), updatedEmployee).subscribe({
  //       next: response => {
  //         console.log('Employee updated:', response);
  //         alert('Employee updated successfully!');
  //         this.router.navigate(['/employees']);
  //         // Redirect to employee list
  //       },
  //       error: error => {
  //         console.error('Error updating employee:', error);
  //         alert('Failed to update employee. Please try again.');
  //       }
  //     });
  //   }

  //   function newFunction(this: any): number {
  //     return this.employeeId;
  //   }
  // }
}