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

// export class AttendanceModel {
//   id!: string; //Primary Key
//   date!: Date; // Auto date generate and readonly fixed when click attendance form.
//   checkInTime!: string; // auto generate when check in or fingerprintScanned. Once log in mode it remain in checkin.

//   checkOutTime!: string; // auto generate when check in or fingerprintScanned. on log in time if he or she again check, it will count as a checkout time.

//   fingerprintScanned!: boolean; // Track if the fingerprint has been scanned and validated.

//   //identify who check or give attendance
//   UserModel!: {
//     id: string | undefined;
//     firstName: string | undefined;
//     lastName: string | undefined;
//     role: 'HR' | 'Employee' | undefined;
//     profilePhoto: string | undefined;
//   };

//   status!: 'Present' | 'Absent' | 'On Leave'; // Restricting status to specific values and base on check in or out time. if first time checkin it will count as a present. second time it will count as a On Leave. Otherwise it remain as a absent for all user.
// }
