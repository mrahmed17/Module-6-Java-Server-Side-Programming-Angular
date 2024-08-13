import { Component, OnInit } from '@angular/core';
import { PayrollService } from '../../services/payroll.service';

@Component({
  selector: 'app-payroll-report',
  templateUrl: './payroll-report.component.html',
  styleUrl: './payroll-report.component.css'
})
export class PayrollReportComponent implements OnInit {
  payrolls: any[] = [];

  constructor(private payrollService: PayrollService) { }

  ngOnInit(): void {
    this.getPayrollReport();
  }

  getPayrollReport(): void {
    this.payrollService.getPayrolls().subscribe(
      (data: any[]) => {
        this.payrolls = data;
      },
      (error) => {
        console.error('Error fetching payroll report:', error);
      }
    );
  }
}