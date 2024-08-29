import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LocationService } from '../../../services/location.service';

@Component({
  selector: 'app-createlocation',
  templateUrl: './createlocation.component.html',
  styleUrls: ['./createlocation.component.css'],
})
export class CreatelocationComponent {
  locationForm: FormGroup;
  submissionError: string | null = null;

  constructor(
    private fb: FormBuilder,
    private locationService: LocationService,
    private router: Router
  ) {
    this.locationForm = this.fb.group({
      name: ['', Validators.required],
      address: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      zipCode: ['', Validators.required],
      country: ['', Validators.required],
      photo: [''],
    });
  }

  onSubmit(): void {
    if (this.locationForm.valid) {
      const newLocation = {
        ...this.locationForm.value,
        createdAt: new Date().toISOString(), // Automatically add the current date and time
      };

      console.log('Form Data:', newLocation); // Log the form data to verify

      this.locationService.createLocation(newLocation).subscribe(
        (location) => {
          console.log('Location created successfully', location);
          alert('Location created successfully');
          this.router.navigate(['/locations/list']);
        },
        (error) => {
          console.error('Error creating location', error);
          this.submissionError = 'Failed to create location. Please try again.';
        }
      );
    } else {
      this.submissionError = 'Please fill out all required fields.';
    }
  }

  resetForm(): void {
    this.locationForm.reset();
  }

  cancel(): void {
    this.router.navigate(['/locations/list']);
  }
}
