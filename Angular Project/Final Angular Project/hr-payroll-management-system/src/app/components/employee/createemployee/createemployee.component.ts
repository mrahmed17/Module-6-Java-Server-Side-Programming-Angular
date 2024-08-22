import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeModel } from '../../../models/employee.model';
import { EmployeeService } from '../../../services/employee.service';
import { DepartmentService } from '../../../services/department.service'; // Import if you need departments
import { LocationService } from '../../../services/location.service'; // Import if you need locations

@Component({
  selector: 'app-createemployee',
  templateUrl: './createemployee.component.html',
  styleUrls: ['./createemployee.component.css'],
})
export class CreateemployeeComponent implements OnInit {
  employeeForm!: FormGroup;
  departments: any[] = []; // Assuming you have departments to choose from
  locations: any[] = []; // Assuming you have locations to choose from
  // departments!: DepartmentModel[];
  // locations!: Location[];
  // employees: EmployeeModel[] = [];
  // employee: EmployeeModel = new EmployeeModel();

  constructor(
    private formBuilder: FormBuilder,
    private employeeService: EmployeeService,
    private departmentService: DepartmentService, // If you need to load departments
    private locationService: LocationService, // If you need to load locations
    private router: Router
  ) {}

  ngOnInit(): void {
    // Initialize form with validation
    this.employeeForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      joiningDate: ['', Validators.required],
      gender: ['', Validators.required],
      contact: ['', Validators.required],
      position: ['', Validators.required],
      salary: ['', Validators.required],
      departmentId: ['', Validators.required],
      locationId: ['', Validators.required],
    });

    // Load departments and locations if necessary
    this.loadDepartments();
    this.loadLocations();
  }

  loadDepartments(): void {
    // Fetch departments from the service if needed
    this.departmentService.getAllDepartment().subscribe({
      next: (res) => {
        this.departments = res; // Assuming the response is an array of departments
      },
      error: (err) => {
        console.error('Error fetching departments:', err);
      },
    });
  }

  loadLocations(): void {
    // Fetch locations from the service if needed
    this.locationService.getAllLocation().subscribe({
      next: (res) => {
        this.locations = res; // Assuming the response is an array of locations
      },
      error: (err) => {
        console.error('Error fetching locations:', err);
      },
    });
  }

  onSubmit(): void {
    if (this.employeeForm.valid) {
      const employee: EmployeeModel = this.employeeForm.value;

      this.employeeService.createEmployee(employee).subscribe({
        next: (res) => {
          console.log('Employee created successfully:', res);
          this.router.navigate(['/employees']); // Redirect to employees list
        },
        error: (err) => {
          console.error('Error creating employee:', err);
        },
      });
    } else {
      console.log('Form is invalid');
    }
  }

  resetForm(): void {
    this.employeeForm.reset();
  }
}
