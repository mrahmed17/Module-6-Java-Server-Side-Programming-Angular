import { LocationModel } from '../models/location.model';
import { PayrollModel } from './payroll.model';
import { UserModel } from './user.model';

export class DepartmentModel {
  id!: string; // Primary Key
  departmentName!: string; //Must be provide department name
  headOfDepartment!: UserModel; //Foreign key to userModel for dep head.
  numberOfEmployees!: number; //No of working will show here by declaration
  payrollCalculationMethod!: PayrollModel; //Payroll calculationed base on others facilities
  overtimeRules!: string; //overtime rule show here
  location!: LocationModel; //Which locations are department situated
}
