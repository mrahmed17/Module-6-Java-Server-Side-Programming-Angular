import { DepartmentModel } from './department.model';

export class UserModel {
  id!: string; // Primary Key
  firstName!: string;
  lastName!: string;
  email!: string; // Email address, must be unique
  userName!: string; // Username for login
  password!: string; // Password for authentication
  role!: 'Admin' | 'HR' | 'Employee'; // Role of the user, restricted to specific values
  profilePhoto?: string; // Optional profile photo
  gender!: 'Male' | 'Female' | 'Other';
  contact!: string; // Contact number
  nidNo!: number; // National ID number, must be provided and unique
  joiningDate!: Date; // For payment calculation
  hourlyRate!: number; // Salary based on the user's role

  createdAt!: Date; // Account creation date
  updatedAt!: Date; // Last update date

  department?: DepartmentModel; // Optional reference to DepartmentModel if the user is associated with a department
}
