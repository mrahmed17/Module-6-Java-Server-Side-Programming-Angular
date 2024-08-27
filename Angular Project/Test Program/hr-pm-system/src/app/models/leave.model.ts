export class LeaveModel {
  id!: string;

  leaveType!:
    | 'Annual'
    | 'Sick'
    | 'Maternity'
    | 'Paternity'
    | 'Compassionate'
    | 'Unpaid'; //  Type of leave taken

  startDate!: Date; //  Start date of the leave
  endDate!: Date; //  End date of the leave
  totalLeaveDays!: number; //  The system will calculate the total number of days between start and end dates

  UserModel!: {
    id: string;
    firstName: string | undefined;
    lastName: string | undefined;
    profilePhoto: string; //  Optional profile photo
    role: 'HR' | 'Employee' | undefined;
  };

  status!: 'Pending' | 'Approved' | 'Rejected'; //  Status of the leave request
  attachment!: string; // Optional, URL or reference to an attachment (e.g., medical certificate)
  remainingLeave!: number; //remaining leave balances for each employee
  approvalDate!: Date; //  Date when the leave was approved or rejected
  approvedOn!: Date; // Date when leave was approved
  deniedOn!: Date; // Date when leave was denied
  comments?: string; //  Optional comments or reasons for approval/rejection
}
