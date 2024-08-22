import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PayrollService } from '../../../services/payroll.service';
import { PayrollModel } from '../../../models/payroll.model';

@Component({
  selector: 'app-createpayroll',
  templateUrl: './createpayroll.component.html',
  styleUrls: ['./createpayroll.component.css'],
})
export class CreatePayrollComponent implements OnInit {
  payrollForm!: FormGroup;
  payrollStatuses: string[] = ['Pending', 'Paid', 'Failed'];

  constructor(
    private formBuilder: FormBuilder,
    private payrollService: PayrollService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  private initForm(): void {
    this.payrollForm = this.formBuilder.group({
      employeeId: ['', Validators.required],
      basicSalary: ['', [Validators.required, Validators.min(0)]],
      bonuses: [0, Validators.min(0)],
      deductions: [0, Validators.min(0)],
      tax: [0, Validators.min(0)],
      netPay: [0],
      payrollStatus: ['', Validators.required],
    });

    this.payrollForm.valueChanges.subscribe(() => {
      this.calculateNetPay();
    });
  }

  private calculateNetPay(): void {
    const basicSalary = this.payrollForm.get('basicSalary')?.value || 0;
    const bonuses = this.payrollForm.get('bonuses')?.value || 0;
    const deductions = this.payrollForm.get('deductions')?.value || 0;
    const tax = this.payrollForm.get('tax')?.value || 0;

    const netPay = basicSalary + bonuses - (deductions + tax);
    this.payrollForm.get('netPay')?.setValue(netPay, { emitEvent: false });
  }

  onSubmit(): void {
    if (this.payrollForm.valid) {
      const payroll: PayrollModel = this.payrollForm.getRawValue();

      this.payrollService.createPayroll(payroll).subscribe({
        next: (res) => {
          console.log('Payroll created successfully:', res);
          this.router.navigate(['/payrolls']);
        },
        error: (err) => {
          console.error('Error creating payroll:', err);
        },
      });
    } else {
      console.log('Form is invalid');
    }
  }

  resetForm(): void {
    this.payrollForm.reset();
  }
}
