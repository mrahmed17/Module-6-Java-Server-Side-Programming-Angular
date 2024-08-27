export class UserModel {
  id!: string; //  Primary Key
  firstName!: string;
  lastName!: string;
  email!: string; //  Email address, must be unique
  userName!: string; //  Username for login
  password!: string; //  Password for authentication
  confirmPassword!: string; //  Confirm Password for verify authentication
  role!: 'Admin' | 'HR' | 'Employee'; //  Admin will create HR. HR will create Employee
  profilePhoto?: string; //  Optional profile photo
  gender!: 'Male' | 'Female' | 'Other';
  contact!: string; //  Contact number
  nidNo!: number; //  National ID number, must be provided and unique
  joiningDate!: Date; //  For payment calculation

  createdAt!: Date; //  Account creation date
  updatedAt!: Date; //  Last update date
}
