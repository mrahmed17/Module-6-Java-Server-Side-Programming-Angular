import { DepartmentModel } from '../department/department.model';
import { LocationModel } from '../location/location.model';

export class EmployeeModel {
  id!: string; //Primary Key
  firstName!: string;
  lastName!: string;
  email!: string;
  gender!: 'Male' | 'Female' | 'Other';
  contact!: string;
  joiningDate!: string;
  profilePhoto!: string;
  position!: string;
  salary!: string;
  departmentId!: DepartmentModel; // Foreign Key to Department
  locationId!: LocationModel; // Foreign Key to Location
}
