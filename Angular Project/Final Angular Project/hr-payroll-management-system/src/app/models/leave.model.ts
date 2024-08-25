export class LeaveModel {
  id!: string; // Primary key (UUID or generated sequence)

  EmployeeModel!: {
    id: string | undefined;
  };

  startDate!: Date;
  endDate!: Date;
  numberOfDays!: number;
  leaveType!: 'Annual' | 'Sick' | 'Unpaid' | undefined;
  reason!: string;
  status!: 'Pending' | 'Approved' | 'Denied' | undefined;
  submittedOn!: Date;

  UserModel!: {
    firstName: string | undefined; // Who requested for leave
    lastName: string | undefined; // Who requested for leave
    profilePhoto: string | undefined; // Who requested for leave
    contact: string | undefined; // Who requested for leave

    role: 'HR' | 'Employee' | undefined; // Who accept the leave
  };

  approvedOn!: Date; // Date when leave was approved
  deniedOn!: Date; // Date when leave was denied
  comments!: string; // Additional notes or comments
  attachment!: string; // Optional, URL or reference to an attachment (e.g., medical certificate)
  remainingLeave!: number; //remaining leave balances for each employee
}
