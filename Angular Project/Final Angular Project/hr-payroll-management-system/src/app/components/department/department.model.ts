import { LocationModel } from '../location/location.model';

export class DepartmentModel {
  id!: string; // Primary Key
  name!: string;
  description!: string;
  headOfDepartment!: string;
  numberOfEmployees!: number;
  payrollCalculationMethod!: string;
  overtimeRules!: string;
  location!: LocationModel;
}
