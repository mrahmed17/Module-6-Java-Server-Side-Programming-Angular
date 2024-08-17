import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DepartmentModel } from '../../../models/department.model';
import { DepartmentService } from '../../../services/department.service';
import { LocationService } from '../../../services/location.service'; // Import if you need locations


@Component({
  selector: 'app-createdepartment',
  templateUrl: './createdepartment.component.html',
  styleUrls: ['./createdepartment.component.css']
})
export class CreatedepartmentComponent implements OnInit {
  departmentForm!: FormGroup;
  locations: any[] = []; // Assuming you have locations to choose from

  constructor(
    private formBuilder: FormBuilder,
    private departmentService: DepartmentService,
    private locationService: LocationService, // If you need to load locations
    private router: Router
  ) { }

  ngOnInit(): void {
    this.departmentForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      locationId: ['', Validators.required],
      headOfDepartment: ['', Validators.required],
      numberOfEmployees: ['', [Validators.required, Validators.min(0)]],
      payrollCalculationMethod: ['', Validators.required],
      overtimeRules: this.formBuilder.group({
        baseHours: ['', Validators.required],
        overtimeRate: ['', Validators.required],
        overtimeCapping: [''],
        overtimeExemptEmployees: [[]]
      })
    });
    // Load locations if necessary
    this.loadLocations();
  }

  loadLocations(): void {
    this.locationService.getAllLocation().subscribe({
      next: (res) => {
        this.locations = res; // Assuming the response is an array of locations
      },
      error: (err) => {
        console.error('Error fetching locations:', err);
      }
    });
  }

  onSubmit(): void {
    if (this.departmentForm.valid) {
      const department: DepartmentModel = this.departmentForm.value;

      this.departmentService.createDepartmentModel(department).subscribe({
        next: (res) => {
          console.log('Department created successfully:', res);
          this.router.navigate(['/departments']); // Redirect to departments list
        },
        error: (err) => {
          console.error('Error creating department:', err);
        }
      });
    } else {
      console.log('Form is invalid');
    }
  }

  resetForm(): void {
    this.departmentForm.reset();
  }
}
