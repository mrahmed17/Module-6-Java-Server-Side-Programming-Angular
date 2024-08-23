import { EmployeeModel } from './employee.model';
import { UserModel } from './user.model';

export class LeaveModel {
  id!: string; // Primary key (UUID or generated sequence)
  employeeId!: EmployeeModel; // Foreign key referencing Employee model
  leaveType!: LeaveType; // Enum or reference to LeaveType model
  startDate!: Date;
  endDate!: Date;
  numberOfDays!: number;
  reason!: string;
  status!: LeaveStatus; // Enum representing leave status (e.g., "Pending", "Approved", "Denied", "Rejected")
  submittedOn!: Date;
  requestedBy!: UserModel; // Who requested for leave
  approvedBy!: UserModel; // Who approved the leave
  approvedOn!: Date; // Date when leave was approved
  deniedOn!: Date; // Date when leave was denied
  comments!: string; // Additional notes or comments
  attachment!: string; // Optional, URL or reference to an attachment (e.g., medical certificate)
  leaveBalance!: number; // Optional, remaining leave balance for the employee and leave type
  leavePolicy!: LeavePolicyModel; // Optional, reference to LeavePolicy model
}

export enum LeaveType {
  ANNUAL = 'Annual',
  SICK = 'Sick',
  UNPAID = 'Unpaid',
}

export enum LeaveStatus {
  PENDING = 'Pending',
  APPROVED = 'Approved',
  DENIED = 'Denied',
}

export interface LeavePolicyModel {
  id: string;
  name: string;
  rules: string; // JSON or string representing leave policy rules
}

// import { UserModel } from '../models/user.model';
// import { EmployeeModel } from './employee.model';

// export class LeaveModel {
//   id!: string;
//   employeeId!: EmployeeModel; // Foreign key referencing Employee model
//   leaveType!: string; // Enum or string representing leave type (e.g., "Annual", "Sick", "Casual")
//   startDate!: Date; // when leave session start
//   endDate!: Date; // when leave session end
//   numberOfDays!: number; //How many days need for leave
//   remainingLeave!: number; //remaining leave balances for each employee
//   reason!: string; // Reason for leave request
//   status!: 'Pending' | 'Approved' | 'Rejected'; //Request Status
//   submittedOn!: Date; // When submitted the request
//   requestedBy!: UserModel; // Who requested for leave
//   approvedBy!: UserModel; // Who approved the leave
//   approvedOn!: Date; // Date when leave was approved
//   deniedOn!: Date; //  Date when leave was denied
//   comments!: string; // Additional notes or comments
// }
