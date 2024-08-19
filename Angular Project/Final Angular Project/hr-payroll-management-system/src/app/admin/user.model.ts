export class UserModel {
    id!: string; // Primary Key
    username!: string; // Username for login
    email!: string; // Email address, must be unique
    password!: string; // Password for authentication
    profilePhoto!: string;
    role!: 'Admin' | 'Employee' | 'Manager' | 'HR'; // Role of the user, restricted to specific values
    firstName!: string;
    lastName!: string;
    contactNumber?: string; // Optional contact number
    departmentId?: string; // Foreign Key to Department (if applicable)
    locationId?: string; // Foreign Key to Location (if applicable)
    employeeDetails?: EmployeeDetails; // Optional nested object for employee-specific details

    // Additional fields to accommodate non-employee users
    isActive!: boolean; // Account activation status
    createdAt!: Date; // Account creation date
    updatedAt!: Date; // Last update date
}

export class EmployeeDetails {
    position!: string;
    salary!: string;
    joiningDate!: string;
    gender!: 'Male' | 'Female' | 'Other';
}


// export class UserModel {

//     id!: string;
//     name!: string;
//     email!: string;
//     password!: string;
//     profilePhoto!: string;
//     role!: string;

// }