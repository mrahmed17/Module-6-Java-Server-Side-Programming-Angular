export class DepartmentModel {
  id!: string; //  Primary Key
  departmentName!: string; //  Must provide department name
  description?: string;
  numberOfEmployees?: number; //  Number of employees will be shown here

  LocationModel!: {
    id: string;
    locationName: string | undefined;
    addressLine: string | undefined;
    city: string | undefined;
    state: string | undefined;
    postalCode: string | undefined;
    countryName: string | undefined;
  };

  UserModel!: {
    id: string;
    firstName: string;
    lastName: string;
    role: 'HR' | 'Employee' | undefined;
  };
}
