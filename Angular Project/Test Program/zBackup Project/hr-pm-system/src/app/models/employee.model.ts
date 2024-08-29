export class EmployeeModel {
  employeeId: string; // Unique identifier for the employee
  username: string; // Username for login
  fullName: string; // Full name of the employee
  email: string; // Email address of the employee
  address: string; // Residential address of the employee
  contactNumber: string; // Contact number of the employee
  role: 'Employee'; // Role should be 'Employee'
  gender: 'Male' | 'Female' | 'Other'; // Gender of the employee
  age: string; // Age of the employee (for overtime exemption verification)
  nidNo: number; // National ID number, must be provided and unique
  department: string; // Department the employee belongs to
  managerId: string; // ID of the manager responsible for the employee
  profilePhoto?: string; // Optional profile photo of the employee
  hireDate: Date; // Date when the employee was hired
  payrollCalculationMethod: 'Weekly' | 'Monthly'; // Method of payroll calculation
  overtimeExemption: boolean; // Overtime exemption status
  lastLogin: Date; // Last login date of the employee
  status: 'active' | 'inactive'; // Employment status
  hourlyRate: number; // Hourly rate for the employee
  createdAt: Date; // Account creation date
  updatedAt: Date; // Last update date

  constructor(
    employeeId: string,
    username: string,
    fullName: string,
    email: string,
    address: string,
    contactNumber: string,
    role: 'Employee',
    gender: 'Male' | 'Female' | 'Other',
    age: string,
    nidNo: number,
    department: string,
    managerId: string,
    hireDate: Date,
    payrollCalculationMethod: 'Weekly' | 'Monthly',
    overtimeExemption: boolean,
    lastLogin: Date,
    status: 'active' | 'inactive',
    hourlyRate: number,
    createdAt: Date,
    updatedAt: Date,
    profilePhoto?: string // Optional
  ) {
    this.employeeId = employeeId;
    this.username = username;
    this.fullName = fullName;
    this.email = email;
    this.address = address;
    this.contactNumber = contactNumber;
    this.role = role;
    this.gender = gender;
    this.age = age;
    this.nidNo = nidNo;
    this.department = department;
    this.managerId = managerId;
    this.profilePhoto = profilePhoto;
    this.hireDate = hireDate;
    this.payrollCalculationMethod = payrollCalculationMethod;
    this.overtimeExemption = overtimeExemption;
    this.lastLogin = lastLogin;
    this.status = status;
    this.hourlyRate = hourlyRate;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }

  // Method to update the employee's status
  updateStatus(newStatus: 'active' | 'inactive') {
    this.status = newStatus;
  }

  // Method to get employee's full details
  getEmployeeDetails(): string {
    return `${this.fullName} (${this.email}) - Status: ${this.status}`;
  }
}
