import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ManagerService } from '../../../services/manager.service';
import { ManagerModel } from '../../../models/manager.model';

@Component({
  selector: 'app-listmanager',
  templateUrl: './listmanager.component.html',
  styleUrls: ['./listmanager.component.css'],
})
export class ListmanagerComponent implements OnInit {
  managers: ManagerModel[] = [];
  loading = true;
  errorMessage: string | null = null;

  constructor(private managerService: ManagerService, private router: Router) {}

  ngOnInit(): void {
    this.managerService.getAllManagers().subscribe(
      (data: ManagerModel[]) => {
        this.managers = data;
        this.loading = false;
      },
      (error) => {
        this.errorMessage = 'Failed to load managers list.';
        this.loading = false;
        console.error('Failed to load managers list', error);
      }
    );
  }

  viewManager(managerId: string): void {
    this.router.navigate([`/managers/view/${managerId}`]);
  }

  editManager(managerId: string): void {
    this.router.navigate([`/managers/edit/${managerId}`]);
  }

  deleteManager(managerId: string): void {
    if (confirm('Are you sure you want to delete this manager?')) {
      this.managerService.deleteManager(managerId).subscribe(
        () => {
          this.managers = this.managers.filter(
            (manager) => manager.id !== managerId
          );
        },
        (error) => {
          this.errorMessage = 'Failed to delete manager.';
          console.error('Failed to delete manager', error);
        }
      );
    }
  }
}
