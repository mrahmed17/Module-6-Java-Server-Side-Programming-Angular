export class PayrollModel {
  id!: string; // Primary Key

  UserModel!: {
    firstName: string | undefined;
    lastName: string | undefined;
    role: 'HR' | 'Employee' | undefined;
    profilePhoto: string | undefined;
    contact: string | undefined;
    nidNo: number | undefined;
    hourRate: number | undefined; // hour rate 150 for employees and 250 for HR,
  };

  EmployeeModel!: {
    id: string | undefined; //Using this usermodel employee will create. After create a new employee, has an unique id
  };

  performanceBonuses!: number; // 1* = 200, 2* = 400, 3* = 600, 4* = 800, 5* = 1600
  insurance!: number; // 1000 for employee, 3000 for HR monthly
  medicare!: number; // 5000 for employee, 10000 for HR
  deductions!: number; // Deductions (e.g., tax, insurance)

  netPay!: number; // Net pay after deductions

  paymentDate!: Date; // Date when payment was made

  payPeriodStart!: Date; // Start date of the pay period
  payPeriodEnd!: Date; // End date after 30 days from start pay period

  overtimeExemption!: boolean; // Yes, Newcomer or older than 50 years. Or No.

  overtimeHourlyRate!: number; /// overtime hour rate will add half of their main rate. Assume 150/2 = 75 + 150 = 225 for employees and 250/2 = 125 + 250 =375

  yearlySickDay!: number; // 10 Days reserved

  status!: 'Paid' | 'Pending' | 'Overdue'; // Status of the payroll
  // Create a map that returns netPay
  // static mapPayroll(payroll: PayrollModel): PayrollModel {
  //   return {
  //     ...payroll,
  //     netPay: payroll.UserModel.salary! - payroll.tax! - payroll.insurance!,
  //   };
  // }
}

// Payment will provide with their attedance where working hour and working calendar month will calculate, performance rating bonus, overtime, sick days salary wil provide, insurance, medicare, deduction

// Hourly Rate: 8 hours a day * per hour rate will calculate. Assume per hour rate 150 for employees and 250 for HR,

// Overtime Rate: overtime hour rate will add half of their main rate. Assume 150/2 = 75 + 150 = 225 for employees and 250/2 = 125 + 250 =375
