import { UserModel } from '../models/user.model';

export class AttendanceModel {
  id?: string; // Attendance ID, optional
  date?: Date; // Date of attendance, optional
  status!: 'Present' | 'Absent' | 'On Leave'; // Restricting status to specific values
  checkInTime?: string; // Check-in time, optional
  checkOutTime?: string; // Check-out time, optional
  user!: UserModel;
}
