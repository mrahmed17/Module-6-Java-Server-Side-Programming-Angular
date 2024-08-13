import { Component, OnInit } from '@angular/core';
import { Payroll } from '../../models/payroll.model';
import { PayrollService } from '../../services/payroll.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Department } from '../../models/department.model';
import { DepartmentService } from '../../services/department.service';
import { Router } from '@angular/router';
import { NotificationService } from '../../services/notification.service';

@Component({
  selector: 'app-payrollcreate',
  templateUrl: './payrollcreate.component.html',
  styleUrl: './payrollcreate.component.css'
})
export class PayrollcreateComponent implements OnInit {

  payrollForm: FormGroup;
  payrolls: Payroll[] = [];
  departments: Department[] = [];
  selectedPayrollId: number | null = null;

  constructor(
    private payrollService: PayrollService,
    private fb: FormBuilder,
    private departmentService: DepartmentService,
    private router: Router,
    private notificationService: NotificationService,
  ) {
    this.payrollForm = this.fb.group({
      // Define form controls here
      employeeId: ['', Validators.required],
      amount: ['', Validators.required],
      date: ['', Validators.required]
    });
  }

  ngOnInit(): void {

  }

  loadPayrolls(): void {
    this.payrollService.getPayrolls().subscribe({
      next: data => this.payrolls = data,
      error: error => console.error('Error fetching payrolls:', error)
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

  initPayrollForm(): void {
    this.payrollForm = this.fb.group({
      name: ['', Validators.required],
      joiningDate: ['', Validators.required],
      department: [null, Validators.required],
    });
  }

  resetForm(): void {
    this.payrollForm.reset();
    this.selectedPayrollId = null;
  }

  onSubmit(): void {
    if (this.payrollForm.valid) {
      const newPayroll: Payroll = this.payrollForm.value;
      this.payrollService.createPayroll(newPayroll).subscribe({
        next: response => {
          console.log('Payroll created:', response);
          this.notificationService.showNotification('Payroll added successfully!');
          this.router.navigate(['/payrolls']);
          this.loadPayrolls();
          this.resetForm();
        },
        error: error => {
          console.error('Error creating payroll:', error);
          this.notificationService.showNotification('Failed to add payroll. Please try again.');
        }
      });
    } else {
      this.notificationService.showNotification('Please fill in all required fields.');
    }
  }


}
