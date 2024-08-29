import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PayrollService } from '../../../services/payroll.service';
import { PayrollModel } from '../../../models/payroll.model';

@Component({
  selector: 'app-viewpayroll',
  templateUrl: './viewpayroll.component.html',
  styleUrls: ['./viewpayroll.component.css'],
})
export class ViewpayrollComponent implements OnInit {
  payroll: PayrollModel | null = null;
  loading = false;
  errorMessage: string | null = null;
  id: string = '';

  constructor(
    private payrollService: PayrollService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')!;
    this.loadPayroll();
  }

  loadPayroll(): void {
    this.loading = true;
    this.payrollService.getPayrollById(this.id).subscribe(
      (payroll: PayrollModel) => {
        this.payroll = payroll;
        this.loading = false;
      },
      (error) => {
        this.errorMessage = 'Failed to load payroll details.';
        this.loading = false;
        console.error('Failed to load payroll', error);
      }
    );
  }

  // Navigate to the edit payroll page
  editPayroll(): void {
    this.router.navigate([`/payrolls/edit/${this.id}`]);
  }

  // Navigate back to the list of payrolls
  backToList(): void {
    this.router.navigate(['/payrolls/list']);
  }
}
