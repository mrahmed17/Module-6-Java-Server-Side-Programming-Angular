export interface Employee {
  id?: string | null; // Employee ID, optional and nullable
  name?: string | null;
  email?: string | null;
  joiningDate?: string | null;
  gender?: 'Male' | 'Female' | 'Other' | null; // Restricts to specific gender values
  contact?: string | null;
  position: string; // Required field
  salary?: string | null;

  // Nested department object
  department?: {
    id?: string | null;
    deptName?: 'HR' | 'IT' | 'Finance' | null; // Restricts to specific department names
    // description?: string | null;
  } | null;
}
