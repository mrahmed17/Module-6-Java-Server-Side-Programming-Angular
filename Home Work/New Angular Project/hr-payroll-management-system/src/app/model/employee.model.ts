export class Employee {
  id!: number;
  firstName!: string;
  lastName!: string;
  email!: string;
  phone!: string;
  gender!: 'Male' | 'Female' | 'Other'; // Restricts to specific gender values
  department!: string;
  position!: string; // Required field
  salary!: number;
  hireDate!: Date;

  // // Nested department object
  // department!: {
  //   id!: number;
  //   deptName!: 'HR' | 'IT' | 'Finance'; // Restricts to specific department names
  //   // description?: string | null;
  // }
}