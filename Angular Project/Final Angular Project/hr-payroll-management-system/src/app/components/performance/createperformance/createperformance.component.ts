import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PerformanceService } from '../../../services/performance.service';
import { PerformanceModel } from '../../../models/performance.model';

@Component({
  selector: 'app-createperformance',
  templateUrl: './createperformance.component.html',
  styleUrls: ['./createperformance.component.css'],
})
export class CreateperformanceComponent {
  performance: PerformanceModel = new PerformanceModel(
    '',
    '',
    '',
    false,
    '',
    new Date(),
    1,
    ''
  );
  submitting = false;
  errorMessage: string | null = null;

  constructor(
    private performanceService: PerformanceService,
    private router: Router
  ) {}

  createPerformance(): void {
    this.submitting = true;
    this.performanceService.createPerformance(this.performance).subscribe(
      (newPerformance) => {
        this.router.navigate(['/performances']);
      },
      (error) => {
        this.errorMessage = 'Failed to create performance record.';
        console.error('Error creating performance record', error);
        this.submitting = false;
      }
    );
  }
}
