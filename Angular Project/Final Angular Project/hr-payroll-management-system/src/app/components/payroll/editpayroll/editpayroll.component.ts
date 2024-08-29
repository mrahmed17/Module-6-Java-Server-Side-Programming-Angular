import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PayrollService } from '../../../services/payroll.service';
import { PayrollModel } from '../../../models/payroll.model';

@Component({
  selector: 'app-editpayroll',
  templateUrl: './editpayroll.component.html',
  styleUrls: ['./editpayroll.component.css'],
})
export class EditpayrollComponent implements OnInit {
  payrollForm: FormGroup;
  loading = false;
  errorMessage: string | null = null;
  id: string = '';

  constructor(
    private fb: FormBuilder,
    private payrollService: PayrollService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.payrollForm = this.fb.group({
      employeeId: ['', Validators.required],
      managerId: [''],
      hourlyRate: ['', [Validators.required, Validators.min(0)]],
      performanceBonuses: ['', [Validators.required, Validators.min(0)]],
      insurance: [''],
      medicare: ['', [Validators.required, Validators.min(0)]],
      deductions: ['', [Validators.required, Validators.min(0)]],
      overtimeHours: ['', [Validators.required, Validators.min(0)]],
      overtimeRate: ['', [Validators.required, Validators.min(0)]],
      yearlySickDay: ['', [Validators.required, Validators.min(0)]],
      totalPay: [''],
      payDate: ['', Validators.required],
      editAt: [''],
    });
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')!;
    this.loadPayroll();
  }

  loadPayroll(): void {
    this.loading = true;
    this.payrollService.getPayrollById(this.id).subscribe(
      (payroll: PayrollModel) => {
        this.payrollForm.patchValue({
          ...payroll,
          editAt: new Date().toISOString(), // Set current edit time
        });
        this.loading = false;
      },
      (error) => {
        this.errorMessage = 'Failed to load payroll details.';
        this.loading = false;
        console.error('Failed to load payroll', error);
      }
    );
  }

  onSubmit(): void {
    if (this.payrollForm.valid) {
      this.loading = true;
      const updatedPayroll: Partial<PayrollModel> = {
        ...this.payrollForm.value,
        editAt: new Date(), // Update edit time
      };

      this.payrollService
        .updatePayroll(this.id, updatedPayroll as PayrollModel)
        .subscribe(
          () => {
            this.loading = false;
            this.router.navigate(['/payrolls/list']);
          },
          (error) => {
            this.errorMessage = 'Failed to update payroll.';
            this.loading = false;
            console.error('Failed to update payroll', error);
          }
        );
    }
  }

  resetForm(): void {
    this.payrollForm.reset();
  }

  cancel(): void {
    this.router.navigate(['/payrolls/list']);
  }
}
