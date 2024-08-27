import { DepartmentModel } from './department.model';
import { LocationModel } from './location.model';
import { UserModel } from './user.model';

export class EmployeeModel {
  id!: string; // Primary Key

  user!: UserModel; // Reference to UserModel

  department!: DepartmentModel; // Reference to DepartmentModel

  location!: LocationModel; // Reference to LocationModel
}
