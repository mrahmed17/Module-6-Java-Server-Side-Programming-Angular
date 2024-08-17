export class PayrollModel {
  id!: string; // Primary Key
  employeeId!: string; // Foreign Key to Employee
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
