export class ManagerModel {
  managerId: string; // Unique identifier for the manager
  username: string; // Username for the manager
  fullName: string; // Full name of the manager
  email: string; // Email address of the manager
  contactNumber: string; // Contact number of the manager
  role: 'Manager'; // Role should be 'Manager'
  gender: 'Male' | 'Female' | 'Other'; // Gender of the manager
  age: string; // Age of the manager (for verification purposes)
  nidNo: number; // National ID number, must be provided and unique
  department: string; // Department the manager is associated with
  assignedEmployees: string[]; // List of employee IDs assigned to this manager
  profilePhoto?: string; // Optional profile photo of the manager
  hireDate: Date; // Date when the manager was hired
  payrollCalculationMethod: 'Weekly' | 'Monthly'; // Method of payroll calculation
  lastLogin: Date; // Last login date of the manager
  status: 'active' | 'inactive'; // Employment status
  hourlyRate: number; // Hourly rate for the manager
  createdAt: Date; // Account creation date
  updatedAt: Date; // Last update date

  constructor(
    managerId: string,
    username: string,
    fullName: string,
    email: string,
    contactNumber: string,
    role: 'Manager',
    gender: 'Male' | 'Female' | 'Other',
    age: string,
    nidNo: number,
    department: string,
    assignedEmployees: string[],
    hireDate: Date,
    payrollCalculationMethod: 'Weekly' | 'Monthly',
    lastLogin: Date,
    status: 'active' | 'inactive',
    hourlyRate: number,
    createdAt: Date,
    updatedAt: Date,
    profilePhoto?: string // Optional
  ) {
    this.managerId = managerId;
    this.username = username;
    this.fullName = fullName;
    this.email = email;
    this.contactNumber = contactNumber;
    this.role = role;
    this.gender = gender;
    this.age = age;
    this.nidNo = nidNo;
    this.department = department;
    this.assignedEmployees = assignedEmployees;
    this.profilePhoto = profilePhoto;
    this.hireDate = hireDate;
    this.payrollCalculationMethod = payrollCalculationMethod;
    this.lastLogin = lastLogin;
    this.status = status;
    this.hourlyRate = hourlyRate;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }

  // Method to update the manager's status
  updateStatus(newStatus: 'active' | 'inactive') {
    this.status = newStatus;
  }

  // Method to get manager's full details
  getManagerDetails(): string {
    return `${this.fullName} (${this.email}) - Status: ${this.status}`;
  }

  // Method to add an employee to the list of assigned employees
  addEmployee(employeeId: string) {
    if (!this.assignedEmployees.includes(employeeId)) {
      this.assignedEmployees.push(employeeId);
    }
  }

  // Method to remove an employee from the list of assigned employees
  removeEmployee(employeeId: string) {
    this.assignedEmployees = this.assignedEmployees.filter(
      (id) => id !== employeeId
    );
  }
}
