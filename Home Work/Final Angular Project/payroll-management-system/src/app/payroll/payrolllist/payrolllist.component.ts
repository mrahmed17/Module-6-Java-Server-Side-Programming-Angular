import { Component, OnInit } from '@angular/core';
import { Payroll } from '../../models/payroll.model';
import { PayrollService } from '../../services/payroll.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NotificationService } from '../../services/notification.service';

@Component({
  selector: 'app-payrolllist',
  templateUrl: './payrolllist.component.html',
  styleUrl: './payrolllist.component.css'
})
export class PayrolllistComponent implements OnInit {
  payrolls: Payroll[] = [];
  payrollForm: FormGroup;

  constructor(
    private payrollService: PayrollService,
    private router: Router,
    private fb: FormBuilder,
    private notificationService: NotificationService
  ) {
    this.payrollForm = this.fb.group({

    });
  }

  ngOnInit(): void {
    this.loadPayrolls();
  }

  loadPayrolls(): void {
    this.payrollService.getPayrolls().subscribe({
      next: data => { this.payrolls = data },
      error: error => { console.error('Error fetching payrolls:', error) }
    });
  }

  deletePayroll(payrollId: number): void {
    this.payrollService.deletePayroll(payrollId).subscribe({
      next: () => {
        console.log('Payroll deleted');
        this.notificationService.showNotification('Payroll deleted successfully!');
        this.loadPayrolls();
      },
      error: error => {
        console.error('Error deleting payroll:', error);
        this.notificationService.showNotification('Failed to delete Payroll. Please try again.');
      }
    });
  }

  onSubmit(): void {
    if (this.payrollForm.valid) {
      const newPayroll: Payroll = this.payrollForm.value;
      this.payrollService.createPayroll(newPayroll).subscribe({
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


}
