import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DepartmentModel } from '../../../models/department.model';
import { LocationModel } from '../../../models/location.model';
import { DepartmentService } from '../../../services/department.service';
import { LocationService } from '../../../services/location.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editdepartment',
  templateUrl: './editdepartment.component.html',
  styleUrl: './editdepartment.component.css',
})
export class EditdepartmentComponent implements OnInit {
  departmentForm!: FormGroup;
  department: DepartmentModel | null = null;
  locations: LocationModel[] = [];
  errorMessage: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private departmentService: DepartmentService,
    private locationService: LocationService, // Inject LocationService to fetch locations
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.initForm();
    this.loadLocations();
    this.loadDepartment();
  }

  // Initialize the form
  initForm(): void {
    this.departmentForm = this.formBuilder.group({
      id: [null],
      departmentName: ['', Validators.required],
      description: [''],
      headOfDepartment: [''],
      numberOfEmployees: [0],
      payrollCalculationMethod: [''],
      overtimeRules: [''],
      location: ['', Validators.required],
    });
  }

  // Load a specific department by ID
  loadDepartment(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.departmentService.getDepartmentById(id).subscribe(
        (data) => {
          this.department = data;
          this.departmentForm.patchValue(data);
        },
        (error) => {
          console.error('Failed to load department', error);
          this.errorMessage = 'Failed to load department. Please try again.';
        }
      );
    }
  }

  // Load locations for dropdown
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

  // Submit the form to update the department
  onSubmit(): void {
    if (this.departmentForm.invalid) {
      return;
    }
    const departmentData = this.departmentForm.value;
    if (this.department) {
      this.departmentService
        .updateDepartment(this.department.id, departmentData)
        .subscribe(
          (response) => {
            this.router.navigate(['/department-list']);
          },
          (error) => {
            console.error('Failed to update department', error);
            this.errorMessage =
              'Failed to update department. Please try again.';
          }
        );
    }
  }

  // Navigate back to the department list
  goBack(): void {
    this.router.navigate(['/department/list']);
  }
}
