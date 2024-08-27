import { DepartmentModel } from './department.model';
import { LocationModel } from './location.model';
import { UserModel } from './user.model';

export class AttendanceModel {
  id!: string; // Primary Key

  workingDay!: Date; // Must be provided to calculate a user's salary or grant leave on a specific day
  workHours!: number; // Example: 8.00

  user!: UserModel; // Reference to UserModel

  department!: DepartmentModel; // Reference to DepartmentModel
  location!: LocationModel; // Reference to LocationModel

  inTime!: Date; // In time for the day
  outTime!: Date; // Out time for the day

  status!: 'Present' | 'Absent' | 'On Leave' | 'Sick' | 'Holiday'; // Status of the attendance record
}
