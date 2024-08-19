import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Leave } from '../../models/leave.model';
import { LeaveService } from '../../services/leave.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { NotificationService } from '../../services/notification.service';

@Component({
  selector: 'app-leaveedit',
  templateUrl: './leaveedit.component.html',
  styleUrl: './leaveedit.component.css'
})
export class LeaveeditComponent implements OnInit {
  leaveForm!: FormGroup;
  leaveId!: number;
  leave!: Leave;

  constructor(
    private fb: FormBuilder,
    private leaveService: LeaveService,
    private route: ActivatedRoute,
    private router: Router,
    private notificationService: NotificationService
  ) { }

  ngOnInit(): void {
    this.leaveId = +this.route.snapshot.paramMap.get('id')!;
    this.initLeaveForm();
    this.loadLeave();
  }

  initLeaveForm() {
    this.leaveForm = this.fb.group({
      employeeId: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      reason: ['', Validators.required],
      status: ['', Validators.required]
    });
  }

  loadLeave(): void {
    this.leaveService.getLeave(this.leaveId).subscribe({
      next: data => {
        this.leave = data;
        this.leaveForm.patchValue(this.leave);
      },
      error: error => { console.error('Error fetching leave:', error); }
    });
  }

  onSubmit(): void {
    if (this.leaveForm.valid) {
      const updatedLeave: Leave = this.leaveForm.value;
      this.leaveService.updateLeave(this.leaveId, updatedLeave).subscribe({
        next: response => {
          console.log('Leave updated:', response);
          this.notificationService.showNotification('Leave updated successfully!');
          this.router.navigate(['/leaves']);
        },
        error: error => {
          console.error('Error updating leave:', error);
          this.notificationService.showNotification('Failed to update leave. Please try again.');
        }
      });
    } else {
      this.notificationService.showNotification('Please fill in all required fields.');
    }
  }
}