export class LeaveModel {
  id?: string;
  employeeName!: string;
  startDate!: Date;
  endDate!: Date;
  leaveType!: string;
  status!: 'Pending' | 'Approved' | 'Rejected';
}
