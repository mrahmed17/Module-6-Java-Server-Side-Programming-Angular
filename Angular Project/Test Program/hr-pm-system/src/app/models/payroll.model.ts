import { UserModel } from './user.model';

export class PayrollModel {
  id!: string; // Primary Key

  user!: UserModel; // Reference to UserModel

  performanceBonuses!: number; // 1* = 200, 2* = 400, 3* = 600, 4* = 800, 5* = 1600
  insurance!: number; // 1000 for employees, 3000 for HR monthly
  medicare!: number; // 5000 for employees, 10000 for HR
  deductions!: number; // Deductions (e.g., tax, insurance)
  netPay!: number; // Net pay after deductions

  paymentDate!: Date; // Date when payment was made
  payPeriodStart!: Date; // Start date of the pay period
  payPeriodEnd!: Date; // End date after 30 days from the start of the pay period

  overtimeExemption!: boolean; // Yes, Newcomer or older than 50 years. Or No.
  overtimeHourlyRate!: number; // Overtime hourly rate

  yearlySickDay!: number; // 10 days reserved
  status!: 'Paid' | 'Pending' | 'Overdue'; // Status of the payroll
}
