export class LeaveModel {
  leaveId!: string;
  employeeId!: string; // ID of the employee requesting leave
  leaveType!: 'Sick' | 'Vacation' | 'Personal' | 'Other'; // Type of leave
  startDate!: Date; // Start date of the leave
  endDate!: Date; // End date of the leave
  remainingLeave!: number; // Remaining leave balance for each employee
  reason!: string; // Reason for taking leave
  attachment?: string; // Optional, URL or reference to an attachment (e.g., medical certificate)
  status!: 'Pending' | 'Approved' | 'Rejected'; // Status of the leave request
  requestDate!: Date; // Date when the leave request was submitted
  approvedBy?: string; // ID of the manager who approved or rejected the leave
  approvalDate?: Date; // Date when the leave was approved or rejected

  // Method to update leave status and assign approver
  updateStatus(
    newStatus: 'Pending' | 'Approved' | 'Rejected',
    managerId?: string
  ) {
    this.status = newStatus;
    if (newStatus === 'Approved' || newStatus === 'Rejected') {
      this.approvedBy = managerId;
      this.approvalDate = new Date(); // Set current date as the approval date
    }
  }

  // Method to extend the leave period
  extendLeave(newEndDate: Date) {
    this.endDate = newEndDate;
  }

  // Method to calculate leave duration in days
  getLeaveDuration(): number {
    const start = new Date(this.startDate);
    const end = new Date(this.endDate);
    const duration =
      Math.ceil((end.getTime() - start.getTime()) / (1000 * 3600 * 24)) + 1; // Add 1 to include the end date
    return duration;
  }

  // Method to get leave details as a string
  getLeaveDetails(): string {
    return `Leave ID: ${this.leaveId}\nEmployee ID: ${
      this.employeeId
    }\nLeave Type: ${
      this.leaveType
    }\nStart Date: ${this.startDate.toDateString()}\nEnd Date: ${this.endDate.toDateString()}\nRemaining Leave: ${
      this.remainingLeave
    }\nReason: ${this.reason}\nStatus: ${
      this.status
    }\nRequest Date: ${this.requestDate.toDateString()}\nApproved By: ${
      this.approvedBy ?? 'N/A'
    }\nApproval Date: ${this.approvalDate?.toDateString() ?? 'N/A'}`;
  }
}
