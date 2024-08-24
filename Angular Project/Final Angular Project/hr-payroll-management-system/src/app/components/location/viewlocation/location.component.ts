import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocationService } from '../../../services/location.service';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrl: './location.component.css',
})
export class LocationComponent implements OnInit {
  locations: any;

  constructor(
    private locationService: LocationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.locations = this.locationService.getAllLocations();
  }

  deleteLocation(id: string) {
    if (confirm('Are you sure you want to delete this employee?')) {
      this.locationService.deleteLocation(id).subscribe({
        next: (res) => {
          this.locations = this.locationService.getAllLocations();
          this.router.navigate(['location']);
          console.log('Employee deleted');
        },
        error: (error) => {
          console.log('Error deleting employee:', error);
        },
      });
    }
  }

  updateLocation(id: string) {
    this.router.navigate(['updatelocation', id]);
  }
}
