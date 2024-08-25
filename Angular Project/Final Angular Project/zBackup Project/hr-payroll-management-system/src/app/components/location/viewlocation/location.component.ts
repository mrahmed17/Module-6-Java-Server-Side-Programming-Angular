import { Component, OnInit } from '@angular/core';
import { LocationService } from '../../../services/location.service';
import { LocationModel } from '../../../models/location.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css'],
})
export class LocationComponent implements OnInit {
  locations: LocationModel[] = []; // Initialize as an empty array

  constructor(
    private locationService: LocationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.locationService.getAllLocations().subscribe({
      next: (locations) => {
        this.locations = locations;
      },
      error: (error) => {
        console.log('Error fetching locations:', error);
      },
    });
  }

  deleteLocation(id: string): void {
    if (confirm('Are you sure you want to delete this location?')) {
      this.locationService.deleteLocation(id).subscribe({
        next: () => {
          this.locations = this.locations.filter(
            (location) => location.id !== id
          ); // Remove deleted location from the array
          console.log('Location deleted');
        },
        error: (error) => {
          console.log('Error deleting location:', error);
        },
      });
    }
  }

  updateLocation(id: string): void {
    this.router.navigate(['updatelocation', id]);
  }
}
