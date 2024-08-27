export class AttendanceModel {
  id!: string;

  workingDay!: Date; //  Must be provided to calculate a user's salary or grant leave on a specific day
  workHours!: number; //  Example: 8.00

  UserModel!: {
    id: string;
    firstName: string | undefined;
    lastName: string | undefined;
    role: 'HR' | 'Employee' | undefined;
  };

  DepartmentModel!: {
    id: string; //  Primary Key
    departmentName: string; //  Must provide department name;
  };

  inTime!: Date; //  In time for the day

  outTime!: Date; //  Out time for the day

  status!: 'Present' | 'Absent' | 'On Leave' | 'Sick' | 'Holiday'; //  Status of the attendance record
}
