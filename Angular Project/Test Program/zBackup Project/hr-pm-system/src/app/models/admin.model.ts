export class AdminModel {
  adminId: string; // Unique identifier for the admin
  username: string; // Username for the admin
  fullName: string; // Full name of the admin
  email: string; // Email address of the admin
  contactNumber: string; // Contact number of the admin
  role: 'Admin'; // Role should be 'Admin'
  gender: 'Male' | 'Female' | 'Other'; // Gender of the admin
  age: string; // Age of the admin (for verification purposes)
  nidNo: number; // National ID number, must be provided and unique
  accessLevel: string; // Access level of the admin (e.g., SuperAdmin, Admin)
  assignedLocations: string[]; // List of location IDs assigned to the admin
  assignedManagers: string[]; // List of manager IDs assigned to the admin
  assignedDepartments: string[]; // List of department IDs assigned to the admin
  profilePhoto?: string; // Optional profile photo of the admin
  payrollCalculationMethod: 'Weekly' | 'Monthly'; // Method of payroll calculation
  lastLogin: Date; // Date of the last login
  status: 'active' | 'inactive'; // Current employment status
  hourlyRate: number; // Hourly rate for the admin

  constructor(
    adminId: string,
    username: string,
    fullName: string,
    email: string,
    contactNumber: string,
    role: 'Admin',
    gender: 'Male' | 'Female' | 'Other',
    age: string,
    nidNo: number,
    accessLevel: string,
    assignedLocations: string[],
    assignedManagers: string[],
    assignedDepartments: string[],
    payrollCalculationMethod: 'Weekly' | 'Monthly',
    lastLogin: Date,
    status: 'active' | 'inactive',
    hourlyRate: number,
    profilePhoto?: string // Optional
  ) {
    this.adminId = adminId;
    this.username = username;
    this.fullName = fullName;
    this.email = email;
    this.contactNumber = contactNumber;
    this.role = role;
    this.gender = gender;
    this.age = age;
    this.nidNo = nidNo;
    this.accessLevel = accessLevel;
    this.assignedLocations = assignedLocations;
    this.assignedManagers = assignedManagers;
    this.assignedDepartments = assignedDepartments;
    this.payrollCalculationMethod = payrollCalculationMethod;
    this.lastLogin = lastLogin;
    this.status = status;
    this.hourlyRate = hourlyRate;
    this.profilePhoto = profilePhoto;
  }

  // Method to update the admin's status
  updateStatus(newStatus: 'active' | 'inactive') {
    this.status = newStatus;
  }

  // Method to get admin's full details
  getAdminDetails(): string {
    return `${this.fullName} (${this.email}) - Status: ${this.status}`;
  }

  // Method to add a location to the admin's assigned locations
  addLocation(locationId: string) {
    if (!this.assignedLocations.includes(locationId)) {
      this.assignedLocations.push(locationId);
    }
  }

  // Method to remove a location from the admin's assigned locations
  removeLocation(locationId: string) {
    this.assignedLocations = this.assignedLocations.filter(
      (id) => id !== locationId
    );
  }

  // Method to add a manager to the admin's assigned managers
  addManager(managerId: string) {
    if (!this.assignedManagers.includes(managerId)) {
      this.assignedManagers.push(managerId);
    }
  }

  // Method to remove a manager from the admin's assigned managers
  removeManager(managerId: string) {
    this.assignedManagers = this.assignedManagers.filter(
      (id) => id !== managerId
    );
  }

  // Method to add a department to the admin's assigned departments
  addDepartment(departmentId: string) {
    if (!this.assignedDepartments.includes(departmentId)) {
      this.assignedDepartments.push(departmentId);
    }
  }

  // Method to remove a department from the admin's assigned departments
  removeDepartment(departmentId: string) {
    this.assignedDepartments = this.assignedDepartments.filter(
      (id) => id !== departmentId
    );
  }
}
