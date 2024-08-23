import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DepartmentService } from '../../../services/department.service';
import { DepartmentModel } from '../../../models/department.model';
import { UserModel } from '../../../models/user.model';
import { LocationModel } from '../../../models/location.model';
import { PayrollModel } from '../../../models/payroll.model';
import { UserprofileService } from '../../../services/userprofile.service';
import { LocationService } from '../../../services/location.service';
import { PayrollService } from '../../../services/payroll.service';

@Component({
  selector: 'app-createdepartment',
  templateUrl: './createdepartment.component.html',
  styleUrls: ['./createdepartment.component.css'],
})
export class CreatedepartmentComponent implements OnInit {
  departmentForm!: FormGroup;
  departments: DepartmentModel[] = [];
  users: UserModel[] = [];
  locations: LocationModel[] = [];
  payrolls: PayrollModel[] = [];
  isEditMode: boolean = false;
  errorMessage: string = '';

  constructor(
    private departmentService: DepartmentService,
    private formBuilder: FormBuilder,
    private userService: UserprofileService,
    private locationService: LocationService,
    private payrollService: PayrollService
  ) {}

  ngOnInit(): void {
    this.initForm();
    this.loadDepartments();
    this.loadUsers();
    this.loadLocations();
    this.loadPayrolls();
  }

  // Initialize the form
  initForm(): void {
    this.departmentForm = this.formBuilder.group({
      id: [null],
      departmentName: ['', Validators.required],
      headOfDepartment: [null, Validators.required],
      numberOfEmployees: [0, Validators.required],
      payrollCalculationMethod: [null, Validators.required],
      overtimeRules: ['', Validators.required],
      location: [null, Validators.required],
    });
  }

  // Load all departments
  loadDepartments(): void {
    this.departmentService.getAllDepartments().subscribe(
      (data) => {
        this.departments = data;
      },
      (error) => {
        console.error('Failed to load departments', error);
        this.errorMessage = 'Failed to load departments. Please try again.';
      }
    );
  }

  // Load all users (for head of department selection)
  loadUsers(): void {
    this.userService.getAllUsers().subscribe(
      (data) => {
        this.users = data;
      },
      (error) => {
        console.error('Failed to load users', error);
        this.errorMessage = 'Failed to load users. Please try again.';
      }
    );
  }

  // Load all locations (for location selection)
  loadLocations(): void {
    this.locationService.getAllLocations().subscribe(
      (data) => {
        this.locations = data;
      },
      (error) => {
        console.error('Failed to load locations', error);
        this.errorMessage = 'Failed to load locations. Please try again.';
      }
    );
  }

  // Load all payrolls (for payroll calculation method selection)
  loadPayrolls(): void {
    this.payrollService.getAllPayrolls().subscribe(
      (data) => {
        this.payrolls = data;
      },
      (error) => {
        console.error('Failed to load payrolls', error);
        this.errorMessage = 'Failed to load payrolls. Please try again.';
      }
    );
  }

  // Submit the form (Create or Update)
  onSubmit(): void {
    if (this.departmentForm.invalid) {
      return;
    }

    const departmentData: DepartmentModel = this.departmentForm.value;

    if (this.isEditMode) {
      this.departmentService
        .updateDepartment(departmentData.id, departmentData)
        .subscribe(
          (response) => {
            this.loadDepartments();
            this.resetForm();
            this.isEditMode = false;
          },
          (error) => {
            console.error('Failed to update department', error);
            this.errorMessage =
              'Failed to update department. Please try again.';
          }
        );
    } else {
      this.departmentService.createDepartment(departmentData).subscribe(
        (response) => {
          this.loadDepartments();
          this.resetForm();
        },
        (error) => {
          console.error('Failed to create department', error);
          this.errorMessage = 'Failed to create department. Please try again.';
        }
      );
    }
  }

  // Edit an existing department
  editDepartment(department: DepartmentModel): void {
    this.departmentForm.patchValue(department);
    this.isEditMode = true;
  }

  // Delete a department
  deleteDepartment(id: string): void {
    if (confirm('Are you sure you want to delete this department?')) {
      this.departmentService.deleteDepartment(id).subscribe(
        () => {
          this.loadDepartments();
        },
        (error) => {
          console.error('Failed to delete department', error);
          this.errorMessage = 'Failed to delete department. Please try again.';
        }
      );
    }
  }

  // Reset the form and state
  resetForm(): void {
    this.departmentForm.reset();
    this.isEditMode = false;
    this.errorMessage = '';
  }
}
