import { Component, OnInit } from '@angular/core';

import { LocationModel } from '../../../models/location.model';
import { LocationService } from '../../../services/location.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-viewlocation',
  templateUrl: './viewlocation.component.html',
  styleUrls: ['./viewlocation.component.css'],
})
export class ViewlocationComponent implements OnInit {
  location: LocationModel | null = null;
  loading = true;
  errorMessage: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private locationService: LocationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const id = params['id'];
      if (id) {
        this.locationService.getLocationById(id).subscribe(
          (data: LocationModel) => {
            this.location = data;
            this.loading = false;
          },
          (error) => {
            this.errorMessage = 'Failed to load location details';
            this.loading = false;
            console.error('Failed to load location details', error);
          }
        );
      }
    });
  }

  goBack(): void {
    this.router.navigate(['/locations/list']);
  }
}
