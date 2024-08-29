import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ManagerService } from '../../../services/manager.service';
import { ManagerModel } from '../../../models/manager.model';

@Component({
  selector: 'app-viewmanager',
  templateUrl: './viewmanager.component.html',
  styleUrls: ['./viewmanager.component.css'],
})
export class ViewmanagerComponent implements OnInit {
  manager: ManagerModel | null = null;
  loading = true;
  errorMessage: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private managerService: ManagerService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const id = params['id'];
      if (id) {
        this.managerService.getManagerById(id).subscribe(
          (data: ManagerModel) => {
            this.manager = data;
            this.loading = false;
          },
          (error) => {
            this.errorMessage = 'Failed to load manager details.';
            this.loading = false;
            console.error('Failed to load manager details', error);
          }
        );
      }
    });
  }

  goBack(): void {
    this.router.navigate(['/managers/list']);
  }
}
