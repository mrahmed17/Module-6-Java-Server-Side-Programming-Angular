import { DepartmentModel } from '../models/department.model';

export class UserModel {
  id!: string; // Primary Key
  firstName!: string;
  lastName!: string;
  email!: string; // Email address, must be unique
  userName!: string; // Username for login
  password!: string; // Password for authentication
  role!: 'HR' | 'Employee'; // Role of the user, restricted to specific values
  profilePhoto!: string; //User must have a profile photo
  contact!: string; // Contact number
  gender!: 'Male' | 'Female' | 'Other';
  nidNo!: number; //National number must be provide and unique
  joiningDate!: string; //For payment calculation
  salary!: string; //User or role base salary
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
