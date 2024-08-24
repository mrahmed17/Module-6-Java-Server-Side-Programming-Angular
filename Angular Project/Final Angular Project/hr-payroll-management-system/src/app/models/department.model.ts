export class DepartmentModel {
  id!: string; // Primary Key
  departmentName!: string; //Must be provide department name
  description!: string;
  numberOfEmployees!: number; //No of working will show here by declaration
  payrollCalculationMethod!: 'Weekly' | 'Monthly' | 'Yearly';
  overtimeRules!: string; // After finishing the daily work hour

  UserModel!: {
    role: 'HR' | 'Employee' | undefined;
  };

  LocationModel!: {
    locationName: string | undefined;
  };
}
