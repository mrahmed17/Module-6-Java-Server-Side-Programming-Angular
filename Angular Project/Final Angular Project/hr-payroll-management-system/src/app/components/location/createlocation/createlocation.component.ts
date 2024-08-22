import { Component, OnInit } from '@angular/core';
import { LocationService } from '../../../services/location.service';
import { Router } from '@angular/router';
import { LocationModel } from '../../../models/location.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-createlocation',
  templateUrl: './createlocation.component.html',
  styleUrls: ['./createlocation.component.css'],
})
export class CreatelocationComponent implements OnInit {
  locationForm!: FormGroup;

  constructor(
    private locationService: LocationService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.locationForm = this.formBuilder.group({
      name: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      photo: [''],
      availableUnits: ['', [Validators.required, Validators.min(1)]],
      wifi: [false],
      laundry: [false],
    });
  }

  onSubmit(): void {
    if (this.locationForm.valid) {
      const location: LocationModel = this.locationForm.value;

      this.locationService.createLocation(location).subscribe({
        next: (res) => {
          console.log('Location created successfully:', res);
          this.router.navigate(['/locations']); // Redirect to locations list
        },
        error: (err) => {
          console.error('Error creating location:', err);
        },
      });
    } else {
      console.log('Form is invalid');
    }
  }

  resetForm(): void {
    this.locationForm.reset();
  }
}
