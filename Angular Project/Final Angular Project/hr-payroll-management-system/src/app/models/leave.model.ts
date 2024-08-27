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

// export class LeaveModel {
//   id!: string; // Primary key (UUID or generated sequence)

//   // Type base: HR or Employee Part
//   EmployeeModel!: {
//     id: string | undefined;
//   };
//   UserModel!: {
//     firstName: string | undefined; // Who requested for leave
//     lastName: string | undefined; // Who requested for leave
//     profilePhoto: string | undefined; // Who requested for leave
//     contact: string | undefined; // Who requested for leave
//     role: 'HR' | 'Employee' | undefined; // Who accept the leave
//   };
//   fromDate!: Date;
//   toDate!: Date;
//   numberOfDays!: number; // Calculate total leave Days:  fromDate to toDate
//   leaveType!: 'Annual' | 'Sick' | 'Unpaid' | undefined;
//   reason!: string;

//   submittedOn!: Date;
//   attachment!: string; // Optional, URL or reference to an attachment (e.g., medical certificate)
//   remainingLeave!: number; //remaining leave balances for each employee

//   //HR And Admin Part
//   status!: 'Pending' | 'Approved' | 'Denied' | undefined;
//   comments!: string; // Optional: Additional notes or comments
//   approvedOn!: Date; // Date when leave was approved
//   deniedOn!: Date; // Date when leave was denied
// }
