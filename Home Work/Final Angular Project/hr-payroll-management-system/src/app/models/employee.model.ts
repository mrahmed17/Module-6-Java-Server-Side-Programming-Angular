export class EmployeeModel {
  id!: string; //Primary Key
  firstName!: string;
  lastName!: string;
  email!: string;
  joiningDate!: string;
  gender!: 'Male' | 'Female' | 'Other';
  contact!: string;
  position!: string;
  salary!: string;
  departmentId!: string; // Foreign Key to Department
  locationId!: string; // Foreign Key to Location
}
