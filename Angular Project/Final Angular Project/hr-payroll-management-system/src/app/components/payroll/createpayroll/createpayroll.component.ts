import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PayrollService } from '../../../services/payroll.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createpayroll',
  templateUrl: './createpayroll.component.html',
  styleUrls: ['./createpayroll.component.css'],
})
export class CreatePayrollComponent implements OnInit {
  payrollForm!: FormGroup;
  payrollStatuses: string[] = ['Pending', 'Paid', 'Failed'];
  errorMessage: string | null = null;
  isSubmitting = false;

  constructor(
    private formBuilder: FormBuilder,
    private payrollService: PayrollService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.payrollForm = this.formBuilder.group({
      userName: ['', Validators.required],
      employeeId: ['', Validators.required],
      basicSalary: [null, [Validators.required, Validators.min(0)]],
      bonuses: [0, [Validators.min(0)]],
      deductions: [0, [Validators.min(0)]],
      tax: [0, [Validators.min(0)]],
      netPay: [{ value: 0, disabled: true }],
      payPeriodStart: [null, Validators.required],
      payPeriodEnd: [null, Validators.required],
      paymentDate: [null, Validators.required],
      overtimeExemption: [''],
      overtimeHourlyRate: [0],
      yearlySickDay: [''],
      monthlyHolidays: [''],
      insurance: [0],
      medicare: [0],
      status: ['Pending', Validators.required],
    });

    // Recalculate netPay whenever relevant fields change
    this.payrollForm.valueChanges.subscribe(() => {
      this.calculateNetPay();
    });
  }

  private calculateNetPay(): void {
    const { basicSalary, bonuses, deductions, tax } = this.payrollForm.value;
    const totalDeductions = (deductions || 0) + (tax || 0);
    const totalBonuses = bonuses || 0;
    const netPay = (basicSalary || 0) + totalBonuses - totalDeductions;

    this.payrollForm.patchValue({ netPay }, { emitEvent: false });

    //   const basicSalary = this.payrollForm.get('basicSalary')?.value || 0;
    //   const bonuses = this.payrollForm.get('bonuses')?.value || 0;
    //   const deductions = this.payrollForm.get('deductions')?.value || 0;
    //   const tax = this.payrollForm.get('tax')?.value || 0;

    //   const netPay = basicSalary + bonuses - (deductions + tax);
    //   this.payrollForm.get('netPay')?.setValue(netPay, { emitEvent: false });
  }

  onSubmit(): void {
    if (this.payrollForm.valid) {
      this.isSubmitting = true;
      this.errorMessage = null; // Clear any previous errors

      this.payrollService.createPayroll(this.payrollForm.value).subscribe({
        next: (res) => {
          console.log('Payroll created successfully:', res);
          this.router.navigate(['/payrolls']);
        },
        error: (err) => {
          console.error('Error creating payroll:', err);
          this.errorMessage = 'Failed to create payroll. Please try again.';
        },
        complete: () => {
          this.isSubmitting = false; // Ensure this is set regardless of success or error
        },
      });
    } else {
      this.errorMessage = 'Please fill in all required fields correctly.';
    }
  }

  resetForm(): void {
    this.payrollForm.reset();
  }
}
