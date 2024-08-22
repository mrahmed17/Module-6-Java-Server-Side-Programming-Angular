import { UserModel } from '../models/user.model';

export class LeaveModel {
  id?: string;
  startDate!: Date;
  endDate!: Date;
  leaveType!: string;
  reason!: string;
  status!: 'Pending' | 'Approved' | 'Rejected';
  requestedBy!: UserModel;
  approvedBy!: UserModel;
}
