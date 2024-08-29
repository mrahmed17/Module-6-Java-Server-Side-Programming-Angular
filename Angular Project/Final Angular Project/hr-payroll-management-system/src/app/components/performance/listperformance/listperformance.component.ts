import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PerformanceService } from '../../../services/performance.service';
import { PerformanceModel } from '../../../models/performance.model';

@Component({
  selector: 'app-listperformance',
  templateUrl: './listperformance.component.html',
  styleUrls: ['./listperformance.component.css'],
})
export class ListperformanceComponent implements OnInit {
  performances: PerformanceModel[] = [];
  errorMessage: string | null = null;

  constructor(
    private performanceService: PerformanceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadPerformances();
  }

  // Load all performance records
  loadPerformances(): void {
    this.performanceService.getAllPerformance().subscribe(
      (performances) => {
        this.performances = performances;
      },
      (error) => {
        this.errorMessage = 'Failed to load performance records.';
        console.error('Error fetching performance records', error);
      }
    );
  }

  // Navigate to the view performance component
  viewPerformance(id: string): void {
    this.router.navigate([`/performance/${id}`]);
  }

  // Navigate to the edit performance component
  editPerformance(id: string): void {
    this.router.navigate([`/editperformance/${id}`]);
  }

  // Delete a performance record
  deletePerformance(id: string): void {
    if (confirm('Are you sure you want to delete this performance record?')) {
      this.performanceService.deletePerformance(id).subscribe(
        () => {
          this.loadPerformances(); // Refresh the list after deletion
        },
        (error) => {
          this.errorMessage = 'Failed to delete performance record.';
          console.error('Error deleting performance record', error);
        }
      );
    }
  }
}
