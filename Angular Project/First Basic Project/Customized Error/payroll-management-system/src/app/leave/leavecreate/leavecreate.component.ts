import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LeaveService } from '../../services/leave.service';
import { Router } from '@angular/router';
import { Leave } from '../../models/leave.model';
import { NotificationService } from '../../services/notification.service';

@Component({
  selector: 'app-leavecreate',
  templateUrl: './leavecreate.component.html',
  styleUrl: './leavecreate.component.css'
})
export class LeavecreateComponent implements OnInit {
  leaveForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private leaveService: LeaveService,
    private router: Router,
    private notificationService: NotificationService
  ) { }

  ngOnInit(): void {
    this.initLeaveForm();
  }

  initLeaveForm(): void {
    this.leaveForm = this.fb.group({
      employeeId: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      reason: ['', Validators.required],
      status: ['Pending', Validators.required]
    });
  }

  resetForm(): void {
    this.leaveForm.reset();

  }


  onSubmit(): void {
    if (this.leaveForm.valid) {
      const newLeave: Leave = this.leaveForm.value;
      this.leaveService.createLeave(newLeave).subscribe({
        next: response => {
          console.log('Leave created:', response);
          this.notificationService.showNotification('Leave added successfully!');
          this.router.navigate(['/leaves']);
          this.resetForm();
        },
        error: error => {
          console.error('Error creating leave:', error);
          this.notificationService.showNotification('Failed to add leave. Please try again.');
        }
      });
    } else {
      this.notificationService.showNotification('Please fill in all required fields.');
    }
  }
}