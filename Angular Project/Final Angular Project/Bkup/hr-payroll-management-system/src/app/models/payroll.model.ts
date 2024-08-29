export class PayrollModel {
  payrollId: string; // Unique identifier for the payroll record
  employeeId: string; // ID of the employee receiving the payroll
  managerId: string; // ID of the manager receiving the payroll
  hourlyRate: number; // Hourly rate for employees or managers
  performanceBonuses: number; // Performance bonuses based on rating
  insurance: number; // Insurance amount (employees and managers)
  medicare: number; // Medicare amount (5000 for employees, 10000 for Manager)
  deductions: number; // Total deductions
  overtimeHours: number; // Overtime hours worked
  overtimeRate: number; // Overtime hourly rate
  yearlySickDay: number; // Reserved sick days
  totalPay: number; // Total pay after adding bonuses, deductions, and including overtime
  payDate: Date; // Date of the payroll payment

  constructor(
    payrollId: string,
    employeeId: string,
    managerId: string,
    hourlyRate: number,
    performanceBonuses: number,
    medicare: number,
    deductions: number,
    overtimeHours: number = 4, // Default to 4 hours of overtime
    overtimeRate: number,
    yearlySickDay: number,
    payDate: Date
  ) {
    this.payrollId = payrollId;
    this.employeeId = employeeId;
    this.managerId = managerId;
    this.hourlyRate = hourlyRate;
    this.performanceBonuses = performanceBonuses;
    this.insurance = this.calculateInsurance();
    this.medicare = medicare;
    this.deductions = deductions + this.insurance + this.medicare;
    this.overtimeHours = overtimeHours;
    this.overtimeRate = overtimeRate;
    this.yearlySickDay = yearlySickDay;
    this.totalPay = this.calculateTotalPay();
    this.payDate = payDate;
  }

  // Method to calculate insurance based on employee or manager
  private calculateInsurance(): number {
    return this.managerId ? 3000 : 1000; // 3000 for manager, 1000 for employee
  }

  // Method to calculate total pay including bonuses, deductions, and overtime
  private calculateTotalPay(): number {
    const basePay = this.hourlyRate * 40; // Assume 40 hours work week
    const overtimePay = this.overtimeHours * this.overtimeRate;
    return basePay + overtimePay + this.performanceBonuses - this.deductions;
  }

  // Method to update the payroll details
  updatePayroll(
    hourlyRate: number,
    performanceBonuses: number,
    medicare: number,
    deductions: number,
    overtimeHours: number,
    overtimeRate: number,
    yearlySickDay: number,
    payDate: Date
  ) {
    this.hourlyRate = hourlyRate;
    this.performanceBonuses = performanceBonuses;
    this.medicare = medicare;
    this.deductions = deductions + this.calculateInsurance() + this.medicare;
    this.overtimeHours = overtimeHours;
    this.overtimeRate = overtimeRate;
    this.yearlySickDay = yearlySickDay;
    this.totalPay = this.calculateTotalPay();
    this.payDate = payDate;
  }
}
