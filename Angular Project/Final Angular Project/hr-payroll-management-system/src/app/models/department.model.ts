import { LocationModel } from '../models/location.model';
import { PayrollModel } from './payroll.model';
import { UserModel } from './user.model';

export class DepartmentModel {
  id!: string; // Primary Key
  departmentName!: string; //Must be provide department name
  description!: string;
  headOfDepartment!: UserModel; //Foreign key to userModel for dep head.
  numberOfEmployees!: number; //No of working will show here by declaration
  payrollCalculationMethod!: string; //Payroll calculationed base on others facilities
  overtimeRules!: string; // After finishing the daily work hour
  location!: LocationModel; //Which locations are department situated
}
