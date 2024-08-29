import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LocationModel } from '../../../models/location.model';
import { LocationService } from '../../../services/location.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editlocation',
  templateUrl: './editlocation.component.html',
  styleUrl: './editlocation.component.css',
})
export class EditlocationComponent implements OnInit {
  id: string = '';
  locationForm!: FormGroup;
  location!: LocationModel;

  constructor(
    private locationService: LocationService,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    // Initialize form with empty values
    this.locationForm = this.formBuilder.group({
      name: ['', Validators.required],
      address: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      zipCode: ['', Validators.required],
      country: ['', Validators.required],
      photo: [''],
    });

    // Fetch the location by ID and patch the form with its data
    this.locationService.getLocationById(this.id).subscribe({
      next: (res) => {
        this.location = res;
        this.locationForm.patchValue(this.location);
        console.log(res);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  updateLocation(): void {
    if (this.locationForm.valid) {
      const updatedLocation: LocationModel = this.locationForm.value;
      this.locationService.updateLocation(this.id, updatedLocation).subscribe({
        next: (res) => {
          console.log('Location updated successfully:', res);
          this.router.navigate(['/locations']); // Redirect to locations list
        },
        error: (err) => {
          console.log(err);
        },
      });
    } else {
      console.log('Form is invalid');
    }
  }
}
