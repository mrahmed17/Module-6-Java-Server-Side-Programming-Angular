import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PerformanceService } from '../../../services/performance.service';
import { PerformanceModel } from '../../../models/performance.model';

@Component({
  selector: 'app-editperformance',
  templateUrl: './editperformance.component.html',
  styleUrls: ['./editperformance.component.css'],
})
export class EditperformanceComponent implements OnInit {
  performance: PerformanceModel | null = null;
  submitting = false;
  errorMessage: string | null = null;
  performanceId: string | null = null;

  constructor(
    private performanceService: PerformanceService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.performanceId = this.route.snapshot.paramMap.get('id');
    if (this.performanceId) {
      this.performanceService.getPerformance(this.performanceId).subscribe(
        (performance) => {
          this.performance = performance;
        },
        (error) => {
          this.errorMessage = 'Failed to load performance record.';
          console.error('Error fetching performance record', error);
        }
      );
    } else {
      this.errorMessage = 'Performance ID is missing.';
    }
  }

  updatePerformance(): void {
    if (this.performance && this.performanceId) {
      this.submitting = true;
      this.performanceService
        .updatePerformance(this.performanceId, this.performance)
        .subscribe(
          () => {
            this.router.navigate(['/performances']);
          },
          (error) => {
            this.errorMessage = 'Failed to update performance record.';
            console.error('Error updating performance record', error);
            this.submitting = false;
          }
        );
    } else {
      this.errorMessage = 'Performance record or ID is missing.';
    }
  }
}
