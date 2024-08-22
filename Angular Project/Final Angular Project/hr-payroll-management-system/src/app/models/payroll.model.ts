import { UserModel } from './user.model';

export class PayrollModel {
  id!: string; // Primary Key
  user!: UserModel; // Foreign Key to Employee
  basicSalary!: number; // Basic salary amount
  bonuses?: number; // Optional: Bonuses or incentives
  deductions?: number; // Optional: Deductions (e.g., tax, insurance)
  tax?: number; // Optional: Tax amount
  netPay!: number; // Net pay after deductions
  payPeriodStart!: Date; // Start date of the pay period
  payPeriodEnd!: Date; // End date of the pay period
  paymentDate!: Date; // Date when payment was made
  status!: 'Paid' | 'Pending' | 'Overdue'; // Status of the payroll
}

//     export class PayrollModel {
//     id!: string;
//
//     hireDate!: string;
//     jobTitle/role!: string;
//     annualSalary!: string;
//     regularHourlyRate!: string;
//     overtimeHourlyRate!: string;
//     payFrequency!: string;
//     yearlyHolidays!: string;
//     yearlyVacation!: string;
//     yearlySickDay!: string;
//     overtimeExemption!: string;
//     fedaralFilingStatus!: string; //Married, Single
//     taxAllowance!: string;
//     medicare!: string;
//     insurance!: string;
//     }
