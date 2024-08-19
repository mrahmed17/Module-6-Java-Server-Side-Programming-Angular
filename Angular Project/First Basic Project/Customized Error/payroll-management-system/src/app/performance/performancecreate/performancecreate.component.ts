import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PerformanceService } from '../../services/performance.service';
import { Router } from '@angular/router';
import { NotificationService } from '../../services/notification.service';

@Component({
  selector: 'app-performancecreate',
  templateUrl: './performancecreate.component.html',
  styleUrl: './performancecreate.component.css'
})
export class PerformancecreateComponent implements OnInit {
  performanceForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private performanceService: PerformanceService,
    private notificationService: NotificationService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.performanceForm = this.fb.group({
      employeeId: ['', Validators.required],
      reviewDate: ['', Validators.required],
      score: ['', [Validators.required, Validators.min(0), Validators.max(100)]],
      comments: ['']
    });
  }

  onSubmit(): void {
    if (this.performanceForm.valid) {
      const newPerformance = this.performanceForm.value;
      this.performanceService.createPerformance(newPerformance).subscribe({
        next: () => {
          this.router.navigate(['/performance']);
          this.notificationService.showNotification('Performacne Create Successfully');
        },
        error: (error) => {
          console.error('Error creating performance review:', error);
          this.notificationService.showNotification('Error creating performance');
        }
      });
    }
  }
}