export class PayrollModel {
  id!: string; // Primary Key

  UserModel!: {
    firstName: string | undefined;
    lastName: string | undefined;
    role: 'HR' | 'Employee' | undefined;
    profilePhoto: string | undefined;
    contact: string | undefined;
    nidNo: number | undefined;
    salary: number | undefined;
  };

  EmployeeModel!: {
    id: string | undefined;
  };

  bonuses!: number; // Optional: Bonuses or incentives
  insurance!: number; //insurance premium amount
  medicare!: number; // medicare allowance amount
  deductions!: number; // Optional: Deductions (e.g., tax, insurance)
  tax!: number; // Optional: Tax amount
  netPay!: number; // Net pay after deductions

  paymentDate!: Date; // Date when payment was made

  payPeriodStart!: Date; // Start date of the pay period
  payPeriodEnd!: Date; // End date after 30 days from start pay period

  overtimeExemption!: boolean; // Yes, Newcomer or older than 50 years. Or No.

  overtimeHourlyRate!: number; //overtime hourly rate

  yearlySickDay!: number; // 10 Days reserved
  monthlyHolidays!: number; // 8 Days with govt holidays

  status!: 'Paid' | 'Pending' | 'Overdue'; // Status of the payroll
}
