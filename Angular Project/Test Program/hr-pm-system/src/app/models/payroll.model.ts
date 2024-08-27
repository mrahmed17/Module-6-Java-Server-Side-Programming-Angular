export class PayrollModel {
  id!: string; //  Primary Key

  UserModel!: {
    id: string;
    firstName: string | undefined;
    lastName: string | undefined;
    role: 'HR' | 'Employee' | undefined;
    profilePhoto: string | undefined;
    contact: string | undefined;
    nidNo: number | undefined;
    hourlyRate: number | undefined; //  Hourly rate 150 for employees and 250 for HR
  };

  EmployeeModel!: {
    id: string | undefined; //  Using this UserModel, an employee will be created. After creating a new employee, they have a unique ID
    payPeriodStart: Date; //  Start date of the pay period
    payPeriodEnd: Date; //  End date after 30 days from the start of the pay period
    hourlyRate: number; //  Hourly based salary on the user's role
    payrollCalculationMethod: 'Weekly' | 'Monthly'; //dropdown option for offer. employee choose the offer
  };

  DepartmentModel!: {
    id: string; //  Primary Key
    departmentName: string; //  Must provide department name
  };

  performanceBonuses!: number; //  1* = 200, 2* = 400, 3* = 600, 4* = 800, 5* = 1600
  insurance!: number; //  1000 for employees, 3000 for HR monthly
  medicare!: number; //  5000 for employees, 10000 for HR
  deductions!: number; //  Deductions (e.g., tax, insurance)
  netPay!: number; //  Net pay after deductions
  paymentDate!: Date; //  Date when payment was made
  overtimeExemption!: boolean; //  Yes, Newcomer or older than 50 years. Or No.
  overtimeHourlyRate!: number; //  Overtime hourly rate will add half of their main rate. Assume 150/2 = 75 + 150 = 225 for employees and 250/2 = 125 + 250 = 375 for HR
  yearlySickDay!: number; //  10 days reserved
  status!: 'Paid' | 'Pending' | 'Overdue'; //  Status of the payroll
}
