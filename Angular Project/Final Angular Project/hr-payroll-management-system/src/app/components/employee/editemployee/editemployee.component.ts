import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../../../services/employee.service';
import { EmployeeModel } from '../../../models/employee.model';
import { DepartmentService } from '../../../services/department.service';
import { UserprofileService } from '../../../services/userprofile.service';
import { LocationService } from '../../../services/location.service';
import { DepartmentModel } from '../../../models/department.model';
import { UserModel } from '../../../models/user.model';
import { LocationModel } from '../../../models/location.model';

@Component({
  selector: 'app-editemployee',
  templateUrl: './editemployee.component.html',
  styleUrls: ['./editemployee.component.css'],
})
export class EditemployeeComponent implements OnInit {
  employeeForm!: FormGroup;
  employee: EmployeeModel | null = null;
  departments: DepartmentModel[] = [];
  users: UserModel[] = [];
  locations: LocationModel[] = [];
  errorMessage: string = '';

  constructor(
    private fb: FormBuilder,
    private employeeService: EmployeeService,
    private departmentService: DepartmentService,
    private userService: UserprofileService,
    private locationService: LocationService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.initForm();
    this.loadDepartments();
    this.loadUsers();
    this.loadLocations();
    this.loadEmployee();
  }

  initForm(): void {
    this.employeeForm = this.fb.group({
      id: [{ value: '', disabled: true }], // Ensure the ID is disabled and not editable
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      gender: ['Male', Validators.required],
      contact: ['', Validators.required],
      joiningDate: ['', Validators.required],
      profilePhoto: [''],
      position: ['', Validators.required],
      salary: [''],
      departmentId: [null, Validators.required],
      locationId: [null, Validators.required],
    });
  }

  loadDepartments(): void {
    this.departmentService.getAllDepartments().subscribe(
      (data) => (this.departments = data),
      (error) => console.error('Failed to load departments', error)
    );
  }

  loadUsers(): void {
    this.userService.getAllUsers().subscribe(
      (data) => (this.users = data),
      (error) => console.error('Failed to load users', error)
    );
  }

  loadLocations(): void {
    this.locationService.getAllLocations().subscribe(
      (data) => (this.locations = data),
      (error) => console.error('Failed to load locations', error)
    );
  }

  loadEmployee(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.employeeService.getEmployeeById(id).subscribe(
        (data) => {
          this.employee = data;
          this.employeeForm.patchValue(data);
        },
        (error) => {
          console.error('Failed to load employee', error);
          this.errorMessage = 'Failed to load employee. Please try again.';
        }
      );
    } else {
      this.errorMessage = 'Invalid employee ID.';
    }
  }

  onSubmit(): void {
    if (this.employeeForm.invalid) {
      return;
    }
    const updatedEmployee: EmployeeModel = this.employeeForm.value;
    if (this.employee && this.employee.id) {
      this.employeeService
        .updateEmployee(this.employee.id, updatedEmployee)
        .subscribe(
          () => {
            this.router.navigate(['/employee/list']);
          },
          (error) => {
            console.error('Failed to update employee', error);
            this.errorMessage = 'Failed to update employee. Please try again.';
          }
        );
    } else {
      this.errorMessage = 'Invalid employee data.';
    }
  }

  goBack(): void {
    this.router.navigate(['/employee/list']);
  }
}
