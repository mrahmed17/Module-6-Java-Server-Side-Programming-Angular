export class DepartmentModel {
  id!: string;  // Primary Key
  name!: string;
  description!: string;
  locationId!: string; // Foreign Key to Location
  headOfDepartment!: string;
  numberOfEmployees!: number;
  payrollCalculationMethod!: string;
  overtimeRules!: string;
}
