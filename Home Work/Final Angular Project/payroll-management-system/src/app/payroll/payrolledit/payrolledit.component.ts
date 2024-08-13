import { Component, OnInit } from '@angular/core';
import { Payroll } from '../../models/payroll.model';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { PayrollService } from '../../services/payroll.service';
import { NotificationService } from '../../services/notification.service';


@Component({
  selector: 'app-payrolledit',
  templateUrl: './payrolledit.component.html',
  styleUrl: './payrolledit.component.css'
})
export class PayrolleditComponent implements OnInit {
  payrollForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private payrollService: PayrollService,
    private notificationService: NotificationService
  ) {
    this.payrollForm = this.fb.group({
      // Define form controls
    });
  }

  ngOnInit(): void {
    this.payrollForm = this.fb.group({
      // Define form controls here
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
