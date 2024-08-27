import { LocationModel } from './location.model';
import { UserModel } from './user.model';

export class DepartmentModel {
  id!: string; // Primary Key
  departmentName!: string; // Must provide department name
  description?: string;
  numberOfEmployees?: number; // Number of employees will be shown here
  payrollCalculationMethod!: 'Weekly' | 'Monthly';

  location!: LocationModel; // Reference to LocationModel

  head!: UserModel; // Reference to the Department Head (UserModel)
}
