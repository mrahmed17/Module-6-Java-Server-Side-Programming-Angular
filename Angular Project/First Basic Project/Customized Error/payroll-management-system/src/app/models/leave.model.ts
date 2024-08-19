export interface Leave {
  id: number;
  employeeName: string;
  startDate: string;
  endDate: string;
  leaveType: string;
  status: 'Pending' | 'Approved' | 'Rejected';
}
