import { DepartmentModel } from '../models/department.model';
import { LocationModel } from '../models/location.model';
import { UserModel } from './user.model';

export class EmployeeModel {
  id!: string; //Primary Key
  firstName!: string; // Foreign Key to UserModel
  lastName!: string; // Foreign Key to UserModel
  email!: string; // Foreign Key to UserModel
  gender!: 'Male' | 'Female' | 'Other'; // Foreign Key to UserModel
  contact!: string; // Foreign Key to UserModel
  profilePhoto!: string; // Foreign Key to UserModel
  joiningDate!: Date; // Foreign Key to UserModel
  position!: string; // Foreign Key to UserModel
  salary!: UserModel; // Foreign Key to UserModel
  departmentId!: DepartmentModel; // Foreign Key to DepartmentModel
  locationId!: LocationModel; // Foreign Key to LocationModel
}
