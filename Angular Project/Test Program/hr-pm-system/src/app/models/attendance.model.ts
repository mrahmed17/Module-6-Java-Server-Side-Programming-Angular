export class AttendanceModel {
  id: string;
  user: {
    id: string;
    firstName: string;
    lastName: string;
    role: 'Admin' | 'Manager' | 'Employee';
    profilePhoto: string;
  };
  date: Date;
  clockInTime: Date | null; // null if not clocked in yet
  clockOutTime: Date | null; // null if not clocked out yet
  totalHours: number; // Total hours worked
  status: 'Present' | 'Absent' | 'Leave'; // Status of the attendance

  constructor(
    id: string,
    userId: string,
    firstName: string,
    lastName: string,
    role: 'Admin' | 'Manager' | 'Employee',
    profilePhoto: string,
    date: Date,
    clockInTime: Date | null,
    clockOutTime: Date | null,
    totalHours: number,
    status: 'Present' | 'Absent' | 'Leave'
  ) {
    this.id = id;
    this.user = {
      id: userId,
      firstName: firstName,
      lastName: lastName,
      role: role,
      profilePhoto: profilePhoto,
    };
    this.date = date;
    this.clockInTime = clockInTime;
    this.clockOutTime = clockOutTime;
    this.totalHours = totalHours;
    this.status = status;
  }

  // Method to calculate total hours worked based on clock-in and clock-out times
  calculateTotalHours() {
    if (this.clockInTime && this.clockOutTime) {
      const diffInMillis =
        this.clockOutTime.getTime() - this.clockInTime.getTime();
      this.totalHours = diffInMillis / (1000 * 60 * 60); // Convert milliseconds to hours
    } else {
      this.totalHours = 0;
    }
  }

  // Method to update attendance status
  updateStatus(newStatus: 'Present' | 'Absent' | 'Leave') {
    this.status = newStatus;
  }

  // Method to get formatted attendance details
  getAttendanceDetails() {
    return `User: ${this.user.firstName} ${
      this.user.lastName
    }, Date: ${this.date.toDateString()}, Status: ${
      this.status
    }, Total Hours: ${this.totalHours}`;
  }
}
