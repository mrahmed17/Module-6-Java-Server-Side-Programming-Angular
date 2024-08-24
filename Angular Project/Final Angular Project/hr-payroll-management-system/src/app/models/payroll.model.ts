import { UserModel } from '../models/user.model';
import { EmployeeModel } from './employee.model';

export class PayrollModel {
  id!: string; // Primary Key
  userName!: UserModel; // Foreign Key to Employee
  employeeId!: EmployeeModel;
  basicSalary!: number; // Basic salary amount
  bonuses!: number; // Optional: Bonuses or incentives
  deductions!: number; // Optional: Deductions (e.g., tax, insurance)
  tax!: number; // Optional: Tax amount
  netPay!: number; // Net pay after deductions
  payPeriodStart!: Date; // Start date of the pay period
  payPeriodEnd!: Date; // End date of the pay period
  paymentDate!: Date; // Date when payment was made
  overtimeExemption!: string; // Newcomer and older than 50 years.
  overtimeHourlyRate!: number;
  yearlySickDay!: string;
  monthlyHolidays!: string;
  insurance!: number;
  medicare!: number;
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
