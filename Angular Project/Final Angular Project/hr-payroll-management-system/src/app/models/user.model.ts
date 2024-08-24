export class UserModel {
  id!: string; // Primary Key
  firstName!: string;
  lastName!: string;
  email!: string; // Email address, must be unique
  userName!: string; // Username for login
  password!: string; // Password for authentication
  role!: 'Admin' | 'HR' | 'Employee'; // Role of the user, restricted to specific values
  profilePhoto!: string; //User must have a profile photo
  contact!: string; // Contact number
  gender!: 'Male' | 'Female' | 'Other';
  nidNo!: number; //National number must be provide and unique
  joiningDate!: Date; //For payment calculation
  salary!: number; //User or role base salary
  isActive!: boolean; // Account activation status
  createdAt!: Date; // Account creation date
  updatedAt!: Date; // Last update date

  DepartmentModel!: {
    departmentName: string | undefined;
  };
}
