import { UserModel } from './user.model';

export class LeaveModel {
  id!: string; // Primary Key

  leaveType!:
    | 'Annual'
    | 'Sick'
    | 'Maternity'
    | 'Paternity'
    | 'Compassionate'
    | 'Unpaid'; // Type of leave taken
  startDate!: Date; // Start date of the leave
  endDate!: Date; // End date of the leave
  totalLeaveDays!: number; // The system will calculate the total number of days between start and end dates

  user!: UserModel; // Reference to UserModel

  status!: 'Pending' | 'Approved' | 'Rejected'; // Status of the leave request
  approvalDate!: Date; // Date when the leave was approved or rejected
  comments?: string; // Optional comments or reasons for approval/rejection
}
