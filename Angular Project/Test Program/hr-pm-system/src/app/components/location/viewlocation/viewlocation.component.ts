import { Component, OnInit } from '@angular/core';
import { LocationModel } from '../../../models/location.model';
import { ActivatedRoute, Router } from '@angular/router';
import { LocationService } from '../../../services/location.service';

@Component({
  selector: 'app-viewlocation',
  templateUrl: './viewlocation.component.html',
  styleUrls: ['./viewlocation.component.css'],
})
export class ViewlocationComponent implements OnInit {
  location: LocationModel | null = null;
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
          (data) => {
            this.location = data;
          },
          (error) => {
            this.errorMessage = 'Failed to load location details';
            console.error('Failed to load location details', error);
          }
        );
      }
    });
  }

  goBack(): void {
    this.router.navigate(['/locations/list']);
  }
  // cards = [
  //   {
  //     link: 'https://codewithfaraz.com/content/16/amazing-pure-css-squid-game-loaders-using-html-and-css',
  //     bgImg: 'https://codewithfaraz.com/img/squid-game-loader.png',
  //     title: 'Squid Game Loaders',
  //     description:
  //       'Loaders are one of the classic components used to create an attractive website…',
  //     date: '22 July 2022',
  //     tag: 'CSS',
  //   },
  //   {
  //     link: 'https://codewithfaraz.com/content/2/glowing-pulse-search-bar-using-html-and-pure-css',
  //     bgImg: 'https://codewithfaraz.com/img/glowing.png',
  //     title: 'Glowing Pulse Search Bar',
  //     description:
  //       'When it comes to website elements that are beautiful and must-haves…',
  //     date: '13 July 2022',
  //     tag: 'CSS',
  //   },
  //   {
  //     link: 'https://codewithfaraz.com/content/1/create-a-digital-clock-using-html-css-and-javascript',
  //     bgImg: 'https://codewithfaraz.com/img/digitalclock.png',
  //     title: 'Digital Clock',
  //     description: 'A digital clock means it shows time in number format…',
  //     date: '12 July 2022',
  //     tag: 'CSS',
  //   },
  // ];
}
