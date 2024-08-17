import { Component, OnInit } from '@angular/core';
import { LocationService } from '../../../services/location.service';
import { ActivatedRoute, Router } from '@angular/router';
import { LocationModel } from '../../../models/location.model';

@Component({
  selector: 'app-updatelocation',
  templateUrl: './updatelocation.component.html',
  styleUrl: './updatelocation.component.css'
})
export class UpdatelocationComponent implements OnInit {

  id: string = "";
  location: LocationModel = new LocationModel();

  constructor(
    private locationService: LocationService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }



  ngOnInit(): void {
    this.location = new LocationModel();
    this.id = this.route.snapshot.params['id'];
    this.locationService.getById(this.id)
      .subscribe({
        next: res => {
          this.location = res;
          console.log(res);
        },

        error: err => {
          console.log(err);

        }

      });

  }


  updateLocation() {

    this.locationService.updateLocation(this.id, this.location)
      .subscribe({
        next: res => {
          //this.location=new Location();
          this.router.navigate(['location']);

        },
        error: err => {
          console.log(err);

        }

      });


  }



}