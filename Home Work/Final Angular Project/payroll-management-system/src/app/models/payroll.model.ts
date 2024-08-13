export interface Payroll {
  id: number;
  employeeId: number;
  salary: number;
  bonuses?: number;
  deductions?: number;
  paymentDate: Date;
}
