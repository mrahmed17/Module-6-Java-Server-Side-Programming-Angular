import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocationService } from '../../../services/location.service';
import { LocationModel } from '../../../models/location.model';

@Component({
  selector: 'app-listlocation',
  templateUrl: './listlocation.component.html',
  styleUrls: ['./listlocation.component.css'],
})
export class ListlocationComponent implements OnInit {
  locations: LocationModel[] = [];

  constructor(
    private locationService: LocationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadLocations();
  }

  loadLocations(): void {
    this.locationService.getAllLocations().subscribe(
      (data) => {
        this.locations = data;
      },
      (error) => {
        console.error('Failed to load locations', error);
      }
    );
  }

  viewLocation(id: string | undefined): void {
    this.router.navigate(['/locations/view/:id', id]);
  }

  editLocation(id: string | undefined): void {
    this.router.navigate(['/locations/edit/:id', id]);
  }

  deleteLocation(id: string | undefined): void {
    if (id && confirm('Are you sure you want to delete this location?')) {
      this.locationService.deleteLocation(id!).subscribe(
        () => {
          this.locations = this.locations.filter(
            (location) => location.id !== id
          );
          alert('Location deleted successfully');
        },
        (error) => {
          console.error('Failed to delete location', error);
          alert('Failed to delete location. Please try again.');
        }
      );
    }
  }
}
