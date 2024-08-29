import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PerformanceService } from '../../../services/performance.service';
import { PerformanceModel } from '../../../models/performance.model';

@Component({
  selector: 'app-viewperformance',
  templateUrl: './viewperformance.component.html',
  styleUrls: ['./viewperformance.component.css'],
})
export class ViewperformanceComponent implements OnInit {
  performance: PerformanceModel | null = null;
  errorMessage: string | null = null;
  loading: boolean = true;

  constructor(
    private performanceService: PerformanceService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const performanceId = params.get('id');
      if (performanceId) {
        this.loadPerformance(performanceId);
      } else {
        this.errorMessage = 'No performance ID provided.';
      }
    });
  }

  // Load a specific performance record by ID
  loadPerformance(id: string): void {
    this.performanceService.getPerformance(id).subscribe(
      (performance) => {
        this.performance = performance;
        this.loading = false;
      },
      (error) => {
        this.errorMessage = 'Failed to load performance record.';
        console.error('Error fetching performance record', error);
        this.loading = false;
      }
    );
  }

  // Navigate back to the performance list
  goBack(): void {
    this.router.navigate(['/performances']);
  }
}
