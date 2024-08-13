import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PerformanceService } from '../../services/performance.service';
import { Router } from '@angular/router';
import { NotificationService } from '../../services/notification.service';

@Component({
  selector: 'app-performanceedit',
  templateUrl: './performanceedit.component.html',
  styleUrl: './performanceedit.component.css'
})
export class PerformanceeditComponent implements OnInit {
  performanceForm!: FormGroup;
  performanceId!: number;

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private performanceService: PerformanceService,
    private router: Router,
    private notificationService: NotificationService
  ) { }

  ngOnInit(): void {
    this.performanceId = +this.route.snapshot.paramMap.get('id')!;
    this.initForm();
    this.loadPerformance();
  }

  initForm(): void {
    this.performanceForm = this.fb.group({
      employeeId: ['', Validators.required],
      reviewDate: ['', Validators.required],
      score: ['', [Validators.required, Validators.min(0), Validators.max(100)]],
      comments: ['']
    });
  }

  loadPerformance(): void {
    this.performanceService.getPerformance(this.performanceId).subscribe({
      next: (data) => {
        this.performanceForm.patchValue(data);
      },
      error: (error) => {
        console.error('Error fetching performance review:', error);
      }
    });
  }

  onSubmit(): void {
    if (this.performanceForm.valid) {
      const updatedPerformance = this.performanceForm.value;
      this.performanceService.updatePerformance(this.performanceId, updatedPerformance).subscribe({
        next: () => {
          this.router.navigate(['/performance']);
          this.notificationService.showNotification('Performance Edit Successfull');
        },
        error: (error) => {
          console.error('Error updating performance review:', error);
          this.notificationService.showNotification('Error updating performance ');
        }
      });
    }
  }
}