export class AttendanceModel {
  id?: string; // Attendance ID, optional
  date?: Date; // Date of attendance, optional
  status!: 'Present' | 'Absent' | 'On Leave'; // Restricting status to specific values
  checkInTime?: string; // Check-in time, optional
  checkOutTime?: string; // Check-out time, optional

  // Nested employee object
  employee!: {
    id?: string; // Employee ID, optional
    name?: string; // Employee name, optional
    position: string; // Required field, specifies employee's position
    firstName?: string;
    lastName?: string;
    email?: string;
    joiningDate?: string;
    gender?: string;
    contact?: string;
    salary?: string;
    departmentId?: string; // Foreign Key to Department
    locationId?: string; // Foreign Key to Location
  }
}



// export interface Attendance {
//   id?: string | null;
//   date?: Date | null;
//   status: 'Present' | 'Absent' | 'Leave' | null;
//   checkInTime?: string | null;
//   checkOutTime?: string | null;

//   employee?: {
//     id?: string | null; // Employee ID, optional and nullable
//     name?: string | null;
//     position: string; // Required field
//   }
// }
