export class EmployeeModel {
  id!: string; //  Primary Key
  payPeriodStart!: Date; //  Start date of the pay period
  payPeriodEnd!: Date; //  End date after 30 days from the start of the pay period
  hourlyRate!: number; //  Hourly based salary and Hourly rate 150 for employees
  payrollCalculationMethod!: 'Weekly' | 'Monthly'; //dropdown option for offer. employee choose the offer

  UserModel!: {
    id: string;
    firstName: string | undefined;
    lastName: string | undefined;
    email: string | undefined;
    role: 'HR' | 'Employee' | undefined;
    profilePhoto: string | undefined;
    gender: 'Male' | 'Female' | 'Other' | undefined;
    contact: string | undefined;
    nidNo: number | undefined;
    joiningDate: Date | undefined;
  };

  DepartmentModel!: {
    id: string;
    departmentName: string | undefined;
  };

  LocationModel!: {
    id: string;
    locationName: string | undefined;
    addressLine: string | undefined;
    city: string | undefined;
    state: string | undefined;
    postalCode: string | undefined;
    countryName: string | undefined;
  };
}

// export class EmployeeModel {
//   id!: string; //Primary Key

//   UserModel!: {
//     id: string;
//     firstName: string | undefined;
//     lastName: string | undefined;
//     email: string | undefined;
//     role: 'HR' | 'Employee' | undefined;
//     profilePhoto: string | undefined;
//     gender: 'Male' | 'Female' | 'Other' | undefined;
//     contact: string | undefined;
//     nidNo: number | undefined;
//     joiningDate: Date | undefined;
//     hourRate: number | undefined; // hour rate 150 for employees and 250 for HR,
//   };

//   DepartmentModel!: {
//     id: string;
//     departmentName: string | undefined;
//     payrollCalculationMethod: 'Weekly' | 'Monthly' | 'Yearly' | undefined;
//     overtimeRules: string | undefined;
//   };

//   LocationModel!: {
//     id: string;
//     locationName: string | undefined;
//     addressLine: string | undefined;
//     city: string | undefined;
//     state: string | undefined;
//     postalCode: string | undefined;
//     countryName: string | undefined;
//   };
// }
