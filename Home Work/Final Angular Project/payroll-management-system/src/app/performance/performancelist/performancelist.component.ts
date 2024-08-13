import { Component, OnInit } from '@angular/core';
import { PerformanceService } from '../../services/performance.service';
import { NotificationService } from '../../services/notification.service';

@Component({
  selector: 'app-performancelist',
  templateUrl: './performancelist.component.html',
  styleUrl: './performancelist.component.css'
})
export class PerformancelistComponent implements OnInit {
  performances: Performance[] = [];

  constructor(
    private performanceService: PerformanceService,
    private notificationService: NotificationService
  ) { }

  ngOnInit(): void {
    this.loadPerformances();
  }

  loadPerformances(): void {
    this.performanceService.getAllPerformance().subscribe({
      next: (data) => {
        this.performances = data;
      },
      error: (error) => {
        console.error('Error fetching performance reviews:', error);
      }
    });
  }

  deletePerformance(id: number): void {
    this.performanceService.deletePerformance(id).subscribe({
      next: () => {
        this.loadPerformances();
        this.notificationService.showNotification('Performance Detele Successfull');
      },
      error: (error) => {
        console.error('Error deleting performance review:', error);
        this.notificationService.showNotification('Error deleteing performance');
      }
    });
  }
}