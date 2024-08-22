import { DepartmentModel } from '../models/department.model';

export class UserModel {
  id!: string; // Primary Key
  username!: string; // Username for login
  email!: string; // Email address, must be unique
  password!: string; // Password for authentication
  profilePhoto!: string;
  role!: 'Admin' | 'Employee' | 'Manager' | 'HR'; // Role of the user, restricted to specific values
  firstName!: string;
  lastName!: string;
  contactNumber?: string; // Optional contact number
  gender!: 'Male' | 'Female' | 'Other';
  joiningDate!: string;
  position!: string;
  salary!: string;
  department!: DepartmentModel; // Foreign Key to Department
  isActive!: boolean; // Account activation status
  createdAt!: Date; // Account creation date
  updatedAt!: Date; // Last update date
}

//     id!: string;
//     name!: string;
//     email!: string;
//     password!: string;
//     profilePhoto!: string;
//     role!: string;

// }
