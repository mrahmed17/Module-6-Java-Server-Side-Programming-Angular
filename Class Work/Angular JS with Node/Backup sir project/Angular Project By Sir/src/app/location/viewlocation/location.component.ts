import { Component, OnInit } from '@angular/core';
import { LocationService } from '../../service/location.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrl: './location.component.css'
})
export class LocationComponent implements OnInit {
  locations: any;

  constructor(
    private locationService: LocationService,
    private router: Router,
    private httpClient: HttpClient
  ) {

  }

  ngOnInit(): void {

    this.locations = this.locationService.getAllLocation();
  }

  deleteLocation(id: string) {
    if (confirm('Are you sure you want to delete this employee?')) {
      this.locationService.deleteLocation(id)
        .subscribe({
          next: res => {
            this.locations = this.locationService.getAllLocation();
            this.router.navigate(['location']);
            console.log('Employee deleted');
          },
          error: error => {
            console.log('Error deleting employee:', error);
          }
        });
    }
  }


  updateLocation(id: string) {
    this.router.navigate(['updatelocation', id]);
  }








}