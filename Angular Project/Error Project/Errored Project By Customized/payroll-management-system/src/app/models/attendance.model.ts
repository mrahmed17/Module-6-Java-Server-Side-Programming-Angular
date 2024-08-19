export interface Attendance {
  id?: string | null; // Attendance ID, optional and nullable
  date?: Date | null; // Date of attendance, optional and nullable
  status: 'Present' | 'Absent' | 'Leave' | null; // Restricts status to specific values
  checkInTime?: string | null; // Time when the employee checked in, optional and nullable
  checkOutTime?: string | null; // Time when the employee checked out, optional and nullable

  // Nested employee object
  employee?: {
    id?: string | null; // Employee ID, optional and nullable
    name?: string | null; // Employee name, optional and nullable
    position: string; // Required field, specifies employee's position
  } | null; // Employee object itself can be null
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
