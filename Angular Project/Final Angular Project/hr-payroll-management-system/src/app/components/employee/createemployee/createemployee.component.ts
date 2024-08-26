import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from '../../../services/employee.service';
import { DepartmentService } from '../../../services/department.service';
import { LocationService } from '../../../services/location.service';
import { UserprofileService } from '../../../services/userprofile.service';
import { DepartmentModel } from '../../../models/department.model';
import { LocationModel } from '../../../models/location.model';
import { EmployeeModel } from '../../../models/employee.model';
import { UserModel } from '../../../models/user.model';

@Component({
  selector: 'app-createemployee',
  templateUrl: './createemployee.component.html',
  styleUrls: ['./createemployee.component.css'],
})
export class CreateemployeeComponent implements OnInit {
  employeeForm!: FormGroup;
  departments: DepartmentModel[] = [];
  locations: LocationModel[] = [];
  users: UserModel[] = [];
  errorMessage: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private employeeService: EmployeeService,
    private departmentService: DepartmentService,
    private locationService: LocationService,
    private userService: UserprofileService
  ) {}

  ngOnInit(): void {
    this.initForm();
    this.loadDepartments();
    this.loadLocations();
    this.loadUsers();
  }

  // Initialize the form
  initForm(): void {
    this.employeeForm = this.formBuilder.group({
      id: [''],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      gender: ['Male', Validators.required],
      contact: ['', Validators.required],
      joiningDate: ['', Validators.required],
      profilePhoto: [''],
      position: ['', Validators.required],
      salary: [0, [Validators.required, Validators.min(0)]],
      departmentId: [null, Validators.required],
      locationId: [null, Validators.required],
    });
  }

  // Load all departments
  loadDepartments(): void {
    // Fetch departments from the service if needed
    this.departmentService.getAllDepartments().subscribe({
      next: (res) => {
        this.departments = res; // Assuming the response is an array of departments
      },
      error: (err) => {
        console.error('Error fetching departments:', err);
        this.errorMessage = 'Failed to load departments. Please try again.';
      },
    });
  }

  // Load all locations
  loadLocations(): void {
    // Fetch locations from the service if needed
    this.locationService.getAllLocations().subscribe({
      next: (res) => {
        this.locations = res; // Assuming the response is an array of locations
      },
      error: (err) => {
        console.error('Error fetching locations:', err);
        this.errorMessage = 'Failed to load locations. Please try again.';
      },
    });
  }

  // Load all users
  loadUsers(): void {
    this.userService.getAllUsers().subscribe({
      next: (data) => {
        this.users = data;
      },
      error: (error) => {
        console.error('Failed to load users', error);
        this.errorMessage = 'Failed to load users. Please try again.';
      },
    });
  }

  // Submit the form to create a new employee
  onSubmit(): void {
    if (this.employeeForm.invalid) {
      return;
    }
    const employeeData: EmployeeModel = this.employeeForm.value;
    this.employeeService.createEmployee(employeeData).subscribe({
      next: (res) => {
        console.log('Employee created successfully:', res);
        this.resetForm();
        // this.router.navigate(['/employees']); // Redirect to employees list
      },
      error: (err) => {
        console.error('Error creating employee:', err);
        this.errorMessage = 'Failed to create employee. Please try again.';
      },
    });
  }

  // Reset the form and error message
  resetForm(): void {
    this.employeeForm.reset();
    this.errorMessage = '';
  }
}
