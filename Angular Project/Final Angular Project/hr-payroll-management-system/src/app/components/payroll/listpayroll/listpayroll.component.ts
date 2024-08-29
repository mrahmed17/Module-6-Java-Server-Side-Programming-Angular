import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PayrollService } from '../../../services/payroll.service';
import { PayrollModel } from '../../../models/payroll.model';

@Component({
  selector: 'app-listpayroll',
  templateUrl: './listpayroll.component.html',
  styleUrls: ['./listpayroll.component.css'],
})
export class ListpayrollComponent implements OnInit {
  payrolls: PayrollModel[] = [];
  loading = false;
  errorMessage: string | null = null;

  constructor(private payrollService: PayrollService, private router: Router) {}

  ngOnInit(): void {
    this.loadPayrolls();
  }

  loadPayrolls(): void {
    this.loading = true;
    this.payrollService.getAllPayrolls().subscribe(
      (payrolls: PayrollModel[]) => {
        this.payrolls = payrolls;
        this.loading = false;
      },
      (error) => {
        this.errorMessage = 'Failed to load payroll records.';
        this.loading = false;
        console.error('Failed to load payrolls', error);
      }
    );
  }

  // Navigate to the payroll details view
  viewPayroll(id: string): void {
    this.router.navigate([`/payrolls/view/${id}`]);
  }

  // Navigate to the edit payroll page
  editPayroll(id: string): void {
    this.router.navigate([`/payrolls/edit/${id}`]);
  }

  // Delete a payroll record
  deletePayroll(id: string): void {
    if (confirm('Are you sure you want to delete this payroll record?')) {
      this.loading = true;
      this.payrollService.deletePayroll(id).subscribe(
        () => {
          this.payrolls = this.payrolls.filter(
            (payroll) => payroll.payrollId !== id
          );
          this.loading = false;
        },
        (error) => {
          this.errorMessage = 'Failed to delete payroll record.';
          this.loading = false;
          console.error('Failed to delete payroll', error);
        }
      );
    }
  }
}
